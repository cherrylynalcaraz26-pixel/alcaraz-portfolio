import { Quote } from "lucide-react";
import { leadershipPhilosophy, values } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-sheet px-8 py-16">
      <SectionLabel icon={Quote}>Leadership Philosophy</SectionLabel>
      <div className="gradient-accent rounded-2xl p-8 text-white sm:p-10">
        <Quote size={32} className="opacity-70" />
        <blockquote className="mt-4 max-w-[64ch] font-display text-xl font-medium leading-snug sm:text-2xl">
          {leadershipPhilosophy}
        </blockquote>
      </div>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {values.map((v) => (
          <span
            key={v}
            className="rounded-full border border-rule bg-paper-raised px-3.5 py-1.5 font-sans text-[12.5px] font-medium text-ink"
          >
            {v}
          </span>
        ))}
      </div>
    </section>
  );
}
