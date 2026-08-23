import { SlideFrame } from "../components/SlideFrame";
import { Panel } from "../components/Flow";
import { motion } from "framer-motion";

const current = [
  "Dockerized application — all four services",
  "Docker Compose deployment",
  "Initial Azure deployment",
  "Cloud infrastructure foundation",
  "Container images published",
  "DevOps environment designed",
  "CI/CD foundation running",
];

const target = [
  "Full AKS deployment",
  "NGINX Ingress",
  "Key Vault integration",
  "Managed Identity",
  "Azure Monitor + Log Analytics",
  "Autoscaling",
  "Production validation",
];

export function Slide14Roadmap() {
  return (
    <SlideFrame
      index="14"
      kicker="Current State → Target State"
      title={<>What's working today, and what we're building next.</>}
      width="full"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Panel title="Current" tone="green">
          <ul className="space-y-2.5">
            {current.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.06 * i }}
                className="flex gap-2.5 text-[13px] text-mist"
              >
                <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-green" />
                {c}
              </motion.li>
            ))}
          </ul>
        </Panel>
        <Panel title="Target" tone="cyan">
          <ul className="space-y-2.5">
            {target.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.06 * i }}
                className="flex gap-2.5 text-[13px] text-mist"
              >
                <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-cyan" />
                {t}
              </motion.li>
            ))}
          </ul>
        </Panel>
      </div>
    </SlideFrame>
  );
}
