import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Zap, FileText, Settings, Users, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "Постачання електроенергії",
      description: "Надійне постачання електричної енергії для підприємств будь-якого масштабу з гарантією стабільності та якості.",
      features: ["Безперебійна подача енергії", "Моніторинг споживання", "Техпідтримка 24/7"]
    },
    {
      icon: FileText,
      title: "Гнучкі умови співпраці",
      description: "Індивідуальні договори та тарифні плани, адаптовані під специфіку та потреби вашого бізнесу.",
      features: ["Персональні тарифи", "Гнучкі умови оплати", "Прозорі договори"]
    },
    {
      icon: Settings,
      title: "Консультаційні послуги",
      description: "Експертні консультації з питань енергоефективності, оптимізації витрат та планування енергоспоживання.",
      features: ["Аудит енергоспоживання", "Оптимізація витрат", "Стратегічне планування"]
    },
    {
      icon: Users,
      title: "Корпоративні рішення",
      description: "Комплексні енергетичні рішення для великих підприємств та корпорацій з повним супроводом.",
      features: ["Корпоративні тарифи", "Персональний менеджер", "Детальна аналітика"]
    },
    {
      icon: Clock,
      title: "Швидке підключення",
      description: "Оперативне оформлення документів та швидке підключення до енергопостачання без зайвої бюрократії.",
      features: ["Швидке оформлення", "Мінімум документів", "Онлайн-підтримка"]
    },
    {
      icon: Shield,
      title: "Юридична підтримка",
      description: "Повний юридичний супровід угод та вирішення спірних питань з енергетичними організаціями.",
      features: ["Правова підтримка", "Вирішення спорів", "Захист інтересів"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
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
            <h2 className="text-primary mb-6">
              Наші послуги
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Ми пропонуємо повний спектр послуг у сфері енергопостачання, 
              від базового підключення до комплексних корпоративних рішень.
            </p>
          </motion.div>

          {/* Список послуг */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA секція */}
          <motion.div 
            className="text-center mt-16"
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
              <Link 
                to="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors"
              >
                Отримати консультацію
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}