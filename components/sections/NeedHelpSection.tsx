import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ConsultationModal } from "../ConsultationModal";
import { SupportModal } from "../SupportModal";

export function NeedHelpSection() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const handleContactSupport = () => {
    setIsSupportModalOpen(true);
  };

  const handleRequestConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  return (
    <section className="py-20 bg-white border-t border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-primary text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ПОТРІБНА ДОПОМОГА?
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Якщо ви не знайшли потрібний документ або маєте питання щодо його змісту,
            звертайтеся до наших фахівців
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              onClick={handleContactSupport}
              className="border-primary text-primary hover:bg-primary/5 px-8 py-3 min-w-[200px]"
            >
              Зв'язатися з підтримкою
            </Button>
            
            <Button
              onClick={handleRequestConsultation}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 min-w-[200px]"
            >
              Замовити консультацію
            </Button>
          </motion.div>
        </div>
      </div>

      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
      
      <SupportModal 
        isOpen={isSupportModalOpen} 
        onClose={() => setIsSupportModalOpen(false)} 
      />
    </section>
  );
}