import { motion } from "motion/react";
import { FileText, Download, ShieldCheck, Receipt } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { pdfUrlByFileName } from "../../lib/pdfUrls";

export function ImportantDocumentsSection() {
  const navigate = useNavigate();
  
  const documents = [
    {
      icon: ShieldCheck,
      title: "Ліцензія на постачання електроенергії",
      size: "2.4 MB",
      fileName: "license_electricity_supply.pdf"
    },
    {
      icon: Receipt,
      title: "Тарифи на електроенергію 2025",
      size: "1.2 MB", 
      fileName: "electricity_tariffs_2025.pdf"
    },
    {
      icon: FileText,
      title: "Договір електропостачання (зразок)",
      size: "856 KB",
      fileName: "electricity_contract_template.pdf"
    }
  ];

  const handleDownload = (fileName: string) => {
    const url = pdfUrlByFileName[fileName];
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-200/50 relative">
      {/* Декоративна лінія */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-secondary"></div>
      
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
            <h2 className="text-primary text-3xl md:text-4xl font-medium mb-6">
              ВАЖЛИВІ ДОКУМЕНТИ
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Ключові документи для ознайомлення та підключення
            </p>
          </motion.div>

          {/* Список документів */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {documents.map((document, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50/30 border border-gray-200/60 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center flex flex-col h-full">
                    {/* Іконка документу */}
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <document.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Назва документу */}
                    <h3 className="text-primary font-medium mb-4 flex-grow">
                      {document.title}
                    </h3>
                    
                    {/* Розмір файлу */}
                    <p className="text-muted-foreground text-sm mb-6">
                      {document.size}
                    </p>
                    
                    {/* Кнопка завантаження */}
                    <Button 
                      onClick={() => handleDownload(document.fileName)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground w-full group"
                    >
                      <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                      Завантажити
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Кнопка "Всі документи" */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              onClick={() => navigate('/documents')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 px-8 py-3"
            >
              ВСІ ДОКУМЕНТИ
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}