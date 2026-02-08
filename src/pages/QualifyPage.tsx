import { useState } from "react";
import Quiz from "@/components/Quiz";
import { Shield } from "lucide-react";
import GridBackground from "@/components/ui/grid-background";
import emeraldLogo from "@/assets/emerald-logo-white.png";

const QualifyPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Background - Darker slate for contrast */}
      <div className="fixed inset-0 z-0" style={{ backgroundColor: '#020617' }} />
      
      {/* Grid + Emerald Glow overlay */}
      <div className="fixed inset-0 z-0">
        <GridBackground className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Quiz Container */}
        <main className="flex-1 flex items-center justify-center px-4 py-4 sm:py-8">
          <div className="w-full max-w-lg">
            {/* Progress Text */}
            <div className="text-center mb-4">
              {/* Header - HIDES when quiz starts */}
              {!quizStarted && (
                <>
                  {/* Logo - elegant sizing with proper spacing */}
                  <img 
                    src={emeraldLogo}
                    alt="Emerald Paints"
                    className="h-8 sm:h-10 w-auto mx-auto mb-6"
                    style={{ filter: 'brightness(1.1)' }}
                  />

                  {/* Pre-headline question */}
                  <p 
                    className="text-sm sm:text-base text-white/80 uppercase tracking-widest mb-3 font-medium"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                  >
                    Quick Question — Is Your Zip Code Eligible?
                  </p>

                  {/* Main headline */}
                  <h1 
                    className="text-[22px] sm:text-3xl font-extrabold text-white mb-4 leading-tight"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                  >
                    This New Program Is Helping Colorado Homeowners Save{" "}
                    <span style={{ 
                      color: '#F5C518',
                      textShadow: '0 0 20px rgba(245, 197, 24, 0.5), 0 0 40px rgba(245, 197, 24, 0.3)'
                    }}>
                      25%
                    </span>{" "}
                    On Their Painting Project
                  </h1>

                  {/* Subheadline - drives action */}
                  <p 
                    className="text-sm text-white/70 leading-relaxed max-w-md mx-auto"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                  >
                    <span style={{ color: '#F5C518', fontWeight: 600 }}>Limited Spots Available</span>
                    {" "}— Homeowners across Colorado are taking advantage. Click below to see if you qualify for a FREE estimate and 25% off.
                  </p>
                </>
              )}
            </div>

            {/* Quiz Component */}
            <Quiz onStart={() => setQuizStarted(true)} />
          </div>
        </main>

        {/* Simple Footer */}
        <footer 
          className="w-full py-4 px-4"
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.05)', 
            borderTop: '1px solid rgba(255,255,255,0.1)' 
          }}
        >
          <div className="container mx-auto">
            <div 
              className="flex items-center justify-center gap-2 text-xs"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <Shield className="w-3.5 h-3.5" style={{ color: '#1B6B3A' }} />
              Your information is secure and will only be used to contact you
              about your painting project
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default QualifyPage;
