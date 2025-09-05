import { motion } from "motion/react";
import { Phone, AlertTriangle, Mail } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function EmergencyContactsSection() {
  const contacts = [
    {
      title: "У разі загорання електроприладів",
      description: "Спочатку має негайно вимикнути пожежну службу",
      number: "101",
      icon: AlertTriangle,
      color: "border-l-red-500 bg-red-50"
    },
    {
      title: "У разі розкрадання чи пошкодження",
      description: "При виявленні випадків вандалізму чи інших протиправних дій",
      number: "102",
      icon: Phone,
      color: "border-l-blue-500 bg-blue-50"
    },
    {
      title: "Гаряча лінія ТОВ \"ЕНЕРГОЗАХІД.\"",
      description: "У разі виникнення ситуацій, що становлять загрозу електробезпеці",
      phone: "+ 38(067) 493 37 73",
      email: "office@energowest.org",
      icon: Phone,
      color: "border-l-green-500 bg-green-50"
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
              Екстрені контакти
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          {/* Карточки контактів */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full hover:shadow-lg transition-shadow duration-300 border-l-4 ${contact.color}`}>
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                        <contact.icon className="h-8 w-8 text-secondary" />
                      </div>
                      
                      <h3 className="text-primary mb-4">
                        {contact.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {contact.description}
                      </p>
                      
                      {contact.number && (
                        <div className="text-3xl font-bold text-secondary mb-2">
                          {contact.number}
                        </div>
                      )}
                      
                      {contact.phone && !contact.number && (
                        <div className="space-y-2">
                          <div className="text-lg font-semibold text-secondary">
                            {contact.phone}
                          </div>
                          {contact.email && (
                            <div className="text-sm text-muted-foreground">
                              Email: <span className="text-secondary">{contact.email}</span>
                            </div>
                          )}
                        </div>
                      )}
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
