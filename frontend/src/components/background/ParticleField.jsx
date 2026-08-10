import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "../../theme/ThemeProvider";
import { cn } from "../../lib/cn";

/**
 * Malha de partículas em canvas 2D.
 *
 * Cuidados de performance embutidos:
 *  - densidade proporcional à área, com teto rígido de partículas;
 *  - devicePixelRatio limitado a 1.5;
 *  - loop pausado quando a aba está oculta ou o canvas sai do viewport;
 *  - desativado por completo em prefers-reduced-motion e em telas pequenas.
 */
export default function ParticleField({ className }) {
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();
  const { isDark } = useTheme();

  useEffect(() => {
    if (reduce) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    const LINK_DISTANCE = 130;
    const pointer = { x: -9999, y: -9999 };
    let particles = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let visible = true;
    let running = true;

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        Math.round((width * height) / 16000),
        window.innerWidth < 768 ? 34 : 78
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const dot = isDark ? "rgba(103,232,249," : "rgba(8,145,178,";
      const line = isDark ? "rgba(103,232,249," : "rgba(8,145,178,";

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Leve repulsão em torno do ponteiro.
        const dxp = p.x - pointer.x;
        const dyp = p.y - pointer.y;
        const distPointer = Math.hypot(dxp, dyp);
        if (distPointer < 110 && distPointer > 0.01) {
          p.x += (dxp / distPointer) * 0.9;
          p.y += (dyp / distPointer) * 0.9;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${dot}${isDark ? 0.55 : 0.4})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DISTANCE) continue;
          const alpha = (1 - dist / LINK_DISTANCE) * (isDark ? 0.28 : 0.2);
          ctx.beginPath();
          ctx.strokeStyle = `${line}${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    };

    const loop = () => {
      if (!running) return;
      if (visible && !document.hidden) draw();
      frame = window.requestAnimationFrame(loop);
    };

    const handlePointer = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const clearPointer = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    setup();
    loop();

    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("pointerleave", clearPointer);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerleave", clearPointer);
    };
  }, [reduce, isDark]);

  if (reduce) return null;

  // Elemento puramente decorativo: nunca captura eventos.
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    />
  );
}
