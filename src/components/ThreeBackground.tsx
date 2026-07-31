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

    const starsCount = 4000;
    const starsGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(starsCount * 3);
    const colorArray = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 110;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 110;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    starsGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorArray, 3)
    );

    const updateParticleColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const colorAttr = starsGeometry.attributes.color as THREE.BufferAttribute;
      const colors = colorAttr.array as Float32Array;

      // Light vs Dark particle palettes
      const primaryColor = isDark ? new THREE.Color(0xF3EFE6) : new THREE.Color(0x222220);
      const accentColor1 = isDark ? new THREE.Color(0xE5B84F) : new THREE.Color(0xC79A3C);
      const accentColor2 = isDark ? new THREE.Color(0xE06C53) : new THREE.Color(0x8C3B2E);

      for (let i = 0; i < starsCount; i++) {
        const rand = Math.random();
        const mixedColor =
          rand < 0.6
            ? primaryColor
            : rand < 0.85
            ? accentColor1
            : accentColor2;

        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }
      colorAttr.needsUpdate = true;
    };

    updateParticleColors();

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
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.75)");
      gradient.addColorStop(0.8, "rgba(229, 184, 79, 0.4)");
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
      opacity: 0.85,
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
    window.addEventListener("themeChange", updateParticleColors);

    let animationFrameId: number;

    const animate = () => {
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
      window.removeEventListener("themeChange", updateParticleColors);
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
