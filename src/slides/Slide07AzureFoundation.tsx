import { SlideFrame } from "../components/SlideFrame";
import { Arrow, Chip } from "../components/Flow";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const resources = [
  { name: "Container Registry", tag: "ACR", note: "Versioned images: frontend, backend, ai-service, webrtc", tone: "azure" },
  { name: "Key Vault", tag: "Secrets", note: "JWT, Stripe, session & encryption keys", tone: "cyan" },
  { name: "Managed Identity", tag: "IAM", note: "AKS authenticates to Azure — no stored credentials", tone: "cyan" },
  { name: "Storage Account", tag: "Blob", note: "Uploads, documents, generated files", tone: "azure" },
];

export function Slide07AzureFoundation() {
  return (
    <SlideFrame
      index="07"
      kicker="Cloud Foundation"
      title={<>One resource group. A clear boundary around everything BoniCare needs.</>}
      subtitle={<>Target Azure footprint — <span className="font-mono-tight text-cyan">bonicare-rg</span></>}
      width="full"
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {["External Users", "Azure DNS", "Load Balancer", "NGINX Ingress"].map((s, i, arr) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="flex items-center gap-2 md:gap-3"
            >
              <div className="rounded-lg border border-line-2 bg-panel px-3.5 py-2 text-[12px] font-medium text-mist">
                {s}
              </div>
              {i < arr.length - 1 && <Arrow />}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="my-3 h-6 w-px origin-top bg-line-2"
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease }}
          className="w-full max-w-[1000px] rounded-2xl border border-azure/25 bg-panel/40 p-5 md:p-7"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono-tight text-[11px] uppercase tracking-[0.16em] text-azure">
              Resource Group — bonicare-rg
            </span>
            <Chip tone="mist">Azure</Chip>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {resources.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                className="rounded-lg border border-line-2 bg-panel-2 p-3.5"
              >
                <div className="font-mono-tight text-[9px] uppercase tracking-wider text-mist-dim">{r.tag}</div>
                <div className="mt-1 text-[13px] font-semibold text-paper">{r.name}</div>
                <div className="mt-1.5 text-[11px] leading-snug text-mist">{r.note}</div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.95 }}
              className="glow-cyan rounded-lg border border-cyan/50 bg-cyan/10 p-3.5"
            >
              <div className="font-mono-tight text-[9px] uppercase tracking-wider text-cyan">AKS</div>
              <div className="mt-1 text-[13px] font-semibold text-paper">Kubernetes Service</div>
              <div className="mt-1.5 text-[11px] leading-snug text-mist">Namespace: bonicare — every service</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-5 text-[12px] text-mist-dim"
        >
          Only the frontend is reachable from the internet. Everything else stays inside the boundary.
        </motion.div>
      </div>
    </SlideFrame>
  );
}
