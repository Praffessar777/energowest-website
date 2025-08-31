import { motion } from "motion/react";
import { Zap, Building, Factory, Home, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export function TariffsSection() {
  const tariffs = [
    {
      icon: Home,
      title: "Побутовий",
      description: "Для приватних будинків та невеликих споживачів",
      price: "3.68",
      unit: "грн/кВт⋅год",
      features: [
        "Стандартний однозонний тариф",
        "Безкоштовне підключення",
        "Онлайн кабінет споживача",
        "Техпідтримка в робочі години",
        "Можливість оплати онлайн"
      ],
      popular: false
    },
    {
      icon: Building,
      title: "Комерційний",
      description: "Для малого та середнього бізнесу",
      price: "4.32",
      unit: "грн/кВт⋅год",
      features: [
        "Двозонний тариф (день/ніч)",
        "Персональний менеджер",
        "Детальна аналітика споживання",
        "Пріоритетна техпідтримка 24/7",
        "Гнучкі умови оплати",
        "Можливість розстрочки"
      ],
      popular: true
    },
    {
      icon: Factory,
      title: "Промисловий",
      description: "Для великих підприємств та виробництв",
      price: "Від 3.95",
      unit: "грн/кВт⋅год",
      features: [
        "Індивідуальний розрахунок тарифу",
        "Багатозонний тариф",
        "Корпоративні знижки",
        "Цілодобова підтримка",
        "Персональний інженер-консультант",
        "Система моніторингу в реальному часі",
        "Професійна звітність"
      ],
      popular: false
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
              Тарифи на електроенергію
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Прозорі та конкурентні тарифи для всіх категорій споживачів. 
              Оберіть оптимальний план для ваших потреб.
            </p>
          </motion.div>

          {/* Карточки тарифів */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tariffs.map((tariff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Найпопулярніший
                    </span>
                  </div>
                )}
                
                <Card className={`h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  tariff.popular ? 'border-secondary ring-2 ring-secondary/20' : ''
                }`}>
                  <CardHeader className="text-center pb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      tariff.popular ? 'bg-secondary/20' : 'bg-gray-100'
                    }`}>
                      <tariff.icon className={`h-8 w-8 ${
                        tariff.popular ? 'text-secondary' : 'text-primary'
                      }`} />
                    </div>
                    
                    <CardTitle className="text-primary mb-2">
                      {tariff.title}
                    </CardTitle>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {tariff.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-3xl font-medium text-primary">
                        {tariff.price}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {tariff.unit}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {tariff.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-secondary" />
                          </div>
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${
                        tariff.popular 
                          ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                          : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      }`}
                    >
                      Обрати тариф
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Додаткова інформація */}
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-primary mb-4">
                  Індивідуальні умови для вашого бізнесу
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Потрібен особливий тарифний план? Наші фахівці розрахують 
                  індивідуальні умови на основі ваших потреб та обсягів споживання.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    <span>Безкоштовна консультація та розрахунок</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    <span>Можливість перегляду тарифу кожен квартал</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    <span>Знижки для довгострокових договорів</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  Отримати консультацію
                </Button>
                <p className="text-muted-foreground text-sm mt-3">
                  Відповідь протягом 2 годин
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}