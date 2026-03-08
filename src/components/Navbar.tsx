import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const navLinks = ["Shop", "Story", "Journal", "Stockists"];

const Navbar = () => {
  const { openCart, totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4">
      <Link to="/" className="font-display text-xl text-foreground tracking-tight">
        — TERRA
      </Link>

      <div className="hidden md:flex items-center gap-1 px-6 py-2 rounded-full backdrop-blur-[20px] bg-[hsla(0,0%,100%,0.1)] border border-[hsla(0,0%,100%,0.15)]">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground hover:text-moss transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>

      <button
        onClick={openCart}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream text-forest"
      >
        <ShoppingBag size={16} />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Cart</span>
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-foreground text-background text-[9px] font-bold">
          {totalItems}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
