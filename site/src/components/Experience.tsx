import { experience } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-sheet border-b border-rule px-8 py-14">
      <SectionLabel>Professional Experience</SectionLabel>
      <div className="space-y-12">
        {experience.map((job) => (
          <article key={job.role + job.org}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-xl">{job.role}</h3>
              <span className="font-data text-xs tabular-nums text-accent-soft">{job.dates}</span>
            </div>
            <p className="mt-0.5 font-display text-[15px] italic text-accent-soft">{job.org}</p>
            <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted">{job.summary}</p>
            <ul className="mt-4 space-y-1.5">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-[13.5px] leading-relaxed text-ink">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
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
