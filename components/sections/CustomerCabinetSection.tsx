import { useState } from "react";
import { motion } from "motion/react";
import { Monitor, FileText, DollarSign, CreditCard, Download, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
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

  const billData = [
    {
      period: "Березень 2024",
      amount: "1 250 ₴",
      status: "Оплачено",
      statusColor: "text-green-600"
    },
    {
      period: "Квітень 2024",
      amount: "1 100 ₴",
      status: "Оплачено",
      statusColor: "text-green-600"
    },
    {
      period: "Травень 2024",
      amount: "1 450 ₴",
      status: "Очікує",
      statusColor: "text-yellow-600"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ліва частина - Функції кабінету */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                
                <div className="pt-6">
                  <Button 
                    onClick={() => setCabinetModalOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                  >
                    ПЕРЕЙТИ В КАБІНЕТ СПОЖИВАЧА
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Права частина - Демо даних */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {/* Карточки з балансом та споживанням */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="bg-blue-100 border-none">
                    <CardContent className="p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">Поточний баланс</div>
                      <div className="text-2xl font-medium text-primary">-1 250 ₴</div>
                      <div className="text-sm text-red-500">⚡ Заборгованість</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-yellow-100 border-none">
                    <CardContent className="p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">Споживання (березень)</div>
                      <div className="text-2xl font-medium text-primary">1.5</div>
                      <div className="text-sm text-primary">МВт·год</div>
                      <div className="text-sm text-green-500">📈 +7% до травня</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-orange-100 border-none">
                    <CardContent className="p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">Неоплачені рахунки</div>
                      <div className="text-2xl font-medium text-primary">2</div>
                      <div className="text-sm text-orange-500">⚠️ Потребує уваги</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Останні рахунки */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-primary font-medium mb-4">Останні рахунки</h4>
                    <div className="space-y-3">
                      {billData.map((bill, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                          <div>
                            <div className="font-medium text-foreground">{bill.period}</div>
                            <div className="text-sm text-muted-foreground">{bill.amount}</div>
                          </div>
                          <div className={`text-sm font-medium ${bill.statusColor}`}>
                            {bill.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <CustomerCabinetModal 
        isOpen={cabinetModalOpen} 
        onClose={() => setCabinetModalOpen(false)} 
      />
    </section>
  );
}
