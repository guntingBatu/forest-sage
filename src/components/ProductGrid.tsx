import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  { name: "Amber Balm", price: "$38", image: product1 },
  { name: "Herb Soap", price: "$24", image: product2 },
  { name: "Essential Oil", price: "$42", image: product3 },
  { name: "Clay Candle", price: "$32", image: product4 },
  { name: "Herbal Tea", price: "$18", image: product5 },
  { name: "Body Butter", price: "$46", image: product6 },
];

const ProductGrid = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="shop"
      className="relative bg-accent rounded-t-6xl pt-20 md:pt-32 pb-20 px-6 md:px-10"
    >
      {/* Header */}
      <div className="scroll-reveal flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24">
        <h2
          className="font-display text-foreground leading-[0.85]"
          style={{ fontSize: "clamp(3rem, 15vw, 15vw)", letterSpacing: "-0.03em" }}
        >
          SHOP
        </h2>
        <button className="mt-6 md:mt-0 flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-foreground text-background hover:scale-105 transition-transform duration-500 cursor-pointer shadow-forest">
          <ArrowRight size={28} />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product, i) => (
          <div
            key={product.name}
            className="scroll-reveal group relative overflow-hidden rounded-4xl cursor-pointer"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-4xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 cubic-bezier(0.16,1,0.3,1) group-hover:scale-110"
                loading="lazy"
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 rounded-4xl bg-[hsla(157,97%,14%,0.3)] backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <button className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.16,1,0.3,1) bg-cream text-forest px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.3em]">
                Quick Add
              </button>
            </div>
            {/* Info */}
            <div className="mt-4 flex items-center justify-between px-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">{product.name}</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
