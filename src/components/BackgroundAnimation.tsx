import { useEffect } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react';
import { useTheme } from '@/src/components/theme-provider';

export function GlobalAmbientBackground() {
  const shouldReduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Subtle violet ambient drift */}
      <motion.div
        key={`global-violet-${theme}`}
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{
          x: [-24, 38, -16, -24],
          y: [0, 30, -20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={
          isDark
            ? 'absolute -top-28 right-[6%] h-[500px] w-[540px] rounded-full bg-purple-700/[0.14] blur-[125px]'
            : 'absolute -top-28 right-[6%] h-[460px] w-[500px] rounded-full bg-violet-500/[0.06] blur-[120px]'
        }
      />

      {/* Bottom-left deep crimson-blue undertone */}
      <motion.div
        key={`global-cobalt-${theme}`}
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{
          x: [24, -36, 16, 24],
          y: [0, -28, 24, 0],
          scale: [1, 0.95, 1.06, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={
          isDark
            ? 'absolute bottom-[-14%] left-[4%] h-[480px] w-[520px] rounded-full bg-blue-700/[0.13] blur-[135px]'
            : 'absolute bottom-[-14%] left-[4%] h-[440px] w-[480px] rounded-full bg-blue-500/[0.05] blur-[120px]'
        }
      />
    </div>
  );
}

export function HeroGridBeams() {
  const shouldReduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const pointerX = useMotionValue(-999);
  const pointerY = useMotionValue(-999);
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 28 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 28 });

  const pointerAuraColor = isDark
    ? 'rgba(139, 92, 246, 0.14)'
    : 'rgba(109, 40, 217, 0.07)';
  const pointerAura = useMotionTemplate`radial-gradient(440px circle at ${smoothX}px ${smoothY}px, ${pointerAuraColor}, transparent 70%)`;

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMove = (event: MouseEvent) => {
      const hero = document.getElementById('home');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      if (
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom &&
        event.clientX >= rect.left &&
        event.clientX <= rect.right
      ) {
        pointerX.set(event.clientX - rect.left);
        pointerY.set(event.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [pointerX, pointerY, shouldReduceMotion]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Layer 1: Concentrated Multi-Stop Nebula Glow (Purple + Crimson + Royal Blue) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Top-Center Violet / Amethyst Bloom */}
        <motion.div
          key={`hero-nebula-violet-${theme}`}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [-30, 36, -16, -30],
                  y: [-18, 20, -10, -18],
                  scale: [1, 1.1, 0.96, 1],
                }
          }
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className={
            isDark
              ? 'absolute left-[22%] top-[4%] h-[340px] w-[480px] rounded-full bg-[#6d28d9]/[0.42] blur-[95px]'
              : 'absolute left-[22%] top-[4%] h-[320px] w-[460px] rounded-full bg-[#8b5cf6]/[0.16] blur-[95px]'
          }
        />

        {/* Lower-Center Warm Crimson / Amber Ember Glow */}
        <motion.div
          key={`hero-nebula-crimson-${theme}`}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [24, -32, 18, 24],
                  y: [16, -20, 12, 16],
                  scale: [1.04, 0.94, 1.08, 1.04],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className={
            isDark
              ? 'absolute left-[28%] bottom-[4%] h-[280px] w-[420px] rounded-full bg-[#991b1b]/[0.40] blur-[95px]'
              : 'absolute left-[28%] bottom-[4%] h-[260px] w-[400px] rounded-full bg-[#e11d48]/[0.10] blur-[95px]'
          }
        />

        {/* Right-Center Deep Royal Blue Bloom */}
        <motion.div
          key={`hero-nebula-blue-${theme}`}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [-20, 28, -18, -20],
                  y: [18, -22, 10, 18],
                  scale: [0.96, 1.08, 0.98, 0.96],
                }
          }
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
          className={
            isDark
              ? 'absolute left-[46%] bottom-[8%] h-[300px] w-[440px] rounded-full bg-[#1d4ed8]/[0.38] blur-[100px]'
              : 'absolute left-[46%] bottom-[8%] h-[280px] w-[420px] rounded-full bg-[#3b82f6]/[0.14] blur-[100px]'
          }
        />
      </div>

      {/* Layer 2: Subtle Pointer Aura */}
      {!shouldReduceMotion && (
        <motion.div style={{ background: pointerAura }} className="absolute inset-0" />
      )}

      {/* Layer 3: Crisp Full-Width Architectural Grid Etched Over the Nebula Glow */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: '36px 36px',
          backgroundImage: isDark
            ? 'linear-gradient(to right, rgba(255, 255, 255, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.055) 1px, transparent 1px)'
            : 'linear-gradient(to right, rgba(9, 9, 11, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(9, 9, 11, 0.05) 1px, transparent 1px)',
        }}
      />

      {/* Soft edge vignette blending into obsidian/alabaster */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
