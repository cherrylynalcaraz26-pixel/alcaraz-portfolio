import { experience } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-sheet border-t-2 border-ink px-8 py-16">
      <SectionLabel>Professional Experience</SectionLabel>
      <div className="space-y-14">
        {experience.map((job) => (
          <article key={job.role + job.org} className="border-l-4 border-accent pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
                {job.role}
              </h3>
              <span className="font-data text-sm font-semibold tabular-nums text-accent">
                {job.dates}
              </span>
            </div>
            <p className="mt-1 font-data text-sm text-muted">{job.org}</p>
            <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-ink">{job.summary}</p>
            <ul className="mt-5 space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <span className="mt-[3px] h-3.5 w-1 shrink-0 bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
