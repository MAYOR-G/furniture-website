import { Facebook, Instagram, Linkedin } from "lucide-react";
import { brand, navLinks, openingHours } from "../data/siteContent";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-charcoal/10 bg-charcoal px-5 py-14 text-ivory lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-ivory font-display text-lg font-bold text-charcoal">
              OI
            </span>
            <span className="font-display text-2xl font-semibold">
              {brand.name}
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/66">
            {brand.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#top"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-ivory/72 transition hover:bg-white/10 hover:text-ivory"
                aria-label="Social profile"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.22em] text-bone">
            Quick links
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ivory/66 transition hover:text-ivory">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.22em] text-bone">
            Visit
          </h3>
          <address className="mt-5 not-italic text-sm leading-7 text-ivory/66">
            {brand.address}
            <br />
            {brand.phone}
            <br />
            {brand.email}
          </address>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.22em] text-bone">
            Opening hours
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ivory/66">
            {openingHours.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ivory/48 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 {brand.name}. All rights reserved.</p>
        <p>Private showroom appointments available by request.</p>
      </div>
    </footer>
  );
}
