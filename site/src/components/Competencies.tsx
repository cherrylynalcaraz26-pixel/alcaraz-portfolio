import { competencyGroups } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Competencies() {
  return (
    <section className="mx-auto max-w-sheet border-t-2 border-ink px-8 py-16">
      <SectionLabel>Core Competencies</SectionLabel>
      <div className="grid gap-10 sm:grid-cols-3">
        {competencyGroups.map((group, i) => (
          <div key={group.category}>
            <div className="mb-4 flex items-baseline gap-2.5">
              <span className="font-data text-xs text-accent">0{i + 1}</span>
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink">
                {group.category}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-ink px-3 py-1.5 text-[13px] leading-snug text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
