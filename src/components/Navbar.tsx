import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navLinks } from "../data/siteContent";
import { cn } from "../lib/utils";
import { ButtonLink } from "./ButtonLink";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-charcoal/92 py-0 shadow-card backdrop-blur-xl"
          : "border-b border-white/10 bg-transparent py-2"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={brand.name}>
          <span
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full font-display text-lg font-bold shadow-soft transition",
              scrolled ? "border border-white/35 bg-white/10 text-white" : "border border-white/35 bg-white/10 text-white"
            )}
          >
            OI
          </span>
          <span className="leading-none">
            <span
              className={cn(
                "block font-display text-xl font-semibold tracking-wide transition",
                "text-white"
              )}
            >
              {brand.name}
            </span>
            <span
              className={cn(
                "mt-1 hidden text-[11px] font-bold uppercase tracking-[0.28em] transition sm:block",
                "text-white"
              )}
            >
              Premium showroom
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-bold transition",
                "text-white hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink href="#consultation" variant="light" className="min-h-11 px-5">
            Book a Consultation
          </ButtonLink>
        </div>

        <button
          type="button"
          className={cn(
            "grid h-11 w-11 place-items-center rounded-full border transition lg:hidden",
            scrolled
              ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
              : "border-white/20 bg-white/10 text-white hover:bg-white/15"
          )}
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
