import { HeroSection } from "../components/sections/HeroSection";
import { AdvantagesHeroSection } from "../components/sections/AdvantagesHeroSection";
import { ImportantDocumentsSection } from "../components/sections/ImportantDocumentsSection";
import { CustomerCabinetSection } from "../components/sections/CustomerCabinetSection";

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
