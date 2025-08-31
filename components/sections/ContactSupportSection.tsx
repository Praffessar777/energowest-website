import { useState } from "react";
import { motion } from "motion/react";
import { Headphones, Users, Check, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ConsultationModal } from "../ConsultationModal";
import { SupportModal } from "../SupportModal";

export function ContactSupportSection() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const handleTechnicalSupport = () => {
    setIsSupportModalOpen(true);
  };

  const handleExpertConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  return (
    <section id="help-section" className="py-20 bg-gray-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок секції */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-3xl md:text-4xl mb-6">
              ПОТРІБНА ДОПОМОГА?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Оберіть найзручніший спосіб отримати професійну підтримку
            </p>
          </motion.div>

          {/* Карточки послуг */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Технічна підтримка */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-200/60 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8">
                  {/* Іконка */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Headphones className="h-8 w-8 text-primary" />
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-primary text-xl mb-4">
                    ТЕХНІЧНА ПІДТРИМКА
                  </h3>

                  {/* Опис */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Негайна допомога з технічними питаннями, 
                    проблемами з обладнанням, аварійними 
                    ситуаціями та загальними запитаннями.
                  </p>

                  {/* Список послуг */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Цілодобова підтримка з аварійних питань
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Технічні консультації з обладнанням
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Допомога з особистим кабінетом
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Вирішення проблем з рахунками
                      </span>
                    </div>
                  </div>

                  {/* Кнопка */}
                  <Button 
                    onClick={handleTechnicalSupport}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white"
                  >
                    ЗВ'ЯЗАТИСЯ З ПІДТРИМКОЮ
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Експертна консультація */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-200/60 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8">
                  {/* Іконка */}
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-secondary-foreground" />
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-primary text-xl mb-4">
                    ЕКСПЕРТНА КОНСУЛЬТАЦІЯ
                  </h3>

                  {/* Опис */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Персональні консультації з питань 
                    енергоспоживання, тарифікації, оптимізації 
                    витрат та стратегічного планування.
                  </p>

                  {/* Список послуг */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Індивідуальний підхід до кожного клієнта
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Консультації з досвідченими фахівцями
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Телефонні, відео та особисті зустрічі
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Рекомендації з оптимізації витрат
                      </span>
                    </div>
                  </div>

                  {/* Кнопка */}
                  <Button 
                    onClick={handleExpertConsultation}
                    className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground"
                  >
                    ЗАМОВИТИ КОНСУЛЬТАЦІЮ
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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