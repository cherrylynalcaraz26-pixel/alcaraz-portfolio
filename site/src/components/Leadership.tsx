import { leadershipPhilosophy, values } from "../data/portfolio";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="border-t-2 border-ink bg-ink px-8 py-16 text-paper"
    >
      <div className="mx-auto max-w-sheet">
        <div className="mb-10 flex items-center gap-4">
          <span className="bg-accent px-3 py-1.5 font-display text-sm font-bold uppercase tracking-wide text-[#110F0C]">
            Leadership Philosophy
          </span>
          <span className="h-px flex-1 bg-paper/25" />
        </div>

        <p
          aria-hidden="true"
          className="font-display text-8xl font-black leading-none text-accent"
        >
          &ldquo;
        </p>
        <blockquote className="-mt-8 max-w-[64ch] font-display text-2xl font-medium italic leading-snug text-paper sm:text-3xl">
          {leadershipPhilosophy}
        </blockquote>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {values.map((v) => (
            <span
              key={v}
              className="border border-paper/40 px-3 py-1.5 font-data text-[11px] uppercase tracking-[0.06em] text-paper/90"
            >
              {v}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
