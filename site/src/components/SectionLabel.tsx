export default function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-ink pb-3">
      <span className="font-data text-xs text-accent">{index}</span>
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink">
        {children}
      </h2>
    </div>
  );
}
