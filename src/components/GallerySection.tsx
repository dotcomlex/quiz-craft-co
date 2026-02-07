import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import bgWatercolor from "@/assets/bg-watercolor-mountains.webp";

// Gallery images - painting before/after transformations
import galleryPainting1 from "@/assets/gallery-painting-1.webp";
import galleryPainting2 from "@/assets/gallery-painting-2.webp";
import galleryPainting3 from "@/assets/gallery-painting-3.webp";
import galleryPainting4 from "@/assets/gallery-painting-4.webp";
import galleryPainting5 from "@/assets/gallery-painting-5.webp";
import galleryPainting6 from "@/assets/gallery-painting-6.webp";
import galleryPainting7 from "@/assets/gallery-painting-7.webp";
import galleryPainting8 from "@/assets/gallery-painting-8.webp";

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { image: galleryPainting1, alt: "Kitchen painting transformation with fresh colors" },
    { image: galleryPainting2, alt: "Interior living room painting before and after" },
    { image: galleryPainting3, alt: "Kitchen walls fresh paint makeover" },
    { image: galleryPainting4, alt: "Bedroom accent wall painting" },
    { image: galleryPainting5, alt: "Exterior home painting transformation" },
    { image: galleryPainting6, alt: "Bathroom painting refresh" },
    { image: galleryPainting7, alt: "Deck and fence staining before and after" },
    { image: galleryPainting8, alt: "Exterior trim and siding painting" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
      <div className="absolute inset-0 bg-white/85" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Work
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-4">
            See What's Possible — <span className="text-highlight">Real Home Transformations</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            From single rooms to full exteriors, we deliver flawless results that transform your home.
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square bg-muted">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].alt}
              width={800}
              height={800}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card/95 backdrop-blur-sm hover:bg-card shadow-lg border-0 min-h-[44px]"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card/95 backdrop-blur-sm hover:bg-card shadow-lg border-0 min-h-[44px]"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Carousel dots with GOLD selected ring */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 overflow-x-auto pb-2 hide-scrollbar">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 bg-muted min-h-[44px] border-2 ${
                index === currentIndex
                  ? "border-primary ring-2 ring-primary ring-offset-2 shadow-lg"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <img
                src={project.image}
                alt={project.alt}
                width={72}
                height={72}
                loading="lazy"
                decoding="async"
                className="w-[72px] h-[72px] sm:w-20 sm:h-20 object-cover"
              />
            </button>
          ))}
        </div>

        {/* Section divider */}
        <div className="section-divider mt-12 mb-8" />

        {/* Inline CTA - GOLD */}
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

export default GallerySection;
