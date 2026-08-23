import { SlideFrame } from "../components/SlideFrame";
import { Panel } from "../components/Flow";
import { motion } from "framer-motion";

const points = [
  {
    title: "Orthopedic care needs a specialist, not a search engine",
    body: "Patients dealing with back pain or a suspected fracture don't know if they need a doctor today or can wait — and booking the right specialist is its own hurdle.",
  },
  {
    title: "Consultation and diagnosis are disconnected",
    body: "Scheduling, medical records, imaging, and the actual video consultation often live in separate tools, or no tool at all.",
  },
  {
    title: "Care doesn't scale with one clinic",
    body: "A single practice can only see so many patients a day. Remote, structured care is the only way to reach more people without more waiting rooms.",
  },
];

export function Slide02Challenge() {
  return (
    <SlideFrame
      index="02"
      kicker="The Challenge"
      title={<>Orthopedic care is hard to access, and harder to coordinate.</>}
      subtitle="Before any technology decision, there's a human one: getting the right patient to the right care, without the friction."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <Panel tone={i === 1 ? "cyan" : "mist"} className="h-full">
              <div className="font-mono-tight mb-3 text-[11px] text-mist-dim">0{i + 1}</div>
              <div className="text-[15px] font-semibold leading-snug text-paper">{p.title}</div>
              <div className="mt-2 text-[13px] leading-relaxed text-mist">{p.body}</div>
            </Panel>
          </motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}
