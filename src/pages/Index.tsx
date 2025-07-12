
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
