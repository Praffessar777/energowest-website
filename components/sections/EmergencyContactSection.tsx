import { motion } from "motion/react";
import { AlertTriangle, Phone } from "lucide-react";

export function EmergencyContactSection() {
  const handleEmergencyCall = () => {
    window.location.href = "tel:+380442392753";
  };

  return (
    <section className="py-16 bg-red-50 border border-red-200/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Іконка аварії */}
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>

            {/* Заголовок */}
            <h2 className="text-red-600 text-2xl mb-4">
              🚨 Аварійний випадок
            </h2>

            {/* Опис */}
            <p className="text-red-700/80 mb-8 text-lg">
              У випадку аварії або повного відключення електроенергії
            </p>

            {/* Телефон */}
            <motion.div
              className="cursor-pointer"
              onClick={handleEmergencyCall}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Phone className="h-6 w-6 text-red-600" />
                <span className="text-red-600 text-3xl">
                  +38 (044) 239-27-53
                </span>
              </div>
              <p className="text-red-700/70 text-sm">
                Цілодобово, без вихідних
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
