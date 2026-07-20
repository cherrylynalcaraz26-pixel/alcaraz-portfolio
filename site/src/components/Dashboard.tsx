import { dashboard } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Dashboard() {
  return (
    <section id="dashboard" className="mx-auto max-w-sheet px-8 py-16">
      <SectionLabel>Executive Dashboard</SectionLabel>
      <div className="grid grid-cols-2 gap-[3px] border-2 border-ink bg-ink sm:grid-cols-4">
        {dashboard.map((d) => (
          <div key={d.label} className="flex flex-col justify-between gap-4 bg-paper p-5 sm:p-6">
            <span
              className={
                "font-display text-4xl font-black tabular-nums leading-none sm:text-5xl " +
                (d.confirmed ? "text-accent" : "italic text-tbd")
              }
            >
              {d.value}
            </span>
            <span className="font-data text-[11px] uppercase tracking-wide text-muted">
              {d.label}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-5 font-data text-xs italic text-muted">
        Dashes mark figures still awaiting a number. Everything else on this dashboard is drawn
        directly from the resume — nothing estimated.
      </p>
    </section>
  );
}
