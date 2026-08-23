import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function SlideFrame({
  index,
  kicker,
  title,
  subtitle,
  children,
  align = "start",
  width = "wide",
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  align?: "start" | "center";
  width?: "wide" | "normal" | "full";
}) {
  const maxW = width === "full" ? "max-w-none" : width === "wide" ? "max-w-[1180px]" : "max-w-[860px]";
  return (
    <div
      className={`relative z-10 mx-auto flex h-full w-full flex-col px-10 py-12 md:px-20 md:py-16 ${maxW} ${
        align === "center" ? "items-center text-center justify-center" : "justify-start"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-[6px] w-[6px] rounded-full bg-cyan" />
        <span className="font-mono-tight text-[11px] uppercase tracking-[0.22em] text-mist-dim">
          {index} — {kicker}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.06, ease }}
        className="text-balance mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-[750] leading-[1.06] tracking-[-0.02em] text-paper"
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14, ease }}
          className={`text-balance mt-4 max-w-[62ch] text-[15px] leading-relaxed text-mist md:text-[17px] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-8 flex-1 md:mt-10"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono-tight inline-block rounded-full border border-line-2 bg-panel px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-mist">
      {children}
    </span>
  );
}
