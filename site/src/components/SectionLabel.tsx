export default function SectionLabel({
  index,
  children,
}: {
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      {index && (
        <span className="font-data text-xs tabular-nums text-accent">{index}</span>
      )}
      <span className="bg-ink px-3 py-1.5 font-display text-sm font-bold uppercase tracking-wide text-paper">
        {children}
      </span>
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}
