import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Основний контент футера */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Швидкі посилання */}
            <div className="text-center">
              <h4 className="text-white text-sm mb-6">
                Швидкі посилання
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-white/70 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    Про нас
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tariffs"
                    className="text-white/70 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    Тарифи
                  </Link>
                </li>
                <li>
                  <Link
                    to="/documents"
                    className="text-white/70 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    Документи
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white/70 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    Контакти
                  </Link>
                </li>
              </ul>
            </div>

            {/* Контакти */}
            <div className="text-center">
              <h4 className="text-white text-sm mb-6">
                Контакти
              </h4>
              <div className="space-y-4">
                <div className="flex items-start justify-center">
                  <MapPin className="h-4 w-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <div className="text-white/70 text-sm">
                    04052, Україна, місто Київ, вул. Нижній Вал(Подільський р-н), будинок, 7-9, 3-й поверх, офіс 9
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  <div className="text-white/70 text-sm">
                    +38 (044) 239-27-53
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  <div className="text-white/70 text-sm">
                    office@energowest.org
                  </div>
                </div>
              </div>
            </div>

            {/* Режим роботи */}
            <div className="text-center">
              <h4 className="text-white text-sm mb-6">
                Режим роботи
              </h4>
              <div className="flex items-start justify-center">
                <Clock className="h-4 w-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-white/70 text-sm">
                    Пн-Пт: 9:00 - 18:00
                  </div>
                  <div className="text-white/70 text-sm">
                    Сб-Нд: вихідний
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Копірайт та правова інформація */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © {currentYear} ЕНЕРГОЗАХІД. Всі права захищені.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <button className="text-white/70 hover:text-secondary transition-colors">
                Політика конфіденційності
              </button>
              <button className="text-white/70 hover:text-secondary transition-colors">
                Умови використання
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
