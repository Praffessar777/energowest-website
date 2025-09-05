import { motion } from "motion/react";
import { AlertTriangle, Info } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function ElectricalSafetyInfoSection() {
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
              Що таке повідомлення про загрозу електробезпеці?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          {/* Основна інформація */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Info className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Це інформація про події, які становлять загрозу електробезпеці людей, тварин або 
                      можуть призвести до системних збоїв у роботі обладнання чи аварій на 
                      виробництві, що надається з метою оперативного реагування і швидкої локалізації 
                      події.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Важливе попередження */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-l-4 border-l-secondary bg-secondary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-primary mb-3">
                      Важливо пам'ятати
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Швидке реагування на загрози електробезпеці може врятувати життя та запобігти 
                      серйозним матеріальним збиткам. Завжди дотримуйтесь правил безпеки.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
