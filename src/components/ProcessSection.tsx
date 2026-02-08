import { MessageSquare, CalendarCheck, FileText, Paintbrush } from "lucide-react";
import paintersAction from "@/assets/painters-action-shot.webp";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "1",
      title: "Answer Quick Questions",
      description: "Answer a few quick questions to see if your zip code qualifies for a FREE estimate and 25% off.",
    },
    {
      icon: CalendarCheck,
      number: "2",
      title: "Free In-Home Estimate",
      description: "If you qualify, we'll schedule a 100% free in-home estimate to walk through your project and discuss colors.",
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
    <section className="py-12 lg:py-20 texture-overlay" style={{ backgroundColor: '#FEFDFB' }}>
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
            style={{ color: '#1E293B' }}
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
                    {/* RED number badge for contrast */}
                    <div 
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                      style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
                    >
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1E293B' }}>{step.title}</h3>
                  <p className="text-base max-w-xs" style={{ color: '#374151' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Painters action shot */}
        <div className="max-w-4xl mx-auto mt-12">
          <img
            src={paintersAction}
            alt="Professional painters actively working on a Colorado home"
            className="w-full aspect-video object-cover rounded-2xl shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
