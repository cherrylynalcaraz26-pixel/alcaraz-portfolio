import { dashboard } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Dashboard() {
  return (
    <section id="dashboard" className="mx-auto max-w-sheet border-b border-rule px-8 py-14">
      <SectionLabel>Executive Dashboard</SectionLabel>
      <div className="grid grid-cols-2 gap-px border border-rule bg-rule sm:grid-cols-4">
        {dashboard.map((d) => (
          <div key={d.label} className="flex min-h-[108px] flex-col justify-between bg-paper p-5">
            <span
              className={
                "font-data text-2xl tabular-nums " +
                (d.confirmed ? "font-semibold text-accent" : "italic text-tbd")
              }
            >
              {d.value}
            </span>
            <span className="text-[11.5px] text-muted">{d.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 font-display text-[12.5px] italic text-muted">
        Dashes mark figures still awaiting a number. Everything else on this dashboard is drawn
        directly from the resume — nothing estimated.
      </p>
    </section>
  );
}
