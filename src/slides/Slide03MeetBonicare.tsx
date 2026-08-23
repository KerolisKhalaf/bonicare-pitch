import { SlideFrame } from "../components/SlideFrame";
import { Panel, Chip } from "../components/Flow";
import { motion } from "framer-motion";

const users = [
  {
    who: "Patients",
    need: "Book a specialist, upload medical files, get an AI-assisted read on symptoms, and consult remotely.",
    give: "Appointment booking, medical file uploads, orthopedic AI predictions, video consultation.",
  },
  {
    who: "Doctors",
    need: "Manage availability, review patient history, run consultations without switching tools.",
    give: "Doctor portal, availability management, real-time video + chat.",
  },
  {
    who: "Admins",
    need: "Oversee the platform as it grows beyond a single clinic.",
    give: "Admin shell for platform oversight.",
  },
];

export function Slide03MeetBonicare() {
  return (
    <SlideFrame
      index="03"
      kicker="The Product"
      title={<>BoniCare — an orthopedic telemedicine platform.</>}
      subtitle="Appointment scheduling, secure medical records, AI-assisted orthopedic screening, and live video consultation, in one connected workflow."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        <Chip tone="cyan">Appointments</Chip>
        <Chip tone="cyan">Medical Records</Chip>
        <Chip tone="cyan">Orthopedic AI</Chip>
        <Chip tone="cyan">Video Consultation</Chip>
        <Chip>Payments</Chip>
        <Chip>Notifications</Chip>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {users.map((u, i) => (
          <motion.div
            key={u.who}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <Panel title={u.who} tone="azure" className="h-full">
              <div className="text-[12px] uppercase tracking-wide text-mist-dim">Needs</div>
              <div className="mt-1 text-[13px] leading-relaxed text-paper">{u.need}</div>
              <div className="mt-4 text-[12px] uppercase tracking-wide text-mist-dim">BoniCare provides</div>
              <div className="mt-1 text-[13px] leading-relaxed text-mist">{u.give}</div>
            </Panel>
          </motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}
