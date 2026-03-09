import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";
import PageTransition from "@/components/PageTransition";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import storyHero from "@/assets/story-hero.jpg";
import storyHarvest from "@/assets/story-harvest.jpg";
import storyWorkshop from "@/assets/story-workshop.jpg";
import { Leaf, Droplets, Sun } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description:
      "Every ingredient is traced back to its origin — wild-harvested or grown on certified organic farms across the Mediterranean basin.",
  },
  {
    icon: Droplets,
    title: "Small-Batch Crafted",
    description:
      "We produce in micro-batches to ensure freshness and potency. Each product is hand-poured, hand-cut, or hand-blended in our workshop.",
  },
  {
    icon: Sun,
    title: "Zero Compromise",
    description:
      "No synthetic fragrances, no fillers, no shortcuts. Just pure botanical formulas that honour ancient apothecary traditions.",
  },
];

const timeline = [
  { year: "2019", event: "Founded in a small Provençal farmhouse with three core formulas." },
  { year: "2020", event: "Partnered with organic herb cooperatives across the Mediterranean." },
  { year: "2021", event: "Opened our first atelier & workshop in the South of France." },
  { year: "2023", event: "Expanded to 40+ stockists across Europe and North America." },
  { year: "2025", event: "Launched refillable packaging and closed-loop sourcing program." },
];

const Story = () => {
  const valuesRef = useScrollReveal<HTMLDivElement>();
  const timelineRef = useScrollReveal<HTMLDivElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();

  return (
    <PageTransition>
      <div className="relative">
        <NoiseOverlay />
        <Navbar />

        <main>
          {/* Hero */}
          <section className="relative min-h-[70vh] md:min-h-screen flex items-end overflow-hidden">
            <img
              src={storyHero}
              alt="Terra botanical ingredients flatlay"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/40" />
            <div className="relative z-10 px-4 sm:px-6 md:px-10 pb-12 sm:pb-16 md:pb-24 max-w-4xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cream/70 mb-4 block">
                Our Story
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-cream leading-[0.9] mb-6">
                ROOTED IN
                <br />
                THE EARTH
              </h1>
              <p className="font-body text-sm sm:text-base text-cream/80 max-w-lg leading-relaxed">
                Terra was born from a simple belief — that the most powerful
                skincare comes directly from the soil, not a laboratory.
              </p>
            </div>
          </section>

          {/* Origin story */}
          <section className="bg-background py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div className="order-2 md:order-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">
                  The Beginning
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-[0.9] mb-6">
                  FROM SOIL
                  <br />
                  TO SKIN
                </h2>
                <p className="font-body text-sm text-foreground/80 leading-relaxed mb-4">
                  In a sun-bleached farmhouse in Provence, our founder began
                  experimenting with cold-pressed oils and wild-harvested herbs.
                  What started as a personal practice quickly became a calling —
                  to create botanical formulas that honour the land they come
                  from.
                </p>
                <p className="font-body text-sm text-foreground/80 leading-relaxed">
                  Today, every Terra product is still made by hand in our
                  workshop, using the same time-honoured methods. We source
                  directly from small farms and cooperatives across the
                  Mediterranean, ensuring fair wages and regenerative practices
                  at every step.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={storyHarvest}
                  alt="Harvesting fresh herbs at golden hour"
                  className="w-full rounded-[2rem] sm:rounded-[3rem] aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="bg-secondary rounded-[3rem] sm:rounded-6xl py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10">
            <div ref={valuesRef} className="max-w-6xl mx-auto">
              <div className="text-center mb-14 md:mb-20 scroll-reveal">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">
                  What We Stand For
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-[0.9]">
                  OUR VALUES
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {values.map((value) => (
                  <div key={value.title} className="scroll-reveal text-center md:text-left">
                    <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center mx-auto md:mx-0 mb-5">
                      <value.icon size={20} className="text-foreground" />
                    </div>
                    <h3 className="font-display text-lg md:text-xl text-foreground mb-3">
                      {value.title.toUpperCase()}
                    </h3>
                    <p className="font-body text-sm text-foreground/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Workshop image + timeline */}
          <section className="bg-background py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
              <div>
                <img
                  src={storyWorkshop}
                  alt="Artisan workshop crafting botanical products"
                  className="w-full rounded-[2rem] sm:rounded-[3rem] aspect-square object-cover sticky top-24"
                />
              </div>
              <div ref={timelineRef}>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block scroll-reveal">
                  Milestones
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-[0.9] mb-10 scroll-reveal">
                  OUR JOURNEY
                </h2>
                <div className="space-y-8">
                  {timeline.map((item) => (
                    <div
                      key={item.year}
                      className="scroll-reveal flex gap-6 items-start border-b border-foreground/10 pb-6 last:border-0"
                    >
                      <span className="font-display text-2xl md:text-3xl text-foreground shrink-0 w-16">
                        {item.year}
                      </span>
                      <p className="font-body text-sm text-foreground/70 leading-relaxed pt-2">
                        {item.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section
            ref={ctaRef}
            className="bg-foreground text-cream rounded-[3rem] sm:rounded-6xl py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 mx-2 sm:mx-4 mb-4"
          >
            <div className="max-w-3xl mx-auto text-center scroll-reveal">
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-cream leading-[0.9] mb-6">
                EXPERIENCE
                <br />
                TERRA
              </h2>
              <p className="font-body text-sm sm:text-base text-cream/60 max-w-md mx-auto mb-8 leading-relaxed">
                Discover our collection of hand-crafted botanicals, each one a
                testament to the power of nature and the art of slow craft.
              </p>
              <a
                href="/#shop"
                className="inline-block px-8 py-3 rounded-full bg-cream text-foreground text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-sage transition-colors duration-300"
              >
                Shop Collection
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Story;
