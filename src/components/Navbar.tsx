import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand, navLinks } from "../data/siteContent";
import { cn } from "../lib/utils";
import { ButtonLink } from "./ButtonLink";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-linen/78 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={brand.name}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-charcoal font-display text-lg font-bold text-ivory shadow-soft">
            OI
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-semibold tracking-wide text-charcoal">
              {brand.name}
            </span>
            <span className="mt-1 hidden text-[11px] font-bold uppercase tracking-[0.28em] text-walnut/70 sm:block">
              Premium showroom
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-charcoal/68 transition hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink href="#consultation" className="min-h-11 px-5">
            Book a Consultation
          </ButtonLink>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/15 bg-white/60 text-charcoal transition hover:bg-white lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-charcoal/10 bg-linen/95 transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div className="space-y-2 px-5 pb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-full px-4 py-3 text-sm font-bold text-charcoal/72 transition hover:bg-white/70 hover:text-charcoal"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href="#consultation" className="mt-2 w-full">
              Book a Consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
