import { SlideFrame } from "../components/SlideFrame";
import { Panel } from "../components/Flow";
import { motion } from "framer-motion";

const values = [
  { title: "Automation", body: "Less manual deployment, fewer opportunities for human error." },
  { title: "Repeatability", body: "Same pipeline, same result — every single time." },
  { title: "Scalability", body: "From fixed containers to orchestrated, replicated workloads." },
  { title: "Security", body: "Centralized secrets and identity instead of scattered credentials." },
  { title: "Reliability", body: "Multiple replicas and Kubernetes self-healing on failure." },
  { title: "Observability", body: "Logs, metrics, and alerts once the next phase lands." },
];

export function Slide15WhyMatters() {
  return (
    <SlideFrame
      index="15"
      kicker="Why This Matters"
      title={<>The architecture is the product's foundation, not decoration.</>}
      width="full"
    >
      <div className="mb-7 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Panel tone="mist">
          <div className="font-mono-tight text-[10px] uppercase tracking-wide text-mist-dim">BoniCare's value</div>
          <div className="mt-1.5 text-[13px] leading-relaxed text-paper">
            Solving the orthopedic telemedicine workflow problem for patients and doctors.
          </div>
        </Panel>
        <Panel tone="cyan">
          <div className="font-mono-tight text-[10px] uppercase tracking-wide text-cyan">Deploy Or Die's value</div>
          <div className="mt-1.5 text-[13px] leading-relaxed text-paper">
            Building the platform required to deliver that product reliably, at scale.
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.07 * i }}
          >
            <Panel tone={i % 2 === 0 ? "azure" : "cyan"} className="h-full">
              <div className="text-[14px] font-semibold text-paper">{v.title}</div>
              <div className="mt-1.5 text-[12.5px] leading-relaxed text-mist">{v.body}</div>
            </Panel>
          </motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}
