"use client";

import { useEffect, useRef } from "react";

const DEFAULT_SIZE = 44;
const HOVER_SIZE = 62;
const LERP = 0.12;

// Pearlescent orb: two white gloss highlights + pink→lavender radial body
const GRADIENT = [
  "radial-gradient(circle at 38% 70%, rgba(255,255,255,0.55) 0%, transparent 20%)",
  "radial-gradient(circle at 70% 28%, #ffffff 0%, #fdeef3 8%, #f8c0d0 22%, #e89cc0 38%, #d490c8 55%, #b8a2dc 72%, #9fb8ea 88%, #98b6ee 100%)",
].join(", ");

const GLOW =
  "0 0 14px rgba(240,120,170,0.50), 0 0 28px rgba(180,130,220,0.30), 0 0 50px rgba(160,140,230,0.15)";
const GLOW_HOVER =
  "0 0 20px rgba(240,120,170,0.65), 0 0 40px rgba(180,130,220,0.40), 0 0 70px rgba(160,140,230,0.20)";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -300, y: -300 });
  const display = useRef({ x: -300, y: -300 });
  const raf = useRef<number>(undefined);

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isHover = !!el.closest("a, button, [role='button']");
      if (!ref.current) return;
      const s = isHover ? HOVER_SIZE : DEFAULT_SIZE;
      ref.current.style.width = `${s}px`;
      ref.current.style.height = `${s}px`;
      ref.current.style.boxShadow = isHover ? GLOW_HOVER : GLOW;
    };

    const tick = () => {
      display.current.x = lerp(display.current.x, mouse.current.x, LERP);
      display.current.y = lerp(display.current.y, mouse.current.y, LERP);
      if (ref.current) {
        ref.current.style.left = `${display.current.x}px`;
        ref.current.style.top = `${display.current.y}px`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf.current!);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none z-[99999] rounded-full -translate-x-1/2 -translate-y-1/2 transition-[width,height,box-shadow] duration-200"
      style={{
        width: DEFAULT_SIZE,
        height: DEFAULT_SIZE,
        left: -300,
        top: -300,
        backgroundImage: GRADIENT,
        boxShadow: GLOW,
      }}
    />
  );
}
