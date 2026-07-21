import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="fade-up border-t border-ink px-8 py-16" style={{ animationDelay: "0.45s" }}>
      <div className="mx-auto max-w-sheet">
        <p className="font-display text-6xl font-black uppercase leading-[0.9] text-ink sm:text-7xl">
          Let&rsquo;s talk.
        </p>
        <p className="mt-4 max-w-[52ch] font-serif text-lg italic text-muted">
          Open to executive roles, board conversations, and business partnerships across
          operations, transport, procurement, and business systems.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-ink pt-6 font-data text-sm text-ink">
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            {profile.email}
          </a>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
        </div>
        <p className="mt-14 font-data text-[11px] text-muted">
          Alcaraz Executive Portfolio — built with React, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
