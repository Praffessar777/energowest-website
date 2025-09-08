import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle, Phone, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner@2.0.3";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    urgency: "",
    requestType: "",
    description: ""
  });

  const urgencyOptions = [
    { value: "low", label: "Низька" },
    { value: "medium", label: "Середня" },
    { value: "high", label: "Висока" },
    { value: "critical", label: "Критична" }
  ];

  const requestTypeOptions = [
    { value: "technical", label: "Технічна проблема" },
    { value: "billing", label: "Питання з рахунками" },
    { value: "connection", label: "Проблеми з підключенням" },
    { value: "documentation", label: "Питання щодо документів" },
    { value: "tariffs", label: "Консультація з тарифів" },
    { value: "other", label: "Інше питання" }
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
    if (!formData.fullName || !formData.phone || !formData.email || 
        !formData.urgency || !formData.requestType || !formData.description) {
      toast.error("Помилка", {
        description: "Будь ласка, заповніть всі обов'язкові поля",
        duration: 3000,
      });
      return;
    }

    // Симуляція відправки
    toast.success("Звернення надіслано!", {
      description: "Наш фахівець зв'яжеться з вами найближчим часом",
      duration: 4000,
    });

    // Скидання форми
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      urgency: "",
      requestType: "",
      description: ""
    });

    onClose();
  };

  const handleCancel = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      urgency: "",
      requestType: "",
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
                  <MessageCircle className="h-6 w-6 text-secondary" />
                  <h2 className="text-2xl font-semibold text-primary">Зв'язатися з підтримкою</h2>
                </div>
                {/* Description */}
                <p className="text-muted-foreground mb-8">
                  Заповніть форму нижче, і наш фахівець зв'яжеться з вами найближчим часом для вирішення вашого питання
                </p>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  Електронна пошта *
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

              {/* Urgency and Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">
                    Терміновість звернення *
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
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">
                    Тип звернення *
                  </Label>
                  <Select value={formData.requestType} onValueChange={(value) => handleInputChange("requestType", value)}>
                    <SelectTrigger className="bg-input-background border-gray-200 focus:border-secondary">
                      <SelectValue placeholder="Оберіть тип питання" />
                    </SelectTrigger>
                    <SelectContent>
                      {requestTypeOptions.map((option) => (
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
                  Детальний опис проблеми *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Детально опишіть вашу проблему або питання. Включіть будь-яку релевантну інформацію, яка може допомогти нам вирішити ваше питання швидше..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="bg-input-background border-gray-200 focus:border-secondary min-h-[120px] resize-none"
                />
              </div>

              {/* Emergency Alert */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-red-800 mb-1">Аварійна ситуація?</h4>
                    <p className="text-red-700 text-sm mb-3">
                      У випадку аварії або повного відключення електроенергії телефонуйте негайно:
                    </p>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-red-600" />
                      <span className="text-red-800">+38 (044) 239-27-53 (цілодобово)</span>
                    </div>
                  </div>
                </div>
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
                  className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Надіслати звернення
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