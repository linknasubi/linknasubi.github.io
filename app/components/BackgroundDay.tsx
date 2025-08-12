'use client';
import { useEffect, useRef } from 'react';

export default function BackgroundDay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    function resizeCanvas() {
      canvas!.width = parent!.scrollWidth;
      canvas!.height = parent!.scrollHeight;
    }
    resizeCanvas();

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function drawMovingGradient(time = 0) {
      const grad = ctx!.createLinearGradient(
        canvas!.width * 0.8 * Math.sin(time / 3000),
        0,
        canvas!.width * (1 + 0.2 * Math.sin(time / 5000)),
        canvas!.height
      );
      grad.addColorStop(0, "#e2eafc");
      grad.addColorStop(0.6 + 0.2 * Math.sin(time / 6000), "#a1c4fd");
      grad.addColorStop(1, "#f7f7fa");
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
    }

    let frame: number;
    function animate(t: number) {
      drawMovingGradient(t);
      frame = requestAnimationFrame(animate);
    }
    animate(0);

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
