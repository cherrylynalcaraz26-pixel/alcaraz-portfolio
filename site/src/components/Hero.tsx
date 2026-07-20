import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-sheet border-b border-rule px-8 pb-20 pt-16 sm:pt-24">
      <p className="mb-7 font-data text-[11px] uppercase tracking-[0.16em] text-accent">
        Executive Portfolio
      </p>
      <h1 className="text-balance font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-3.5 font-display text-xl italic text-accent-soft">{profile.title}</p>
      <p className="mt-4 font-data text-xs uppercase tracking-[0.08em] text-muted">
        {profile.positioning}
      </p>
      <p className="mt-8 max-w-[52ch] text-[17px] leading-relaxed text-ink">{profile.tagline}</p>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-6 font-data text-[12.5px] text-muted">
        <span>{profile.location}</span>
        <span>{profile.phone}</span>
        <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
          {profile.email}
        </a>
        <span className="italic text-tbd">
          {profile.linkedin ?? "linkedin.com/in/— pending"}
        </span>
      </div>
    </section>
  );
}
