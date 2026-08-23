import { SlideFrame } from "../components/SlideFrame";
import { motion } from "framer-motion";
import { Chip } from "../components/Flow";

const stages = [
  { n: "01", label: "Docker Compose", detail: "Validate containers, networking, config", status: "done" },
  { n: "02", label: "Azure Deployment", detail: "First cloud deployment, via Compose", status: "done" },
  { n: "03", label: "DevOps Automation", detail: "Self-hosted agent, pipeline", status: "progress" },
  { n: "04", label: "AKS", detail: "Orchestration, ingress, secrets", status: "next" },
  { n: "05", label: "Observability", detail: "Logs, metrics, alerts", status: "next" },
];

const statusChip: Record<string, { label: string; tone: "green" | "amber" | "mist" }> = {
  done: { label: "Done", tone: "green" },
  progress: { label: "In Progress", tone: "amber" },
  next: { label: "Next", tone: "mist" },
};

export function Slide10ComposeToAks() {
  return (
    <SlideFrame
      index="10"
      kicker="Evolution"
      title={<>Docker Compose → Azure Kubernetes Service</>}
      subtitle="Validate first. Orchestrate next. Observe continuously — an intentional progression, not a shortcut we're still recovering from."
      width="full"
    >
      <div className="relative">
        <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-line md:block" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {stages.map((s, i) => {
            const st = statusChip[s.status];
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 * i }}
                className="relative flex flex-col items-start"
              >
                <div
                  className={`relative z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 bg-ink ${
                    s.status === "done"
                      ? "border-green"
                      : s.status === "progress"
                      ? "border-amber"
                      : "border-line-2"
                  }`}
                >
                  <span
                    className={`h-[7px] w-[7px] rounded-full ${
                      s.status === "done" ? "bg-green" : s.status === "progress" ? "bg-amber" : "bg-line-2"
                    }`}
                  />
                </div>
                <div className="mt-3">
                  <div className="font-mono-tight text-[10px] text-mist-dim">{s.n}</div>
                  <div className="mt-1 text-[14px] font-semibold text-paper">{s.label}</div>
                  <div className="mt-1 text-[12px] leading-snug text-mist">{s.detail}</div>
                  <div className="mt-2">
                    <Chip tone={st.tone}>{st.label}</Chip>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideFrame>
  );
}
