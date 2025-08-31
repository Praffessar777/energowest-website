import { ContactHeroSection } from "../components/sections/ContactHeroSection";
import { ContactSupportSection } from "../components/sections/ContactSupportSection";
import { EmergencyContactSection } from "../components/sections/EmergencyContactSection";
import { ContactInfoSection } from "../components/sections/ContactInfoSection";
import { FAQSection } from "../components/sections/FAQSection";

export function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <ContactHeroSection />
      <ContactSupportSection />
      <EmergencyContactSection />
      <ContactInfoSection />
      <FAQSection />
    </div>
  );
}