import { SlideFrame } from "../components/SlideFrame";
import { Arrow, Panel, Chip } from "../components/Flow";
import { motion } from "framer-motion";
import { useState } from "react";

export function Slide13Observability() {
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);

  return (
    <SlideFrame
      index="13"
      kicker="Observability"
      title={<>Deployment is only half the job.</>}
      subtitle="Shipping code tells you it went out. Observability tells you what happens after — that's the layer we're building next."
      width="full"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {["Applications", "Logs + Metrics", "Log Analytics Workspace", "Azure Monitor", "Alerts"].map((s, i, arr) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex items-center gap-2"
            >
              <div
                className={`rounded-lg border px-3.5 py-2.5 text-[12px] font-medium ${
                  i === arr.length - 1 ? "border-amber/40 text-amber" : "border-line-2 text-mist"
                }`}
              >
                {s}
              </div>
              {i < arr.length - 1 && <Arrow />}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[560px] text-center">
        <Chip tone="amber">Observability — In Progress</Chip>
        <p className="mt-4 text-[13px] leading-relaxed text-mist">
          Deployment is only half the job. Runtime visibility closes the loop — we know today whether a
          rollout succeeded, and this phase adds visibility into how the platform behaves under real traffic.
        </p>
      </div>
        <Panel className="mx-auto mb-4 w-full max-w-[900px]" title="Cloud Architecture" tone="cyan">
          <div className="flex justify-center">
            <button
              type="button"
              className="block w-full cursor-zoom-in rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan/70"
              onClick={() => setIsArchitectureOpen(true)}
              aria-label="Open cloud architecture image"
            >
              <img className="h-auto max-h-[55vh] w-full object-contain" src="/image.png" alt="Cloud Architecture" />
            </button>
          </div>
        </Panel>

        {isArchitectureOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Cloud Architecture"
            onClick={() => setIsArchitectureOpen(false)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-lg border border-line-2 bg-panel px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-cyan/60 hover:text-cyan focus:outline-none focus:ring-2 focus:ring-cyan/70 md:right-8 md:top-8"
              onClick={() => setIsArchitectureOpen(false)}
            >
              Close
            </button>
            <img
              className="max-h-full max-w-full object-contain"
              src="public/image.png"
              alt="Cloud Architecture enlarged"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
    </SlideFrame>
  );
}