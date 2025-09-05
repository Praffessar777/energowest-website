import { motion } from "motion/react";
import { Eye, Target, Users, Award } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Наша місія",
      description: "Забезпечувати українські підприємства надійною електроенергією за справедливими цінами, сприяючи розвитку економіки країни."
    },
    {
      icon: Eye,
      title: "Прозорість",
      description: "Відкриті тарифи, зрозумілі умови співпраці та детальна звітність по всіх операціях без прихованих платежів."
    },
    {
      icon: Users,
      title: "Експертність",
      description: "Наша команда має понад 25 років досвіду в енергетичній галузі та глибоке розуміння ринку електроенергії."
    },
    {
      icon: Award,
      title: "Якість",
      description: "Високі стандарти обслуговування клієнтів та індивідуальний підхід до кожного партнера."
    }
  ];

  return (
    <section className="py-20 bg-white">
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
              Про "ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «ЕНЕРГОЗАХІД.» (код ЄДРПОУ 45983078)
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Ми створили ТОВ "ЕНЕРГОЗАХІД.", щоб українські підприємства мали надійного партнера 
              у сфері енергопостачання. Поєднуючи досвід та інновації, ми пропонуємо сучасні 
              рішення для енергетичних потреб вашого бізнесу.
            </p>
          </motion.div>

          {/* Цінності компанії */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-primary mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Статистика */}
          <motion.div 
            className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="mb-2">25+</div>
                <p className="text-white/90">Років досвіду</p>
              </div>
              <div>
                <div className="mb-2">100%</div>
                <p className="text-white/90">Прозорість</p>
              </div>
              <div>
                <div className="mb-2">24/7</div>
                <p className="text-white/90">Підтримка</p>
              </div>
              <div>
                <div className="mb-2">500+</div>
                <p className="text-white/90">Задоволених клієнтів</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
