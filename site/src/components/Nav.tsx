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
    <header className="glass sticky top-0 z-10 border-b border-x-0 border-t-0">
      <div className="mx-auto flex max-w-sheet items-center justify-between px-8 py-3.5">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight text-ink">
          Cherrylyn <span className="gradient-accent bg-clip-text text-transparent">Alcaraz</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-[13px] font-medium text-muted transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
