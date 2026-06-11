import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { HeroSlide } from "../data/siteContent";
import { cn } from "../lib/utils";

type HeroCarouselProps = {
  slides: HeroSlide[];
};

const rotationDelay = 5200;

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedSlides, setFailedSlides] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isPaused || prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, rotationDelay);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const activeSlide = slides[activeIndex];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-charcoal/10 bg-charcoal shadow-soft">
        <div className="relative h-[430px] sm:h-[560px] lg:h-[660px]">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={cn(
                "absolute inset-0 rounded-none transition duration-700 ease-out",
                index === activeIndex
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              )}
            >
              {!failedSlides[slide.title] ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover object-center transition duration-[1400ms] ease-out",
                    index === activeIndex && "scale-[1.035]"
                  )}
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={() =>
                    setFailedSlides((current) => ({
                      ...current,
                      [slide.title]: true,
                    }))
                  }
                />
              ) : (
                <div className="absolute inset-0 flex items-end bg-[linear-gradient(135deg,#efe2d0,#6f503b)] p-8 text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                  {slide.title}
                </div>
              )}
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/18 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9">
            <div className="max-w-xl text-white">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-bone">
                {activeSlide.location} showroom story
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-none sm:text-5xl">
                {activeSlide.title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/76 sm:text-base">
                {activeSlide.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-4 top-4 flex gap-2 sm:right-6 sm:top-6">
          <button
            type="button"
            onClick={goToPrevious}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur-md transition hover:bg-white/22 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            aria-label="Show previous hero image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur-md transition hover:bg-white/22 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            aria-label="Show next hero image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="absolute bottom-5 right-5 flex items-center gap-2 sm:bottom-7 sm:right-7">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30",
                index === activeIndex
                  ? "w-9 bg-bone"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              )}
              aria-label={`Show ${slide.title}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-[1.5rem] border border-charcoal/10 bg-linen p-4 shadow-card sm:ml-8 sm:max-w-[430px]">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-bronze">
          Editorial selection
        </p>
        <p className="mt-2 text-sm leading-6 text-charcoal/70">
          Seasonal room edits are composed like magazine spreads, pairing
          furniture, art, lighting, and texture into one complete atmosphere.
        </p>
      </div>
    </div>
  );
}
