import { useCallback, useEffect, useRef, useState } from "react";

export function useDeck(total: number) {
  const [index, setIndex] = useState(0);
  const lock = useRef(false);

  const go = useCallback(
    (next: number) => {
      if (lock.current) return;
      const clamped = Math.max(0, Math.min(total - 1, next));
      if (clamped === index) return;
      lock.current = true;
      setIndex(clamped);
      window.setTimeout(() => {
        lock.current = false;
      }, 420);
    },
    [index, total]
  );

  const nextSlide = useCallback(() => go(index + 1), [go, index]);
  const prevSlide = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        nextSlide();
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(total - 1);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);

    let wheelLock = false;
    const onWheel = (e: WheelEvent) => {
      if (wheelLock) return;
      if (Math.abs(e.deltaY) < 24) return;
      wheelLock = true;
      if (e.deltaY > 0) nextSlide();
      else prevSlide();
      window.setTimeout(() => (wheelLock = false), 550);
    };
    window.addEventListener("wheel", onWheel, { passive: true });

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => (touchStartY = e.touches[0].clientY);
    const onTouchEnd = (e: TouchEvent) => {
      const dy = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(dy) < 60) return;
      if (dy > 0) nextSlide();
      else prevSlide();
    };
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [nextSlide, prevSlide, go, total]);

  return { index, go, nextSlide, prevSlide };
}

export function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.().catch(() => {});
  }
}
