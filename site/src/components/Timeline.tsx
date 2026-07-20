import { Clock } from "lucide-react";
import { timeline } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Timeline() {
  return (
    <section className="mx-auto max-w-sheet px-8 py-16">
      <SectionLabel icon={Clock}>Professional Timeline</SectionLabel>
      <div className="-mx-8 overflow-x-auto px-8 pb-2">
        <ol className="flex min-w-max gap-5">
          {timeline.map((t) => (
            <li
              key={t.year}
              className="w-72 shrink-0 rounded-2xl border border-rule bg-paper-raised p-6"
            >
              <span className="gradient-accent inline-block rounded-full px-3 py-1 font-data text-xs font-bold text-white">
                {t.year}
              </span>
              <p className="mt-4 font-display text-lg font-bold leading-snug text-ink">
                {t.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.desc}</p>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-3 font-sans text-xs text-tbd sm:hidden">Scroll for more →</p>
    </section>
  );
}
