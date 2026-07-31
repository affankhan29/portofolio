"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4,000 Vivid Dark & Gold Particles floating behind text
    const starsCount = 4000;
    const starsGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(starsCount * 3);
    const colorArray = new Float32Array(starsCount * 3);

    const darkCharcoal = new THREE.Color(0x222220); // Dark Charcoal
    const mustardGold = new THREE.Color(0xc79a3c);  // Mustard Gold
    const rustAccent = new THREE.Color(0x8c3b2e);   // Rust Accent

    for (let i = 0; i < starsCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 110;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 110;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const rand = Math.random();
      const mixedColor =
        rand < 0.6
          ? darkCharcoal
          : rand < 0.85
          ? mustardGold
          : rustAccent;

      colorArray[i * 3] = mixedColor.r;
      colorArray[i * 3 + 1] = mixedColor.g;
      colorArray[i * 3 + 2] = mixedColor.b;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    starsGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorArray, 3)
    );

    function createParticleTexture() {
      const textureCanvas = document.createElement("canvas");
      textureCanvas.width = 64;
      textureCanvas.height = 64;

      const ctx = textureCanvas.getContext("2d");
      if (!ctx) return new THREE.Texture();

      const center = 32;
      const radius = 30;

      const gradient = ctx.createRadialGradient(
        center,
        center,
        0,
        center,
        center,
        radius
      );
      gradient.addColorStop(0, "rgba(34, 34, 32, 1)");
      gradient.addColorStop(0.5, "rgba(34, 34, 32, 0.75)");
      gradient.addColorStop(0.8, "rgba(199, 154, 60, 0.4)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.beginPath();
      ctx.arc(center, center, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      return new THREE.CanvasTexture(textureCanvas);
    }

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.35,
      map: createParticleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const starMesh = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starMesh);

    camera.position.z = 25;

    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (prevMouseX === 0 && prevMouseY === 0) {
        prevMouseX = event.clientX;
        prevMouseY = event.clientY;
        return;
      }

      const deltaX = event.clientX - prevMouseX;
      const deltaY = event.clientY - prevMouseY;

      targetRotationY += deltaX * 0.003;
      targetRotationX += deltaY * 0.003;

      prevMouseX = event.clientX;
      prevMouseY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      // Continuous ambient drift when no mouse input (slightly increased)
      targetRotationY += 0.00075;
      targetRotationX += 0.0002;

      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;

      starMesh.rotation.y = currentRotationY;
      starMesh.rotation.x = currentRotationX;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return (
    <div className="background-container">
      <canvas ref={canvasRef} id="bg-canvas" />
    </div>
  );
}
