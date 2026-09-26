import { motion } from "framer-motion";
import { SlideFrame } from "../components/SlideFrame";
import { Arrow, Chip, FlowRow, Panel } from "../components/Flow";
import { team, teamName } from "../data/team";

const ease = [0.16, 1, 0.3, 1] as const;

function Cards({ items, tone = "mist" }: { items: { title: string; body: string }[]; tone?: "azure" | "cyan" | "mist" | "amber" | "green" }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {items.map((item, i) => (
        <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07, duration: 0.4 }}>
          <Panel tone={tone} className="h-full">
            <div className="text-[14px] font-semibold leading-snug text-paper">{item.title}</div>
            <div className="mt-2 text-[12.5px] leading-relaxed text-mist">{item.body}</div>
          </Panel>
        </motion.div>
      ))}
    </div>
  );
}

export function BusinessCover() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="font-mono-tight mb-7 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-mist-dim">
        <span className="h-[6px] w-[6px] rounded-full bg-cyan" /> Product pitch · Egypt
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08, ease }} className="text-[clamp(3.2rem,10vw,7.5rem)] font-[800] leading-[0.94] tracking-[-0.03em] text-paper">BONICARE</motion.h1>
      <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22, ease }} className="mt-6 max-w-[44ch] text-[clamp(1rem,1.6vw,1.35rem)] font-medium text-mist">
        One connected path from booking to consultation, payment, and a shared medical record.
      </motion.p>
      <div className="mt-10 flex flex-wrap justify-center gap-2"><Chip tone="cyan">Patients</Chip><Chip tone="cyan">Doctors</Chip><Chip>Clinics</Chip><Chip tone="amber">AI-assisted, not autonomous</Chip></div>
      <div className="font-mono-tight mt-10 text-[12px] uppercase tracking-[0.24em] text-mist-dim">Team <span className="text-cyan">{teamName}</span></div>
    </div>
  );
}

export function TeamIntroduction() {
  return (
    <SlideFrame
      index="02"
      kicker="Meet the team"
      title={<>Deploy Or Die</>}
      subtitle="A multidisciplinary team building a more connected path through orthopedic care."
      align="center"
      width="normal"
    >
      <div className="flex h-full flex-col items-center justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease }}
          src={`${import.meta.env.BASE_URL}deploy-or-die.png`}
          alt="Deploy Or Die team logo"
          className="mb-8 max-h-[190px] max-w-[min(72vw,420px)] rounded-2xl object-contain"
        />
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] text-mist">
          {team.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

export function BusinessProblem() {
  return <SlideFrame index="02" kicker="The problem" title={<>Care is fragmented before it ever reaches the consultation.</>} subtitle="For a patient with back pain or a suspected fracture, the journey can span calls, clinic visits, payment steps, video tools, and paper files. Every handoff adds delay and missing context."><Cards items={[
    { title: "Access takes too long", body: "Finding the right doctor, confirming availability, and arranging a consultation are separate tasks." },
    { title: "Records follow the patient poorly", body: "X-rays, MRIs, lab results, and history can be scattered across devices, clinics, and paper." },
    { title: "Clinical review lacks workflow support", body: "Doctors may need to review imaging and measurements without an instant assistive second read." },
  ]} /></SlideFrame>;
}

export function EgyptContext() {
  return <SlideFrame index="03" kicker="Egyptian market & users" title={<>A local opportunity: make specialist care easier to reach and easier to operate.</>} subtitle={<>Egypt already has visible digital-health alternatives. That validates the behavior, but also raises the bar for a product that can coordinate the complete care journey. <span className="text-cyan">Market size, adoption, and regulatory figures: needs verification.</span></>}><div className="grid grid-cols-1 gap-4 md:grid-cols-[1.15fr_.85fr]"><Panel tone="cyan"><div className="font-mono-tight text-[10px] uppercase tracking-[0.16em] text-cyan">Primary users</div><div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3"><div><div className="text-[15px] font-semibold text-paper">Patients</div><div className="mt-1 text-[12px] text-mist">Access, continuity, convenience</div></div><div><div className="text-[15px] font-semibold text-paper">Doctors</div><div className="mt-1 text-[12px] text-mist">Context, workflow, reach</div></div><div><div className="text-[15px] font-semibold text-paper">Clinics</div><div className="mt-1 text-[12px] text-mist">Throughput, coordination, retention</div></div></div></Panel><Panel tone="mist"><div className="font-mono-tight text-[10px] uppercase tracking-[0.16em] text-mist-dim">Why this matters</div><div className="mt-3 text-[15px] font-semibold leading-snug text-paper">More connected care can reduce friction without requiring every interaction to happen in person.</div><div className="mt-3 text-[12px] leading-relaxed text-mist">The initial wedge is orthopedic care: suspected fractures, lower-back concerns, imaging, and follow-up.</div></Panel></div></SlideFrame>;
}

export function MarketGap() {
  return <SlideFrame index="04" kicker="Alternatives today" title={<>The gap is not “no telehealth.” It is disconnected telehealth.</>} subtitle="Patients can find booking, consultation, pharmacy, or specialist tools. BoniCare focuses on connecting the steps and the clinical context in one orthopedic workflow."><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{[
    ["Clinic calls", "Human coordination, limited availability"],
    ["Booking marketplaces", "Discovery and appointment access"],
    ["Video tools", "Conversation without a persistent record"],
    ["Paper / scattered files", "Context that is hard to reuse"],
  ].map(([t, b], i) => <motion.div key={t} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .08 }} className="rounded-xl border border-line bg-panel/70 p-4"><div className="text-[14px] font-semibold text-paper">{t}</div><div className="mt-2 text-[12px] leading-relaxed text-mist">{b}</div></motion.div>)}</div><div className="mt-7 flex flex-wrap items-center gap-2"><Chip tone="amber">Opportunity</Chip><span className="text-[14px] text-paper">Own the handoff between access, evidence, consultation, and follow-up.</span></div></SlideFrame>;
}

