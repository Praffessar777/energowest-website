import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { AlertTriangle } from "lucide-react";
import { ReportThreatModal } from "../ReportThreatModal";

export function SafetyCallToActionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReportThreat = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Заголовок */}
            <h2 className="text-white mb-6">
              Безпека — понад усе!
            </h2>

            {/* Підзаголовок */}
            <p className="text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Якщо у вас є питання щодо електробезпеки або ви помітили потенційно небезпечну ситуацію, 
              негайно зв'яжіться з нами
            </p>

            {/* CTA кнопка */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button 
                onClick={handleReportThreat}
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                ПОВІДОМИТИ ПРО ЗАГРОЗУ
              </Button>
            </motion.div>

            {/* Додаткова інформація */}
            <motion.p 
              className="text-white/70 text-sm mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ваша безпека — наш пріоритет. Команда експертів готова надати допомогу 24/7
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
    
    {/* Візуальне відділення від футера */}
    <div className="w-full h-0.5 bg-secondary"></div>
    
    {/* Modal */}
    <ReportThreatModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
    />
    </>
  );
}
