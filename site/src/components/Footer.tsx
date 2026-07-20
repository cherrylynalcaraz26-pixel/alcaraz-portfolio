import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-sheet px-8 py-16">
      <p className="font-display text-2xl italic text-accent-soft">Let's talk.</p>
      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-data text-sm text-ink">
        <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
          {profile.email}
        </a>
        <span>{profile.phone}</span>
        <span>{profile.location}</span>
      </div>
      <p className="mt-12 font-data text-[11px] text-muted">
        Alcaraz Executive Portfolio — built with React &amp; Tailwind CSS
      </p>
    </footer>
  );
}
