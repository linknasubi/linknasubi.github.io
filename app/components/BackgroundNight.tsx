'use client';

import { useEffect, useRef } from 'react';

const BG_COLOR = '#131313';

export default function BackgroundNight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    function resizeCanvas() {
      const canvasEl = canvasRef.current!;
      const parentEl = canvasEl.parentElement!;
      const rect = parentEl.getBoundingClientRect();
      const w = Math.ceil(rect.width);
      const h = Math.ceil(rect.height);
      if (canvasEl.width !== w || canvasEl.height !== h) {
        canvasEl.width = w;
        canvasEl.height = h;
      }
    }
    resizeCanvas();

    const ctx = canvas.getContext('2d')!;
    if (!ctx) return;

    type Rect = { x: number; y: number; w: number; h: number };
    let noFly: Rect = { x: 0, y: 0, w: 0, h: 0 };

    function distanceSquared(x1: number, y1: number, x2: number, y2: number) {
      const dx = x1 - x2;
      const dy = y1 - y2;
      return dx * dx + dy * dy;
    }

    function updateNoFly() {
      const parentRect = parent!.getBoundingClientRect();
      const target = document.getElementById('main-content'); // coloque esse id no seu wrapper central
      if (target) {
        const r = target.getBoundingClientRect();
        // converte para coords do canvas (mesmo pai absoluto)
        const x = Math.max(0, Math.floor(r.left - parentRect.left) - 24);
        const y = Math.max(0, Math.floor(r.top - parentRect.top) - 24);
        const w = Math.min(canvas!.width, Math.ceil(r.width) + 48);
        const h = Math.min(canvas!.height, Math.ceil(r.height) + 48);
        noFly = { x, y, w, h };
      } else {
        // fallback: faixa central
        const bandW = Math.min(960, Math.floor(canvas!.width * 0.6));
        const x = Math.floor((canvas!.width - bandW) / 2);
        noFly = { x, y: 0, w: bandW, h: canvas!.height };
      }
    }
    updateNoFly();

    function insideNoFly(x: number, y: number) {
      return x >= noFly.x && x <= noFly.x + noFly.w && y >= noFly.y && y <= noFly.y + noFly.h;
    }

    const TOTAL_STARS = 120;
    const STAR_RADIUS = [1, 3.5];
    const SPEED = 1.5;
    const CONSTELLATION_COUNT = 5 + Math.floor(Math.random() * 5);
    const CONSTELLATION_SIZE = 8 + Math.floor(Math.random() * 10);
    const LINE_DISTANCE = 170;

    const stars: { x: number; y: number; vx: number; vy: number; r: number; group: number | null }[] = [];
    const groups: number[][] = Array.from({ length: CONSTELLATION_COUNT }, () => []);

    // Constelações (uma vez só, não duplicado)
    for (let c = 0; c < CONSTELLATION_COUNT; c++) {
      const cx = Math.random() * canvas.width;
      const cy = Math.random() * canvas.height;

      for (let i = 0; i < CONSTELLATION_SIZE; i++) {
        let x = cx + Math.random() * 120 - 60;
        let y = cy + Math.random() * 80 - 40;
        let tries = 0;

        while (insideNoFly(x, y) && tries++ < 20) {
          x = Math.random() * canvas.width;
          y = Math.random() * canvas.height;
        }

        stars.push({
          x,
          y,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
          r: STAR_RADIUS[0] + Math.random() * (STAR_RADIUS[1] - STAR_RADIUS[0]),
          group: c,
        });

        groups[c].push(stars.length - 1);
      }
    }

    // Estrelas soltas
    while (stars.length < CONSTELLATION_COUNT * CONSTELLATION_SIZE + TOTAL_STARS) {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let tries = 0;

      while (insideNoFly(x, y) && tries++ < 20) {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      }

      stars.push({
        x,
        y,
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

  const LINE_DISTANCE_SQ = LINE_DISTANCE * LINE_DISTANCE;

  // Constelações
  for (let g = 0; g < CONSTELLATION_COUNT; g++) {
    const groupStars = stars.filter(s => s.group === g);
    const MIN_CONNECTIONS = 5;
    for (let i = 0; i < groupStars.length; i++) {
      const connections: { dist: number, idx: number }[] = [];
      for (let j = 0; j < groupStars.length; j++) {
        if (i === j) continue;
        const distSq = distanceSquared(groupStars[i].x, groupStars[i].y, groupStars[j].x, groupStars[j].y);
        connections.push({ dist: distSq, idx: j });
      }
      connections.sort((a, b) => a.dist - b.dist);
      for (let k = 0; k < Math.min(MIN_CONNECTIONS, connections.length); k++) {
        const j = connections[k].idx;
        ctx.beginPath();
        ctx.moveTo(groupStars[i].x, groupStars[i].y);
        ctx.lineTo(groupStars[j].x, groupStars[j].y);
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  // Linhas entre todas as estrelas
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      const distSq = distanceSquared(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
      if (distSq < LINE_DISTANCE_SQ) {
        ctx.beginPath();
        ctx.moveTo(stars[i].x, stars[i].y);
        ctx.lineTo(stars[j].x, stars[j].y);
        ctx.strokeStyle = `rgba(255,255,255,${0.12 * (1 - Math.sqrt(distSq) / LINE_DISTANCE)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  // Desenho das estrelas
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

      for (let c = 0; c < CONSTELLATION_COUNT; c++) {
        const groupStars = stars.filter(s => s.group === c);
        if (groupStars.length === 0) continue;
        const cx = groupStars.reduce((sum, s) => sum + s.x, 0) / groupStars.length;
        const cy = groupStars.reduce((sum, s) => sum + s.y, 0) / groupStars.length;
        for (const s of groupStars) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < s.r || s.x > canvas!.width - s.r) s.vx *= -1;
          if (s.y < s.r || s.y > canvas!.height - s.r) s.vy *= -1;
          s.x = cx + (s.x - cx) * scale;
          s.y = cy + (s.y - cy) * scale;
          // depois dos limites do canvas:
          if (insideNoFly(s.x, s.y)) {
            const left = Math.abs(s.x - noFly.x);
            const right = Math.abs(s.x - (noFly.x + noFly.w));
            const top = Math.abs(s.y - noFly.y);
            const bottom = Math.abs(s.y - (noFly.y + noFly.h));
            const min = Math.min(left, right, top, bottom);
            if (min === left) { s.x = noFly.x - s.r; s.vx = -Math.abs(s.vx); }
            else if (min === right) { s.x = noFly.x + noFly.w + s.r; s.vx = Math.abs(s.vx); }
            else if (min === top) { s.y = noFly.y - s.r; s.vy = -Math.abs(s.vy); }
            else { s.y = noFly.y + noFly.h + s.r; s.vy = Math.abs(s.vy); }
          }

        }
      }

      for (const s of stars) {
        if (s.group !== null) continue;
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < s.r || s.x > canvas!.width - s.r) s.vx *= -1;
        if (s.y < s.r || s.y > canvas!.height - s.r) s.vy *= -1;

        if (insideNoFly(s.x, s.y)) {
          const left = Math.abs(s.x - noFly.x);
          const right = Math.abs(s.x - (noFly.x + noFly.w));
          const top = Math.abs(s.y - noFly.y);
          const bottom = Math.abs(s.y - (noFly.y + noFly.h));
          const min = Math.min(left, right, top, bottom);
          if (min === left) { s.x = noFly.x - s.r; s.vx = -Math.abs(s.vx); }
          else if (min === right) { s.x = noFly.x + noFly.w + s.r; s.vx = Math.abs(s.vx); }
          else if (min === top) { s.y = noFly.y - s.r; s.vy = -Math.abs(s.vy); }
          else { s.y = noFly.y + noFly.h + s.r; s.vy = Math.abs(s.vy); }
        }

      }
      

      drawConstellations();
      rafRef.current = requestAnimationFrame(animate);
    }

    drawConstellations();
    rafRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
      updateNoFly();
      drawConstellations();
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(parent);
    window.addEventListener('resize', handleResize);


    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener('resize', handleResize);
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
