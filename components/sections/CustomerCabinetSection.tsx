import { useState } from "react";
import { motion } from "motion/react";
import { Monitor, FileText, DollarSign, CreditCard, Download, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { CustomerCabinetModal } from "../CustomerCabinetModal";

export function CustomerCabinetSection() {
  const [cabinetModalOpen, setCabinetModalOpen] = useState(false);

  const features = [
    {
      icon: Monitor,
      title: "Моніторинг споживання",
      description: "Відстежуйте своє енергоспоживання в режимі реального часу"
    },
    {
      icon: FileText,
      title: "Ключові умови договору",
      description: "Всі важливі деталі вашого договору в одному місці"
    },
    {
      icon: DollarSign,
      title: "Інформація про вартість та ціну",
      description: "Прозора інформація про тарифи та розрахунки"
    },
    {
      icon: CreditCard,
      title: "Контроль за оплатами",
      description: "Зручне управління платежами та історія транзакцій"
    },
    {
      icon: Download,
      title: "Доступ до рахунків та актів",
      description: "Завантажуйте документи та рахунки в будь-який час"
    }
  ];



  return (
    <section className="py-20 bg-gray-50/50 mb-4">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок секції */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-3xl md:text-4xl font-medium mb-6">
              КАБІНЕТ СПОЖИВАЧА
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Ваше споживання під Вашим контролем 24/7 за допомогою онлайн Кабінету
            </p>
          </motion.div>

          {/* Центрована секція з функціями кабінету */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-primary font-medium mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="pt-6 text-center">
                <Button 
                  onClick={() => setCabinetModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                >
                  ПЕРЕЙТИ В КАБІНЕТ СПОЖИВАЧА
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <CustomerCabinetModal 
        isOpen={cabinetModalOpen} 
        onClose={() => setCabinetModalOpen(false)} 
      />
    </section>
  );
}