export function Solution() {
  return <SlideFrame index="05" kicker="The solution" title={<>BoniCare turns a fragmented visit into one connected care journey.</>} subtitle="The product is a shared workflow: patients and doctors work from the same appointment, conversation, and medical record context."><FlowRow tone="cyan" items={[{ label: "Book", sub: "find availability" }, { label: "Prepare", sub: "share records" }, { label: "Consult", sub: "video + chat" }, { label: "Assist", sub: "AI-supported review" }, { label: "Follow up", sub: "keep continuity" }]} /><div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-3"><Panel title="For patients" tone="azure"><div className="text-[13px] leading-relaxed text-mist">Less switching, fewer repeated explanations, and a clearer path to care.</div></Panel><Panel title="For doctors" tone="cyan"><div className="text-[13px] leading-relaxed text-mist">A consultation view that brings availability, patient context, and assistive outputs together.</div></Panel><Panel title="For clinics" tone="green"><div className="text-[13px] leading-relaxed text-mist">A foundation for more organized remote care and repeatable operations.</div></Panel></div></SlideFrame>;
}

const valueFeatures = [
  ["Booking + payments", "Patients struggle with back-and-forth scheduling", "A single path to confirm and pay", "Lower coordination friction and clearer conversion"],
  ["Shared medical record", "Evidence is scattered or lost between visits", "Patient and doctor see the same files and history", "Continuity, less duplicate work, stronger retention"],
  ["Video + text consultation", "Remote care is separated from the booking flow", "Consult where the appointment context already lives", "More efficient access and better follow-up"],
  ["X-ray fracture model", "Image review can take time and a second read is not always available", "A confidence-scored assistive result for doctors", "Faster review support; clinical decision remains with the doctor"],
  ["Lower-back screening model", "Structured measurements are hard to interpret consistently", "A second assistive signal for lumbar risk", "More informed conversations and triage support"],
  ["Secure record vault", "Patients carry records across devices and clinics", "Upload and retrieve X-rays, MRIs, and history", "A reusable record that compounds in value over time"],
];

export function Features() {
  return <SlideFrame index="06" kicker="Product capabilities" title={<>Every feature earns its place by reducing friction or increasing care capacity.</>} subtitle="Feature → customer problem → user benefit → business value. AI outputs support doctors; they do not replace clinical judgment." width="full"><div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">{valueFeatures.map(([f, p, b, v], i) => <motion.div key={f} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .05 }} className="rounded-xl border border-line bg-panel/70 p-4"><div className="font-mono-tight text-[10px] uppercase tracking-[0.14em] text-cyan">{f}</div><div className="mt-3 text-[12px] text-mist-dim">Problem</div><div className="text-[12.5px] leading-snug text-paper">{p}</div><div className="mt-2 text-[12px] text-mist-dim">Benefit</div><div className="text-[12.5px] leading-snug text-paper">{b}</div><div className="mt-2 border-t border-line pt-2 text-[12px] leading-snug text-cyan">Business value: {v}</div></motion.div>)}</div></SlideFrame>;
}

