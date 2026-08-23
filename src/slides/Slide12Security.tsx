import { SlideFrame } from "../components/SlideFrame";
import { Arrow, Panel } from "../components/Flow";
import { motion } from "framer-motion";

export function Slide12Security() {
  return (
    <SlideFrame
      index="12"
      kicker="Security"
      title={<>Security is enforced by architecture, not by convention.</>}
      subtitle="Secrets never touch application code or Kubernetes manifests. Network exposure is limited to exactly one entry point."
      width="full"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Panel title="Network boundary" tone="mist">
          <div className="flex flex-col items-start gap-2">
            {["Public Internet", "Load Balancer", "Ingress", "Frontend"].map((s, i, arr) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.08 * i }}
              >
                <div className="rounded-md border border-line-2 bg-panel-2 px-3 py-1.5 text-[12px] text-mist">{s}</div>
                {i < arr.length - 1 && (
                  <div className="py-1 pl-3">
                    <Arrow dir="down" />
                  </div>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.4 }}
              className="pl-3 pt-1 text-[12px] text-mist-dim"
            >
              → then only internal ClusterIP services
            </motion.div>
          </div>
        </Panel>

        <Panel title="Secret management" tone="cyan">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {["JWT_SECRET", "STRIPE_SECRET_KEY", "SESSION_SECRET", "ENCRYPTION_KEY"].map((s) => (
              <span
                key={s}
                className="font-mono-tight rounded border border-line-2 bg-panel-2 px-2 py-1 text-[10px] text-mist"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-start gap-2">
            {["Application", "Azure Key Vault", "Managed Identity", "AKS"].map((s, i, arr) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.1 * i }}
              >
                <div
                  className={`rounded-md border px-3 py-1.5 text-[12px] ${
                    i === 1 ? "border-cyan/45 text-paper" : "border-line-2 text-mist"
                  }`}
                >
                  {s}
                </div>
                {i < arr.length - 1 && (
                  <div className="py-1 pl-3">
                    <Arrow dir="down" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Panel>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-[14px] font-medium text-paper"
      >
        Secrets shouldn't live inside manifests. AKS reaches them through identity, not credentials.
      </motion.p>
    </SlideFrame>
  );
}
