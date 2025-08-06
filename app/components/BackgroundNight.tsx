'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BG_COLOR = '#2d1836';

export default function BackgroundNight({ children }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    // Use sempre o operador ! ao acessar canvas ou ctx depois dos checks
    function resizeCanvas() {
      const canvasEl = canvasRef.current!;
      const parentEl = canvasEl.parentElement!;
      canvasEl.width = parentEl.scrollWidth;
      canvasEl.height = parentEl.scrollHeight;
    }
    resizeCanvas();

    const ctx = canvas.getContext('2d')!;
    if (!ctx) return;

    // Parâmetros
    const TOTAL_STARS = 120;
    const STAR_RADIUS = [1, 3.5];
    const SPEED = 1.5;
    const CONSTELLATION_COUNT = 5 + Math.floor(Math.random() * 5);
    const CONSTELLATION_SIZE = 8 + Math.floor(Math.random() * 10);
    const LINE_DISTANCE = 170;

    const stars: {
      x: number, y: number, vx: number, vy: number, r: number, group: number | null
    }[] = [];
    let total = 0;
    for (let c = 0; c < CONSTELLATION_COUNT; c++) {
      const cx = Math.random() * canvas.width;
      const cy = Math.random() * canvas.height;
      for (let i = 0; i < CONSTELLATION_SIZE; i++) {
        stars.push({
          x: cx + Math.random() * 120 - 60,
          y: cy + Math.random() * 80 - 40,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
          r: STAR_RADIUS[0] + Math.random() * (STAR_RADIUS[1] - STAR_RADIUS[0]),
          group: c,
        });
        total++;
      }
    }
    for (let i = total; i < TOTAL_STARS; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: STAR_RADIUS[0] + Math.random() * (STAR_RADIUS[1] - STAR_RADIUS[0]),
        group: null,
      });
    }

    function drawConstellations() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, canvas!.width, canvas!.height);

      // Linhas entre estrelas do mesmo grupo
      for (let g = 0; g < CONSTELLATION_COUNT; g++) {
        const groupStars = stars.filter(s => s.group === g);
        const MIN_CONNECTIONS = 5;
        for (let i = 0; i < groupStars.length; i++) {
          const connections: { dist: number, idx: number }[] = [];
          for (let j = 0; j < groupStars.length; j++) {
            if (i === j) continue;
            const dx = groupStars[i].x - groupStars[j].x;
            const dy = groupStars[i].y - groupStars[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            connections.push({ dist, idx: j });
          }
          connections.sort((a, b) => a.dist - b.dist);
          for (let k = 0; k < Math.min(MIN_CONNECTIONS, connections.length); k++) {
            const j = connections[k].idx;
            ctx!.beginPath();
            ctx!.moveTo(groupStars[i].x, groupStars[i].y);
            ctx!.lineTo(groupStars[j].x, groupStars[j].y);
            ctx!.strokeStyle = 'rgba(255,255,255,0.3)';
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      // Linhas suaves entre estrelas próximas
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.12 * (1 - dist / LINE_DISTANCE)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Estrelas
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    let scale = 0.1;
    let growing = true;
    const SCALE_MIN = 0.1;
    const SCALE_MAX = 0.3;
    const SCALE_STEP = 0.003;

    function animate() {
      if (growing) {
        scale += SCALE_STEP;
        if (scale >= SCALE_MAX) growing = false;
      } else {
        scale -= SCALE_STEP;
        if (scale <= SCALE_MIN) growing = true;
      }

      // Pulsação nas constelações
      for (let c = 0; c < CONSTELLATION_COUNT; c++) {
        const groupStars = stars.filter(s => s.group === c);
        if (groupStars.length === 0) continue;
        const cx = groupStars.reduce((sum, s) => sum + s.x, 0) / groupStars.length;
        const cy = groupStars.reduce((sum, s) => sum + s.y, 0) / groupStars.length;
        for (const s of groupStars) {
          s.x += s.vx;
          s.y += s.vy;
          // Limitar dentro do canvas
          if (s.x < s.r) {
            s.x = s.r;
            s.vx *= -1;
          }
          if (s.x > canvas!.width - s.r) {
            s.x = canvas!.width - s.r;
            s.vx *= -1;
          }
          if (s.y < s.r) {
            s.y = s.r;
            s.vy *= -1;
          }
          if (s.y > canvas!.height - s.r) {
            s.y = canvas!.height - s.r;
            s.vy *= -1;
          }
          s.x = cx + (s.x - cx) * scale;
          s.y = cy + (s.y - cy) * scale;
        }
      }
      // estrelas soltas
      for (const s of stars) {
        if (s.group !== null) continue;
        s.x += s.vx;
        s.y += s.vy;
        // Limitar dentro do canvas
        if (s.x < s.r) {
          s.x = s.r;
          s.vx *= -1;
        }
        if (s.x > canvas!.width - s.r) {
          s.x = canvas!.width - s.r;
          s.vx *= -1;
        }
        if (s.y < s.r) {
          s.y = s.r;
          s.vy *= -1;
        }
        if (s.y > canvas!.height - s.r) {
          s.y = canvas!.height - s.r;
          s.vy *= -1;
        }
      }

      drawConstellations();
      requestAnimationFrame(animate);
    }

    drawConstellations();
    animate();

    const handleResize = () => {
      resizeCanvas();
      drawConstellations();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10 w-full h-full"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
