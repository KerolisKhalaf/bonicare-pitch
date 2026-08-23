import { SlideFrame } from "../components/SlideFrame";
import { Arrow, Chip } from "../components/Flow";
import { motion } from "framer-motion";

const current = ["GitHub", "Jenkins", "Docker Build", "Docker Hub"];
const target = ["GitHub", "Azure DevOps", "Self-Hosted Agent", "Build & Test", "ACR", "AKS"];

function PipelineRow({ stages, delayBase = 0 }: { stages: string[]; delayBase?: number }) {
  return (
    <div className="flex flex-wrap items-center gap-y-2 gap-x-1.5 md:gap-x-2">
      {stages.map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delayBase + 0.08 * i }}
          className="flex items-center gap-1.5 md:gap-2"
        >
          <div className="rounded-lg border border-line-2 bg-panel-2 px-3 py-2 text-center text-[12px] font-medium text-paper md:px-3.5">
            {s}
          </div>
          {i < stages.length - 1 && <Arrow />}
        </motion.div>
      ))}
    </div>
  );
}

export function Slide09CiCd() {
  return (
    <SlideFrame
      index="09"
      kicker="CI/CD"
      title={<>From pipeline foundation to cloud-native delivery.</>}
      subtitle="A deployment should be a process, not a person — here's what's running today, and what we're building toward."
      width="full"
    >
      <div className="flex flex-col gap-5">
        <div className="rounded-xl border border-line bg-panel/60 p-4 md:p-5">
          <div className="mb-3 flex items-center gap-2">
            <Chip tone="green">Current</Chip>
            <span className="text-[12px] text-mist-dim">Validated and running today</span>
          </div>
          <PipelineRow stages={current} />
        </div>

        <div className="rounded-xl border border-cyan/25 bg-panel/60 p-4 md:p-5">
          <div className="mb-3 flex items-center gap-2">
            <Chip tone="cyan">Target</Chip>
            <span className="text-[12px] text-mist-dim">Cloud-native delivery into AKS</span>
          </div>
          <PipelineRow stages={target} delayBase={0.3} />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-6 text-[13px] leading-relaxed text-mist"
      >
        Jenkins validated automated image delivery. Azure DevOps takes over as the execution and deployment
        workflow built around our Azure infrastructure — <span className="text-paper">Build → Test → Registry → Kubernetes</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.05 }}
        className="mt-5 text-[13px] text-mist-dim"
      >
        The old question was <span className="text-mist">"Who deployed it?"</span> The new one is{" "}
        <span className="text-paper">"What pipeline deployed it?"</span>
      </motion.div>
    </SlideFrame>
  );
}
