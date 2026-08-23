import { SlideFrame } from "../components/SlideFrame";
import { Panel } from "../components/Flow";
import { motion } from "framer-motion";

const services = [
  { label: "Frontend", detail: "Angular SPA — public entry point" },
  { label: "Backend API", detail: "Node.js/Express — auth, appointments, files, payments" },
  { label: "AI Service", detail: "FastAPI — orthopedic prediction models" },
  { label: "WebRTC Signaling", detail: "Real-time video consultation" },
  { label: "MongoDB", detail: "Patient & clinical data" },
  { label: "Redis", detail: "Sessions & caching" },
];

export function Slide04WhyPlatform() {
  return (
    <SlideFrame
      index="04"
      kicker="The Impact"
      title={<>Six services. One product. Zero room for manual deployment.</>}
      subtitle="BoniCare isn't one app — it's a small distributed system. Real-time video, an isolated AI service, persistent clinical data, and a cache all have to come up together, correctly, every time."
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.06 * i }}
          >
            <Panel tone="mist" className="h-full">
              <div className="text-[13px] font-semibold text-paper">{s.label}</div>
              <div className="mt-1 text-[12px] leading-relaxed text-mist">{s.detail}</div>
            </Panel>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 text-[15px] font-medium text-paper"
      >
        Building BoniCare was only the first challenge.
        <span className="text-cyan"> How do we reliably deliver and operate a multi-service orthopedic telemedicine platform?</span>
      </motion.p>
    </SlideFrame>
  );
}
