import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Slide01Cover() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="font-mono-tight mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-mist-dim"
      >
        <span className="h-[6px] w-[6px] rounded-full bg-cyan" />
        Hackathon Presentation
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08, ease }}
        className="text-[clamp(3.2rem,10vw,7.5rem)] font-[800] leading-[0.94] tracking-[-0.03em] text-paper"
      >
        BONICARE
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.22, ease }}
        className="mt-6 max-w-[46ch] text-[clamp(1rem,1.6vw,1.35rem)] font-medium text-mist"
      >
        From Application to Automated Cloud Delivery
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease }}
        className="mt-10 h-px w-40 bg-gradient-to-r from-transparent via-line-2 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease }}
        className="font-mono-tight mt-10 text-[12px] uppercase tracking-[0.24em] text-mist-dim"
      >
        Team <span className="text-cyan">Deploy Or Die</span>
      </motion.div>
    </div>
  );
}
