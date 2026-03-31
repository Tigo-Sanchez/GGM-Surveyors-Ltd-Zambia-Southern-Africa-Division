import { motion, useScroll, useTransform } from 'motion/react';

export default function SurveyBackground() {
  const { scrollYProgress } = useScroll();
  
  // Scanner line moves down with scroll
  const scanY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4vw_4vw]" />

      {/* Topographic Node 1 - Top Right */}
      <motion.div 
        className="absolute -top-[30vw] -right-[10vw] w-[80vw] h-[80vw] opacity-20 dark:opacity-10 text-black dark:text-white"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M 100 10 C 150 10, 190 40, 180 100 C 170 160, 120 190, 80 180 C 40 170, 10 130, 20 80 C 30 30, 50 10, 100 10 Z" />
          <path d="M 100 30 C 130 30, 160 50, 155 95 C 150 140, 110 160, 85 155 C 60 150, 35 120, 45 85 C 55 50, 70 30, 100 30 Z" />
          <path d="M 100 50 C 115 50, 135 65, 130 90 C 125 115, 100 130, 85 125 C 70 120, 55 100, 65 85 C 75 70, 85 50, 100 50 Z" />
          <path d="M 100 70 C 105 70, 115 80, 110 90 C 105 100, 95 105, 85 100 C 75 95, 75 85, 85 75 C 90 70, 95 70, 100 70 Z" />
        </svg>
      </motion.div>

      {/* Topographic Node 2 - Bottom Left */}
      <motion.div 
        className="absolute top-[40vh] -left-[20vw] w-[90vw] h-[90vw] opacity-15 dark:opacity-[0.07] text-black dark:text-white"
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M 100 10 C 150 10, 190 40, 180 100 C 170 160, 120 190, 80 180 C 40 170, 10 130, 20 80 C 30 30, 50 10, 100 10 Z" />
          <path d="M 100 30 C 130 30, 160 50, 155 95 C 150 140, 110 160, 85 155 C 60 150, 35 120, 45 85 C 55 50, 70 30, 100 30 Z" />
          <path d="M 100 50 C 115 50, 135 65, 130 90 C 125 115, 100 130, 85 125 C 70 120, 55 100, 65 85 C 75 70, 85 50, 100 50 Z" />
          <path d="M 100 70 C 105 70, 115 80, 110 90 C 105 100, 95 105, 85 100 C 75 95, 75 85, 85 75 C 90 70, 95 70, 100 70 Z" />
        </svg>
      </motion.div>

      {/* Seismic Pulses (Radar rings) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px]">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-[1px] border-black/20 dark:border-white/20 rounded-full"
            animate={{
              scale: [0.1, 1.5],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Scroll-linked Depth Scanner */}
      <motion.div 
        className="absolute left-0 right-0 h-[1px] bg-black/40 dark:bg-[#FFFF00]/50 shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,0,0.4)] z-10"
        style={{ top: scanY }}
      >
        {/* Scanner Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[10vh] bg-black/5 dark:bg-[#FFFF00]/10 blur-3xl rounded-full" />
        {/* Depth readout */}
        <div className="absolute right-8 -top-6 text-[10px] font-mono font-bold tracking-widest text-black/60 dark:text-[#FFFF00] uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-black dark:bg-[#FFFF00] animate-pulse" />
          Scanning Strata
        </div>
      </motion.div>

      {/* Vignette to blend edges and ensure text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f5f5f5_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />
    </div>
  );
}
