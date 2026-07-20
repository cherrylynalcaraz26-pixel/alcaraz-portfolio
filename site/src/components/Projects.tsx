import { Rocket, Code2 } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="fade-up mx-auto max-w-sheet px-8 py-16"
      style={{ animationDelay: "0.3s" }}
    >
      <SectionLabel icon={Rocket}>Featured Projects</SectionLabel>
      <div className="grid gap-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className="overflow-hidden rounded-2xl border border-rule bg-paper-raised shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="gradient-accent p-6 text-white sm:p-7">
              <p className="font-sans text-xs font-semibold uppercase tracking-wide text-white/80">
                {p.subtitle} · {p.client}
              </p>
              <h3 className="mt-1 font-display text-2xl font-extrabold">{p.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-white/15 px-2.5 py-1 text-[11.5px] font-medium"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-3 sm:p-7">
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-wide text-muted">
                  Challenge
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/90">{p.challenge}</p>
              </div>
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-wide text-muted">
                  Solution
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/90">{p.solution}</p>
              </div>
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-wide text-muted">
                  Result
                </p>
                <p className="mt-2 text-[13.5px] italic leading-relaxed text-tbd">{p.result}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 border-t border-rule px-6 py-4 sm:px-7">
              <Code2 size={14} className="text-muted" />
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-rule px-2.5 py-1 font-data text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
