import { businesses, type BusinessEntity } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

const relationshipLabel: Record<BusinessEntity["relationship"], string> = {
  owned: "Owner",
  managed: "Manager",
  client: "Client",
  consulting: "Consultant",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function BusinessCard({ b }: { b: BusinessEntity }) {
  const isCdsc = b.name.includes("CDSC");
  return (
    <article className="border border-rule bg-paper-raised p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3.5">
          {b.logo ? (
            <img
              src={b.logo}
              alt={`${b.name} logo`}
              className="h-10 w-10 shrink-0 rounded object-contain bg-white/60 p-1"
            />
          ) : (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-rule font-display text-sm italic text-accent-soft">
              {initials(b.name)}
            </span>
          )}
          <div>
            <h3 className="font-display text-lg leading-snug">{b.name}</h3>
            <p className="font-data text-[11px] uppercase tracking-[0.06em] text-muted">
              {b.industry}
            </p>
          </div>
        </div>
        <span
          className={
            "shrink-0 whitespace-nowrap font-data text-[10.5px] uppercase tracking-[0.08em] px-2 py-1 border " +
            (isCdsc
              ? "border-cdsc/40 text-cdsc"
              : "border-accent/30 text-accent-soft")
          }
        >
          {relationshipLabel[b.relationship]}
        </span>
      </div>
      <p className="mt-4 text-[13.5px] leading-relaxed text-ink">{b.description}</p>
      <p className="mt-4 font-data text-[11px] text-muted">
        {b.role} · Since {b.since}
      </p>
    </article>
  );
}

export default function BusinessPortfolio() {
  return (
    <section id="businesses" className="mx-auto max-w-sheet border-b border-rule px-8 py-14">
      <SectionLabel>Business Portfolio</SectionLabel>
      <div className="grid gap-5 sm:grid-cols-2">
        {businesses.map((b) => (
          <BusinessCard key={b.name} b={b} />
        ))}
      </div>
    </section>
  );
}
