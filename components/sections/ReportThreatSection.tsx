import { motion } from "motion/react";
import { Mail, MessageSquare, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function ReportThreatSection() {
  const steps = [
    {
      title: "Зв'язатися з нами",
      description: "Зателефонуйте на гарячу лінію ТОВ \"ЕНЕРГОЗАХІД.\" за номером + 38(067) 493 37 73 або надішліть повідомлення на електронну скриньку office@energowest.org",
      icon: Mail,
      iconBg: "bg-blue-500"
    },
    {
      title: "Вказати тему",
      description: "В темі звернення обов'язково зазначається \"Загроза електробезпеці\"",
      icon: MessageSquare,
      iconBg: "bg-blue-500"
    },
    {
      title: "Надати інформацію",
      description: "Повідомлення має містити:",
      icon: FileText,
      iconBg: "bg-blue-500",
      details: [
        "Найменування підприємства – споживача",
        "Прізвище, ім'я та по батькові заявника",
        "Засоби для подальшої комунікації",
        "Опис подій, що несуть загрозу електробезпеці"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок секції */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary mb-4">
              Як повідомити про загрозу електробезпеці?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          {/* Кроки */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-12 h-12 ${step.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-primary mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {step.description}
                        </p>
                        {step.details && (
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
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
