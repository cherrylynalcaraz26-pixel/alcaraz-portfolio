import { education } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section className="mx-auto max-w-sheet px-8 py-16">
      <SectionLabel>Education &amp; Professional Development</SectionLabel>
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="border-l-4 border-accent pl-5">
          <p className="font-display text-xl font-bold text-ink">{education.program}</p>
          <p className="mt-1 font-data text-sm text-muted">{education.school}</p>
          <ul className="mt-4 space-y-1.5">
            {education.certifications.map((c) => (
              <li key={c} className="text-sm text-ink">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-l-4 border-rule pl-5">
          <p className="font-data text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
            Continuous Self-Directed Learning
          </p>
          <ul className="mt-4 space-y-1.5">
            {education.development.map((d) => (
              <li key={d} className="text-sm text-ink">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
