import { MessageSquare, CalendarCheck, FileText, Paintbrush } from "lucide-react";
import paintersActionShot from "@/assets/painters-action-shot.webp";

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
    <section className="py-16 lg:py-24 texture-overlay" style={{ backgroundColor: '#FEFDFB' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span 
            className="inline-block font-semibold text-sm uppercase tracking-wider mb-3"
            style={{ color: '#1B6B3A' }}
          >
            How It Works
          </span>
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: '#1E3A8A' }}
          >
            Your Path to a Beautiful Home
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative text-center"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
                )}
                
                <div className="relative inline-flex flex-col items-center">
                  <div className="relative mb-5">
                    {/* Light container with emerald tint */}
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
                      style={{ 
                        backgroundColor: 'rgba(27, 107, 58, 0.1)',
                        border: '1px solid rgba(27, 107, 58, 0.2)'
                      }}
                    >
                      <step.icon className="w-8 h-8" style={{ color: '#1B6B3A' }} />
                    </div>
                    {/* BRIGHT BLUE number badge */}
                    <div 
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                      style={{ backgroundColor: '#2563EB', color: '#FFFFFF' }}
                    >
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1E3A8A' }}>{step.title}</h3>
                  <p className="text-base max-w-xs" style={{ color: '#374151' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action shot image */}
        <div className="max-w-4xl mx-auto mt-12">
          <img
            src={paintersActionShot}
            alt="Professional Emerald Paints crew at work on a Colorado home"
            className="w-full rounded-2xl shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
