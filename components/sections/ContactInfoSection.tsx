import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";

export function ContactInfoSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Адреса головного офісу",
      details: [
        "04052, м. Київ",
        "вул. Нижній Вал, 7-9",
        "3-й поверх, офіс 9"
      ]
    },
    {
      icon: Phone,
      title: "Телефони",
      details: [
        "Приймальна: +38(044) 239-27-53",
        "Гаряча лінія: +38(067) 493-37-73"
      ]
    },
    {
      icon: Mail,
      title: "Електронна пошта",
      details: [
        "office@energowest.org"
      ]
    },
    {
      icon: Clock,
      title: "Режим роботи",
      details: [
        "Понеділок - П'ятниця: 9:00 - 18:00",
        "Субота - Неділя: вихідний"
      ]
    },
    {
      icon: User,
      title: "Відповідальна особа для контакту зі споживачами",
      details: [
        "Директор",
        "Кузьмінець Юрій Андрійович"
      ]
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
            <h2 className="text-primary text-3xl md:text-4xl mb-4">
              КОНТАКТНА ІНФОРМАЦІЯ
            </h2>
            <p className="text-muted-foreground text-lg">
              Оберіть зручний для вас спосіб зв'язку
            </p>
          </motion.div>

          {/* Сітка з контактною інформацією */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="text-center flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Іконка */}
                <div className="h-20 flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Заголовок */}
                <div className="h-16 flex items-center justify-center mb-4">
                  <h3 className="text-primary text-lg text-center">
                    {item.title}
                  </h3>
                </div>

                {/* Деталі */}
                <div className="flex-1 flex flex-col justify-start">
                  <div className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
