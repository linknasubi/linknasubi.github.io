'use client';
import { useEffect, useRef } from 'react';

export default function BackgroundDay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const parent = canvas.parentElement!;
    if (!parent) return;

    function resizeCanvas() {
      canvas.width = parent.scrollWidth;
      canvas.height = parent.scrollHeight;
    }
    resizeCanvas();

    const ctx = canvas.getContext('2d')!;
    if (!ctx) return;

    // 🟦 Céu com gradiente dinâmico
    function drawMovingGradient(time = 0) {
      const grad = ctx.createLinearGradient(
        canvas.width * 0.8 * Math.sin(time / 3000),
        0,
        canvas.width * (1 + 0.2 * Math.sin(time / 5000)),
        canvas.height
      );
      grad.addColorStop(0, "#e2eafc");
      grad.addColorStop(0.6 + 0.2 * Math.sin(time / 6000), "#a1c4fd");
      grad.addColorStop(1, "#f7f7fa");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // ☁️ Nuvens com parallax horizontal
    const clouds = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: 50 + Math.random() * 100,
      speed: 0.03 + i * 0.01,
      scale: 0.6 + Math.random() * 0.5,
    }));

    function drawClouds(time: number) {
      for (const cloud of clouds) {
        const x = (cloud.x + time * cloud.speed) % (canvas.width + 200) - 100;
        const y = cloud.y;
        const s = cloud.scale;

        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.ellipse(x, y, 30 * s, 20 * s, 0, 0, Math.PI * 2);
        ctx.ellipse(x + 25 * s, y - 10 * s, 35 * s, 25 * s, 0, 0, Math.PI * 2);
        ctx.ellipse(x + 60 * s, y, 25 * s, 20 * s, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 🐦 Pássaros voando com padrão curvo
    const birds = Array.from({ length: 8 }, () => ({
      xBase: Math.random() * canvas.width,
      yBase: 60 + Math.random() * 100,
      amplitude: 2 + Math.random() * 5,
      frequency: 0.002 + Math.random() * 0.001,
      speed: 0.08 + Math.random() * 0.05,
      size: 6 + Math.random() * 4,
    }));

    function drawBirds(time: number) {
      for (const bird of birds) {
        const x = (bird.xBase + time * bird.speed) % (canvas.width + 50) - 25;
        const y = bird.yBase + Math.sin(time * bird.frequency + x * 0.05) * bird.amplitude;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - bird.size, y - bird.size / 2);
        ctx.lineTo(x, y);
        ctx.lineTo(x + bird.size, y - bird.size / 2);
        ctx.strokeStyle = "#444";
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }


    // 🎞️ Animação contínua
    let frame: number;
    function animate(t: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawMovingGradient(t);
      drawClouds(t);

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
    <div className="fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
