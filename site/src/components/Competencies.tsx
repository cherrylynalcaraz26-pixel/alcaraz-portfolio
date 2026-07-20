import { competencyGroups } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Competencies() {
  return (
    <section className="mx-auto max-w-sheet border-b border-rule px-8 py-14">
      <SectionLabel>Core Competencies</SectionLabel>
      <div className="grid gap-8 sm:grid-cols-3">
        {competencyGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 font-display text-base italic text-accent-soft">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-rule bg-paper-raised px-3.5 py-2.5 text-[13.5px] leading-snug text-ink"
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
