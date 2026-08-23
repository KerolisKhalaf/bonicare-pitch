import { motion } from "framer-motion";
import { team, teamName, projectName, hackathonName } from "../data/team";

const ease = [0.16, 1, 0.3, 1] as const;

export function Slide02WhoWeAre() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-3"
      >
        <span className="h-[6px] w-[6px] rounded-full bg-cyan" />
        <span className="font-mono-tight text-[11px] uppercase tracking-[0.22em] text-mist-dim">
          01 — Who We Are
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12, ease }}
        className="mt-5 text-[clamp(2.6rem,6vw,4.6rem)] font-[800] leading-[1.02] tracking-[-0.02em] text-paper"
      >
        {teamName}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.28, ease }}
        className="mt-4 flex items-center gap-3 text-[14px] text-mist"
      >
        <span>Building</span>
        <span className="font-mono-tight rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-cyan">
          {projectName}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.42, ease }}
        className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-line-2 to-transparent"
      />

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {team.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.55 + i * 0.1, ease }}
            className="text-[15px] font-medium text-paper md:text-[16px]"
          >
            {name}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.05, ease }}
        className="text-balance mt-9 max-w-[42ch] text-[13px] leading-relaxed text-mist-dim"
      >
        Four engineers. One platform. One goal — make BoniCare deployable, scalable, and operationally
        ready.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.25 }}
        className="font-mono-tight mt-8 text-[10px] uppercase tracking-[0.24em] text-mist-dim"
      >
        {hackathonName}
      </motion.div>
    </div>
  );
}
