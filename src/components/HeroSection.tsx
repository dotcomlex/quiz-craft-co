import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bright-home.webp";
import logo from "@/assets/emerald-paints-logo.png";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-hero overflow-hidden">
      {/* Background image with LIGHT overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Colorado home with professional paint job and mountain views"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Very subtle light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        {/* Logo - visible on bright background, no container needed */}
        <motion.div
          className="flex justify-center mb-6 lg:mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={logo}
            alt="Emerald Paints"
            className="h-24 sm:h-32 lg:h-48 w-auto object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Single centered column */}
        <div className="max-w-3xl mx-auto">
          {/* Headline and Subheadline - CENTERED with dark text on bright background */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* SHORT headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-secondary leading-tight mb-4 sm:mb-6 drop-shadow-sm">
              Colorado Homeowners:{" "}
              <span className="text-highlight">Save 25%</span> On Professional Painting
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-secondary/80 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Limited spots in select zip codes. See if you qualify for a free
              estimate + 25% off before they're gone.
            </p>
          </motion.div>

          {/* CTA Button - Standalone with rocking animation */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Button with subtle rocking animation */}
            <motion.div className="animate-subtle-rock w-full sm:w-auto">
              <Link to="/qualify" className="block">
                <Button
                  variant="cta"
                  size="xl"
                  className="group shadow-2xl text-lg px-8 py-6 animate-cta-glow w-full sm:w-auto min-h-[44px]"
                >
                  See If I Qualify
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators below button - dark text on bright background */}
            <div className="flex items-center justify-center gap-6 mt-5">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs font-medium text-secondary/80 whitespace-nowrap">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs font-medium text-secondary/80 whitespace-nowrap">
                  Satisfaction Guaranteed
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
