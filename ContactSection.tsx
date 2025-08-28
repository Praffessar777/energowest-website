import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Тут буде логіка відправки форми
    console.log("Form submitted:", formData);
    alert("Дякуємо за звернення! Ми зв'яжемося з вами найближчим часом.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Наша адреса",
      details: ["вул. Енергетиків, 25", "м. Львів, 79000", "Україна"]
    },
    {
      icon: Phone,
      title: "Телефони",
      details: ["+38 (032) 123-45-67", "+38 (067) 890-12-34", "Безкоштовно по Україні"]
    },
    {
      icon: Mail,
      title: "Електронна пошта",
      details: ["info@energozahid.ua", "sales@energozahid.ua", "support@energozahid.ua"]
    },
    {
      icon: Clock,
      title: "Години роботи",
      details: ["Пн-Пт: 8:00 - 18:00", "Сб: 9:00 - 15:00", "Нд: Вихідний"]
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
              Зв'яжіться з нами
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Готові обговорити ваші потреби в енергопостачанні? Залиште заявку, 
              і наш експерт зв'яжеться з вами протягом години для детальної консультації.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Контактна інформація */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-l-4 border-l-secondary">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-primary">
                        <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mr-3">
                          <info.icon className="h-5 w-5 text-secondary" />
                        </div>
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pl-16">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground mb-1">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}

                {/* Додаткова інформація */}
                <div className="bg-primary rounded-xl p-6 text-white">
                  <h4 className="text-white mb-3">
                    Термінові питання?
                  </h4>
                  <p className="text-white/90 mb-4">
                    Цілодобова лінія підтримки для наших клієнтів
                  </p>
                  <div className="text-xl font-medium text-secondary">
                    0 800 123 456
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Форма зворотного зв'язку */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary">
                    Отримати вигідну пропозицію
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Заповніть форму, і ми підготуємо індивідуальну пропозицію для вашого бізнесу
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Основна інформація */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Ім'я та прізвище *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Введіть ваше ім'я"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Електронна пошта *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Телефон *
                        </label>
                        <Input
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+38 (XXX) XXX-XX-XX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Компанія
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Назва вашої компанії"
                        />
                      </div>
                    </div>

                    {/* Тип послуги */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Тип послуги *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Оберіть тип послуги" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="supply">Постачання електроенергії</SelectItem>
                          <SelectItem value="consultation">Консультаційні послуги</SelectItem>
                          <SelectItem value="corporate">Корпоративні рішення</SelectItem>
                          <SelectItem value="legal">Юридична підтримка</SelectItem>
                          <SelectItem value="other">Інше</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Повідомлення */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Повідомлення
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Розкажіть детальніше про ваші потреби..."
                        rows={4}
                      />
                    </div>

                    {/* Кнопка відправки */}
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg"
                    >
                      Відправити заявку
                      <Send className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Додаткова інформація */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm max-w-4xl mx-auto">
              <h3 className="text-primary mb-6">
                Що відбувається після подачі заявки?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary font-medium">1</span>
                  </div>
                  <h4 className="text-primary mb-2">
                    Дзвінок протягом години
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Наш менеджер зв'яжеться для уточнення деталей
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary font-medium">2</span>
                  </div>
                  <h4 className="text-primary mb-2">
                    Аналіз потреб
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Проводимо детальний аналіз ваших енергетичних потреб
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary font-medium">3</span>
                  </div>
                  <h4 className="text-primary mb-2">
                    Персональна пропозиція
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Готуємо індивідуальну пропозицію протягом 24 годин
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