import { Layers } from "lucide-react";
import { competencyGroups } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Competencies() {
  return (
    <section className="mx-auto max-w-sheet px-8 py-16">
      <SectionLabel icon={Layers}>Core Competencies</SectionLabel>
      <div className="grid gap-8 sm:grid-cols-3">
        {competencyGroups.map((group) => (
          <div key={group.category} className="rounded-2xl border border-rule bg-paper-raised p-5">
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wide text-secondary">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-rule bg-paper px-3 py-1 text-[12.5px] font-medium text-ink"
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
