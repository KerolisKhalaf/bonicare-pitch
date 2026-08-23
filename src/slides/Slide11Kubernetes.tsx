import { SlideFrame } from "../components/SlideFrame";
import { Arrow, Chip } from "../components/Flow";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function ServiceCard({
  name,
  runtime,
  replicas,
  port,
  extra,
  tone = "azure",
  delay = 0,
}: {
  name: string;
  runtime: string;
  replicas: string;
  port: string;
  extra?: string;
  tone?: "azure" | "cyan" | "mist";
  delay?: number;
}) {
  const border = tone === "cyan" ? "border-cyan/40" : tone === "azure" ? "border-azure/35" : "border-line-2";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease }}
      className={`rounded-lg border bg-panel-2 p-3.5 ${border}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="text-[13px] font-semibold text-paper">{name}</div>
        <span className="font-mono-tight text-[9px] text-mist-dim">{port}</span>
      </div>
      <div className="mt-1 text-[11px] text-mist-dim">{runtime}</div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <span className="font-mono-tight rounded border border-line-2 px-1.5 py-0.5 text-[9px] text-mist">
          {replicas}
        </span>
        {extra && (
          <span className="font-mono-tight rounded border border-line-2 px-1.5 py-0.5 text-[9px] text-mist">
            {extra}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function Slide11Kubernetes() {
  return (
    <SlideFrame
      index="11"
      kicker="Kubernetes"
      title={<>Inside AKS — namespace bonicare</>}
      subtitle="The authored target deployment — manifests written and ready, not yet running in production. Only the frontend crosses the boundary; everything else talks over internal ClusterIP services."
      width="full"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-line-2 bg-panel px-4 py-2 text-[12px] font-medium text-mist">
            NGINX Ingress
          </div>
          <Arrow />
          <div className="glow-cyan rounded-lg border border-cyan/50 bg-cyan/10 px-4 py-2 text-[12px] font-semibold text-paper">
            Frontend · 2 replicas · :80
          </div>
        </div>

        <div className="py-1">
          <Arrow dir="down" />
        </div>

        <div className="w-full max-w-[280px]">
          <ServiceCard name="Backend API" runtime="Node.js / Express" replicas="2 replicas" port=":3000" tone="cyan" />
        </div>

        <div className="py-1">
          <Arrow dir="down" />
        </div>

        <div className="grid w-full max-w-[980px] grid-cols-2 gap-3 md:grid-cols-4">
          <ServiceCard name="AI Service" runtime="FastAPI" replicas="2 replicas" port=":8000" tone="azure" delay={0.05} />
          <ServiceCard
            name="WebRTC Signaling"
            runtime="Real-time comms"
            replicas="2 replicas"
            port=":5002"
            tone="azure"
            delay={0.1}
          />
          <ServiceCard
            name="MongoDB"
            runtime="Clinical data"
            replicas="1 replica"
            port=":27017"
            extra="PVC · 10Gi"
            tone="mist"
            delay={0.15}
          />
          <ServiceCard name="Redis" runtime="Cache / sessions" replicas="1 replica" port=":6379" tone="mist" delay={0.2} />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Chip tone="amber">Target Architecture</Chip>
        <Chip tone="cyan">Public via Ingress</Chip>
        <Chip>Internal — ClusterIP only</Chip>
        <Chip>Persistent volume → Azure Managed Disk</Chip>
      </div>
    </SlideFrame>
  );
}
