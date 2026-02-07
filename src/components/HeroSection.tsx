import { Link } from "react-router-dom";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-12 sm:pt-20 sm:pb-16 min-h-screen flex flex-col justify-center">
        {/* NO LOGO — logo moves to sticky header */}

        {/* Single centered column */}
        <div className="max-w-3xl mx-auto">
          {/* Urgency badge */}
          <div className="flex justify-center mb-6">
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: 'rgba(245, 197, 24, 0.15)',
                color: '#F5C518',
                border: '1px solid rgba(245, 197, 24, 0.3)'
              }}
            >
              Spring 2025 Special — Limited Availability
            </span>
          </div>

          {/* Headline */}
          <div className="text-center mb-8">
            <h1 
              className="text-[28px] sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-6 sm:mb-8"
              style={{ 
                fontWeight: 800,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.6)',
                letterSpacing: '-0.01em'
              }}
            >
              The{" "}
              <span style={{ color: '#F5C518', textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 197, 24, 0.3)' }}>
                Home Refresh Program
              </span>{" "}
              Is Helping Colorado Homeowners Save{" "}
              <span style={{ color: '#F5C518', textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 197, 24, 0.3)' }}>
                25%
              </span>{" "}
              On Their Painting Project
            </h1>

            {/* Subheadline - ONE paragraph */}
            <p 
              className="text-[15px] sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
              style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)' }}
            >
              <span className="font-bold uppercase">Limited Spots Available</span> — Click below to see if your zip code qualifies for a FREE estimate and 25% off your painting project.
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
                  See If I Qualify
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#F5C518' }} />
                <span className="text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 flex-shrink-0" style={{ color: '#F5C518' }} />
                <span className="text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">
                  Satisfaction Guaranteed
                </span>
              </div>
            </div>

            {/* Social proof */}
            <p 
              className="mt-4 text-xs text-white/60"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
            >
              🏠 127 Colorado homes transformed this year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
