import type { LucideIcon } from "lucide-react";

export default function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="gradient-accent flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-sm">
        <Icon size={17} strokeWidth={2.25} />
      </span>
      <h2 className="font-display text-lg font-bold tracking-tight text-ink">{children}</h2>
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}
