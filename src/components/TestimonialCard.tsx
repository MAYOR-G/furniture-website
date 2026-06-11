import type { Testimonial } from "../data/siteContent";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="rounded-[1.5rem] border border-charcoal/10 bg-white/55 p-6 shadow-insetGlow">
      <blockquote className="font-display text-2xl font-semibold leading-snug text-charcoal">
        "{testimonial.quote}"
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-charcoal text-sm font-extrabold text-ivory">
          {testimonial.initials}
        </span>
        <span>
          <span className="block font-extrabold text-charcoal">
            {testimonial.name}
          </span>
          <span className="mt-1 block text-sm text-charcoal/58">
            {testimonial.title}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
