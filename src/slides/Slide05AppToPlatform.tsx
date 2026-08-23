import { SlideFrame } from "../components/SlideFrame";
import { FlowColumn } from "../components/Flow";

const stages = [
  { label: "Application", sub: "BoniCare product code", tone: "mist" as const },
  { label: "Containerization", sub: "Docker images per service", tone: "azure" as const },
  { label: "Cloud Infrastructure", sub: "Azure resource group", tone: "azure" as const },
  { label: "CI/CD Automation", sub: "Build, test, publish", tone: "cyan" as const },
  { label: "Kubernetes", sub: "AKS orchestration", tone: "cyan" as const },
  { label: "Observability", sub: "Logs, metrics, alerts", tone: "amber" as const },
  { label: "Scalability", sub: "Replicas & self-healing", tone: "amber" as const },
];

export function Slide05AppToPlatform() {
  return (
    <SlideFrame
      index="05"
      kicker="Application → Platform"
      title={<>An application becomes a platform one layer at a time.</>}
      subtitle="DevOps isn't a feature bolted on afterward — it's the engineering layer that makes an application operable, not just runnable."
    >
      <FlowColumn items={stages} />
    </SlideFrame>
  );
}
