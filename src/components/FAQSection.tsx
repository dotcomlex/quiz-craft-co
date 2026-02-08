import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// 6 FAQs for comprehensive coverage
const faqs = [
  {
    question: "What does the free estimate include?",
    answer:
      "We come to your home, walk through every detail of the project with you, assess surface conditions, help you explore color and finish options, and give you a clear, detailed quote with no hidden fees. It's completely free, no pressure, and no obligation.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We handle it all. Interior painting, exterior painting, commercial painting, deck and fence staining, and more. Whether it's one accent wall, your entire home, or a commercial property, we've got you covered.",
  },
  {
    question: "Can you help me pick colors and finishes?",
    answer:
      "Absolutely. Choosing the right color can feel overwhelming, and that's exactly why we walk you through it. We help you pick colors, sheens, and finishes that match your style, your lighting, and your home's architecture. You'll never feel like you're guessing.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Emerald Paints is fully licensed and insured in Colorado, including liability and workers' compensation. Your home and property are completely protected.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Denver, Colorado Springs, and all surrounding areas including Aurora, Lakewood, Arvada, Westminster, Thornton, Littleton, Centennial, Commerce City, Brighton, and more. Enter your zip code in our form to confirm coverage.",
  },
  {
    question: "How long does a typical paint job take?",
    answer:
      "It depends on the scope. A single room can usually be done in a day. A full interior typically takes 3 to 5 days. Exteriors run about 3 to 7 days depending on size and prep work. We'll give you a clear timeline during the estimate so there are no surprises.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 lg:py-20 texture-overlay" style={{ backgroundColor: '#FEFDFB' }}>
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
            style={{ color: '#1E293B' }}
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
                  style={{ color: '#1E293B' }}
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
                Check My Eligibility
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
