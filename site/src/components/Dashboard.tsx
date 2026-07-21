import { dashboard } from "../data/portfolio";
import SectionLabel from "./SectionLabel";
import { useCountUp } from "../hooks/useCountUp";

function StatTile({
  value,
  label,
  confirmed,
}: {
  value: string;
  label: string;
  confirmed: boolean;
}) {
  const display = useCountUp(value);
  return (
    <div className="p-5 sm:p-6">
      <span
        className={
          "font-display text-4xl font-black tabular-nums leading-none sm:text-5xl " +
          (confirmed ? "text-ink" : "italic text-tbd")
        }
      >
        {display}
      </span>
      <p className="mt-3 font-data text-[11px] uppercase tracking-[0.06em] text-muted">{label}</p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="fade-up mx-auto max-w-sheet px-8 py-16"
      style={{ animationDelay: "0.05s" }}
    >
      <SectionLabel index="01">Executive Dashboard</SectionLabel>
      <div className="grid grid-cols-2 gap-px border border-ink bg-ink sm:grid-cols-4">
        {dashboard.map((d) => (
          <div key={d.label} className="bg-paper">
            <StatTile value={d.value} label={d.label} confirmed={d.confirmed} />
          </div>
        ))}
      </div>
      <p className="mt-5 font-serif text-sm italic text-muted">
        Dashes mark figures still awaiting a number. Everything else on this dashboard is drawn
        directly from the resume — nothing estimated.
      </p>
    </section>
  );
}
