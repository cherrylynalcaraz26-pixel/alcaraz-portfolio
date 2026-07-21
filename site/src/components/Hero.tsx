import { profile } from "../data/portfolio";

const positioningTags = profile.positioning.split(" · ");

export default function Hero() {
  return (
    <section id="top" className="border-b border-ink">
      <div className="mx-auto grid max-w-sheet gap-10 px-8 pb-16 pt-14 sm:grid-cols-[1fr_260px] sm:gap-8 sm:pb-20 sm:pt-20">
        <div>
          <p
            className="fade-up font-data text-xs uppercase tracking-[0.2em] text-muted"
            style={{ animationDelay: "0s" }}
          >
            Executive Portfolio — No. 01
          </p>

          <h1
            className="fade-up mt-5 text-balance font-display text-6xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-7xl"
            style={{ animationDelay: "0.08s" }}
          >
            Cherrylyn
            <br />
            Alcaraz
          </h1>

          <div
            className="draw-line fade-up mt-6 h-px w-full bg-accent"
            style={{ animationDelay: "0.35s" }}
          />

          <p
            className="fade-up mt-6 font-serif text-xl italic text-ink"
            style={{ animationDelay: "0.42s" }}
          >
            {profile.title}
          </p>

          <p
            className="fade-up mt-4 font-data text-[11px] uppercase tracking-[0.08em] text-muted"
            style={{ animationDelay: "0.5s" }}
          >
            {positioningTags.join("  /  ")}
          </p>

          <p
            className="fade-up mt-7 max-w-[58ch] font-serif text-lg leading-relaxed text-ink"
            style={{ animationDelay: "0.58s" }}
          >
            {profile.tagline}
          </p>

          <div className="fade-up mt-9 flex flex-wrap items-center gap-x-7 gap-y-3" style={{ animationDelay: "0.66s" }}>
            <a
              href="/resume.txt"
              download
              className="border border-ink bg-ink px-5 py-2.5 font-data text-xs font-semibold uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-80"
            >
              Download Résumé
            </a>
            <a
              href="#businesses"
              className="font-data text-xs uppercase tracking-[0.08em] text-ink underline decoration-rule underline-offset-4 hover:decoration-accent"
            >
              View Businesses
            </a>
            <a
              href="#projects"
              className="font-data text-xs uppercase tracking-[0.08em] text-ink underline decoration-rule underline-offset-4 hover:decoration-accent"
            >
              Explore Projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="font-data text-xs uppercase tracking-[0.08em] text-ink underline decoration-rule underline-offset-4 hover:decoration-accent"
            >
              Contact
            </a>
          </div>

          <div
            className="fade-up mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-rule pt-6 font-data text-[12px] text-muted"
            style={{ animationDelay: "0.74s" }}
          >
            <span>{profile.location}</span>
            <span>{profile.phone}</span>
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              {profile.email}
            </a>
            <span className="italic text-tbd">
              {profile.linkedin ?? "linkedin.com/in/— pending"}
            </span>
          </div>
        </div>

        <div
          className="fade-up flex justify-center sm:justify-end"
          style={{ animationDelay: "0.2s", animationDuration: "0.8s" }}
        >
          <div className="relative h-52 w-52 shrink-0 border border-ink sm:h-64 sm:w-64">
            <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-accent" />
            <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-accent" />
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-paper-raised">
                <span className="font-display text-6xl font-black text-ink">CA</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
