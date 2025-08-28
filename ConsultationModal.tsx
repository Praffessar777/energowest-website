import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, Calendar, Clock, User, Mail, Building, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
// Remove date-fns imports for now - they might cause issues
// import { format } from "date-fns";
// import { uk } from "date-fns/locale";
import { toast } from "sonner@2.0.3";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [step, setStep] = useState<'info' | 'form'>('info');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    consultationType: '',
    consultationTopic: '',
    time: '',
    additionalInfo: ''
  });

  const consultationTypes = [
    'Підключення до електромереж',
    'Зміна тарифного плану',
    'Технічна консультація',
    'Аварійна ситуація',
    'Загальні питання'
  ];

  const consultationTopics = [
    'Комерційне підключення',
    'Тарифи та розрахунки',
    'Технічні вимоги',
    'Документообіг'
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const handleSubmit = () => {
    // Validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Помилка", {
        description: "Будь ласка, заповніть всі обов'язкові поля",
      });
      return;
    }

    // Demo submission
    toast.success("Заявку надіслано!", {
      description: "Наш менеджер зв'яжеться з вами найближчим часом",
      duration: 5000,
    });
    
    // Reset form and close modal
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      consultationType: '',
      consultationTopic: '',
      time: '',
      additionalInfo: ''
    });
    setSelectedDate(undefined);
    setStep('info');
    onClose();
  };

  const handleClose = () => {
    setStep('info');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={handleClose}
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
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {step === 'info' && (
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Додаткова інформація
                </h2>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <p className="text-muted-foreground mb-6">
                    Опишіть детальніше ваші питання або специфічні потреби для консультації...
                  </p>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-3">
                        Важлива інформація:
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Телефонні та відеоконсультації безкоштовні і тривають до 30 хвилин</li>
                        <li>• Зустрічі в офісі можливі в робочі дні з 9:00 до 17:00</li>
                        <li>• Виїзні консультації оплачуються окремо згідно прайсу</li>
                        <li>• Наш експерт зв'яжеться з вами для підтвердження часу</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-end">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="px-6"
                  >
                    Скасувати
                  </Button>
                  <Button
                    onClick={() => setStep('form')}
                    className="bg-secondary hover:bg-secondary/90 text-white px-6"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Забронювати консультацію
                  </Button>
                </div>
              </div>
            )}

            {step === 'form' && (
              <div className="overflow-y-auto max-h-[90vh]">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-primary mb-2">
                    <User className="h-6 w-6 inline mr-2" />
                    Замовити консультацію
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Забронюйте безкоштовну консультацію з нашими експертами з енергопостачання
                  </p>

                  {/* Contact Information */}
                  <div className="bg-blue-50/30 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-primary mb-6">
                      Контактна інформація
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Ім'я та прізвище *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Іван Іваненко"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+38 (0XX) XXX-XX-XX"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Електронна пошта *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="ivan@example.com"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Назва компанії</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder='ТОВ "Приклад"'
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Consultation Details */}
                  <div className="bg-yellow-50/30 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-primary mb-6">
                      Деталі консультації
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="consultationType">Тип консультації *</Label>
                        <Select value={formData.consultationType} onValueChange={(value) => setFormData({...formData, consultationType: value})}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Оберіть тип консультації" />
                          </SelectTrigger>
                          <SelectContent>
                            {consultationTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="consultationTopic">Тема консультації *</Label>
                        <Select value={formData.consultationTopic} onValueChange={(value) => setFormData({...formData, consultationTopic: value})}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Оберіть тему" />
                          </SelectTrigger>
                          <SelectContent>
                            {consultationTopics.map((topic) => (
                              <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Бажана дата *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal mt-1"
                            >
                              <Calendar className="mr-2 h-4 w-4" />
                              {selectedDate ? selectedDate.toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' }) : "Оберіть дату"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <CalendarComponent
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <Label htmlFor="time">Бажаний час *</Label>
                        <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                          <SelectTrigger className="mt-1">
                            <Clock className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Оберіть час" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mb-6">
                    <Label htmlFor="additionalInfo">Додаткова інформація</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                      placeholder="Опишіть детальніше ваші питання або специфічні потреби для консультації..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  {/* Important Info */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">
                          Важлива інформація:
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Телефонні та відеоконсультації безкоштовні і тривають до 30 хвилин</li>
                          <li>• Зустрічі в офісі можливі в робочі дні з 9:00 до 17:00</li>
                          <li>• Виїзні консультації оплачуються окремо згідно прайсу</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-end">
                    <Button
                      variant="outline"
                      onClick={() => setStep('info')}
                      className="px-6"
                    >
                      Назад
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="bg-secondary hover:bg-secondary/90 text-white px-8"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Замовити консультацію
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}