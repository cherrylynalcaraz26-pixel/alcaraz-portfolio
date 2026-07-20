import { Building2 } from "lucide-react";
import { businesses, type BusinessEntity } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

const relationshipLabel: Record<BusinessEntity["relationship"], string> = {
  owned: "Owner",
  managed: "Manager",
  client: "Client",
  consulting: "Consultant",
};

const relationshipStyle: Record<BusinessEntity["relationship"], string> = {
  owned: "bg-primary/10 text-primary",
  managed: "bg-secondary/10 text-secondary",
  client: "bg-accent/15 text-accent",
  consulting: "bg-cdsc/10 text-cdsc",
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
  return (
    <article className="overflow-hidden rounded-2xl border border-rule bg-paper-raised shadow-sm">
      <div className="gradient-accent h-1.5 w-full" />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {b.logo ? (
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                className="h-11 w-11 shrink-0 rounded-xl border border-rule bg-white object-contain p-1"
              />
            ) : (
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper font-display text-sm font-bold text-primary">
                {initials(b.name)}
              </span>
            )}
            <div>
              <h3 className="font-display text-lg font-bold leading-tight text-ink">{b.name}</h3>
              <p className="font-sans text-[11.5px] font-medium uppercase tracking-wide text-muted">
                {b.industry}
              </p>
            </div>
          </div>
          <span
            className={
              "shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 font-sans text-[10.5px] font-bold uppercase tracking-wide " +
              relationshipStyle[b.relationship]
            }
          >
            {relationshipLabel[b.relationship]}
          </span>
        </div>

        <p className="mt-4 text-[13.5px] leading-relaxed text-ink/90">{b.description}</p>
        <p className="mt-4 border-t border-rule pt-3 font-data text-[11px] text-muted">
          {b.role} · Since {b.since}
        </p>
      </div>
    </article>
  );
}

export default function BusinessPortfolio() {
  return (
    <section id="businesses" className="mx-auto max-w-sheet px-8 py-16">
      <SectionLabel icon={Building2}>Business Portfolio</SectionLabel>
      <div className="grid gap-5 sm:grid-cols-2">
        {businesses.map((b) => (
          <BusinessCard key={b.name} b={b} />
        ))}
      </div>
    </section>
  );
}
