import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-sheet px-8 py-16">
      <SectionLabel icon={Briefcase}>Professional Experience</SectionLabel>
      <div className="space-y-6">
        {experience.map((job) => (
          <article
            key={job.role + job.org}
            className="overflow-hidden rounded-2xl border border-rule bg-paper-raised"
          >
            <div className="gradient-accent h-1.5 w-full" />
            <div className="p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{job.role}</h3>
                <span className="rounded-full bg-paper px-3 py-1 font-data text-xs font-semibold tabular-nums text-primary">
                  {job.dates}
                </span>
              </div>
              <p className="mt-1 font-sans text-sm font-medium text-secondary">{job.org}</p>
              <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-ink/90">
                {job.summary}
              </p>
              <ul className="mt-5 space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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
