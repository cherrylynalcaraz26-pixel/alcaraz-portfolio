import { education } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section className="fade-up mx-auto max-w-sheet px-8 py-16" style={{ animationDelay: "0.4s" }}>
      <SectionLabel index="08">Education &amp; Professional Development</SectionLabel>
      <div className="grid gap-10 border-t border-ink pt-8 sm:grid-cols-2 sm:divide-x sm:divide-ink">
        <div className="sm:pr-8">
          <p className="font-display text-lg font-bold text-ink">{education.program}</p>
          <p className="mt-1 font-serif italic text-muted">{education.school}</p>
          <ul className="mt-4 space-y-1.5">
            {education.certifications.map((c) => (
              <li key={c} className="text-sm text-ink">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:pl-8">
          <p className="font-data text-[11px] font-bold uppercase tracking-wide text-muted">
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
