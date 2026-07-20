import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section className="fade-up mx-auto max-w-sheet px-8 py-16" style={{ animationDelay: "0.4s" }}>
      <SectionLabel icon={GraduationCap}>Education &amp; Professional Development</SectionLabel>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-rule bg-paper-raised p-6">
          <p className="font-display text-lg font-bold text-ink">{education.program}</p>
          <p className="mt-1 font-sans text-sm text-muted">{education.school}</p>
          <ul className="mt-4 space-y-1.5">
            {education.certifications.map((c) => (
              <li key={c} className="text-sm text-ink">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-rule bg-paper-raised p-6">
          <p className="font-sans text-[11px] font-bold uppercase tracking-wide text-muted">
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
