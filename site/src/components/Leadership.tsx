import { leadershipPhilosophy, values } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="fade-up mx-auto max-w-sheet px-8 py-16"
      style={{ animationDelay: "0.35s" }}
    >
      <SectionLabel index="07">Leadership Philosophy</SectionLabel>
      <div className="border border-ink bg-ink p-8 text-paper sm:p-12">
        <span className="font-display text-5xl font-black leading-none text-accent">&ldquo;</span>
        <blockquote className="-mt-4 max-w-[66ch] font-serif text-2xl italic leading-snug sm:text-3xl">
          {leadershipPhilosophy}
        </blockquote>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-ink pt-5">
        {values.map((v, i) => (
          <span key={v} className="flex items-center gap-3 font-data text-[11.5px] uppercase tracking-[0.06em] text-ink">
            {v}
            {i < values.length - 1 && <span className="text-rule">/</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
