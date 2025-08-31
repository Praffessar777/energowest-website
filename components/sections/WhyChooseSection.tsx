import { motion } from "motion/react";
import { Shield, Scale, CheckCircle } from "lucide-react";

export function WhyChooseSection() {
  const advantages = [
    {
      icon: Shield,
      title: "99.9% uptime",
      subtitle: "Гарантована надійність",
      description: "99.9% часу безперебійної роботи завдяки резервним каналам та моніторингу 24/7"
    },
    {
      icon: Scale,
      title: "100% підтримка",
      subtitle: "Повна юридична підтримка",
      description: "Професійна правова допомога у всіх питаннях енергопостачання та врегулювання спорів"
    },
    {
      icon: CheckCircle,
      title: "0% прихованих платежів",
      subtitle: "Прозорість операцій",
      description: "Детальна звітність, відкриті тарифи без прихованих комісій та зборів"
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
              Чому обирають ЕНЕРГОЗАХІД
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Наші переваги базуються на багаторічному досвіді та глибокому розумінні потреб українського бізнесу 
              в надійному енергопостачанні.
            </p>
          </motion.div>

          {/* Блоки переваг */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="h-10 w-10 text-secondary" />
                </div>
                
                {/* Заголовок */}
                <h3 className="text-primary mb-2">
                  {advantage.title}
                </h3>
                
                {/* Підзаголовок */}
                <h4 className="text-primary mb-4">
                  {advantage.subtitle}
                </h4>
                
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