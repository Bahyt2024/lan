import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen">
    <div className="container mx-auto px-4 w-11/12">
      <HeroSection />
    <BenefitsSection />
    <FaqSection />
    </div>
  </main>
  
  );
}
