import { competencyGroups } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Competencies() {
  return (
    <section className="fade-up mx-auto max-w-sheet px-8 py-16" style={{ animationDelay: "0.1s" }}>
      <SectionLabel index="02">Core Competencies</SectionLabel>
      <div className="grid gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink">
        {competencyGroups.map((group, i) => (
          <div key={group.category} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
            <h3 className="mb-4 flex items-baseline gap-2 font-data text-xs uppercase tracking-[0.08em] text-accent">
              <span>0{i + 1}</span>
              <span className="text-ink">{group.category}</span>
            </h3>
            <ul>
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-rule py-2 text-[13.5px] leading-snug text-ink last:border-b-0"
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
