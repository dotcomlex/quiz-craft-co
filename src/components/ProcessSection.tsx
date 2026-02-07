import { MessageSquare, CalendarCheck, FileText, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";
import paintersActionShot from "@/assets/painters-action-shot.webp";
import bgWatercolor from "@/assets/bg-watercolor-mountains.webp";

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
    <section 
      className="py-16 lg:py-24 relative"
      style={{
        backgroundImage: `url(${bgWatercolor})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Your Path to a Beautiful Home
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
                )}
                
                <div className="relative inline-flex flex-col items-center">
                  <div className="relative mb-5">
                    {/* Light container with gold border */}
                    <div className="w-16 h-16 rounded-xl bg-white border border-primary/20 flex items-center justify-center shadow-md">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    {/* GOLD number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-secondary mb-2">{step.title}</h3>
                  <p className="text-base text-muted-foreground max-w-xs">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action shot image */}
        <motion.div 
          className="max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src={paintersActionShot}
            alt="Professional Emerald Paints crew at work on a Colorado home"
            className="w-full rounded-2xl shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
