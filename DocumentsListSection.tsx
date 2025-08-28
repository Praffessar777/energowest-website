import { useState } from "react";
import { motion } from "motion/react";
import { Search, FileText, Download, Eye, ShieldCheck, Receipt, Scale, Briefcase } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

interface Document {
  id: string;
  title: string;
  description: string;
  category: "licenses" | "tariffs" | "legal" | "contracts";
  categoryLabel: string;
  format: string;
  size: string;
  date: string;
  isOfficial?: boolean;
  tags?: string[];
}

export function DocumentsListSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Всі документи", count: 24, icon: FileText },
    { id: "licenses", label: "Ліцензії та дозволи", count: 8, icon: ShieldCheck },
    { id: "tariffs", label: "Тарифи та ціноутворення", count: 6, icon: Receipt },
    { id: "legal", label: "Правові документи", count: 7, icon: Scale },
    { id: "contracts", label: "Договори та зразки", count: 3, icon: Briefcase },
  ];

  const documents: Document[] = [
    {
      id: "1",
      title: "Ліцензія на постачання електричної енергії споживачам",
      description: "Ліцензія № 2024/1234/ГТ від НКРЕКП на здійснення господарської діяльності",
      category: "licenses",
      categoryLabel: "Офіційний документ",
      format: "PDF",
      size: "2.4 MB",
      date: "15.01.2024",
      isOfficial: true
    },
    {
      id: "2",
      title: "Сертифікат відповідності системи управління якістю",
      description: "ISO 9001:2015 - система управління якістю",
      category: "licenses",
      categoryLabel: "Сертифікат",
      format: "PDF", 
      size: "1.8 MB",
      date: "22.03.2024"
    },
    {
      id: "3",
      title: "Постанова НКРЕКП № 312 про тарифи на 2024 рік",
      description: "Офіційні тарифи на електричну енергію для всіх категорій споживачів",
      category: "tariffs",
      categoryLabel: "Нормативний акт",
      format: "PDF",
      size: "3.2 MB", 
      date: "01.01.2024"
    },
    {
      id: "4",
      title: "Методика розрахунку вартості електроенергії",
      description: "Детальна методика розрахунку складових тарифу",
      category: "tariffs",
      categoryLabel: "Методичні матеріали",
      format: "PDF",
      size: "1.5 MB",
      date: "15.02.2024"
    },
    {
      id: "5",
      title: "Правила надання послуг з електропостачання",
      description: "Офіційні правила та умови надання послуг споживачам",
      category: "legal",
      categoryLabel: "Правовий документ",
      format: "PDF",
      size: "2.1 MB",
      date: "10.01.2024"
    },
    {
      id: "6",
      title: "Договір електропостачання (зразок для юридичних осіб)",
      description: "Типовий договір на постачання електричної енергії для підприємств",
      category: "contracts",
      categoryLabel: "Зразок договору",
      format: "PDF",
      size: "945 KB",
      date: "28.02.2024"
    },
    {
      id: "7",
      title: "Процедура підключення нових споживачів",
      description: "Покрокова інструкція для підключення до електромережі",
      category: "legal",
      categoryLabel: "Інструкція",
      format: "PDF",
      size: "1.3 MB",
      date: "05.03.2024"
    },
    {
      id: "8",
      title: "Заява на укладення договору (бланк)",
      description: "Офіційний бланк заяви для укладення договору електропостачання",
      category: "contracts",
      categoryLabel: "Бланк",
      format: "PDF",
      size: "450 KB",
      date: "12.01.2024"
    },
    {
      id: "9",
      title: "Акт про надання послуг (зразок)",
      description: "Типовий акт виконаних робіт з електропостачання",
      category: "contracts",
      categoryLabel: "Зразок документу",
      format: "PDF",
      size: "680 KB",
      date: "20.02.2024"
    },
    {
      id: "10",
      title: "Тарифи на балансуючий ринок 2024",
      description: "Офіційні тарифи на послуги балансуючого ринку електроенергії",
      category: "tariffs",
      categoryLabel: "Тарифи",
      format: "PDF",
      size: "2.8 MB",
      date: "15.01.2024"
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || doc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (document: Document) => {
    // TODO: Implement actual download functionality
  };

  const handlePreview = (document: Document) => {
    // TODO: Implement actual preview functionality
  };

  const handleDownloadAll = () => {
    // TODO: Implement download all functionality
  };

  return (
    <section className="py-16 bg-gray-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Поле пошуку */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Пошук документів..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 text-lg border-gray-200 focus:border-secondary"
              />
            </div>
          </motion.div>

          {/* Фільтри категорій */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-6 h-auto flex flex-col items-center gap-3 relative ${
                    activeCategory === category.id 
                      ? "bg-primary text-white border-primary" 
                      : "bg-white text-primary border-gray-200 hover:border-secondary/50"
                  }`}
                >
                  <category.icon className="h-6 w-6" />
                  <div className="text-center">
                    <div className="text-sm leading-tight">
                      {category.label}
                    </div>
                  </div>
                  <Badge 
                    variant={activeCategory === category.id ? "secondary" : "outline"}
                    className={`absolute -top-2 -right-2 ${
                      activeCategory === category.id ? "bg-secondary text-primary" : "bg-primary text-white"
                    }`}
                  >
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Заголовок результатів */}
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-primary text-2xl mb-1">
                ЗНАЙДЕНО ДОКУМЕНТІВ: {filteredDocuments.length}
              </h2>
              <p className="text-muted-foreground">
                Всі категорії
              </p>
            </div>
            <Button 
              variant="outline"
              onClick={handleDownloadAll}
              className="border-primary text-primary hover:bg-primary/5"
            >
              <Download className="h-4 w-4 mr-2" />
              Завантажити всі
            </Button>
          </motion.div>

          {/* Список документів */}
          <div className="space-y-6">
            {filteredDocuments.map((document, index) => (
              <motion.div
                key={document.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border border-gray-200/60 hover:border-secondary/30 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Іконка документу */}
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-8 w-8 text-primary" />
                      </div>

                      {/* Основна інформація */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-primary text-lg leading-tight">
                            {document.title}
                          </h3>
                          <Badge 
                            variant={document.isOfficial ? "default" : "secondary"}
                            className={document.isOfficial ? "bg-primary text-white" : "bg-secondary/20 text-secondary-foreground"}
                          >
                            {document.categoryLabel}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {document.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <span>Формат: {document.format}</span>
                            <span>Розмір: {document.size}</span>
                            <span>Дата: {document.date}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handlePreview(document)}
                              className="border-gray-300 text-muted-foreground hover:border-secondary/50 hover:text-secondary-foreground"
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              Переглянути
                            </Button>
                            <Button
                              onClick={() => handleDownload(document)}
                              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Завантажити
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Повідомлення, якщо нічого не знайдено */}
          {filteredDocuments.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FileText className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-lg text-muted-foreground mb-2">
                Документи не знайдені
              </h3>
              <p className="text-muted-foreground">
                Спробуйте змінити критерії пошуку або оберіть іншу категорію
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}