import { SlideFrame } from "../components/SlideFrame";
import { FlowColumn, Panel } from "../components/Flow";
import { motion } from "framer-motion";

const tools = ["Docker", "Azure CLI", "kubectl"];

export function Slide08DevOpsEnv() {
  return (
    <SlideFrame
      index="08"
      kicker="DevOps Environment"
      title={<>We built the execution environment, not just a pipeline.</>}
      subtitle="A pipeline needs somewhere to run. We designed a dedicated, controlled environment inside Azure to execute it — with exactly the tools it needs and nothing more."
      width="full"
    >
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <FlowColumn
          items={[
            { label: "Azure Network", sub: "bonicare-rg", tone: "mist" },
            { label: "DevOps Subnet", sub: "isolated segment", tone: "azure" },
            { label: "Self-Hosted Agent VM", sub: "Ubuntu", tone: "azure" },
            { label: "Azure DevOps", sub: "pipeline orchestration", tone: "cyan" },
            { label: "ACR / AKS", sub: "build target", tone: "cyan" },
          ]}
        />

        <div className="flex flex-col gap-4">
          <Panel title="Agent VM tooling" tone="cyan">
            <div className="flex flex-wrap gap-2">
              {tools.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  className="rounded-md border border-line-2 bg-panel-2 px-3 py-1.5 text-[12px] font-medium text-paper"
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-mist">
              Everything the pipeline needs to build, tag, and deploy — installed once, controlled fully.
            </p>
          </Panel>

          <Panel title="Why self-hosted?" tone="mist">
            <p className="text-[13px] leading-relaxed text-mist">
              A controlled execution environment with the exact tools our delivery workflow needs — instead
              of reconstructing that environment on every run.
            </p>
          </Panel>
        </div>
      </div>
    </SlideFrame>
  );
}
