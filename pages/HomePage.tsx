import { HeroSection } from "../components/sections/HeroSection";
import { AdvantagesHeroSection } from "../components/sections/AdvantagesHeroSection";
import { ImportantDocumentsSection } from "../components/sections/ImportantDocumentsSection";

// CustomerCabinetSection temporarily removed from homepage

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AdvantagesHeroSection />
      <ImportantDocumentsSection />
    </div>
  );
}