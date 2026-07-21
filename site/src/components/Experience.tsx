import { experience } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section
      id="experience"
      className="fade-up mx-auto max-w-sheet px-8 py-16"
      style={{ animationDelay: "0.15s" }}
    >
      <SectionLabel index="03">Professional Experience</SectionLabel>
      <div className="divide-y divide-ink border-y border-ink">
        {experience.map((job) => (
          <article key={job.role + job.org} className="grid gap-4 py-8 sm:grid-cols-[220px_1fr]">
            <div>
              <h3 className="font-display text-lg font-bold leading-tight text-ink">{job.role}</h3>
              <p className="mt-1 font-serif italic text-muted">{job.org}</p>
              <p className="mt-3 font-data text-xs tabular-nums text-accent">{job.dates}</p>
            </div>
            <div>
              <p className="max-w-[62ch] font-serif text-[15px] leading-relaxed text-ink">
                {job.summary}
              </p>
              <ul className="mt-4 space-y-1.5">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                    <span className="text-accent">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
