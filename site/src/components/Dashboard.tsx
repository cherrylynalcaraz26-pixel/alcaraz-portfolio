import { LayoutDashboard } from "lucide-react";
import { dashboard } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Dashboard() {
  return (
    <section id="dashboard" className="mx-auto max-w-sheet px-8 py-16">
      <SectionLabel icon={LayoutDashboard}>Executive Dashboard</SectionLabel>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {dashboard.map((d) => (
          <div
            key={d.label}
            className="rounded-2xl border border-rule bg-paper-raised p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
          >
            <span
              className={
                "font-display text-3xl font-extrabold tabular-nums leading-none sm:text-4xl " +
                (d.confirmed ? "text-primary" : "italic text-tbd")
              }
            >
              {d.value}
            </span>
            <p className="mt-3 font-sans text-[12px] font-medium text-muted">{d.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 font-sans text-xs italic text-muted">
        Dashes mark figures still awaiting a number. Everything else on this dashboard is drawn
        directly from the resume — nothing estimated.
      </p>
    </section>
  );
}
