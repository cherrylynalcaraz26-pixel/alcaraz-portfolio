import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-rule px-8 py-16">
      <div className="mx-auto max-w-sheet">
        <div className="gradient-accent rounded-2xl p-8 text-white sm:p-12">
          <p className="font-display text-4xl font-extrabold sm:text-5xl">Let&rsquo;s talk.</p>
          <p className="mt-3 max-w-[50ch] text-white/85">
            Open to executive roles, board conversations, and business partnerships across
            operations, transport, procurement, and business systems.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 font-sans text-sm font-medium">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:underline">
              <Mail size={15} /> {profile.email}
            </a>
            <span className="flex items-center gap-2">
              <Phone size={15} /> {profile.phone}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={15} /> {profile.location}
            </span>
          </div>
        </div>
        <p className="mt-8 font-data text-[11px] text-muted">
          Alcaraz Executive Portfolio — built with React, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
