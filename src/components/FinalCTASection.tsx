import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section 
      className="py-12 lg:py-20 text-white"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}
    >
      <div className="container mx-auto px-4 text-center">
        <div>
          {/* Badge - gold accent */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: 'rgba(245, 197, 24, 0.15)',
              color: '#F5C518',
              border: '1px solid rgba(245, 197, 24, 0.3)'
            }}
          >
            <Gift className="w-4 h-4" />
            <span>Limited Spots Available</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Don't Wait — Lock In Your{" "}
            <span style={{ color: '#F5C518' }}>25% Discount</span> Today
          </h2>

          <p className="text-base sm:text-lg lg:text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Get your free no-pressure estimate and save 25% on professional
            painting. Spots are filling fast.
          </p>

          {/* CTA - GREEN */}
          <div className="animate-subtle-rock inline-block w-full sm:w-auto">
            <Link to="/qualify" className="block">
              <Button variant="cta" size="xl" className="group w-full sm:w-auto min-h-[44px] animate-cta-glow">
                Check My Eligibility
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <p className="text-sm opacity-60 mt-6">
            No obligations · Free in-home estimate · Satisfaction guaranteed
          </p>

          {/* Copyright text - replacing footer */}
          <p className="text-xs opacity-40 mt-12 pt-8 border-t border-white/10">
            © {new Date().getFullYear()} Emerald Paints LLC. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
