import { brand } from "../data/siteContent";
import { ButtonLink } from "./ButtonLink";
import { ImageFrame } from "./ImageFrame";

export function ConsultationCTA() {
  return (
    <section id="consultation" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-charcoal-depth shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <ImageFrame
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"
            alt="Furniture consultation setting"
            className="min-h-[340px] rounded-none"
            imageClassName="opacity-90"
          />
          <div className="p-8 text-ivory sm:p-12 lg:p-16">
            <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-bone">
              Custom orders and consultation
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-none sm:text-5xl">
              Bring measurements, inspiration, and a room that needs direction.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/72">
              We will help translate your preferred mood into furniture sizes,
              fabrics, finishes, delivery timelines, and a clear quotation.
              Replace this CTA with WhatsApp, Calendly, or your preferred booking
              link for a real client.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`tel:${brand.phone.replace(/\s/g, "")}`} variant="light">
                Call {brand.phone}
              </ButtonLink>
              <ButtonLink href={`mailto:${brand.email}`} variant="light">
                Email showroom team
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
