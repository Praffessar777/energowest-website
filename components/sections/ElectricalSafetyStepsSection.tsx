export function ElectricalSafetyStepsSection() {
  const steps = [
    {
      number: "1",
      title: "Збергайте безпечну відстань",
      description: "Утримуйтесь на безпечній відстані від місця події"
    },
    {
      number: "2", 
      title: "Сповістіть оточуючих",
      description: "Повідомте про небезпеку людей навколо та заборонить наближення перехожих"
    },
    {
      number: "3",
      title: "Повідомте про подію",
      description: "Зверніться до відповідальних осіб або служб екстренної допомоги"
    },
    {
      number: "4",
      title: "Оцініть ситуацію",
      description: "Керівники підприємства повинні об'єктивно оцінити ситуацію і визначити наслідки"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Порядок дій при виявленні загрози електробезпеці!
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-3">
                  {step.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
