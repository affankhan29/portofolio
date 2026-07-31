"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [outlinePos, setOutlinePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const followMouse = () => {
      setOutlinePos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(followMouse);
    };
    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pos]);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      <div
        className="cursor-outline"
        style={{ left: `${outlinePos.x}px`, top: `${outlinePos.y}px` }}
      />
    </>
  );
}
