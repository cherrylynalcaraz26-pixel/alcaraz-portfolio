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

function BusinessCard({ b, index }: { b: BusinessEntity; index: number }) {
  const isCdsc = b.name.includes("CDSC");
  return (
    <article className="relative border-2 border-ink bg-paper p-6 pt-9">
      <span className="absolute left-0 top-0 bg-ink px-2.5 py-1 font-data text-xs font-bold text-paper">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className={
          "absolute right-5 top-4 -rotate-3 whitespace-nowrap border-2 px-2.5 py-1 font-data text-[10px] font-bold uppercase tracking-[0.08em] " +
          (isCdsc ? "border-cdsc text-cdsc" : "border-accent text-accent")
        }
      >
        {relationshipLabel[b.relationship]}
      </span>

      <div className="flex items-center gap-4">
        {b.logo ? (
          <img
            src={b.logo}
            alt={`${b.name} logo`}
            className="h-12 w-12 shrink-0 border border-rule bg-white object-contain p-1"
          />
        ) : (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-ink font-display text-base font-bold text-ink">
            {initials(b.name)}
          </span>
        )}
        <div>
          <h3 className="font-display text-xl font-bold leading-tight text-ink">{b.name}</h3>
          <p className="font-data text-[11px] uppercase tracking-[0.05em] text-muted">
            {b.industry}
          </p>
        </div>
      </div>

      <p className="mt-4 text-[13.5px] leading-relaxed text-ink">{b.description}</p>
      <p className="mt-4 border-t border-rule pt-3 font-data text-[11px] text-muted">
        {b.role} · Since {b.since}
      </p>
    </article>
  );
}

export default function BusinessPortfolio() {
  return (
    <section id="businesses" className="mx-auto max-w-sheet border-t-2 border-ink px-8 py-16">
      <SectionLabel>Business Portfolio</SectionLabel>
      <div className="grid gap-6 sm:grid-cols-2">
        {businesses.map((b, i) => (
          <BusinessCard key={b.name} b={b} index={i} />
        ))}
      </div>
    </section>
  );
}
