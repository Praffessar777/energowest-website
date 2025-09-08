import { useState } from "react";
import { motion } from "motion/react";
import { Search, FileText, Download, Eye, ShieldCheck, Receipt, Scale, Briefcase } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { toast } from "sonner@2.0.3";

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
  downloadUrl: string;
  isExternal?: boolean;
  viewOnly?: boolean;
}

export function DocumentsListSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Всі документи", count: 14, icon: FileText },
    { id: "licenses", label: "Ліцензії та дозволи", count: 0, icon: ShieldCheck },
    { id: "tariffs", label: "Тарифи та ціноутворення", count: 2, icon: Receipt },
    { id: "legal", label: "Нормативно - правові акти", count: 12, icon: Scale },
    { id: "contracts", label: "Договори та зразки", count: 0, icon: Briefcase },
  ];

  const documents: Document[] = [
    // Тарифи та ціноутворення
    {
      id: "13",
      title: "Структура тарифу на послуги з передачі електричної енергії",
      description: "Детальна структура та компоненти тарифу на послуги з передачі електричної енергії по мережах",
      category: "tariffs",
      categoryLabel: "Тарифна структура",
      format: "PDF",
      size: "3.2 МБ",
      date: "20.02.2025",
      isOfficial: true,
      downloadUrl: "public/docs/676443808df75689340702.pdf"
    },
    {
      id: "24",
      title: "Тарифи на послуги з розподілу електричної енергії, що діють з 01 січня 2025 року",
      description: "Офіційні тарифи на розподіл електричної енергії із застосуванням стимулюючого регулювання на 2025 рік",
      category: "tariffs",
      categoryLabel: "Тарифна структура",
      format: "PDF",
      size: "2.8 МБ",
      date: "01.01.2025",
      isOfficial: true,
      downloadUrl: "public/docs/Tarifi_na_poslugi_z_rozpodilu_elektrichnoi_energii_shho_dijut_z_01.pdf"
    },

    // Нормативно - правові акти
    {
      id: "11",
      title: "Закон України \"Про ринок електричної енергії\"",
      description: "Офіційний текст Закону України \"Про ринок електричної енергії\" № 2019-VIII від 13 квітня 2017 року",
      category: "legal",
      categoryLabel: "Закон України",
      format: "HTML",
      size: "Онлайн",
      date: "13.04.2017",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/2019-19#Text",
      isExternal: true,
      viewOnly: true
    },
    {
      id: "12",
      title: "Закон України \"Про захист економічної конкуренції\"",
      description: "Офіційний текст Закону України \"Про захист економічної конкуренції\" № 2210-III від 11 січня 2001 року",
      category: "legal",
      categoryLabel: "Закон України",
      format: "HTML",
      size: "Онлайн",
      date: "11.01.2001",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/2210-14#Text",
      isExternal: true,
      viewOnly: true
    },
    {
      id: "14",
      title: "Закон України \"Про захист персональних даних\"",
      description: "Офіційний текст Закону України \"Про захист персональних даних\" № 2297-VI від 1 червня 2010 року",
      category: "legal",
      categoryLabel: "Закон України",
      format: "HTML",
      size: "Онлайн",
      date: "01.06.2010",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/2297-17#Text",
      isExternal: true,
      viewOnly: true
    },
    {
      id: "15",
      title: "Закон України \"Про Національну комісію, що здійснює державне регулювання у сферах енергетики та комунальних послуг\"",
      description: "Офіційний текст Закону України \"Про Національну комісію, що здійснює державне регулювання у сферах енергетики та комунальних послуг\" № 1540-VIII від 22 вересня 2016 року",
      category: "legal",
      categoryLabel: "Закон України",
      format: "HTML",
      size: "Онлайн",
      date: "22.09.2016",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/1540-19#Text",
      isExternal: true,
      viewOnly: true
    },
    {
      id: "16",
      title: "Закон України \"Про особливості доступу до інформації у сферах постачання електричної енергії, природного газу, теплопостачання, централізованого постачання гарячої води, централізованого питного водопостачання та водовідведення\"",
      description: "Офіційний текст Закону України \"Про особливості доступу до інформації у сферах постачання електричної енергії, природного газу, теплопостачання, централізованого постачання гарячої води, централізованого питного водопостачання та водовідведення\" № 887-IX від 9 квітня 2019 року",
      category: "legal",
      categoryLabel: "Закон України",
      format: "HTML",
      size: "Онлайн",
      date: "09.04.2019",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/887-19#Text",
      isExternal: true,
      viewOnly: true
    },
    {
      id: "17",
      title: "Постанова НКРЕКП № 307 від 14.03.2018 \"Про затвердження Правил ринку\"",
      description: "Офіційний текст Постанови Національної комісії, що здійснює державне регулювання у сферах енергетики та комунальних послуг № 307 від 14 березня 2018 року \"Про затвердження Правил ринку\"",
      category: "legal",
      categoryLabel: "Постанова НКРЕКП",
      format: "HTML",
      size: "Онлайн",
      date: "14.03.2018",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/v0307874-18#Text",
      isExternal: true,
      viewOnly: true
    },
    {
      id: "18",
      title: "Постанова НКРЕКП № 1469 від 27.12.2017 \"Про затвердження Ліцензійних умов провадження господарської діяльності з постачання електричної енергії споживачу\"",
      description: "Офіційний текст Постанови Національної комісії, що здійснює державне регулювання у сферах енергетики та комунальних послуг № 1469 від 27 грудня 2017 року \"Про затвердження Ліцензійних умов провадження господарської діяльності з постачання електричної енергії споживачу\"",
      category: "legal",
      categoryLabel: "Постанова НКРЕКП",
      format: "HTML",
      size: "Онлайн",
      date: "27.12.2017",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/v1469874-17#Text",
      isExternal: true,
      viewOnly: true
    },
    {
      id: "19",
      title: "Постанова НКРЕКП № 309 від 14.03.2018 \"Про затвердження Кодексу системи передачі\"",
      description: "Офіційний текст Постанови Національної комісії, що здійснює державне регулювання у сферах енергетики та комунальних послуг № 309 від 14 березня 2018 року \"Про затвердження Кодексу системи передачі\"",
      category: "legal",
      categoryLabel: "Постанова НКРЕКП",
      format: "HTML",
      size: "Онлайн",
      date: "14.03.2018",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/v0309874-18#Text",
      isExternal: true,
      viewOnly: true
    },
    {
      id: "23",
      title: "Постанова НКРЕКП № 310 від 14.03.2018 \"Про затвердження Кодексу систем розподілу\"",
      description: "Офіційний текст Постанови Національної комісії, що здійснює державне регулювання у сферах енергетики та комунальних послуг № 310 від 14 березня 2018 року \"Про затвердження Кодексу систем розподілу\"",
      category: "legal",
      categoryLabel: "Постанова НКРЕКП",
      format: "HTML",
      size: "Онлайн",
      date: "14.03.2018",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/v0310874-18#Text",
      isExternal: true,
      viewOnly: true
    },
    {
      id: "20",
      title: "Постанова НКРЕКП № 311 від 14.03.2018 \"Про затвердження Кодексу комерційного обліку електричної енергії\"",
      description: "Офіційний текст Постанови Національної комісії, що здійснює державне регулювання у сферах енергетики та комунальних послуг № 311 від 14 березня 2018 року \"Про затвердження Кодексу комерційного обліку електричної енергії\"",
      category: "legal",
      categoryLabel: "Постанова НКРЕКП",
      format: "HTML",
      size: "Онлайн",
      date: "14.03.2018",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/v0311874-18#Text",
      isExternal: true,
      viewOnly: true
    },
    {
      id: "21",
      title: "Постанова НКРЕКП № 308 від 14.03.2018 \"Про затвердження Правил ринку «на добу наперед» та внутрішньодобового ринку\"",
      description: "Офіційний текст Постанови Національної комісії, що здійснює державне регулювання у сферах енергетики та комунальних послуг № 308 від 14 березня 2018 року \"Про затвердження Правил ринку «на добу наперед» та внутрішньодобового ринку\"",
      category: "legal",
      categoryLabel: "Постанова НКРЕКП",
      format: "HTML",
      size: "Онлайн",
      date: "14.03.2018",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/v0308874-18#Text",
      isExternal: true,
      viewOnly: true
    },
    {
      id: "22",
      title: "Постанова НКРЕКП № 1468 від 27.12.2017 \"Про затвердження Ліцензійних умов провадження господарської діяльності з перепродажу електричної енергії (трейдерської діяльності)\"",
      description: "Офіційний текст Постанови Національної комісії, що здійснює державне регулювання у сферах енергетики та комунальних послуг № 1468 від 27 грудня 2017 року \"Про затвердження Ліцензійних умов провадження господарської діяльності з перепродажу електричної енергії (трейдерської діяльності)\"",
      category: "legal",
      categoryLabel: "Постанова НКРЕКП",
      format: "HTML",
      size: "Онлайн",
      date: "27.12.2017",
      isOfficial: true,
      downloadUrl: "https://zakon.rada.gov.ua/laws/show/v1468874-17#Text",
      isExternal: true,
      viewOnly: true
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || doc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (document: Document) => {
    // Створюємо посилання для завантаження
    const link = document.createElement('a');
    link.href = document.downloadUrl;
    link.download = document.title.replace(/[^a-zA-Z0-9а-яА-Я\s]/g, '') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Показуємо повідомлення про успішне завантаження
    toast.success("Завантаження розпочато", {
      description: `Документ "${document.title}" завантажується на ваш пристрій.`,
      duration: 3000,
    });
  };

  const handlePreview = (document: Document) => {
    // Відкриваємо документ у новій вкладці для перегляду
    window.open(document.downloadUrl, '_blank');
    
    const message = document.isExternal 
      ? "Перехід на офіційний сайт" 
      : "Документ відкрито";
    
    const description = document.isExternal
      ? `Переходимо до "${document.title}" на офіційному сайті Верховної Ради України.`
      : `Документ "${document.title}" відкрито у новій вкладці.`;
    
    toast.info(message, {
      description: description,
      duration: 3000,
    });
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
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-2xl mb-1">
              ЗНАЙДЕНО ДОКУМЕНТІВ: {filteredDocuments.length}
            </h2>
            <p className="text-muted-foreground">
              Всі категорії
            </p>
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

                        <div className="flex items-center justify-end">
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
                            {!document.viewOnly && (
                              <Button
                                onClick={() => handleDownload(document)}
                                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Завантажити
                              </Button>
                            )}
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
