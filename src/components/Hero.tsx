import { useEffect, useState } from "react";
import { assuranceItems, brand, heroSlides, heroStats } from "../data/siteContent";
import { ButtonLink } from "./ButtonLink";
import { cn } from "../lib/utils";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[720px] overflow-hidden bg-charcoal px-5 pb-6 pt-28 text-white lg:px-8 lg:pt-32">
      {heroSlides.map((slide, index) => (
        <img
          key={slide.title}
          src={slide.image}
          alt={slide.title}
          className={cn(
            "absolute inset-0 h-full w-full object-cover opacity-0 transition duration-[1400ms]",
            index === activeIndex && "opacity-100 animate-heroDrift"
          )}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,22,17,0.74)_0%,rgba(28,22,17,0.45)_42%,rgba(28,22,17,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(28,22,17,0.72),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(0,0,0,0.20),transparent_34%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between">
        <div className="max-w-5xl animate-rise">
          <p className="mb-5 inline-flex rounded-full border border-white/35 bg-white/12 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-white shadow-insetGlow backdrop-blur-md">
            Bespoke furniture studio
          </p>
          <h1 className="max-w-5xl text-balance font-display text-6xl font-semibold uppercase leading-[0.82] tracking-normal text-white drop-shadow-[0_5px_28px_rgba(0,0,0,0.32)] sm:text-7xl lg:text-8xl xl:text-[7.25rem]">
            Furniture That Makes A Room Feel Complete.
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.36)]">
            {brand.name} designs calm, intentional rooms with custom pieces,
            handpicked materials, and white-glove placement for homes that need
            more than furniture.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#consultation" variant="light">
              Book Consultation
            </ButtonLink>
            <ButtonLink href="#collections" variant="light">
              View Collection
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-charcoal/36 p-5 backdrop-blur-md">
                <p className="font-display text-4xl font-semibold leading-none text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 lg:max-w-xl lg:justify-end">
            {assuranceItems.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/12 px-4 py-2 text-xs font-bold text-white backdrop-blur-md"
                >
                  <Icon className="h-4 w-4 text-white" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
