import { motion } from "motion/react";
import { EnergyFlowAnimation } from "../EnergyFlowAnimation";

export function HeroSection() {
  const scrollToAdvantages = () => {
    const element = document.getElementById('advantages-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2E2E2E]">
      {/* Анімація потоку енергії */}
      <EnergyFlowAnimation />
      
      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Слоган */}
          <motion.h1 
            className="mb-12 text-white text-2xl md:text-3xl lg:text-4xl whitespace-nowrap leading-tight"
            style={{ fontFamily: 'Furore, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Енергія досвіду, енергопостачання майбутнього
          </motion.h1>
          
          {/* CTA Кнопка */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <button 
              onClick={scrollToAdvantages}
              className="bg-[#4A90E2] hover:bg-[#3A7BD5] text-white px-8 py-4 rounded-full text-lg font-medium transition-colors shadow-lg"
            >
              Дізнатися більше
            </button>
          </motion.div>
          

        </div>
      </div>
      
      {/* Декоративні елементи */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-10 w-2 h-40 bg-white/20 rounded-full" />
      <div className="absolute top-1/4 right-20 w-1 h-20 bg-white/15 rounded-full" />
    </section>
  );
}