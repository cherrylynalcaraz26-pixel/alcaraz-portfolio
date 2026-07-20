import { leadershipPhilosophy, values } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-sheet border-b border-rule px-8 py-14">
      <SectionLabel>Leadership Philosophy</SectionLabel>
      <blockquote className="max-w-[62ch] border-l-2 border-accent pl-6 font-display text-xl italic leading-relaxed text-ink">
        &ldquo;{leadershipPhilosophy}&rdquo;
      </blockquote>
      <div className="mt-10 flex flex-wrap gap-2.5">
        {values.map((v) => (
          <span
            key={v}
            className="font-data text-[11px] uppercase tracking-[0.06em] text-accent-soft border border-rule px-3 py-1.5"
          >
            {v}
          </span>
        ))}
      </div>
    </section>
  );
}