export function CompetitiveLandscape() {
  return <SlideFrame index="07" kicker="Competitive landscape · Egypt" title={<>We compete with categories, not just apps.</>} subtitle="Public positioning suggests Vezeeta and Altibbi are broad telehealth alternatives; Rology is a radiology-focused adjacent player. Exact pricing, availability, and feature parity require current diligence before external use." width="full"><div className="grid grid-cols-1 gap-3 md:grid-cols-3"><Panel title="Vezeeta · broad marketplace" tone="azure"><div className="text-[12.5px] leading-relaxed text-mist">Relevant alternative for doctor discovery, appointments, and teleconsultation. Bonicare’s opportunity is deeper orthopedic workflow continuity.</div></Panel><Panel title="Altibbi · regional teleconsultation" tone="mist"><div className="text-[12.5px] leading-relaxed text-mist">Relevant alternative for Arabic digital health and remote consultation. Bonicare’s opportunity is shared imaging context plus clinic workflow.</div></Panel><Panel title="Rology · teleradiology adjacent" tone="cyan"><div className="text-[12.5px] leading-relaxed text-mist">Relevant adjacent capability around remote radiology. Bonicare connects imaging assistance to booking, consultation, and patient records.</div></Panel></div><div className="mt-5 text-[11px] text-mist-dim">Source direction: public company/product positioning and market directories; verify all claims, pricing, licensing, and Egypt availability in diligence.</div></SlideFrame>;
}

export function Comparison() {
  const rows = [["Doctor discovery / booking", "✓", "✓", "—", "✓"], ["Video consultation", "✓", "✓", "—", "✓"], ["Persistent patient record", "Partial / verify", "Partial / verify", "Radiology workflow", "✓"], ["Orthopedic AI assistance", "Not evidenced", "Not evidenced", "Radiology focus", "✓"], ["Connected payment + care flow", "Partial / verify", "Partial / verify", "N/A", "✓"], ["Clinic-oriented workflow", "Marketplace-led", "Consultation-led", "Provider-led", "Designed for it"]];
  return <SlideFrame index="08" kicker="Comparison" title={<>Our wedge is the connected orthopedic workflow.</>} subtitle="This is a positioning hypothesis, not a claim that alternatives lack quality. The matrix highlights where BoniCare is designed to concentrate value." width="full"><div className="overflow-hidden rounded-xl border border-line bg-panel/70"><div className="grid grid-cols-[1.4fr_repeat(4,1fr)] border-b border-line bg-panel-2 px-3 py-3 text-[10px] uppercase tracking-wide text-mist-dim"><div>Capability</div><div>Vezeeta</div><div>Altibbi</div><div>Rology</div><div className="text-cyan">BoniCare</div></div>{rows.map((row, i) => <div key={row[0]} className={`grid grid-cols-[1.4fr_repeat(4,1fr)] px-3 py-3 text-[11px] ${i % 2 ? "bg-panel/40" : ""}`}><div className="pr-2 font-medium text-paper">{row[0]}</div>{row.slice(1).map((v, j) => <div key={j} className={j === 3 ? "text-cyan" : "text-mist"}>{v}</div>)}</div>)}</div></SlideFrame>;
}

export function Differentiators() {
  return <SlideFrame index="09" kicker="Why BoniCare" title={<>A connected record is the moat we can build on.</>} subtitle="The more a care journey is captured in one place, the more useful the product becomes for the next appointment, the next doctor, and the clinic operating it."><Cards tone="cyan" items={[
    { title: "Workflow, not a feature pile", body: "Booking, payments, consultation, records, and assistive analysis are designed as one journey." },
    { title: "Orthopedic-first focus", body: "The initial use case is specific enough to build a credible experience before expanding." },
    { title: "Assistive intelligence", body: "Two integrated models create a product advantage while keeping the doctor accountable for decisions." },
  ]} /><div className="mt-5 flex items-center gap-2 text-[13px] text-mist"><Chip tone="green">Defensible direction</Chip><span>Structured records + workflow data + clinic adoption can compound over time.</span></div></SlideFrame>;
}

