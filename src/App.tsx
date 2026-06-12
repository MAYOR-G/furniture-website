import { CollectionCard } from "./components/CollectionCard";
import { ConsultationCTA } from "./components/ConsultationCTA";
import { FeatureCard } from "./components/FeatureCard";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
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

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-linen text-charcoal">
      <Navbar />
      <main>
        <Hero />

        <section id="collections" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                <SectionHeader
                  eyebrow="Featured collections"
                  title="Room-by-room pieces with a showroom eye."
                  description="Explore complete room stories built around scale, texture, comfort, and the quiet details that make a home feel collected."
                />
                <p className="max-w-xl text-base leading-8 text-charcoal/60 lg:justify-self-end">
                  From tailored upholstery to solid wood dining and outdoor living,
                  each collection balances polished design with pieces made for
                  everyday use.
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

        <section id="products" className="bg-ivory px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Product showcase"
                title="Selected pieces for considered rooms."
                description="A focused edit of sofas, dining pieces, beds, storage, and accent tables with transparent dollar pricing and refined material notes."
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

        <section id="why" className="px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <Reveal>
              <SectionHeader
                eyebrow="Why choose us"
                title="A calmer way to furnish homes, rentals, and hospitality spaces."
                description="Our showroom team pairs design fluency with practical project support, so the finished room feels beautiful, livable, and properly resolved."
              />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 80}>
                  <FeatureCard feature={feature} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="showroom" className="bg-charcoal px-5 py-20 text-ivory lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Interior inspiration"
                title="Showroom stories that help clients imagine the finished room."
                description="Editorial room settings bring together furniture, lighting, palette, and proportion so every client can see how individual pieces become a home."
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
