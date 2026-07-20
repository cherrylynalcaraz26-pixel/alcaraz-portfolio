import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="border-t-2 border-ink bg-accent px-8 py-16 text-[#110F0C]">
      <div className="mx-auto max-w-sheet">
        <p className="font-display text-6xl font-black uppercase leading-[0.9] sm:text-7xl">
          Let&rsquo;s
          <br />
          talk.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-data text-sm font-medium">
          <a href={`mailto:${profile.email}`} className="hover:underline">
            {profile.email}
          </a>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
        </div>
        <p className="mt-14 font-data text-[11px] opacity-70">
          Alcaraz Executive Portfolio — built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
