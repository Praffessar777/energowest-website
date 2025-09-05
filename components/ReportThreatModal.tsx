import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, AlertTriangle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner@2.0.3";

interface ReportThreatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReportThreatModal({ isOpen, onClose }: ReportThreatModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    threatType: "",
    urgency: "",
    description: ""
  });

  const threatTypeOptions = [
    { value: "damaged_lines", label: "Пошкоджені лінії електропередач" },
    { value: "fallen_wires", label: "Обірвані дроти" },
    { value: "electrical_fire", label: "Пожежа через електрику" },
    { value: "unsafe_installation", label: "Небезпечна електроустановка" },
    { value: "transformer_issue", label: "Проблема з трансформатором" },
    { value: "illegal_connection", label: "Незаконне підключення" },
    { value: "other", label: "Інша загроза" }
  ];

  const urgencyOptions = [
    { value: "immediate", label: "Негайно (загроза життю)" },
    { value: "urgent", label: "Терміново (потенційна небезпека)" },
    { value: "moderate", label: "Помірно (потребує перевірки)" },
    { value: "low", label: "Низька (планова перевірка)" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валідація
    if (!formData.fullName || !formData.phone || !formData.location || 
        !formData.threatType || !formData.urgency || !formData.description) {
      toast.error("Помилка", {
        description: "Будь ласка, заповніть всі обов'язкові поля",
        duration: 3000,
      });
      return;
    }

    // Симуляція відправки
    const urgencyLevel = formData.urgency;
    let responseMessage = "Дякуємо за повідомлення! Наш фахівець перевірить інформацію найближчим часом.";
    
    if (urgencyLevel === "immediate") {
      responseMessage = "Ваше повідомлення про критичну загрозу негайно передано до служби екстреного реагування!";
    } else if (urgencyLevel === "urgent") {
      responseMessage = "Ваше терміново повідомлення прийнято. Фахівець виїде на перевірку протягом доби.";
    }

    toast.success("Повідомлення надіслано!", {
      description: responseMessage,
      duration: 5000,
    });

    // Скидання форми
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      location: "",
      threatType: "",
      urgency: "",
      description: ""
    });

    onClose();
  };

  const handleCancel = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      location: "",
      threatType: "",
      urgency: "",
      description: ""
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <h2 className="text-2xl font-semibold text-primary">Повідомити про загрозу електробезпеці</h2>
                </div>
                {/* Description */}
                <p className="text-muted-foreground mb-8">
                  Негайно повідомте нас про будь-яку ситуацію, що може становити загрозу електробезпеці. 
                  Ваша пильність допомагає запобігти аваріям та захистити життя людей.
                </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Emergency Contacts Box */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-red-800 mb-2">Екстрені контакти</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-red-600" />
                        <span className="text-red-800">Гаряча лінія: +38(067) 493 37 73</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-red-600" />
                        <span className="text-red-800">Email: office@energowest.org</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-red-600" />
                        <span className="text-red-700">Цілодобово, без вихідних</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-sm text-muted-foreground mb-2 block">
                    Ім'я та прізвище *
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Іван Іваненко"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="bg-input-background border-gray-200 focus:border-secondary"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm text-muted-foreground mb-2 block">
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+38 (0XX) XXX-XX-XX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-input-background border-gray-200 focus:border-secondary"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                  Електронна пошта (опціонально)
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-input-background border-gray-200 focus:border-secondary"
                />
              </div>

              {/* Location */}
              <div>
                <Label htmlFor="location" className="text-sm text-muted-foreground mb-2 block">
                  Місце розташування загрози *
                </Label>
                <Input
                  id="location"
                  placeholder="Вкажіть точну адресу або опис місцевості"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="bg-input-background border-gray-200 focus:border-secondary"
                />
              </div>

              {/* Threat Type and Urgency Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">
                    Тип загрози *
                  </Label>
                  <Select value={formData.threatType} onValueChange={(value) => handleInputChange("threatType", value)}>
                    <SelectTrigger className="bg-input-background border-gray-200 focus:border-secondary">
                      <SelectValue placeholder="Оберіть тип загрози" />
                    </SelectTrigger>
                    <SelectContent>
                      {threatTypeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">
                    Рівень терміновості *
                  </Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                    <SelectTrigger className="bg-input-background border-gray-200 focus:border-secondary">
                      <SelectValue placeholder="Оберіть рівень терміновості" />
                    </SelectTrigger>
                    <SelectContent>
                      {urgencyOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-sm text-muted-foreground mb-2 block">
                  Детальний опис загрози *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Детально опишіть ситуацію: що саме ви побачили, які ознаки небезпеки, чи є постраждалі тощо..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="bg-input-background border-gray-200 focus:border-secondary min-h-[120px] resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className="flex-1 border-gray-300 text-muted-foreground hover:bg-gray-50"
                >
                  Скасувати
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  Надіслати повідомлення
                </Button>
              </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
