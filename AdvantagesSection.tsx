import { motion } from "motion/react";
import { DollarSign, Shield, Scale, Headphones, CheckCircle, TrendingDown } from "lucide-react";

export function AdvantagesSection() {
  const advantages = [
    {
      icon: DollarSign,
      title: "Конкурентні ціни",
      description: "Пропонуємо одні з найвигідніших тарифів на ринку з прозорою системою ціноутворення",
      stats: "До 15% економії"
    },
    {
      icon: Shield,
      title: "Гарантована надійність",
      description: "99.9% часу безперебійної роботи завдяки резервним каналам та моніторингу 24/7",
      stats: "99.9% uptime"
    },
    {
      icon: Scale,
      title: "Повна юридична підтримка",
      description: "Професійна правова допомога у всіх питаннях енергопостачання та врегулювання спорів",
      stats: "100% підтримка"
    },
    {
      icon: Headphones,
      title: "Клієнтський сервіс",
      description: "Оперативна підтримка клієнтів цілодобово з персональним менеджером для кожного клієнта",
      stats: "24/7 підтримка"
    },
    {
      icon: CheckCircle,
      title: "Прозорість операцій",
      description: "Детальна звітність, відкриті тарифи без прихованих комісій та зборів",
      stats: "0% прихованих платежів"
    },
    {
      icon: TrendingDown,
      title: "Оптимізація витрат",
      description: "Аналіз споживання та рекомендації щодо зниження енергетичних витрат підприємства",
      stats: "До 20% оптимізації"
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
              Чому обирають "ЕНЕРГОЗАХІД."
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Наші переваги базуються на багаторічному досвіді та глибокому розумінні 
              потреб українського бізнесу в надійному енергопостачанні.
            </p>
          </motion.div>

          {/* Список переваг */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-border rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group-hover:border-secondary/30">
                  {/* Іконка */}
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                    <advantage.icon className="h-8 w-8 text-secondary" />
                  </div>
                  
                  {/* Статистика */}
                  <div className="text-2xl font-medium text-primary mb-2">
                    {advantage.stats}
                  </div>
                  
                  {/* Заголовок */}
                  <h3 className="text-primary mb-4">
                    {advantage.title}
                  </h3>
                  
                  {/* Опис */}
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Додаткова секція з гарантіями */}
          <motion.div 
            className="mt-20 bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <h3 className="text-white mb-4">
                Наші гарантії
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Ми впевнені в якості наших послуг та готові надати реальні гарантії нашим клієнтам
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-medium mb-2">30 днів</div>
                <p className="text-white/90">Гарантія повернення коштів</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-medium mb-2">100%</div>
                <p className="text-white/90">Компенсація за простої</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-medium mb-2">24 години</div>
                <p className="text-white/90">Максимальний час реагування</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}