export function BusinessValue() {
  return <SlideFrame index="10" kicker="Business value" title={<>One platform can create value at three levels.</>} subtitle="The product’s value is not only a faster appointment. It is a more repeatable operating model for care."><div className="grid grid-cols-1 gap-4 md:grid-cols-3"><Panel title="Patient value" tone="azure"><div className="text-[20px] font-semibold text-paper">Less friction</div><div className="mt-2 text-[13px] leading-relaxed text-mist">Access, consultation, payment, and records in one place.</div></Panel><Panel title="Doctor value" tone="cyan"><div className="text-[20px] font-semibold text-paper">More context</div><div className="mt-2 text-[13px] leading-relaxed text-mist">A shared record and assistive signals can support more informed consultations.</div></Panel><Panel title="Clinic value" tone="green"><div className="text-[20px] font-semibold text-paper">More capacity</div><div className="mt-2 text-[13px] leading-relaxed text-mist">Structured scheduling and remote visits can support throughput and continuity.</div></Panel></div><div className="mt-6 rounded-xl border border-amber/30 bg-amber/10 p-4 text-[12px] leading-relaxed text-mist"><span className="font-semibold text-amber">Outcome metrics to validate:</span> time from booking to consultation, repeat consultation rate, clinician review time, no-show rate, record completeness, and clinic retention.</div></SlideFrame>;
}

export function BusinessModel() {
  return <SlideFrame index="11" kicker="Business model · to be validated" title={<>Several monetization paths exist; the first should follow the workflow we can prove.</>} subtitle="No pricing or revenue is claimed today. These are hypotheses for customer discovery and pilot design."><Cards tone="amber" items={[
    { title: "Clinic subscription", body: "Recurring software fee for scheduling, records, consultations, and clinic administration." },
    { title: "Per-consultation fee", body: "A transaction or platform fee tied to completed remote consultations." },
    { title: "AI-assisted review tier", body: "A future paid capability for eligible clinical workflows, subject to validation and governance." },
  ]} /><div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2"><Panel title="Pilot hypothesis" tone="cyan"><div className="text-[13px] leading-relaxed text-mist">Start with one orthopedic clinic and measure workflow adoption before optimizing pricing.</div></Panel><Panel title="Needs verification" tone="mist"><div className="text-[13px] leading-relaxed text-mist">Willingness to pay, regulatory requirements, payment economics, AI liability boundaries, and target clinic segment.</div></Panel></div></SlideFrame>;
}

