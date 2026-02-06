import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-emerald-house.webp";
import logo from "@/assets/emerald-paints-logo.png";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-hero overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Colorado home with professional paint job and mountain views"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Main dark gradient - strong for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
        {/* Vignette effect - darker edges for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 lg:py-12">
        {/* Logo - centered with white container on dark background */}
        <motion.div
          className="flex justify-center mb-2 lg:mb-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-xl p-3 shadow-lg">
            <img
              src={logo}
              alt="Emerald Paints"
              className="h-16 sm:h-20 lg:h-28 w-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Single centered column */}
        <div className="max-w-3xl mx-auto">
          {/* Headline and Subheadline - CENTERED with strong shadow */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug hero-text-shadow-strong mb-8">
              Finally, A Way For Colorado Homeowners To Get{" "}
              <span className="text-highlight">25% Off</span> Beautiful,
              Professional Painting{" "}
              <span className="hidden sm:inline">—</span>
              <br className="sm:hidden" />
              The <span className="text-highlight">Home Refresh Program</span> Is
              Now Open
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed hero-text-shadow-strong max-w-2xl mx-auto">
              Spots are filling fast. Check if your area qualifies for a free
              no-pressure estimate and 25% off professional painting before this
              program closes.
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
                  See If I Qualify Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators below button - white text on background */}
            <div className="flex items-center justify-center gap-6 mt-5">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs font-medium text-white/90 whitespace-nowrap hero-text-shadow">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs font-medium text-white/90 whitespace-nowrap hero-text-shadow">
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
