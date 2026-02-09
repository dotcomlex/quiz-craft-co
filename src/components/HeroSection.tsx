import { Link } from "react-router-dom";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-mountain-new.webp";
import emeraldLogo from "@/assets/emerald-logo-white.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden lg:min-h-[85vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Colorado mountain landscape at golden hour"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 hero-overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-3 pt-2 pb-16 sm:pt-8 sm:pb-20 lg:pt-20 lg:pb-32 flex flex-col items-center text-center">
        {/* Single centered column - extended width for less wrapping */}
        <div className="w-full max-w-4xl mx-auto">
          {/* Logo + Headline */}
          <div className="text-left lg:text-center mb-6">
            {/* White Emerald Paints Logo - scaled up */}
            <img 
              src={emeraldLogo}
              alt="Emerald Paints"
              className="h-32 sm:h-44 lg:h-52 w-auto mx-auto -mb-2"
              style={{ filter: 'brightness(1.1)' }}
            />
            
            <h1 
              className="text-[24px] sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.25] mb-6 sm:mb-10 text-left lg:text-center lg:max-w-4xl lg:mx-auto"
              style={{ 
                fontWeight: 800,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.6)',
                letterSpacing: '-0.01em'
              }}
            >
              Ready To Transform Your Home? The{" "}
              Home Refresh Program{" "}
              Is Giving Colorado Homeowners{" "}
              <span style={{ color: '#F5C518', textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 197, 24, 0.3)' }}>
                25% Off
              </span>{" "}
              Any Painting Project
            </h1>

            {/* Subheadline - strong text shadow */}
            <p 
              className="text-[14px] sm:text-base lg:text-lg text-white leading-relaxed max-w-xl lg:max-w-2xl px-1 lg:px-0 lg:mx-auto lg:text-center"
              style={{ 
                textShadow: '0 1px 2px rgba(0,0,0,1), 0 2px 4px rgba(0,0,0,0.95), 0 4px 8px rgba(0,0,0,0.9), 0 8px 16px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.7)',
                fontWeight: 600
              }}
            >
              <span style={{ color: '#FFFFFF', fontWeight: 700, textTransform: 'uppercase' }}>
                Limited Spots Available
              </span>
              {" "} — Homeowners across Colorado are taking advantage. Click below to see if you qualify for a FREE estimate and 25% off.
            </p>
          </div>

          {/* CTA Button - GREEN */}
          <div className="flex flex-col items-center">
            <div className="animate-subtle-rock w-full sm:w-auto">
              <Link to="/qualify" className="block">
                <Button
                  variant="cta"
                  size="xl"
                  className="group shadow-2xl text-lg px-10 py-7 animate-cta-glow w-full sm:w-auto min-h-[56px]"
                >
                  Check My Eligibility
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 sm:mt-12 flex items-center justify-center gap-6">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" style={{ color: '#F5C518' }} />
                <span className="text-xs sm:text-sm lg:text-base font-medium text-white/90 whitespace-nowrap">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" style={{ color: '#F5C518' }} />
                <span className="text-xs sm:text-sm lg:text-base font-medium text-white/90 whitespace-nowrap">
                  Satisfaction Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
