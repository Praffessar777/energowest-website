import { ElectricalSafetyHeroSection } from "../components/sections/ElectricalSafetyHeroSection";
import { ElectricalSafetyInfoSection } from "../components/sections/ElectricalSafetyInfoSection";
import { ElectricalSafetyStepsSection } from "../components/sections/ElectricalSafetyStepsSection";
import { EmergencyContactsSection } from "../components/sections/EmergencyContactsSection";
import { ReportThreatSection } from "../components/sections/ReportThreatSection";
import { SafetyTipsSection } from "../components/sections/SafetyTipsSection";
import { SafetyCallToActionSection } from "../components/sections/SafetyCallToActionSection";

export function ElectricalSafetyPage() {
  return (
    <div className="pt-16">
      <ElectricalSafetyHeroSection />
      <ElectricalSafetyInfoSection />
      <ElectricalSafetyStepsSection />
      <EmergencyContactsSection />
      <ReportThreatSection />
      <SafetyTipsSection />
      <SafetyCallToActionSection />
    </div>
  );
}
