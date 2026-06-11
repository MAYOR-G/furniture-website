import { CheckCircle2 } from "lucide-react";
import { assuranceItems, brand, heroStats } from "../data/siteContent";
import { ButtonLink } from "./ButtonLink";
import { ImageFrame } from "./ImageFrame";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-12 lg:px-8 lg:pb-28 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="animate-rise">
          <p className="mb-5 inline-flex rounded-full border border-bronze/25 bg-white/55 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-bronze shadow-insetGlow">
            New season showroom now open in Lagos
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.92] text-charcoal sm:text-6xl lg:text-7xl">
            Calm, crafted furniture for homes with presence.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-charcoal/70">
            {brand.name} helps homeowners, designers, and hospitality teams create
            warm modern interiors with curated furniture, custom sizing, and
            installation support.
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
                className="border-l border-bronze/30 pl-4"
              >
                <p className="font-display text-4xl font-semibold text-charcoal">
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
          <div className="grid grid-cols-12 gap-4">
            <ImageFrame
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=85"
              alt="Premium neutral living room"
              className="col-span-12 h-[360px] rounded-[2rem] shadow-soft sm:h-[460px] lg:col-span-8"
              imageClassName="transition duration-700 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-md">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/70">
                  Signature room set
                </p>
                <p className="mt-1 font-display text-2xl font-semibold">
                  Ivory lounge with walnut accents
                </p>
              </div>
            </ImageFrame>
            <div className="col-span-12 grid gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              <ImageFrame
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
                alt="Dining room furniture"
                className="h-52 rounded-[1.5rem] shadow-card"
                imageClassName="transition duration-700 hover:scale-105"
              />
              <div className="rounded-[1.5rem] bg-charcoal-depth p-6 text-ivory shadow-card">
                <CheckCircle2 className="h-7 w-7 text-bone" />
                <p className="mt-5 font-display text-3xl font-semibold leading-none">
                  Custom orders without the guesswork.
                </p>
                <p className="mt-4 text-sm leading-7 text-ivory/72">
                  Fabric, finish, sizing, delivery, and placement support handled
                  by one showroom team.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
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
