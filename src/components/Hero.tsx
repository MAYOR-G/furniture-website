import { assuranceItems, brand, heroSlides, heroStats } from "../data/siteContent";
import { ButtonLink } from "./ButtonLink";
import { HeroCarousel } from "./HeroCarousel";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-12 lg:px-8 lg:pb-32 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="animate-rise">
          <p className="mb-5 inline-flex rounded-full border border-bronze/25 bg-white/55 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-bronze shadow-insetGlow">
            London studio, New York edit, Chicago delivery
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.9] text-charcoal sm:text-6xl lg:text-7xl">
            Furniture with the quiet confidence of a private showroom.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-charcoal/70">
            {brand.name} helps homeowners, designers, and hospitality teams create
            warm modern interiors with tailored furniture, custom sizing, and
            white-glove installation support.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#consultation">Book a showroom visit</ButtonLink>
            <ButtonLink href="#collections" variant="secondary">
              Explore collections
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-charcoal/10 bg-white/45 p-4 shadow-insetGlow"
              >
                <p className="font-display text-4xl font-semibold leading-none text-charcoal">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-charcoal/58">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-rise lg:pl-6" style={{ animationDelay: "120ms" }}>
          <HeroCarousel slides={heroSlides} />

          <div className="mt-12 flex flex-wrap gap-3 sm:mt-10">
            {assuranceItems.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/60 px-4 py-2 text-xs font-bold text-charcoal/68 shadow-insetGlow"
                >
                  <Icon className="h-4 w-4 text-bronze" />
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
