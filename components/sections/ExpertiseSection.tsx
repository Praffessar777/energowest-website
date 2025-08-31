import { motion } from "motion/react";
import { Users, Award, BookOpen, Briefcase, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

export function ExpertiseSection() {
  const expertise = [
    {
      icon: Users,
      title: "Досвідчена команда",
      description: "Наші фахівці мають понад 25 років досвіду роботи в енергетичній галузі України",
      details: ["Енергетичні інженери", "Юристи з енергетичного права", "Економісти-аналітики", "Менеджери проектів"]
    },
    {
      icon: Award,
      title: "Професійні сертифікації",
      description: "Команда має міжнародні сертифікації та кваліфікації у сфері енергетики",
      details: ["ISO 50001 Energy Management", "PMP Project Management", "Certified Energy Manager", "NEBOSH Safety"]
    },
    {
      icon: BookOpen,
      title: "Постійне навчання",
      description: "Регулярно підвищуємо кваліфікацію та слідкуємо за новітніми трендами галузі",
      details: ["Участь у міжнародних конференціях", "Внутрішні тренінги", "Сертифікаційні програми", "Обмін досвідом"]
    },
    {
      icon: Briefcase,
      title: "Портфоліо проектів",
      description: "Успішно реалізовані проекти енергопостачання для різних галузей економіки",
      details: ["Промисловість", "Сільське господарство", "Комерційна нерухомість", "Логістика"]
    },
    {
      icon: TrendingUp,
      title: "Аналітична експертиза",
      description: "Глибокий аналіз енергетичного ринку та прогнозування тенденцій розвитку",
      details: ["Ринкова аналітика", "Прогнозування цін", "Оцінка ризиків", "Стратегічне планування"]
    },
    {
      icon: Globe,
      title: "Міжнародний досвід",
      description: "Знання європейських стандартів та практик енергетичної галузі",
      details: ["Європейські стандарти", "Best practices", "Міжнародне співробітництво", "Технологічні інновації"]
    }
  ];

  const teamStats = [
    { number: "25+", label: "Років досвіду" },
    { number: "50+", label: "Спеціалістів" },
    { number: "500+", label: "Реалізованих проектів" },
    { number: "15+", label: "Галузей клієнтів" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50/50 to-white">
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
              Документи та експертиза
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Понад два десятиліття роботи в енергетичній галузі дозволили нам накопичити 
              унікальну експертизу та глибоке розуміння потреб українського бізнесу.
            </p>
          </motion.div>

          {/* Статистика команди */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-medium text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Детальна експертиза */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
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
                      <item.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-primary">
                      {item.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Спеціальна секція про досвід */}
          <motion.div 
            className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-white mb-6">
                  Більше ніж досвід — це розуміння
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  За 25+ років роботи ми не просто накопичили досвід, а навчилися глибоко 
                  розуміти потреби бізнесу. Ми знаємо, як енергетичні рішення впливають на 
                  рентабельність підприємства та готові поділитися цими знаннями з вами.
                </p>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                    Досвід роботи з кризових часів до стабільного розвитку
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                    Розуміння специфіки різних галузей економіки
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                    Знання особливостей українського енергоринку
                  </li>
                </ul>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-6xl font-medium text-secondary mb-4">25+</div>
                  <p className="text-white/90 text-xl">
                    років експертизи<br />
                    на службі вашого бізнесу
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}