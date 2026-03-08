import { useEffect, useState, useRef } from "react";
import leafImg from "@/assets/leaf-1.png";
import herbImg from "@/assets/herb-1.png";
import botanicalImg from "@/assets/botanical-1.png";

const heroText = "TERRA";

const HeroSection = () => {
  const [revealed, setRevealed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = (speed: number) => scrollY * speed;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-secondary overflow-hidden"
    >
      {/* Floating images */}
      <img
        src={leafImg}
        alt="Organic leaf"
        className="absolute top-[10%] left-[5%] w-20 sm:w-32 md:w-48 rounded-5xl animate-float opacity-80 pointer-events-none"
        style={{ transform: `translateY(${parallax(0.05)}px)` }}
      />
      <img
        src={herbImg}
        alt="Fresh rosemary"
        className="absolute top-[15%] right-[8%] w-16 sm:w-28 md:w-40 rounded-5xl animate-float-delayed opacity-80 pointer-events-none"
        style={{ transform: `translateY(${parallax(0.03)}px)` }}
      />
      <img
        src={botanicalImg}
        alt="Dried lavender"
        className="absolute bottom-[15%] left-[15%] w-14 sm:w-24 md:w-36 rounded-5xl animate-float-slow opacity-70 pointer-events-none"
        style={{ transform: `translateY(${parallax(-0.04)}px)` }}
      />

      {/* Main hero text */}
      <div className="relative z-10 flex items-center justify-center overflow-hidden" style={{ perspective: "600px" }}>
        {heroText.split("").map((letter, i) => (
          <span
            key={i}
            className="font-display text-foreground inline-block"
            style={{
              fontSize: "23vw",
              lineHeight: 0.75,
              letterSpacing: "-0.05em",
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0) rotateX(0deg)" : "translateY(60px) rotateX(40deg)",
              transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Bottom descriptive text */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-16 md:mt-24 px-6 md:px-20 max-w-5xl w-full">
        <p className="font-body text-sm md:text-base text-foreground leading-relaxed">
          Hand-crafted organic botanicals sourced from the earth's finest ingredients. 
          Every product tells a story of sustainable harvesting and ancient wisdom.
        </p>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Origin</span>
            <p className="font-body text-sm text-foreground mt-1">Mediterranean Basin</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Established</span>
            <p className="font-body text-sm text-foreground mt-1">Since 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
