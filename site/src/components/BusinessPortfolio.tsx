import { businesses, type BusinessEntity } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

const relationshipLabel: Record<BusinessEntity["relationship"], string> = {
  owned: "OWNER",
  managed: "MANAGER",
  client: "CLIENT",
  consulting: "CONSULTANT",
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
    <article className="border border-ink p-6">
      <div className="flex items-start justify-between gap-4 border-b border-rule pb-4">
        <div className="flex items-center gap-3.5">
          {b.logo ? (
            <img
              src={b.logo}
              alt={`${b.name} logo`}
              className="h-10 w-10 shrink-0 border border-rule bg-white object-contain p-1"
            />
          ) : (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink font-display text-sm font-bold text-ink">
              {initials(b.name)}
            </span>
          )}
          <div>
            <p className="font-data text-[10.5px] text-accent">
              0{index + 1} — [{relationshipLabel[b.relationship]}]
            </p>
            <h3 className="font-display text-lg font-bold leading-tight text-ink">{b.name}</h3>
          </div>
        </div>
        {isCdsc && <span className="shrink-0 font-data text-[10px] text-cdsc">CDSC</span>}
      </div>

      <p className="mt-4 font-data text-[11px] uppercase tracking-[0.05em] text-muted">
        {b.industry}
      </p>
      <p className="mt-3 font-serif text-[14px] leading-relaxed text-ink">{b.description}</p>
      <p className="mt-4 font-data text-[11px] text-muted">
        {b.role} · Since {b.since}
      </p>
    </article>
  );
}

export default function BusinessPortfolio() {
  return (
    <section
      id="businesses"
      className="fade-up mx-auto max-w-sheet px-8 py-16"
      style={{ animationDelay: "0.25s" }}
    >
      <SectionLabel index="05">Business Portfolio</SectionLabel>
      <div className="grid gap-5 sm:grid-cols-2">
        {businesses.map((b, i) => (
          <BusinessCard key={b.name} b={b} index={i} />
        ))}
      </div>
    </section>
  );
}
