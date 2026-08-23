import { toggleFullscreen } from "../hooks/useDeck";

export function DeckChrome({
  index,
  total,
  onNext,
  onPrev,
  onGo,
}: {
  index: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onGo: (i: number) => void;
}) {
  return (
    <>
      {/* progress bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-[2px] bg-line">
        <div
          className="h-full bg-gradient-to-r from-azure to-cyan transition-all duration-500 ease-out"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      {/* dots */}
      <div className="pointer-events-auto absolute left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[6px] w-[6px] rounded-full transition-all duration-300 ${
              i === index ? "h-[18px] bg-cyan" : "bg-line-2 hover:bg-mist"
            }`}
          />
        ))}
      </div>

      {/* counter */}
      <div className="font-mono-tight pointer-events-none absolute bottom-6 right-7 z-40 text-[12px] tracking-[0.1em] text-mist-dim">
        <span className="text-paper">{String(index + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(total).padStart(2, "0")}</span>
      </div>

      {/* brand mark */}
      <div className="font-mono-tight pointer-events-none absolute bottom-6 left-7 z-40 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-mist-dim">
        <span className="h-[6px] w-[6px] rounded-full bg-cyan" />
        BoniCare · Deploy Or Die
      </div>

      {/* nav buttons */}
      <div className="pointer-events-auto absolute bottom-5 right-24 z-40 flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={index === 0}
          aria-label="Previous slide"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line-2 text-mist transition hover:border-cyan/50 hover:text-cyan disabled:opacity-25"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={onNext}
          disabled={index === total - 1}
          aria-label="Next slide"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line-2 text-mist transition hover:border-cyan/50 hover:text-cyan disabled:opacity-25"
        >
          <ChevronRight />
        </button>
        <button
          onClick={toggleFullscreen}
          aria-label="Toggle fullscreen"
          className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-line-2 text-mist transition hover:border-cyan/50 hover:text-cyan"
        >
          <Expand />
        </button>
      </div>
    </>
  );
}

function ChevronLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M9 2 L4 7 L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5 2 L10 7 L5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Expand() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M1 4.5V1h3.5M12 4.5V1H8.5M1 8.5V12h3.5M12 8.5V12H8.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
