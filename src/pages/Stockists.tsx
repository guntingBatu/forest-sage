import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";
import PageTransition from "@/components/PageTransition";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin } from "lucide-react";

interface Stockist {
  name: string;
  address: string;
  city: string;
  type: string;
}

interface Region {
  region: string;
  stockists: Stockist[];
}

const regions: Region[] = [
  {
    region: "France",
    stockists: [
      { name: "Maison Botanique", address: "14 Rue de Provence", city: "Aix-en-Provence", type: "Concept Store" },
      { name: "Herboristerie du Marais", address: "28 Rue des Francs-Bourgeois", city: "Paris", type: "Apothecary" },
      { name: "La Belle Plante", address: "7 Place aux Herbes", city: "Grasse", type: "Boutique" },
      { name: "Atelier Vert", address: "52 Cours Mirabeau", city: "Marseille", type: "Concept Store" },
    ],
  },
  {
    region: "United Kingdom",
    stockists: [
      { name: "The Botanical Edit", address: "34 Redchurch Street", city: "London", type: "Concept Store" },
      { name: "Seed & Stone", address: "12 The Shambles", city: "York", type: "Boutique" },
      { name: "Green Apothecary", address: "88 Stokes Croft", city: "Bristol", type: "Apothecary" },
    ],
  },
  {
    region: "Germany",
    stockists: [
      { name: "Kräutermanufaktur", address: "Kastanienallee 22", city: "Berlin", type: "Apothecary" },
      { name: "Naturhaus", address: "Maximilianstraße 9", city: "Munich", type: "Department Store" },
    ],
  },
  {
    region: "Italy",
    stockists: [
      { name: "Officina Profumo", address: "Via de' Tornabuoni 15", city: "Florence", type: "Apothecary" },
      { name: "Terra e Radici", address: "Via della Spiga 8", city: "Milan", type: "Boutique" },
      { name: "Erboristeria del Corso", address: "Corso Umberto I, 42", city: "Rome", type: "Apothecary" },
    ],
  },
  {
    region: "North America",
    stockists: [
      { name: "Wildcraft Supply", address: "182 Mott Street", city: "New York", type: "Concept Store" },
      { name: "The Herbarium", address: "1420 Abbot Kinney Blvd", city: "Los Angeles", type: "Boutique" },
      { name: "Rooted Living", address: "45 Ossington Ave", city: "Toronto", type: "Concept Store" },
      { name: "Slow Botanics", address: "2811 SE Division St", city: "Portland", type: "Apothecary" },
    ],
  },
  {
    region: "Scandinavia",
    stockists: [
      { name: "Nordisk Naturel", address: "Gothersgade 28", city: "Copenhagen", type: "Concept Store" },
      { name: "Skogsliv", address: "Krukmakargatan 14", city: "Stockholm", type: "Boutique" },
    ],
  },
];

const typeColors: Record<string, string> = {
  "Concept Store": "bg-accent text-accent-foreground",
  Apothecary: "bg-secondary text-secondary-foreground",
  Boutique: "bg-muted text-muted-foreground",
  "Department Store": "bg-foreground/10 text-foreground",
};

const Stockists = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <PageTransition>
      <div className="relative">
        <NoiseOverlay />
        <Navbar />

        <main>
          {/* Header */}
          <section className="pt-28 sm:pt-32 md:pt-40 pb-10 sm:pb-14 px-4 sm:px-6 md:px-10 bg-background">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">
                  Find Us
                </span>
                <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground leading-[0.9]">
                  OUR
                  <br />
                  STOCKISTS
                </h1>
              </div>
              <p className="font-body text-sm sm:text-base text-foreground/70 leading-relaxed">
                Terra products are carried by a curated selection of independent
                boutiques, apothecaries, and concept stores across Europe and
                North America. Each one chosen for their shared commitment to
                quality, craft, and conscious living.
              </p>
            </div>
          </section>

          {/* Regions */}
          <section className="bg-background px-4 sm:px-6 md:px-10 pb-16 sm:pb-24 md:pb-32">
            <div ref={gridRef} className="max-w-6xl mx-auto space-y-16 md:space-y-24">
              {regions.map((region) => (
                <div key={region.region} className="scroll-reveal">
                  <div className="flex items-center gap-4 mb-8 md:mb-10">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground leading-none">
                      {region.region.toUpperCase()}
                    </h2>
                    <div className="flex-1 h-px bg-foreground/10" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                      {region.stockists.length} {region.stockists.length === 1 ? "location" : "locations"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {region.stockists.map((stockist) => (
                      <div
                        key={stockist.name}
                        className="group rounded-2xl sm:rounded-3xl border border-foreground/8 p-5 sm:p-6 hover:border-foreground/20 hover:shadow-forest transition-all duration-300"
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className="font-display text-base sm:text-lg text-foreground leading-tight">
                            {stockist.name.toUpperCase()}
                          </h3>
                          <span
                            className={`shrink-0 text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${
                              typeColors[stockist.type] || "bg-muted text-muted-foreground"
                            }`}
                          >
                            {stockist.type}
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-foreground/50">
                          <MapPin size={14} className="shrink-0 mt-0.5" />
                          <p className="font-body text-sm leading-snug">
                            {stockist.address}
                            <br />
                            {stockist.city}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Become a stockist CTA */}
          <section className="bg-foreground text-cream rounded-[3rem] sm:rounded-6xl py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 mx-2 sm:mx-4 mb-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cream/40 mb-4 block">
                Wholesale
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-[0.9] mb-5">
                CARRY TERRA
                <br />
                IN YOUR STORE
              </h2>
              <p className="font-body text-sm sm:text-base text-cream/50 max-w-md mx-auto mb-8 leading-relaxed">
                We partner with independent retailers who share our values.
                Minimum orders are small, margins are fair, and we provide
                full brand support.
              </p>
              <a
                href="mailto:wholesale@terra-botanicals.com"
                className="inline-block px-8 py-3 rounded-full bg-cream text-foreground text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-sage transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Stockists;