export function Proof() {
  const shipped = ["Booking, doctor video calls, and secure payments working end-to-end", "Medical record vault for X-rays, MRIs, and history", "X-ray fracture model returns label + confidence score", "Lower-back screening model integrated from structured measurements"];
  return <SlideFrame index="12" kicker="Proof of product" title={<>This is more than a concept: the core workflow is built.</>} subtitle="The current build supports the business story; the next step is validating it with real users and clinic workflows."><div className="grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_.9fr]"><Panel title="Working today" tone="green"><ul className="space-y-3">{shipped.map(s => <li key={s} className="flex gap-2.5 text-[13px] leading-relaxed text-mist"><span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-green" />{s}</li>)}</ul></Panel><Panel title="What proof still means" tone="cyan"><div className="text-[14px] font-semibold leading-snug text-paper">Technical readiness is not product-market fit.</div><div className="mt-3 text-[13px] leading-relaxed text-mist">We need clinician feedback, patient usability evidence, safe AI evaluation, and pilot economics before making market claims.</div></Panel></div></SlideFrame>;
}

export function TechnicalCredibility() {
  return <SlideFrame index="13" kicker="Technical credibility" title={<>The architecture supports reliability without becoming the pitch.</>} subtitle="Only the technical facts that support business confidence: the platform is containerized, cloud-hosted, observable, and designed to onboard more clinics."><div className="grid grid-cols-1 gap-3 md:grid-cols-4"><Panel title="Scalability" tone="azure"><div className="text-[12.5px] leading-relaxed text-mist">Azure-hosted, containerized services create a path to repeatable clinic onboarding.</div></Panel><Panel title="Security" tone="cyan"><div className="text-[12.5px] leading-relaxed text-mist">Network boundary, authentication, secure payments, and protected record handling are part of the platform foundation.</div></Panel><Panel title="Reliability" tone="green"><div className="text-[12.5px] leading-relaxed text-mist">Dedicated services for API, video, AI, data, and file storage isolate key responsibilities.</div></Panel><Panel title="Operations" tone="mist"><div className="text-[12.5px] leading-relaxed text-mist">CI/CD and Azure monitoring foundations support repeatable releases and visibility.</div></Panel></div><div className="mt-6 flex flex-wrap items-center gap-2"><Chip tone="cyan">Application</Chip><Arrow /><Chip tone="azure">Containers</Chip><Arrow /><Chip tone="cyan">Azure</Chip><Arrow /><Chip tone="green">Repeatable operations</Chip></div></SlideFrame>;
}

function ArchitecturePhaseSlide({
  index,
  phase,
  title,
  subtitle,
  image,
}: {
  index: string;
  phase: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <SlideFrame index={index} kicker={`Architecture · ${phase}`} title={title} subtitle={subtitle} width="full">
      <div className="flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease }}
          className="flex h-full w-full items-center justify-center rounded-2xl border border-line-2 bg-panel/70 p-3 shadow-2xl md:p-5"
        >
          <a
            href={`${import.meta.env.BASE_URL}${image}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${phase} architecture diagram at full size`}
            className="block max-h-full max-w-full cursor-zoom-in rounded-xl focus-visible:outline-2 focus-visible:outline-cyan"
          >
            <img
              src={`${import.meta.env.BASE_URL}${image}`}
              alt={`${phase} architecture diagram`}
              className="max-h-full max-w-full rounded-xl object-contain transition-opacity hover:opacity-85"
            />
          </a>
        </motion.div>
      </div>
    </SlideFrame>
  );
}

export function ArchitecturePhaseOne() {
  return (
    <ArchitecturePhaseSlide
      index="14"
      phase="Phase 1"
      title="Start with a working product foundation."
      subtitle="The first architecture phase establishes the core application services and the connected workflow BoniCare depends on."
      image="phase-1.jpeg"
    />
  );
}

export function ArchitecturePhaseTwo() {
  return (
    <ArchitecturePhaseSlide
      index="15"
      phase="Phase 2"
      title="Connect the platform for dependable delivery."
      subtitle="The second phase adds the surrounding platform capabilities needed to move from a working application toward repeatable operation."
      image="phase-2.jpeg"
    />
  );
}

export function ArchitecturePhaseThree() {
  return (
    <ArchitecturePhaseSlide
      index="16"
      phase="Phase 3"
      title="Build toward a scalable care platform."
      subtitle="The final phase shows the path from the product foundation to a more scalable, observable, and clinic-ready platform."
      image="phase-3.jpeg"
    />
  );
}

export function RoadmapBusiness() {
  return <SlideFrame index="14" kicker="Roadmap" title={<>Prove the wedge, then widen the platform.</>} subtitle="Each step is tied to a product or business question—not just an infrastructure milestone." width="full"><div className="grid grid-cols-1 gap-3 md:grid-cols-3">{[
    ["1 · Validate", "Run a focused clinic/patient pilot; measure usability, safety, and workflow outcomes.", "Now"],
    ["2 · Expand", "Onboard multiple clinics, improve mobile access, and connect more payment/insurance flows.", "Next"],
    ["3 · Interoperate", "Extend AI coverage and adopt HL7/FHIR pathways for broader care continuity.", "Later"],
  ].map(([n, b, tag], i) => <Panel key={n} tone={i === 0 ? "cyan" : "mist"}><Chip tone={i === 0 ? "cyan" : "mist"}>{tag}</Chip><div className="mt-3 text-[16px] font-semibold text-paper">{n}</div><div className="mt-2 text-[12.5px] leading-relaxed text-mist">{b}</div></Panel>)}</div><div className="mt-6 text-[11px] text-mist-dim">All future clinical, regulatory, interoperability, and performance claims require validation before launch.</div></SlideFrame>;
}

export function BusinessClose() {
  return <div className="relative flex h-full w-full flex-col items-center justify-center px-8 text-center"><motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-[1.2] text-mist">Healthcare should not make the patient coordinate the system.</motion.p><motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .14 }} className="text-balance mt-2 text-[clamp(2rem,4.6vw,3.6rem)] font-[800] leading-[1.1] tracking-[-0.02em] text-paper">BoniCare connects the journey.</motion.p><motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .14 }} className="text-balance mt-2 text-[clamp(2rem,4.6vw,3.6rem)] font-[800] leading-[1.1] tracking-[-0.02em] text-paper"><span color="#4BEBD1">Thank you.</span></motion.p><div className="mt-9 flex flex-wrap items-center justify-center gap-2">{["Book", "Consult", "Understand", "Continue"].map((s, i, a) => <div key={s} className="flex items-center gap-2"><Chip tone={i === 2 ? "cyan" : "mist"}>{s}</Chip>{i < a.length - 1 && <Arrow />}</div>)}</div><div className="font-mono-tight mt-10 text-[13px] uppercase tracking-[0.24em] text-cyan">{teamName}</div><div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[12px] text-mist-dim">{team.map(name => <span key={name}>{name}</span>)}</div></div>;
}
