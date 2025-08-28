import { ServicesSection } from "../components/sections/ServicesSection";
import { AdvantagesSection } from "../components/sections/AdvantagesSection";

export function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServicesSection />
      <AdvantagesSection />
    </div>
  );
}