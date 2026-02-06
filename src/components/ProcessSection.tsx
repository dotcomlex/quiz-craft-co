import { MessageSquare, CalendarCheck, FileText, Paintbrush } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "1",
      title: "Answer Quick Questions",
      description: "Tell us about your painting project so we can prepare the right consultation.",
    },
    {
      icon: CalendarCheck,
      number: "2",
      title: "Free In-Home Estimate",
      description: "Miguel comes to your home to walk through the project, discuss colors, and assess what's needed.",
    },
    {
      icon: FileText,
      number: "3",
      title: "Clear, Upfront Price",
      description: "No hidden fees, no surprises. You know exactly what to expect before any work begins.",
    },
    {
      icon: Paintbrush,
      number: "4",
      title: "We Handle Everything",
      description: "Love your quote? We handle all the prep, painting, and cleanup. You just enjoy the results.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 section-gradient-dark text-hero-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            How It Works
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-white/15" />
                )}
                
                <div className="relative inline-flex flex-col items-center">
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-base text-white/70 max-w-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
