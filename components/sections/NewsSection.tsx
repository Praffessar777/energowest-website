import { motion } from "motion/react";
import { Calendar, ArrowRight, TrendingUp, FileText, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

export function NewsSection() {
  const articles = [
    {
      category: "Аналітика ринку",
      title: "Прогноз цін на електроенергію на 2025 рік",
      excerpt: "Детальний аналіз факторів, що впливають на формування цін на електроенергію в Україні та прогнози на наступний рік.",
      date: "15 грудня 2024",
      readTime: "5 хв читання",
      icon: TrendingUp
    },
    {
      category: "Бізнес-поради",
      title: "Як оптимізувати енерговитрати підприємства",
      excerpt: "Практичні рекомендації щодо зниження витрат на електроенергію без втрати ефективності роботи підприємства.",
      date: "12 грудня 2024",
      readTime: "7 хв читання",
      icon: Lightbulb
    },
    {
      category: "Нормативна база",
      title: "Зміни в енергетичному законодавстві 2024",
      excerpt: "Огляд ключових змін у нормативно-правовій базі енергетичної галузі та їх вплив на бізнес.",
      date: "8 грудня 2024",
      readTime: "6 хв читання",
      icon: FileText
    },
    {
      category: "Аналітика ринку",
      title: "Відновлювальна енергетика: можливості для бізнесу",
      excerpt: "Аналіз перспектив розвитку сонячної та вітрової енергетики в Україні та можливостей для підприємців.",
      date: "5 грудня 2024",
      readTime: "8 хв читання",
      icon: TrendingUp
    },
    {
      category: "Бізнес-поради",
      title: "Енергоаудит: перший крок до економії",
      excerpt: "Як правильно провести енергетичний аудит підприємства та які результати можна очікувати.",
      date: "1 грудня 2024",
      readTime: "4 хв читання",
      icon: Lightbulb
    },
    {
      category: "Нормативна база",
      title: "Нові тарифи на передачу електроенергії",
      excerpt: "Роз'яснення змін у тарифах на послуги з передачі електричної енергії місцевими мережами.",
      date: "28 листопада 2024",
      readTime: "3 хв читання",
      icon: FileText
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Аналітика ринку":
        return "bg-blue-100 text-blue-800";
      case "Бізнес-поради":
        return "bg-green-100 text-green-800";
      case "Нормативна база":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="news" className="py-20 bg-white">
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
              Новини та аналітика
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Слідкуйте за останніми новинами енергетичної галузі, отримуйте експертну аналітику 
              та корисні поради для оптимізації енергетичних витрат вашого бізнесу.
            </p>
          </motion.div>

          {/* Список статей */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <article.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-primary group-hover:text-primary/80 transition-colors">
                      {article.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {article.date}
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Підписка на новини */}
          <motion.div 
            className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4">
              Підпишіться на нашу розсилку
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Отримуйте щотижневу аналітику енергетичного ринку, експертні прогнози 
              та практичні поради прямо на вашу електронну пошту.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваша електронна пошта"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-primary font-medium px-6 py-3">
                Підписатися
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-white/70 text-sm mt-4">
              Ми поважаємо вашу приватність і ніколи не передаємо дані третім особам
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}