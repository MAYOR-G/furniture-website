import { CollectionCard } from "./components/CollectionCard";
import { ConsultationCTA } from "./components/ConsultationCTA";
import { FeatureCard } from "./components/FeatureCard";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
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
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <SectionHeader
                eyebrow="Featured collections"
                title="Room-by-room pieces with a showroom eye."
                description="Use these categories as starter pathways for clients. Every card can be swapped with a client's actual inventory, product photography, or service category."
              />
              <p className="max-w-xl text-base leading-8 text-charcoal/60 lg:justify-self-end">
                The layout is designed for furniture brands that sell both
                ready-made pieces and custom projects, with enough visual weight
                to feel premium before real client imagery is added.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {collections.map((collection) => (
                <CollectionCard key={collection.title} collection={collection} />
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="bg-ivory px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Product showcase"
              title="Premium cards for best sellers, quote requests, and seasonal edits."
              description="A flexible product grid with badges, material notes, NGN-friendly pricing, and hover states that make the catalogue feel alive."
              align="center"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <SectionHeader
              eyebrow="Why choose us"
              title="A calmer way to furnish homes, rentals, and hospitality spaces."
              description="The template positions the business as consultative, reliable, and premium without sounding stiff. It is sales-focused, but still warm."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        <section id="showroom" className="bg-charcoal px-5 py-20 text-ivory lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Interior inspiration"
              title="Showroom stories that help clients imagine the finished room."
              description="Use these editorial panels for project photography, styled corners, design packages, or room inspiration collections."
              className="[&_h2]:text-ivory [&_p:last-child]:text-ivory/68"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {showroomStories.map((story, index) => (
                <ShowroomCard
                  key={story.title}
                  story={story}
                  featured={index === 0}
                />
              ))}
            </div>
          </div>
        </section>

        <ConsultationCTA />

        <section id="testimonials" className="px-5 pb-24 pt-8 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Client words"
              title="Social proof for homeowners, designers, and project buyers."
              description="The testimonials are realistic and replaceable, with a grid structure that can grow as the client gathers reviews."
              align="center"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
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
