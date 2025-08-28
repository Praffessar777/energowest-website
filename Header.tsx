import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { CustomerCabinetModal } from "./CustomerCabinetModal";

const navigation = [
  { name: "Головна", href: "/" },
  { name: "Про нас", href: "/about" },
  { name: "Тарифи", href: "/tariffs" },
  { name: "Документи", href: "/documents" },
  { name: "Контакти", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cabinetModalOpen, setCabinetModalOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b border-border fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo className="text-primary text-lg" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                  location.pathname === item.href ? 'text-primary' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => setCabinetModalOpen(true)}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              КАБІНЕТ СПОЖИВАЧА
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCabinetModalOpen(true);
                  }}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full"
                >
                  КАБІНЕТ СПОЖИВАЧА
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <CustomerCabinetModal 
        isOpen={cabinetModalOpen} 
        onClose={() => setCabinetModalOpen(false)} 
      />
    </header>
  );
}