"use client"

import React, { useEffect, useRef } from "react"

interface Point {
  x: number;
  y: number;
  z: number;
  id: number;
}

const POINTS_COUNT = 1800; // Even denser for maximum impact
const RADIUS = 260; // Larger sphere

const ORBITAL_LABELS = [
  { text: "Chicago HQ", phi: 1.2, theta: 0.5 },
  { text: "Seoul Office", phi: 2.2, theta: 4.2 },
  { text: "London Hub", phi: 0.8, theta: 2.8 },
  { text: "Sydney Dojo", phi: 2.5, theta: 1.2 },
  { text: "Berlin Center", phi: 1.5, theta: 3.5 }
];

export function GlobeComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const rotation = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize points on a sphere
    const newPoints: Point[] = [];
    for (let i = 0; i < POINTS_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / POINTS_COUNT);
      const theta = Math.sqrt(POINTS_COUNT * Math.PI) * phi;
      
      newPoints.push({
        x: RADIUS * Math.cos(theta) * Math.sin(phi),
        y: RADIUS * Math.sin(theta) * Math.sin(phi),
        z: RADIUS * Math.cos(phi),
        id: i
      });
    }
    points.current = newPoints;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Handle Resize
    const resize = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth || 800;
        canvas.height = canvas.parentElement.clientHeight || 600;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    // Track Mouse for subtle rotation
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      };
    };
    window.addEventListener('mousemove', onMouseMove);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Update rotation with mouse influence
      rotation.current.y += 0.002 + (mousePos.current.x * 0.005);
      rotation.current.x += (mousePos.current.y * 0.003);

      const cosY = Math.cos(rotation.current.y);
      const sinY = Math.sin(rotation.current.y);
      const cosX = Math.cos(rotation.current.x);
      const sinX = Math.sin(rotation.current.x);

      const projectedPoints: { x: number, y: number, z: number, opacity: number, id: number }[] = [];

      points.current.forEach((p) => {
        // Rotate around Y axis
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate around X axis
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Project 3D to 2D
        const perspective = 800 / (800 - z2);
        const x2 = x1 * perspective + centerX;
        const y2 = y1 * perspective + centerY;

        // Opacity based on Z depth
        const opacity = (z2 + RADIUS) / (2 * RADIUS);
        
        projectedPoints.push({ x: x2, y: y2, z: z2, opacity, id: p.id });

        if (p.id % 2 === 0) { 
          ctx.beginPath();
          ctx.arc(x2, y2, 1.8 * perspective, 0, Math.PI * 2); // Larger points
           // Darker points for light theme
           const colorMix = p.id % 3 === 0 ? "30, 41, 59" : (p.id % 3 === 1 ? "100, 149, 237" : "147, 51, 234");
           ctx.fillStyle = `rgba(${colorMix}, ${opacity * 0.6})`; // Higher opacity
           ctx.fill();
        }

        // Highlighted active schools
        if (p.id % 60 === 0) {
          ctx.beginPath();
          ctx.arc(x2, y2, 2.5 * perspective, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(225, 29, 29, ${opacity})`; // Maximum vivid red
          ctx.shadowBlur = 15 * perspective; // Stronger glow
          ctx.shadowColor = "rgba(225, 29, 29, 0.6)";
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw Connection Arcs between highlighted points
      const activePoints = projectedPoints.filter(p => p.id % 60 === 0 && p.z > -20);
      ctx.lineWidth = 1.2;
      
      for (let i = 0; i < activePoints.length; i++) {
        for (let j = i + 1; j < activePoints.length; j++) {
          const p1 = activePoints[i];
          const p2 = activePoints[j];
          const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
          
          if (dist < 150) { // Increased reach
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2 - dist * 0.15;
            ctx.strokeStyle = `rgba(225, 29, 29, ${p1.opacity * 0.5})`; // Stronger lines
            ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      // --- Draw Orbital Labels ---
      ctx.font = "bold 10px font-heading";
      ORBITAL_LABELS.forEach((label) => {
        // Calculate 3D position based on phi/theta
        const x_raw = RADIUS * Math.cos(label.theta) * Math.sin(label.phi);
        const y_raw = RADIUS * Math.sin(label.theta) * Math.sin(label.phi);
        const z_raw = RADIUS * Math.cos(label.phi);

        // Rotate (same as points)
        let x1 = x_raw * cosY - z_raw * sinY;
        let z1 = z_raw * cosY + x_raw * sinY;
        let y1 = y_raw * cosX - z1 * sinX;
        let z2 = z1 * cosX + y_raw * sinX;

        if (z2 > 0) { // Only front hemisphere
          const perspective = 800 / (800 - z2);
          const x2 = x1 * perspective + centerX;
          const y2 = y1 * perspective + centerY;
          const opacity = (z2 + RADIUS) / (2 * RADIUS);

          // Draw small dot
          ctx.beginPath();
          ctx.arc(x2, y2, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(225, 29, 29, ${opacity})`;
          ctx.fill();

          // Draw text with background for readability
          const textWidth = ctx.measureText(label.text).width;
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
          ctx.fillRect(x2 + 5, y2 - 12, textWidth + 8, 16);
          
          ctx.strokeStyle = `rgba(225, 29, 29, ${opacity * 0.2})`;
          ctx.lineWidth = 0.5;
          ctx.strokeRect(x2 + 5, y2 - 12, textWidth + 8, 16);

          ctx.fillStyle = `rgba(15, 23, 42, ${opacity})`;
          ctx.fillText(label.text, x2 + 9, y2 - 1);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[650px] flex items-center justify-center z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-20"
        style={{ 
          width: '100%', 
          height: '100%',
          minWidth: '800px',
          minHeight: '600px'
        }}
      />
    </div>
  );
}
