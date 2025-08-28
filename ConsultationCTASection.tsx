import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ConsultationModal } from "../ConsultationModal";

export function ConsultationCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm max-w-2xl mx-auto">
              <h3 className="text-primary mb-4">
                Потрібна консультація?
              </h3>
              <p className="text-muted-foreground mb-6">
                Наші експерти допоможуть підібрати оптимальне рішення для вашого бізнесу
              </p>
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              >
                Отримати консультацію
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}