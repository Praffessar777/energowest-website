import { motion } from "motion/react";

export function DocumentsHeroSection() {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* Градієнтний фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ДОКУМЕНТИ ТА РЕГЛАМЕНТИ
          </motion.h1>
          
          <motion.p 
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Офіційні документи, ліцензії та нормативні акти
          </motion.p>
        </div>
      </div>
    </section>
  );
}