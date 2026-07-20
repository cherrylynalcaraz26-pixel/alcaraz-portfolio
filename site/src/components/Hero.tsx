import { Sparkles, Building2, Rocket, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

const positioningTags = profile.positioning.split(" · ");

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-rule">
      <div
        aria-hidden="true"
        className="blob-drift pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(var(--color-primary)), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="blob-drift-reverse pointer-events-none absolute -bottom-32 left-[-10%] h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(var(--color-accent)), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-sheet gap-10 px-8 pb-16 pt-16 sm:grid-cols-[1fr_260px] sm:items-center sm:gap-8 sm:pb-24 sm:pt-24">
        <div>
          <div
            className="fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-rule bg-paper-raised px-3.5 py-1.5"
            style={{ animationDelay: "0s", animationDuration: "0.7s" }}
          >
            <Sparkles size={13} className="text-accent" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wide text-muted">
              Executive Portfolio
            </span>
          </div>

          <h1
            className="fade-up text-balance font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl"
            style={{ animationDelay: "0.12s" }}
          >
            Cherrylyn Alcaraz
          </h1>
          <p
            className="fade-up mt-4 font-display text-xl font-bold text-primary sm:text-2xl"
            style={{ animationDelay: "0.24s" }}
          >
            {profile.title}
          </p>

          <div
            className="fade-up mt-6 flex flex-wrap gap-2"
            style={{ animationDelay: "0.36s" }}
          >
            {positioningTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-rule bg-paper-raised px-3 py-1 font-sans text-[12.5px] font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            className="fade-up mt-7 max-w-[56ch] text-lg leading-relaxed text-ink/90"
            style={{ animationDelay: "0.48s" }}
          >
            {profile.tagline}
          </p>

          <div className="fade-up mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.6s" }}>
            <a
              href="/resume.txt"
              download
              className="gradient-accent-animated rounded-lg px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
            >
              Download Executive Resume
            </a>
            <a
              href="#businesses"
              className="flex items-center gap-1.5 rounded-lg border border-rule px-5 py-2.5 font-sans text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <Building2 size={15} /> View Businesses
            </a>
            <a
              href="#projects"
              className="flex items-center gap-1.5 rounded-lg border border-rule px-5 py-2.5 font-sans text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <Rocket size={15} /> Explore Projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 rounded-lg border border-rule px-5 py-2.5 font-sans text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <Mail size={15} /> Contact Me
            </a>
          </div>

          <div
            className="fade-up mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-rule pt-6 font-data text-[12.5px] text-muted"
            style={{ animationDelay: "0.72s" }}
          >
            <span>{profile.location}</span>
            <span>{profile.phone}</span>
            <a href={`mailto:${profile.email}`} className="hover:text-primary">
              {profile.email}
            </a>
            <span className="italic text-tbd">
              {profile.linkedin ?? "linkedin.com/in/— pending"}
            </span>
          </div>
        </div>

        <div
          className="fade-up flex justify-center sm:justify-end"
          style={{ animationDelay: "0.3s", animationDuration: "1.1s" }}
        >
          <div className="ring-pulse relative h-52 w-52 shrink-0 overflow-hidden rounded-3xl border-4 border-paper shadow-lg sm:h-64 sm:w-64">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="gradient-accent flex h-full w-full items-center justify-center">
                <span className="font-display text-6xl font-extrabold text-white/90">CA</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
