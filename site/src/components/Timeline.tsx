import { timeline } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Timeline() {
  return (
    <section className="fade-up mx-auto max-w-sheet px-8 py-16" style={{ animationDelay: "0.2s" }}>
      <SectionLabel index="04">Professional Timeline</SectionLabel>
      <div className="divide-y divide-rule border-t border-ink">
        {timeline.map((t) => (
          <div key={t.year} className="grid gap-2 py-6 sm:grid-cols-[140px_1fr] sm:gap-8">
            <p className="font-display text-3xl font-black tabular-nums leading-none text-ink">
              {t.year}
            </p>
            <div>
              <p className="font-display text-base font-bold leading-snug text-ink">{t.title}</p>
              <p className="mt-1.5 max-w-[62ch] font-serif text-sm leading-relaxed text-muted">
                {t.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
