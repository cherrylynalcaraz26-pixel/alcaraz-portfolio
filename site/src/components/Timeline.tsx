import { timeline } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Timeline() {
  return (
    <section className="mx-auto max-w-sheet border-t-2 border-ink px-8 py-16">
      <SectionLabel>Professional Timeline</SectionLabel>
      <div className="-mx-8 overflow-x-auto px-8">
        <ol className="flex min-w-max gap-0">
          {timeline.map((t, i) => (
            <li
              key={t.year}
              className={
                "w-72 shrink-0 border-t-4 border-accent pr-8 pt-5 " +
                (i > 0 ? "ml-8 border-l-2 border-l-rule pl-8" : "")
              }
            >
              <p className="font-display text-5xl font-black tabular-nums leading-none text-ink">
                {t.year}
              </p>
              <p className="mt-4 font-display text-lg font-bold leading-snug text-ink">
                {t.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.desc}</p>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-4 font-data text-xs text-tbd sm:hidden">Scroll for more →</p>
    </section>
  );
}
