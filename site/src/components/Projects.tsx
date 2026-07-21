import { projects } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="fade-up mx-auto max-w-sheet px-8 py-16"
      style={{ animationDelay: "0.3s" }}
    >
      <SectionLabel index="06">Featured Projects</SectionLabel>
      <div className="space-y-10">
        {projects.map((p, i) => (
          <article key={p.name} className="border border-ink">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink bg-paper-raised px-6 py-4">
              <div>
                <p className="font-data text-[11px] uppercase tracking-[0.08em] text-accent">
                  0{i + 1} — {p.subtitle} · {p.client}
                </p>
                <h3 className="mt-1 font-display text-2xl font-black text-ink">{p.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="border border-ink px-2 py-0.5 font-data text-[10.5px] text-ink">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-rule px-6 py-4">
              {p.features.map((f) => (
                <span key={f} className="font-data text-[11px] text-muted">
                  {f}
                  <span className="ml-2 text-rule">/</span>
                </span>
              ))}
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-3">
              <div>
                <p className="font-data text-[11px] font-bold uppercase tracking-wide text-ink">
                  Challenge
                </p>
                <p className="mt-2 font-serif text-[13.5px] leading-relaxed text-ink">
                  {p.challenge}
                </p>
              </div>
              <div>
                <p className="font-data text-[11px] font-bold uppercase tracking-wide text-ink">
                  Solution
                </p>
                <p className="mt-2 font-serif text-[13.5px] leading-relaxed text-ink">
                  {p.solution}
                </p>
              </div>
              <div>
                <p className="font-data text-[11px] font-bold uppercase tracking-wide text-ink">
                  Result
                </p>
                <p className="mt-2 font-serif text-[13.5px] italic leading-relaxed text-tbd">
                  {p.result}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
