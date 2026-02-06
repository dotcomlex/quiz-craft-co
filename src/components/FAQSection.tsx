import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of painting projects do you handle?",
    answer:
      "We handle interior painting, exterior painting, wood staining, deck and fence finishing, vinyl and aluminum painting, commercial projects, and specialty finishes. Whether it's a single accent wall or a full exterior transformation, we've got you covered.",
  },
  {
    question: "What does the free estimate include?",
    answer:
      "Jose will come to your home, walk through the project with you, assess surface conditions, discuss color options, and provide a detailed quote with no hidden fees. It's completely free, no pressure, and no obligation.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Emerald Paints is fully licensed and insured in Colorado, including liability and workers' compensation. Your home and property are completely protected.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Denver and all surrounding areas within 50 miles, including Aurora, Lakewood, Arvada, Westminster, Thornton, Littleton, Centennial, Commerce City, Brighton, and more. Enter your zip code in our qualification form to confirm coverage.",
  },
  {
    question: "What paint brands do you use?",
    answer:
      "We typically use premium brands like Sherwin-Williams and Benjamin Moore. During your free estimate, we'll discuss the best options for your specific project based on surface type, durability needs, and budget.",
  },
  {
    question: "How long does a typical paint job take?",
    answer:
      "It depends on the scope. A single room can be done in a day. A full interior usually takes 3 to 5 days. Full exteriors typically take 3 to 7 days depending on size and prep work needed. Jose will give you a clear timeline during the estimate.",
  },
  {
    question: "Can you help with color selection?",
    answer:
      "Absolutely. Jose offers a free color consultation as part of the estimate. He'll bring samples, test them on your walls with different lighting, and help you pick shades that work perfectly for your space.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 section-gradient-slate">
      <div className="container max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with Emerald Paints
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl shadow-sm border border-border px-6 transition-shadow hover:shadow-md"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Inline CTA - matches hero button style */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <motion.div className="animate-subtle-rock w-full sm:w-auto">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
