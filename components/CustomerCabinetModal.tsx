import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { X, User, Lock, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

interface CustomerCabinetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalMode = "login" | "register";
type RegisterStep = 1 | 2 | 3;

interface LoginData {
  login: string;
  password: string;
}

interface PersonalData {
  organizationName: string;
  edrpouCode: string;
  phone: string;
  email: string;
  legalAddress: string;
}

interface ConnectionData {
  connectionAddress: string;
  estimatedConsumption: string;
  connectionType: "new" | "switch" | "additional";
  hasExistingMeter: boolean;
}

export function CustomerCabinetModal({ isOpen, onClose }: CustomerCabinetModalProps) {
  const [mode, setMode] = useState<ModalMode>("login");
  const [registerStep, setRegisterStep] = useState<RegisterStep>(1);
  
  const [loginData, setLoginData] = useState<LoginData>({
    login: "",
    password: ""
  });

  const [personalData, setPersonalData] = useState<PersonalData>({
    organizationName: "",
    edrpouCode: "",
    phone: "",
    email: "",
    legalAddress: ""
  });

  const [connectionData, setConnectionData] = useState<ConnectionData>({
    connectionAddress: "",
    estimatedConsumption: "1500",
    connectionType: "new",
    hasExistingMeter: false
  });

  const handleClose = () => {
    setMode("login");
    setRegisterStep(1);
    setLoginData({ login: "", password: "" });
    // Reset form data
    setPersonalData({
      organizationName: "",
      edrpouCode: "",
      phone: "",
      email: "",
      legalAddress: ""
    });
    setConnectionData({
      connectionAddress: "",
      estimatedConsumption: "1500",
      connectionType: "new",
      hasExistingMeter: false
    });
    onClose();
  };

  const fillTestData = () => {
    setPersonalData({
      organizationName: 'ТОВ "ТЕХПРОМБУД"',
      edrpouCode: "42567891",
      phone: "+380671234567",
      email: "info@tehprombud.com",
      legalAddress: "м. Київ, вул. Промислова, 25, оф. 12"
    });
    setConnectionData({
      connectionAddress: "м. Київ, вул. Індустріальна, 8, корп. А",
      estimatedConsumption: "2500",
      connectionType: "switch",
      hasExistingMeter: true
    });
  };

  const handleLogin = () => {
    if (!loginData.login || !loginData.password) {
      toast.error("Заповніть всі поля");
      return;
    }
    
    toast.success("Успішний вхід", {
      description: "Перенаправлення до кабінету споживача...",
      duration: 2000,
    });
    
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleRegisterNext = () => {
    if (registerStep === 1) {
      // Валідація першого кроку
      const { organizationName, edrpouCode, phone, email, legalAddress } = personalData;
      if (!organizationName || !edrpouCode || !phone || !email || !legalAddress) {
        toast.error("Заповніть всі обов'язкові поля");
        return;
      }
      setRegisterStep(2);
    } else if (registerStep === 2) {
      // Валідація другого кроку
      if (!connectionData.connectionAddress) {
        toast.error("Вкажіть адресу підключення");
        return;
      }
      setRegisterStep(3);
    }
  };

  const handleRegisterBack = () => {
    if (registerStep === 2) {
      setRegisterStep(1);
    } else if (registerStep === 3) {
      setRegisterStep(2);
    }
  };

  const handleRegisterComplete = () => {
    toast.success("Реєстрація завершена", {
      description: "Ваша заявка відправлена на розгляд. Очікуйте дзвінка від менеджера.",
      duration: 4000,
    });
    
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const renderLoginForm = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Tab buttons */}
      <div className="flex rounded-lg bg-gray-100 p-1 mb-8">
        <button
          onClick={() => setMode("login")}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
            mode === "login"
              ? "bg-white shadow-sm text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          <User className="h-4 w-4" />
          Увійти
        </button>
        <button
          onClick={() => {
            setMode("register");
            fillTestData();
          }}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
            mode === "register"
              ? "bg-white shadow-sm text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          <User className="h-4 w-4" />
          Зареєструватись
        </button>
      </div>

      {/* Login form */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="login" className="text-primary mb-2 block">
            Логін *
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              id="login"
              type="text"
              placeholder="Ваш логін або email"
              value={loginData.login}
              onChange={(e) => setLoginData(prev => ({ ...prev, login: e.target.value }))}
              className="pl-10 bg-input-background border-gray-200"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="password" className="text-primary mb-2 block">
            Пароль *
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              id="password"
              type="password"
              placeholder="Ваш пароль"
              value={loginData.password}
              onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
              className="pl-10 bg-input-background border-gray-200"
            />
          </div>
        </div>

        <div className="text-left">
          <button className="text-secondary hover:underline text-sm">
            Забули пароль?
          </button>
        </div>

        <Button 
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white py-3"
        >
          <User className="h-4 w-4 mr-2" />
          УВІЙТИ ДО КАБІНЕТУ
        </Button>
      </div>
    </motion.div>
  );

  const renderRegisterStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Tab buttons */}
      <div className="flex rounded-lg bg-gray-100 p-1 mb-8">
        <button
          onClick={() => setMode("login")}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
            mode === "login"
              ? "bg-white shadow-sm text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          <User className="h-4 w-4" />
          Увійти
        </button>
        <button
          onClick={() => {
            setMode("register");
            fillTestData();
          }}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
            mode === "register"
              ? "bg-white shadow-sm text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          <User className="h-4 w-4" />
          Зареєструватись
        </button>
      </div>

      {/* Step indicator */}
      <div className="text-center mb-8">
        <h3 className="text-secondary text-xl mb-2">ОСОБИСТІ ДАНІ</h3>
        <p className="text-muted-foreground text-sm">Крок 1 з 3</p>
        <div className="mt-3 p-2 bg-blue-50 rounded-md text-xs text-muted-foreground">
          💡 Дані автоматично заповнені для демонстрації
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="organizationName" className="text-primary mb-2 block">
            Назва організації *
          </Label>
          <Input
            id="organizationName"
            type="text"
            placeholder='Наприклад: ТОВ "ТЕХПРОМБУД"'
            value={personalData.organizationName}
            onChange={(e) => setPersonalData(prev => ({ ...prev, organizationName: e.target.value }))}
            className="bg-input-background border-gray-200"
          />
        </div>

        <div>
          <Label htmlFor="edrpouCode" className="text-primary mb-2 block">
            Код ЄДРПОУ *
          </Label>
          <Input
            id="edrpouCode"
            type="text"
            placeholder="Наприклад: 42567891"
            value={personalData.edrpouCode}
            onChange={(e) => setPersonalData(prev => ({ ...prev, edrpouCode: e.target.value }))}
            className="bg-input-background border-gray-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" className="text-primary mb-2 block">
              Телефон *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+380671234567"
              value={personalData.phone}
              onChange={(e) => setPersonalData(prev => ({ ...prev, phone: e.target.value }))}
              className="bg-input-background border-gray-200"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-primary mb-2 block">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="info@tehprombud.com"
              value={personalData.email}
              onChange={(e) => setPersonalData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-input-background border-gray-200"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="legalAddress" className="text-primary mb-2 block">
            Юридична адреса *
          </Label>
          <Input
            id="legalAddress"
            type="text"
            placeholder="м. Київ, вул. Промислова, 25, оф. 12"
            value={personalData.legalAddress}
            onChange={(e) => setPersonalData(prev => ({ ...prev, legalAddress: e.target.value }))}
            className="bg-input-background border-gray-200"
          />
        </div>

        <div className="flex justify-end pt-4">
          <Button 
            onClick={handleRegisterNext}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8"
          >
            Далі
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );

  const renderRegisterStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Tab buttons */}
      <div className="flex rounded-lg bg-gray-100 p-1 mb-8">
        <button
          onClick={() => setMode("login")}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
            mode === "login"
              ? "bg-white shadow-sm text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          <User className="h-4 w-4" />
          Увійти
        </button>
        <button
          onClick={() => {
            setMode("register");
            fillTestData();
          }}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
            mode === "register"
              ? "bg-white shadow-sm text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          <User className="h-4 w-4" />
          Зареєструватись
        </button>
      </div>

      {/* Step indicator */}
      <div className="text-center mb-8">
        <h3 className="text-secondary text-xl mb-2">ДЕТАЛІ ПІДКЛЮЧЕННЯ</h3>
        <p className="text-muted-foreground text-sm">Крок 2 з 3</p>
        <div className="mt-3 p-2 bg-blue-50 rounded-md text-xs text-muted-foreground">
          💡 Дані автоматично заповнені для демонстрації
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="connectionAddress" className="text-primary mb-2 block">
            Адреса підключення *
          </Label>
          <Input
            id="connectionAddress"
            type="text"
            placeholder="м. Київ, вул. Індустріальна, 8, корп. А"
            value={connectionData.connectionAddress}
            onChange={(e) => setConnectionData(prev => ({ ...prev, connectionAddress: e.target.value }))}
            className="bg-input-background border-gray-200"
          />
        </div>

        <div>
          <Label htmlFor="estimatedConsumption" className="text-primary mb-2 block">
            Орієнтовне споживання (кВт-год/міс)
          </Label>
          <Select 
            value={connectionData.estimatedConsumption} 
            onValueChange={(value) => setConnectionData(prev => ({ ...prev, estimatedConsumption: value }))}
          >
            <SelectTrigger className="bg-input-background border-gray-200 border-secondary">
              <SelectValue placeholder="Наприклад: 1500" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="500">500</SelectItem>
              <SelectItem value="1000">1000</SelectItem>
              <SelectItem value="1500">1500</SelectItem>
              <SelectItem value="2000">2000</SelectItem>
              <SelectItem value="3000">3000</SelectItem>
              <SelectItem value="5000">5000</SelectItem>
              <SelectItem value="other">Інше</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-primary mb-4 block">
            Тип підключення *
          </Label>
          <RadioGroup 
            value={connectionData.connectionType} 
            onValueChange={(value: "new" | "switch" | "additional") => 
              setConnectionData(prev => ({ ...prev, connectionType: value }))
            }
            className="space-y-3"
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="new" id="new" className="border-secondary text-secondary" />
              <Label htmlFor="new" className="text-primary cursor-pointer">
                Нове підключення
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="switch" id="switch" className="border-secondary text-secondary" />
              <Label htmlFor="switch" className="text-primary cursor-pointer">
                Зміна постачальника
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="additional" id="additional" className="border-secondary text-secondary" />
              <Label htmlFor="additional" className="text-primary cursor-pointer">
                Додаткове підключення
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox 
            id="hasExistingMeter"
            checked={connectionData.hasExistingMeter}
            onCheckedChange={(checked) => 
              setConnectionData(prev => ({ ...prev, hasExistingMeter: !!checked }))
            }
            className="border-secondary data-[state=checked]:bg-secondary"
          />
          <Label htmlFor="hasExistingMeter" className="text-primary cursor-pointer">
            На об'єкті вже є лічильник електроенергії
          </Label>
        </div>

        <div className="flex justify-between pt-4">
          <Button 
            onClick={handleRegisterBack}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Назад
          </Button>
          <Button 
            onClick={handleRegisterNext}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8"
          >
            Далі
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Step indicators */}
      <div className="flex justify-center space-x-2 pt-4">
        <div className="w-3 h-3 rounded-full bg-secondary"></div>
        <div className="w-3 h-3 rounded-full bg-secondary"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
    </motion.div>
  );

  const renderRegisterStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 text-center"
    >
      {/* Step indicator */}
      <div className="text-center mb-8">
        <h3 className="text-secondary text-xl mb-2">ЗАВЕРШЕННЯ РЕЄСТРАЦІЇ</h3>
        <p className="text-muted-foreground text-sm">Крок 3 з 3</p>
      </div>

      <div className="space-y-6">
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
          <Zap className="h-8 w-8 text-secondary" />
        </div>

        <div>
          <h4 className="text-primary text-lg mb-4">
            Дякуємо за реєстрацію!
          </h4>
          <p className="text-muted-foreground mb-6">
            Ваша заявка на підключення успішно відправлена. 
            Наш менеджер зв'яжеться з вами протягом робочого дня для уточнення деталей.
          </p>
          <div className="bg-muted p-4 rounded-lg text-left">
            <h5 className="text-primary mb-2">Що буде далі:</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Дзвінок менеджера протягом дня</li>
              <li>• Уточнення деталей підключення</li>
              <li>• Підготовка договору</li>
              <li>• Активація особистого кабінету</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button 
            onClick={handleRegisterBack}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Назад
          </Button>
          <Button 
            onClick={handleRegisterComplete}
            className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white px-8"
          >
            ЗАВЕРШИТИ
          </Button>
        </div>
      </div>

      {/* Step indicators */}
      <div className="flex justify-center space-x-2 pt-4">
        <div className="w-3 h-3 rounded-full bg-secondary"></div>
        <div className="w-3 h-3 rounded-full bg-secondary"></div>
        <div className="w-3 h-3 rounded-full bg-secondary"></div>
      </div>
    </motion.div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto p-0 bg-white rounded-lg overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Кабінет споживача</DialogTitle>
          <DialogDescription>
            Увійдіть до свого кабінету або зареєструйтеся як новий споживач
          </DialogDescription>
        </DialogHeader>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-secondary text-lg">КАБІНЕТ СПОЖИВАЧА</h2>
              <p className="text-sm text-muted-foreground">
                Увійдіть до свого кабінету або зареєструйтеся як новий споживач
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-muted-foreground hover:text-primary p-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {mode === "login" && renderLoginForm()}
            {mode === "register" && registerStep === 1 && renderRegisterStep1()}
            {mode === "register" && registerStep === 2 && renderRegisterStep2()}
            {mode === "register" && registerStep === 3 && renderRegisterStep3()}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}