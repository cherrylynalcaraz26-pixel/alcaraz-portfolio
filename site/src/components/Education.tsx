import { education } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section className="mx-auto max-w-sheet border-b border-rule px-8 py-14">
      <SectionLabel>Education &amp; Professional Development</SectionLabel>
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <p className="font-display text-lg">{education.program}</p>
          <p className="mt-1 text-sm text-muted">{education.school}</p>
          <ul className="mt-4 space-y-1.5">
            {education.certifications.map((c) => (
              <li key={c} className="text-[13.5px] text-ink">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-data text-[11px] uppercase tracking-[0.1em] text-muted">
            Continuous Self-Directed Learning
          </p>
          <ul className="mt-3 space-y-1.5">
            {education.development.map((d) => (
              <li key={d} className="text-[13.5px] text-ink">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
