import { AboutSection } from "../components/sections/AboutSection";
import { ServicesAboutSection } from "../components/sections/ServicesAboutSection";
import { ConsultationCTASection } from "../components/sections/ConsultationCTASection";

export function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutSection />
      <ServicesAboutSection />
      <ConsultationCTASection />
    </div>
  );
}