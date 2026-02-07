import { MessageSquare, CalendarCheck, FileText, Paintbrush } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "1",
      title: "Answer Quick Questions",
      description: "Tell us about your painting project so we can prepare the right estimate.",
    },
    {
      icon: CalendarCheck,
      number: "2",
      title: "Free In-Home Estimate",
      description: "Jose comes to your home to walk through the project, discuss colors, and answer questions.",
    },
    {
      icon: FileText,
      number: "3",
      title: "Clear, Upfront Price",
      description: "No hidden fees, no surprises. You know exactly what to expect before we start.",
    },
    {
      icon: Paintbrush,
      number: "4",
      title: "We Handle Everything",
      description: "We handle all the prep, painting, and cleanup. You just enjoy the transformation.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Your Path to a Beautiful Home
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
                )}
                
                <div className="relative inline-flex flex-col items-center">
                  <div className="relative mb-5">
                    {/* Light container with emerald border */}
                    <div className="w-16 h-16 rounded-xl bg-accent border border-primary/20 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    {/* Emerald green number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-secondary mb-2">{step.title}</h3>
                  <p className="text-base text-muted-foreground max-w-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action shot placeholder */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="aspect-video rounded-2xl bg-accent border-2 border-dashed border-primary/30 flex items-center justify-center">
            <div className="text-center p-8">
              <Paintbrush className="w-12 h-12 text-primary/40 mx-auto mb-3" />
              <p className="text-muted-foreground font-medium">Action shot: Professional painters at work</p>
              <p className="text-sm text-muted-foreground/70 mt-1">Image coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
