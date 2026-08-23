import { motion } from "framer-motion";
import { team, teamName } from "../data/team";
import { Arrow } from "../components/Flow";

const ease = [0.16, 1, 0.3, 1] as const;

export function Slide16Final() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-8 text-center">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-[1.2] text-mist"
      >
        We didn't just deploy BoniCare.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.14, ease }}
        className="text-balance text-[clamp(2rem,4.6vw,3.6rem)] font-[800] leading-[1.1] tracking-[-0.02em] text-paper"
      >
        We engineered the platform behind it.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.32 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-1.5"
      >
        {["Problem", "Product", "Cloud", "Automation", "Kubernetes", "Observability"].map((s, i, arr) => (
          <div key={s} className="flex items-center gap-1.5">
            <span className="font-mono-tight rounded-full border border-line-2 px-3 py-1 text-[11px] text-mist">
              {s}
            </span>
            {i < arr.length - 1 && <Arrow />}
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease }}
        className="mt-10 h-px w-40 bg-gradient-to-r from-transparent via-line-2 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease }}
        className="mt-8"
      >
        <div className="font-mono-tight text-[13px] uppercase tracking-[0.24em] text-cyan">{teamName}</div>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12px] text-mist-dim">
          {team.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
