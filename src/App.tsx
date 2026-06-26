import { CheckCircle2, Gem, Hammer, Ruler, Truck } from "lucide-react";
import { CollectionCard } from "./components/CollectionCard";
import { ConsultationCTA } from "./components/ConsultationCTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ImageFrame } from "./components/ImageFrame";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { Reveal } from "./components/Reveal";
import { SectionHeader } from "./components/SectionHeader";
import { ShowroomCard } from "./components/ShowroomCard";
import { TestimonialCard } from "./components/TestimonialCard";
import {
  collections,
  features,
  products,
  showroomStories,
  testimonials,
} from "./data/siteContent";

const processSteps = [
  { title: "Measure", text: "We map the room, light, traffic, and exact dimensions.", icon: Ruler },
  { title: "Material", text: "Walnut, oak, linen, boucle, leather, bronze, and stone are edited together.", icon: Gem },
  { title: "Make", text: "Custom sizing and finish notes are handled before production begins.", icon: Hammer },
  { title: "Place", text: "Delivery, assembly, and styling happen with a white-glove close.", icon: Truck },
];

const transformationImages = [
  {
    title: "Before: a room without a focal point",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=84",
  },
  {
    title: "After: proportion, texture, and calm",
    image:
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=84",
  },
];

const furnitureMarquee = [
  "Custom Sofas",
  "Walnut Dining",
  "Bedroom Suites",
  "Interior Styling",
  "Bronze Accents",
  "White-Glove Setup",
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-linen text-charcoal">
      <Navbar />
      <main>
        <Hero />

        <section className="bg-charcoal px-5 py-7 text-ivory lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border-y border-white/10 bg-white/10 md:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-charcoal px-5 py-5">
                  <Icon className="h-5 w-5 text-bone" />
                  <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.22em] text-bone">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ivory/62">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="overflow-hidden border-y border-charcoal/10 bg-bone py-5">
          <div className="marquee-track flex w-max gap-8 px-4">
            {[...furnitureMarquee, ...furnitureMarquee].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="font-display text-4xl uppercase leading-none text-charcoal/78 sm:text-5xl"
              >
                {item}
                <span className="ml-8 text-bronze">*</span>
              </span>
            ))}
          </div>
        </section>

        <section id="about" className="px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <ImageFrame
                  src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=86"
                  alt="Elegant interior with sculptural furniture"
                  className="min-h-[520px] shadow-soft"
                  imageClassName="transition duration-700 hover:scale-105"
                />
                <div className="absolute -bottom-8 right-4 max-w-xs bg-charcoal p-6 text-ivory shadow-soft sm:right-10">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-bone">
                    Studio note
                  </p>
                  <p className="mt-3 font-display text-3xl leading-none">
                    Calm is designed before it is decorated.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeader
                eyebrow="Interior furniture studio"
                title="We design pieces that feel calm, intentional, and made for real homes."
                description="Every room starts with proportion. We balance generous seating, tactile materials, quiet storage, and the small finishing pieces that make a space feel composed instead of filled."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Custom Pieces", "Interior Styling", "Handpicked Materials", "Delivery & Setup"].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-t border-charcoal/12 pt-4 text-sm font-extrabold uppercase tracking-[0.16em] text-walnut">
                    <CheckCircle2 className="h-5 w-5 text-bronze" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="collections" className="bg-ivory px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                <SectionHeader
                  eyebrow="Featured collections"
                  title="Room-by-room pieces with a showroom eye."
                  description="Living rooms, dining rooms, bedrooms, offices, and outdoor spaces are built as complete atmospheres, not isolated products."
                />
                <p className="max-w-xl text-base leading-8 text-charcoal/60 lg:justify-self-end">
                  A subtle category glide keeps the page commercial, while the
                  image-led cards keep it emotional. Every collection is chosen
                  for scale, finish, and how it holds a room together.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {collections.map((collection, index) => (
                <Reveal key={collection.title} delay={index * 65}>
                  <CollectionCard collection={collection} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="transformation" className="bg-charcoal px-5 py-24 text-ivory lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal className="lg:sticky lg:top-28 lg:h-fit">
              <SectionHeader
                eyebrow="Transformation"
                title="Better furniture changes the feeling of the entire room."
                description="The right scale can make a compact room feel generous. The right material can make a new space feel settled."
                className="[&_h2]:text-ivory [&_p:last-child]:text-ivory/68"
              />
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {transformationImages.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <ImageFrame
                    src={item.image}
                    alt={item.title}
                    className={index === 0 ? "min-h-[420px] md:mt-20" : "min-h-[520px]"}
                    imageClassName="transition duration-700 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-transparent to-transparent" />
                    <h3 className="absolute bottom-6 left-6 right-6 font-display text-4xl leading-none text-ivory">
                      {item.title}
                    </h3>
                  </ImageFrame>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <Reveal>
              <SectionHeader
                eyebrow="Materials and process"
                title="Warm woods, quiet textiles, precise finishes, and a clear route to delivery."
                description="Our process is polished but not precious. You get material direction, proper measurements, custom options, and a room that arrives ready to live in."
              />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <Reveal key={step.title} delay={index * 80}>
                    <article className="border border-charcoal/10 bg-white/55 p-6 shadow-insetGlow transition duration-300 hover:-translate-y-1 hover:shadow-card">
                      <div className="flex items-center justify-between gap-5">
                        <span className="font-display text-5xl text-bronze/45">0{index + 1}</span>
                        <StepIcon className="h-6 w-6 text-walnut" />
                      </div>
                      <h3 className="mt-8 font-display text-4xl leading-none text-charcoal">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-charcoal/64">{step.text}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="bg-bone px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Selected pieces"
                title="A focused edit for considered rooms."
                description="Sofas, dining pieces, beds, storage, and accent tables with refined material notes and consultation-led ordering."
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => (
                <Reveal key={product.name} delay={index * 75}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="showroom" className="bg-charcoal px-5 py-24 text-ivory lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Lookbook"
                title="Image-led rooms with a quiet luxury point of view."
                description="Every room setting brings furniture, light, art, palette, and proportion into one complete visual story."
                className="[&_h2]:text-ivory [&_p:last-child]:text-ivory/68"
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {showroomStories.map((story, index) => (
                <Reveal key={story.title} delay={index * 90}>
                  <ShowroomCard story={story} featured={index === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <ConsultationCTA />
        </Reveal>

        <section id="testimonials" className="px-5 pb-24 pt-8 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Client words"
                title="Social proof for homeowners, designers, and project buyers."
                description="Clients come to Oak & Ivory for an experience that feels attentive, transparent, and quietly luxurious from first visit to final placement."
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.name} delay={index * 90}>
                  <TestimonialCard testimonial={testimonial} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
