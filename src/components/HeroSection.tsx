import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-colorado-golden-hour.webp";
import logo from "@/assets/emerald-paints-logo.png";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Colorado home with mountain views at golden hour"
          className="w-full h-full object-cover parallax-bg"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Dark overlay gradient for text readability */}
        <div className="absolute inset-0 hero-overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-4 lg:py-8 min-h-screen flex flex-col justify-center">
        {/* Logo at top - with light halo for visibility on dark */}
        <motion.div
          className="flex justify-center mb-6 lg:mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 60%)",
            padding: "20px",
          }}
        >
          <img
            src={logo}
            alt="Emerald Paints"
            className="h-24 sm:h-32 lg:h-40 w-auto object-contain"
            style={{
              filter: "drop-shadow(0 0 20px rgba(255,255,255,0.25)) drop-shadow(0 0 8px rgba(255,255,255,0.15))"
            }}
          />
        </motion.div>

        {/* Single centered column */}
        <div className="max-w-3xl mx-auto">
          {/* Headline and Subheadline - WHITE text on dark overlay */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main headline with enhanced text effect */}
            <h1 className="text-[22px] sm:text-3xl lg:text-5xl font-extrabold text-white leading-[1.2] sm:leading-tight mb-6 sm:mb-8" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5), 0 0 30px rgba(0,0,0,0.3)" }}>
              The <span className="text-highlight" style={{ textShadow: "0 0 20px rgba(245,197,24,0.4), 0 2px 8px rgba(0,0,0,0.5)" }}>Home Refresh Program</span> Is Helping Colorado Homeowners Save{" "}
              <span className="text-highlight" style={{ textShadow: "0 0 20px rgba(245,197,24,0.4), 0 2px 8px rgba(0,0,0,0.5)" }}>25%</span> On Their Painting Project
            </h1>

            {/* Subheadline - single cohesive paragraph */}
            <p className="text-[15px] sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
              <span className="font-bold uppercase">Limited spots available.</span> Click below to see if your zip code qualifies for a FREE estimate and 25% off your painting project.
            </p>
          </motion.div>

          {/* CTA Button - Gold with rocking animation */}
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
                  className="group shadow-2xl text-lg px-10 py-7 animate-cta-glow w-full sm:w-auto min-h-[56px]"
                >
                  See If I Qualify
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators - Licensed & Guaranteed only */}
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-highlight flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-highlight flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">
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
