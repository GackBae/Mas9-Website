"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { ArrowRight, Users, TrendingUp, CheckCircle2, Activity, Zap, Award } from "lucide-react"

// --- Floating Glass Card ---
const FloatingCard = ({ children, className, delay = 0, yOffset = 20 }: { children: React.ReactNode, className?: string, delay?: number, yOffset?: number }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: yOffset }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: [0.22, 1, 0.36, 1] as const
        }
      }}
      className={`absolute hidden lg:flex flex-col p-4 rounded-2xl border border-white/40 bg-white/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-30 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// --- Particle Background Component ---
const ParticleBackground = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const mousePosition = React.useRef({ x: 0, y: 0 });
  const animationFrameId = React.useRef<number>();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(225, 29, 29, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(225, 29, 29, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });

        // Mouse interaction
        const mouseDx = particle.x - mousePosition.current.x;
        const mouseDy = particle.y - mousePosition.current.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDistance < 150) {
          const force = (150 - mouseDistance) / 150;
          particle.vx += (mouseDx / mouseDistance) * force * 0.02;
          particle.vy += (mouseDy / mouseDistance) * force * 0.02;
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40 z-0"
    />
  );
};

export function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useSpring(y, { stiffness: 100, damping: 20 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <section ref={containerRef} className="py-20 md:py-32 pb-32 md:pb-48 bg-white overflow-hidden relative transform scale-[0.9] origin-top">
      {/* Enhanced Background with Dynamic Elements */}
      <ParticleBackground />
      
      {/* Subtle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Soft gradient overlays */}
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.03),transparent_70%)] opacity-60 blur-[120px]"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[100%] h-[100%] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.02),transparent_70%)] opacity-50 blur-[120px]"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.03) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-6xl mx-auto relative"
        >
          {/* --- Cloud-like Free Distribution - Far Outside Screen --- */}
          {/* Scattered cloud formation - completely outside screen with more distance */}
          <FloatingCard className="top-1 -left-20 w-32" delay={0.3} yOffset={15}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="w-2.5 h-2.5 text-blue-600" />
              </div>
              <span className="text-[10px] font-bold text-slate-700">Retention</span>
            </div>
            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-blue-500 rounded-full"
              />
            </div>
            <span className="text-[6px] text-slate-500 mt-1 font-medium">94.2%</span>
          </FloatingCard>

          <FloatingCard className="top-14 -right-24 w-32" delay={0.4} yOffset={15}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                <TrendingUp className="w-2.5 h-2.5 text-red-600" />
              </div>
              <span className="text-[10px] font-bold text-slate-700">Revenue</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-black text-slate-900">$24.8k</span>
              <span className="text-[6px] text-green-500 font-bold">+12%</span>
            </div>
          </FloatingCard>

          <FloatingCard className="top-28 -left-32 w-32" delay={0.5} yOffset={25}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-2.5 h-2.5 text-green-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-slate-700">Attendance</span>
                <span className="text-[6px] text-green-600 font-bold">Checked</span>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="top-56 -right-28 w-32" delay={0.6} yOffset={25}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center">
                <Activity className="w-2.5 h-2.5 text-purple-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-slate-700">Growth</span>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4,5].map(i => <div key={i} className={`w-0.5 h-1 rounded-full ${i < 5 ? 'bg-purple-400' : 'bg-slate-200'}`} />)}
                </div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="top-72 -left-16 w-32" delay={0.7} yOffset={35}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-yellow-100 flex items-center justify-center">
                <Zap className="w-2.5 h-2.5 text-yellow-600" />
              </div>
              <span className="text-[10px] font-bold text-slate-700">Active Leads</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-black text-slate-900">+24</span>
              <span className="text-[6px] text-green-500 font-bold">Today</span>
            </div>
          </FloatingCard>

          <FloatingCard className="top-96 -right-20 w-32" delay={0.8} yOffset={35}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center">
                <Award className="w-2.5 h-2.5 text-amber-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-slate-700">Belt Test</span>
              </div>
            </div>
            <div className="flex gap-1 mt-1">
              {[1,2,3,4].map(i => (
                <div key={i} className={`h-1 w-0.5 rounded-sm ${i <= 3 ? "bg-amber-400" : "bg-slate-100"}`} />
              ))}
              <span className="text-[6px] text-slate-500 ml-1 font-medium italic">2d</span>
            </div>
          </FloatingCard>

          <FloatingCard className="bottom-16 -left-36 w-32" delay={0.9} yOffset={45}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center">
                <Activity className="w-2.5 h-2.5 text-teal-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-slate-700">Engagement</span>
                <span className="text-[6px] text-teal-600 font-bold">87%</span>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="bottom-4 -right-32 w-32" delay={1.0} yOffset={45}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center">
                <Zap className="w-2.5 h-2.5 text-orange-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-slate-700">Response</span>
                <span className="text-[6px] text-orange-600 font-bold">1.2s</span>
              </div>
            </div>
          </FloatingCard>

          {/* Enhanced Headline with Impact */}
          <motion.div 
            variants={itemVariants}
            className="relative mb-8"
          >
            {/* Background Glow Effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 -z-10 bg-gradient-to-r from-[#E11D1D]/10 to-transparent blur-[100px] transform translate-y-1/2"
            />
            
            {/* Main Headline */}
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-[95px] font-bold tracking-tight text-slate-900 leading-[1] py-4"
            >
              <div className="overflow-hidden flex flex-wrap justify-center gap-x-[0.25em]">
                {["Power", "Your", "School"].map((word, i) => (
                  <motion.span 
                    key={i} 
                    variants={wordVariants} 
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="overflow-hidden flex flex-wrap justify-center gap-x-[0.25em]">
                {["With", "MAS9"].map((word, i) => (
                  <motion.span 
                    key={i} 
                    variants={wordVariants} 
                    className={`inline-block ${word === "MAS9" ? "" : ""}`}
                  >
                    {word === "MAS9" ? (
                      <span className="text-[#E11D1D] font-black">
                        MAS9
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </div>
            </motion.h1>

            {/* Subtitle with Enhanced Typography */}
            <motion.p 
              variants={itemVariants}
              className="mt-10 text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal opacity-90"
            >
              Simplify operations, boost engagement<br className="hidden md:block" />
              and grow your school—all in one powerful platform.
            </motion.p>
          </motion.div>

          {/* Enhanced Buttons with Impact */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mt-16 mb-20 font-nav"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                className="group relative border-2 border-[#E11D1D] bg-[#E11D1D] text-white hover:bg-white hover:text-[#E11D1D] px-14 h-18 text-lg font-black rounded-full transition-all shadow-lg hover:shadow-white/25 overflow-hidden"
              >
                <span className="relative z-10">Get Started Free</span>
                <ArrowRight className="inline-block ml-2 size-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="group relative bg-[#E11D1D] text-white hover:bg-white hover:text-[#E11D1D] px-14 h-18 text-lg font-black rounded-full shadow-xl shadow-red-500/30 transition-all overflow-hidden"
              >
                <span className="relative z-10">Schedule Demo</span>
              </Button>
            </motion.div>
          </motion.div>

          
                  </motion.div>
      </div>
    </section>
  )
}
