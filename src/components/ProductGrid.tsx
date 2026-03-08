import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductGrid = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { addItem } = useCart();

  return (
    <section
      ref={sectionRef}
      id="shop"
      className="relative bg-accent rounded-t-[3rem] sm:rounded-t-6xl pt-14 sm:pt-20 md:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 md:px-10"
    >
      <div className="scroll-reveal flex flex-col md:flex-row items-start md:items-end justify-between mb-10 sm:mb-16 md:mb-24">
        <h2
          className="font-display text-foreground leading-[0.85]"
          style={{ fontSize: "clamp(2.5rem, 15vw, 15vw)", letterSpacing: "-0.03em" }}
        >
          SHOP
        </h2>
        <button className="mt-4 md:mt-0 flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full bg-foreground text-background hover:scale-105 transition-transform duration-500 cursor-pointer shadow-forest">
          <ArrowRight size={20} className="sm:w-7 sm:h-7" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
        {products.map((product, i) => (
          <div
            key={product.id}
            className="scroll-reveal group relative overflow-hidden rounded-4xl cursor-pointer"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <Link to={`/product/${product.id}`} className="block">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-4xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </Link>
            {/* Hover overlay */}
            <div className="absolute inset-0 rounded-4xl bg-[hsla(157,97%,14%,0.3)] backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 pointer-events-none group-hover:pointer-events-auto">
              <button
                onClick={(e) => { e.preventDefault(); addItem(product); }}
                className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 bg-cream text-forest px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:scale-105"
              >
                Quick Add
              </button>
            </div>
            {/* Info */}
            <Link to={`/product/${product.id}`} className="mt-4 flex items-center justify-between px-2 block">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">{product.name}</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{product.price}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
