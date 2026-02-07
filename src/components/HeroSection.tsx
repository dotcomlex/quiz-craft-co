import { Link } from "react-router-dom";
import logo from "@/assets/emerald-paints-logo.png";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#0B2447' }}>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-10 pb-12 sm:pt-14 sm:pb-16 min-h-screen flex flex-col justify-center">
        {/* Logo in white pill container */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '16px',
              padding: '12px 28px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={logo}
              alt="Emerald Paints"
              className="h-14 sm:h-[72px] lg:h-24 w-auto object-contain"
            />
          </div>
        </div>

        {/* Single centered column */}
        <div className="max-w-3xl mx-auto">
          {/* Headline and Subheadline - WHITE text on dark */}
          <div className="text-center mb-8">
            {/* Main headline with enhanced text effect */}
            <h1 
              className="text-[24px] sm:text-3xl lg:text-5xl text-white leading-[1.15] mb-6 sm:mb-8"
              style={{ 
                fontWeight: 800,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.01em'
              }}
            >
              The{" "}
              <span 
                className="text-highlight"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 197, 24, 0.3)' }}
              >
                Home Refresh Program
              </span>{" "}
              Is Helping Colorado Homeowners Save{" "}
              <span 
                className="text-highlight"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 197, 24, 0.3)' }}
              >
                25%
              </span>{" "}
              On Their Painting Project
            </h1>

            {/* Subheadline - single cohesive paragraph */}
            <p 
              className="text-[15px] sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
              style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)' }}
            >
              <span className="font-bold uppercase">Limited Spots Available</span> — Click below to see if your zip code qualifies for a FREE estimate and 25% off your painting project.
            </p>
          </div>

          {/* CTA Button - Gold with rocking animation */}
          <div className="flex flex-col items-center">
            {/* Button with subtle rocking animation */}
            <div className="animate-subtle-rock w-full sm:w-auto">
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
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
