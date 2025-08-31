import { DocumentsHeroSection } from "../components/sections/DocumentsHeroSection";
import { DocumentsListSection } from "../components/sections/DocumentsListSection";
import { NeedHelpSection } from "../components/sections/NeedHelpSection";

export function DocumentsPage() {
  return (
    <div className="min-h-screen pt-16">
      <DocumentsHeroSection />
      <DocumentsListSection />
      <NeedHelpSection />
    </div>
  );
}