import { motion } from "motion/react";
import { Shield, TrendingUp, Users, Award } from "lucide-react";

export function AdvantagesHeroSection() {
  const advantages = [
    {
      icon: Shield,
      title: "Надійність",
      description: "Стабільне електропостачання 24/7 з мінімальними перебоями"
    },
    {
      icon: TrendingUp,
      title: "Конкурентні тарифи",
      description: "Вигідні ціни та гнучкі тарифні плани для різних потреб"
    },
    {
      icon: Users,
      title: "Професійна підтримка",
      description: "Кваліфікована технічна підтримка та консультації"
    },
    {
      icon: Award,
      title: "Якість послуг",
      description: "Сертифіковані послуги відповідно до європейських стандартів"
    }
  ];

  return (
    <section id="advantages-section" className="py-20 bg-white">
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
            <h2 className="text-primary text-3xl md:text-4xl font-medium mb-6">
              НАШІ ПЕРЕВАГИ
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Чому обирають "ЕНЕРГОЗАХІД." для своїх енергетичних потреб
            </p>
          </motion.div>

          {/* Список переваг */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Іконка */}
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <advantage.icon className="h-10 w-10 text-primary" />
                </div>
                
                {/* Заголовок */}
                <h3 className="text-primary text-xl font-medium mb-4">
                  {advantage.title}
                </h3>
                
                {/* Опис */}
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}