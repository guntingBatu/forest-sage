import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";

const Index = () => {
  return (
    <div className="relative">
      <NoiseOverlay />
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
