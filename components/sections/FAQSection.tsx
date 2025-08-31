import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function FAQSection() {
  const handleScrollToHelp = () => {
    const helpSection = document.getElementById('help-section');
    if (helpSection) {
      helpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "ЯК СТАТИ СПОЖИВАЧЕМ ЕНЕРГОЗАХІД?",
      answer: "Для підключення зверніться до нашого офісу з пакетом документів або подайте заявку онлайн."
    },
    {
      question: "ЯКІ ДОКУМЕНТИ ПОТРІБНІ ДЛЯ УКЛАДЕННЯ ДОГОВОРУ?",
      answer: "Заповнений зразок Заяви - приєднання, що є Додатком №1 до Договору постачання електричної енергії споживачу та статутні документи, що додаються до неї."
    },
    {
      question: "ЯК РОЗРАХОВУЄТЬСЯ ВАРТІСТЬ ЕЛЕКТРОЕНЕРГІЇ?",
      answer: "Вартість розраховується згідно з діючими тарифами НКРЕКП плюс вартість передачі. Якщо споживач бажає сплачувати за розподіл через постачальника, то до розрахунку додається вартість розподілу."
    },
    {
      question: "ЯКИЙ ПОРЯДОК РОЗГЛЯДУ ЗВЕРНЕНЬ/СКАРГ СПОЖИВАЧА?",
      answer: "Розгляд звернень/скарг споживача відбувається відповідно до п. 5.2.2., 8.3.2., 9.21 Правил роздрібного ринку електричної енергії"
    }
  ];

  return (
    <section className="py-20 bg-gray-50/30">
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
            <h2 className="text-primary text-3xl md:text-4xl mb-4">
              ЧАСТІ ЗАПИТАННЯ
            </h2>
            <p className="text-muted-foreground text-lg">
              Можливо, ваше питання вже має відповідь
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-gray-200/60 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-primary hover:no-underline py-6">
                    <span className="text-base md:text-lg">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Додаткова інформація */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground">
              Не знайшли відповідь на своє питання? {" "}
              <span 
                className="text-primary cursor-pointer hover:underline"
                onClick={handleScrollToHelp}
              >
                Зв'яжіться з нашими експертами
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}