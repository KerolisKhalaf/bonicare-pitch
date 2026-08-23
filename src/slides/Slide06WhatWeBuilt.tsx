import { SlideFrame } from "../components/SlideFrame";
import { Panel, Chip } from "../components/Flow";
import { motion } from "framer-motion";

const built = [
  "Every service containerized — frontend, backend, AI service, WebRTC signaling",
  "Multi-service deployment defined with Docker Compose (app, AI, WebRTC, MongoDB, Redis)",
  "Deployed to Azure via Docker Compose as our first cloud validation stage",
  "Kubernetes manifests authored for the full service set — namespace, deployments, services, persistent storage",
  "CI pipeline foundation building and publishing versioned container images",
];

export function Slide06WhatWeBuilt() {
  return (
    <SlideFrame
      index="06"
      kicker="What We Built"
      title={<>We validated the platform in the cloud before orchestrating it.</>}
      subtitle="Docker Compose wasn't a placeholder — it was the stage where we proved containers, networking, and configuration behave correctly before introducing Kubernetes."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <Panel tone="cyan">
          <div className="mb-1 flex items-center gap-2">
            <Chip tone="green">Done</Chip>
            <span className="text-[13px] font-semibold text-paper">Already in place</span>
          </div>
          <ul className="mt-3 space-y-3">
            {built.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.07 * i }}
                className="flex gap-2.5 text-[13px] leading-relaxed text-mist"
              >
                <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-cyan" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        </Panel>

        <Panel tone="mist">
          <div className="mb-1 flex items-center gap-2">
            <Chip tone="amber">In Motion</Chip>
            <span className="text-[13px] font-semibold text-paper">Where we're headed next</span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-mist">
            The same containers now move from Docker Compose into Azure Kubernetes Service — with a
            dedicated DevOps environment driving the pipeline, secrets moved out of the app, and
            monitoring layered on top.
          </p>
          <p className="mt-4 text-[14px] font-medium text-paper">
            Validate first. Orchestrate next. Observe continuously.
          </p>
        </Panel>
      </div>
    </SlideFrame>
  );
}
