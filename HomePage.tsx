import { HeroSection } from "../components/sections/HeroSection";
import { AdvantagesHeroSection } from "../components/sections/AdvantagesHeroSection";
import { CustomerCabinetSection } from "../components/sections/CustomerCabinetSection";
import { ImportantDocumentsSection } from "../components/sections/ImportantDocumentsSection";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AdvantagesHeroSection />
      <CustomerCabinetSection />
      <ImportantDocumentsSection />
    </div>
  );
}