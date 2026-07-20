import { timeline } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Timeline() {
  return (
    <section className="mx-auto max-w-sheet border-b border-rule px-8 py-14">
      <SectionLabel>Professional Timeline</SectionLabel>
      <ol className="relative border-l border-rule pl-7">
        {timeline.map((t) => (
          <li key={t.year} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[30.5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
            <p className="font-data text-xs tabular-nums text-accent-soft">{t.year}</p>
            <p className="mt-1 font-display text-lg">{t.title}</p>
            <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-muted">{t.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
