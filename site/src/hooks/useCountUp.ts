import { useEffect, useState } from "react";

/**
 * Animates a leading integer in `target` from 0 up to its real value on
 * mount (not scroll-triggered — see index.css's fade-up comment for why).
 * Non-numeric targets (e.g. "—" for unconfirmed figures) are returned
 * unchanged and never animated, so a placeholder can never be mistaken
 * for a counted-up number.
 */
export function useCountUp(target: string, durationMs = 1100) {
  const match = target.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(match ? "0" + match[2] : target);

  useEffect(() => {
    if (!match) {
      setDisplay(target);
      return;
    }

    const end = parseInt(match[1], 10);
    const suffix = match[2];

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (end === 0 || prefersReduced) {
      setDisplay(end + suffix);
      return;
    }

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * end) + suffix);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return display;
}
