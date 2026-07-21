import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#dashboard", label: "Dashboard" },
  { href: "#experience", label: "Experience" },
  { href: "#businesses", label: "Businesses" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-ink bg-paper">
      <div className="mx-auto flex max-w-sheet items-center justify-between px-8 py-4">
        <a href="#top" className="font-display text-base font-bold uppercase tracking-tight text-ink">
          Alcaraz
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="font-data text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent"
            >
              <span className="text-accent">0{i + 1}</span> {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
