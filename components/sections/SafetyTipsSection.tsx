import { motion } from "motion/react";
import { Zap, Droplet, Shield, Baby } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function SafetyTipsSection() {
  const tips = [
    {
      title: "Електрообладнання",
      description: "Використовуйте лише справне електрообладнання та регулярно перевіряйте стан проводки",
      icon: Zap
    },
    {
      title: "Вода та електрика",
      description: "Не користуйтесь електроприладами поблизу води або якщо у вас вологі руки",
      icon: Droplet
    },
    {
      title: "Уникайте перевантажень",
      description: "Не перевантажуйте електромережу одночасним використанням багатьох потужних приладів",
      icon: Shield
    },
    {
      title: "Безпека дітей",
      description: "Використовуйте захисні пристрої для розеток та тримайте електроприлади поза досягністю дітей",
      icon: Baby
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            <h2 className="text-primary mb-4">
              Поради з електробезпеки
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          {/* Карточки порад */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                        <tip.icon className="h-8 w-8 text-secondary" />
                      </div>
                      
                      <h3 className="text-primary mb-4">
                        {tip.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
