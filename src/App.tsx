import { AnimatePresence, motion } from "framer-motion";
import { useDeck } from "./hooks/useDeck";
import { DeckChrome } from "./components/DeckChrome";

import {
  BusinessClose,
  BusinessCover,
  BusinessModel,
  BusinessProblem,
  BusinessValue,
  Comparison,
  CompetitiveLandscape,
  Differentiators,
  EgyptContext,
  Features,
  MarketGap,
  Proof,
  RoadmapBusiness,
  Solution,
  TeamIntroduction,
  TechnicalCredibility,
} from "./slides/BusinessDeck";

const slides = [
  BusinessCover,
  TeamIntroduction,
  BusinessProblem,
  EgyptContext,
  MarketGap,
  Solution,
  Features,
  CompetitiveLandscape,
  Comparison,
  Differentiators,
  BusinessValue,
  BusinessModel,
  Proof,
  TechnicalCredibility,
  RoadmapBusiness,
  BusinessClose,
];

const variants = {
  enter: { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

export default function App() {
  const { index, go, nextSlide, prevSlide } = useDeck(slides.length);
  const Current = slides[index];

  return (
    <div className="bg-grid relative h-screen w-screen overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.10),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 [background:linear-gradient(to_top,rgba(5,7,12,0.9),transparent)]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 h-full w-full"
        >
          <Current />
        </motion.div>
      </AnimatePresence>

      <DeckChrome index={index} total={slides.length} onNext={nextSlide} onPrev={prevSlide} onGo={go} />
    </div>
  );
}
