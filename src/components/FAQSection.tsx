import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Only 4 essential FAQs for cold traffic conversion
const faqs = [
  {
    question: "What does the free estimate include?",
    answer:
      "Jose comes to your home, walks through the project with you, assesses surface conditions, discusses color options, and provides a detailed quote with no hidden fees. It's completely free, no pressure, and no obligation.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Emerald Paints is fully licensed and insured in Colorado, including liability and workers' compensation. Your home and property are completely protected.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Denver and all surrounding areas including Aurora, Lakewood, Arvada, Westminster, Thornton, Littleton, Centennial, Commerce City, Brighton, and more. Enter your zip code in our form to confirm coverage.",
  },
  {
    question: "How long does a typical paint job take?",
    answer:
      "It depends on the scope. A single room can be done in a day. A full interior usually takes 3 to 5 days. Full exteriors typically take 3 to 7 days depending on size and prep work needed. Jose will give you a clear timeline during the estimate.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 texture-overlay" style={{ backgroundColor: '#FEFDFB' }}>
      <div className="container max-w-3xl px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span 
            className="inline-block font-semibold text-sm uppercase tracking-wider mb-3"
            style={{ color: '#1B6B3A' }}
          >
            Questions & Answers
          </span>
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: '#1E3A8A' }}
          >
            Common Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl shadow-sm border border-border px-5 transition-shadow hover:shadow-md"
              >
                <AccordionTrigger 
                  className="text-left text-base font-medium hover:no-underline py-4"
                  style={{ color: '#1E3A8A' }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base pb-4 leading-relaxed" style={{ color: '#374151' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Inline CTA - GREEN */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <div className="animate-subtle-rock w-full sm:w-auto">
            <Link to="/qualify" className="block">
              <Button
                variant="cta"
                size="xl"
                className="group shadow-2xl text-lg px-8 py-6 animate-cta-glow w-full sm:w-auto min-h-[44px]"
              >
                See If I Qualify Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
