import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="route-grid relative overflow-hidden border-b-2 border-ink bg-paper-raised"
    >
      <div className="mx-auto max-w-sheet px-8 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-3 w-3 shrink-0 bg-accent" />
          <p className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Executive Portfolio
          </p>
        </div>

        <h1 className="text-balance font-display text-[13vw] font-black uppercase leading-[0.85] tracking-tight text-ink sm:text-8xl md:text-9xl">
          Cherrylyn
          <br />
          Alcaraz
        </h1>

        <div className="mt-8 flex flex-col gap-1 border-l-4 border-accent pl-5 sm:mt-10">
          <p className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
            President &amp; General Manager
          </p>
          <p className="font-data text-sm text-accent">CHEM Tourist and Transport Services OPC</p>
        </div>

        <p className="mt-8 font-data text-xs uppercase tracking-[0.08em] text-muted sm:text-sm">
          {profile.positioning}
        </p>

        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink">{profile.tagline}</p>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t-2 border-ink pt-6 font-data text-[13px] text-ink">
          <span>{profile.location}</span>
          <span>{profile.phone}</span>
          <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
            {profile.email}
          </a>
          <span className="italic text-tbd">{profile.linkedin ?? "linkedin.com/in/— pending"}</span>
        </div>
      </div>
    </section>
  );
}
