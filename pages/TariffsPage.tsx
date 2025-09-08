import { motion } from "motion/react";
import { Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { toast } from "sonner@2.0.3";

export function TariffsPage() {
  const documents = [
    {
      title: "Структура тарифу на послуги з передачі електричної енергії",
      format: "PDF",
      size: "3.2 МБ",
      downloadUrl: "public/docs/676443808df75689340702.pdf"
    },
    {
      title: "Тарифи на розподіл із застосуванням стимулюючого регулювання 2025 рік",
      format: "PDF",
      size: "2.8 МБ",
      downloadUrl: "/documents/tariffs/tariff-stimulating-regulation-2025.pdf"
    }
  ];

  const handleDownload = (document: typeof documents[0]) => {
    // Створюємо посилання для завантаження
    const link = document.createElement('a');
    link.href = document.downloadUrl;
    link.download = document.title + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Показуємо повідомлення про успішне завантаження
    toast.success("Завантаження розпочато", {
      description: `Документ "${document.title}" завантажується на ваш пристрій.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Заголовок та підзаголовок */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-primary mb-6">
                ДОКУМЕНТИ ПО ТАРИФАХ
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Завантажте офіційні документи про тарифи та методики розрахунку
              </p>
            </motion.div>

            {/* Список документів */}
            <div className="space-y-6">
              {documents.map((document, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-border rounded-lg p-6 flex items-center justify-between hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    {/* Іконка завантаження */}
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Download className="h-6 w-6 text-primary-foreground" />
                    </div>
                    
                    {/* Інформація про документ */}
                    <div>
                      <h3 className="text-primary mb-1">
                        {document.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {document.format} • {document.size}
                      </p>
                    </div>
                  </div>

                  {/* Кнопка завантаження */}
                  <Button
                    onClick={() => handleDownload(document)}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2 flex-shrink-0"
                  >
                    Завантажити
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Додаткова інформація */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-gray-50/50 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-muted-foreground">
                  Усі документи представлені в актуальних редакціях відповідно до чинного законодавства України. 
                  У разі виникнення питань звертайтеся до наших фахівців.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
