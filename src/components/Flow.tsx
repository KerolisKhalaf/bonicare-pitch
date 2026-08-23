import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function FlowRow({
  items,
  tone = "azure",
  size = "md",
}: {
  items: { label: string; sub?: string }[];
  tone?: "azure" | "cyan" | "mist";
  size?: "sm" | "md";
}) {
  const toneMap: Record<string, string> = {
    azure: "border-azure/40 text-paper",
    cyan: "border-cyan/40 text-paper",
    mist: "border-line-2 text-mist",
  };
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 * i, ease }}
          className="flex items-center gap-2 md:gap-3"
        >
          <div
            className={`rounded-lg border bg-panel px-3.5 py-2.5 md:px-4 md:py-3 ${toneMap[tone]} ${
              size === "sm" ? "text-[12px]" : "text-[13px] md:text-[14px]"
            }`}
          >
            <div className="font-semibold">{it.label}</div>
            {it.sub && <div className="mt-0.5 text-[11px] text-mist-dim">{it.sub}</div>}
          </div>
          {i < items.length - 1 && <Arrow />}
        </motion.div>
      ))}
    </div>
  );
}

export function Arrow({ dir = "right" }: { dir?: "right" | "down" }) {
  return (
    <svg
      width={dir === "right" ? 22 : 14}
      height={dir === "right" ? 14 : 22}
      viewBox={dir === "right" ? "0 0 22 14" : "0 0 14 22"}
      className="shrink-0 text-mist-dim"
    >
      {dir === "right" ? (
        <path
          d="M0 7 H17 M12 2 L18 7 L12 12"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M7 0 V17 M2 12 L7 18 L12 12"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export function FlowColumn({
  items,
  compact = false,
}: {
  items: { label: string; sub?: string; tone?: "azure" | "cyan" | "mist" | "amber" }[];
  compact?: boolean;
}) {
  const toneMap: Record<string, string> = {
    azure: "border-azure/40",
    cyan: "border-cyan/40",
    mist: "border-line-2",
    amber: "border-amber/40",
  };
  return (
    <div className="flex flex-col items-start">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.08 * i, ease }}
          className="flex flex-col items-start"
        >
          <div
            className={`rounded-lg border bg-panel px-4 text-paper ${toneMap[it.tone ?? "mist"]} ${
              compact ? "py-2 text-[12px]" : "py-2.5 text-[13px]"
            }`}
          >
            <span className="font-semibold">{it.label}</span>
            {it.sub && <span className="ml-2 text-[11px] text-mist-dim">{it.sub}</span>}
          </div>
          {i < items.length - 1 && (
            <div className="py-1 pl-4">
              <Arrow dir="down" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function Panel({
  title,
  tone = "mist",
  children,
  className = "",
}: {
  title?: string;
  tone?: "azure" | "cyan" | "mist" | "amber" | "green";
  children: ReactNode;
  className?: string;
}) {
  const toneMap: Record<string, string> = {
    azure: "border-azure/30",
    cyan: "border-cyan/30",
    mist: "border-line",
    amber: "border-amber/30",
    green: "border-green/30",
  };
  return (
    <div className={`rounded-xl border bg-panel/70 p-5 backdrop-blur-sm ${toneMap[tone]} ${className}`}>
      {title && (
        <div className="font-mono-tight mb-3 text-[10px] uppercase tracking-[0.16em] text-mist-dim">{title}</div>
      )}
      {children}
    </div>
  );
}

export function Chip({ children, tone = "mist" }: { children: ReactNode; tone?: "azure" | "cyan" | "mist" | "amber" | "green" }) {
  const toneMap: Record<string, string> = {
    azure: "border-azure/40 text-azure bg-azure/10",
    cyan: "border-cyan/40 text-cyan bg-cyan/10",
    mist: "border-line-2 text-mist",
    amber: "border-amber/40 text-amber bg-amber/10",
    green: "border-green/40 text-green bg-green/10",
  };
  return (
    <span className={`font-mono-tight inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] ${toneMap[tone]}`}>
      {children}
    </span>
  );
}
