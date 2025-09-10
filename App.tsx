import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { TariffsPage } from "./pages/TariffsPage";
import { DocumentsPage } from "./pages/DocumentsPage";
import { ElectricalSafetyPage } from "./pages/ElectricalSafetyPage";
import { ContactPage } from "./pages/ContactPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  // Derive router basename from Vite's base URL, removing leading dots and
  // trailing slashes. Root deployments resolve to an empty string to avoid
  // double slashes in routes.
  const basename = import.meta.env.BASE_URL
    .replace(/^(\.(?=\/))/, "")
    .replace(/\/$/, "");
  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tariffs" element={<TariffsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/electrical-safety" element={<ElectricalSafetyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Redirect from preview_page.html and other HTML routes to home */}
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
