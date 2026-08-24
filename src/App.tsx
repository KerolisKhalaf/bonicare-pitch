import { AnimatePresence, motion } from "framer-motion";
import { useDeck } from "./hooks/useDeck";
import { DeckChrome } from "./components/DeckChrome";

import { Slide01Cover } from "./slides/Slide01Cover";
import { Slide02WhoWeAre } from "./slides/Slide02WhoWeAre";
import { Slide02Challenge } from "./slides/Slide02Challenge";
import { Slide03MeetBonicare } from "./slides/Slide03MeetBonicare";
import { Slide04WhyPlatform } from "./slides/Slide04WhyPlatform";
import { Slide05AppToPlatform } from "./slides/Slide05AppToPlatform";
import { Slide06WhatWeBuilt } from "./slides/Slide06WhatWeBuilt";
import { Slide07AzureFoundation } from "./slides/Slide07AzureFoundation";
import { Slide08DevOpsEnv } from "./slides/Slide08DevOpsEnv";
import { Slide09CiCd } from "./slides/Slide09CiCd";
import { Slide10ComposeToAks } from "./slides/Slide10ComposeToAks";
import { Slide11Kubernetes } from "./slides/Slide11Kubernetes";
import { Slide12Security } from "./slides/Slide12Security";
import { Slide13Observability } from "./slides/Slide13Observability";
import { Slide14Roadmap } from "./slides/Slide14Roadmap";
import { Slide15WhyMatters } from "./slides/Slide15WhyMatters";
import { Slide16Final } from "./slides/Slide16Final";

const slides = [
  Slide01Cover,
  Slide02WhoWeAre,
  Slide02Challenge,
  Slide03MeetBonicare,
  Slide04WhyPlatform,
  Slide05AppToPlatform,
  Slide06WhatWeBuilt,
  Slide09CiCd,
  Slide07AzureFoundation,
  // Slide08DevOpsEnv,
  
  Slide10ComposeToAks,
  Slide11Kubernetes,
  Slide12Security,
  Slide13Observability,
  Slide14Roadmap,
  Slide15WhyMatters,
  Slide16Final,
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
