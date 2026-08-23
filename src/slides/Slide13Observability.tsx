import { SlideFrame } from "../components/SlideFrame";
import { Arrow, Chip } from "../components/Flow";
import { motion } from "framer-motion";

export function Slide13Observability() {
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
    </SlideFrame>
  );
}
