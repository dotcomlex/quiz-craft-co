import { useState, useEffect } from "react";
import Quiz from "@/components/Quiz";
import { Shield } from "lucide-react";
import GridBackground from "@/components/ui/grid-background";
import watercolorBg from "@/assets/bg-watercolor-mountains.webp";

const QualifyPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [liveCount, setLiveCount] = useState(87);

  // Dynamic counter effect - fluctuates realistically
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return Math.max(45, Math.min(120, newVal)); // Keep between 45-120
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background - Watercolor mountains */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${watercolorBg})` }}
      />
      
      {/* Grid + Emerald Glow overlay */}
      <div className="fixed inset-0 z-0">
        <GridBackground className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Quiz Container */}
        <main className="flex-1 flex items-center justify-center px-4 py-4 sm:py-8">
          <div className="w-full max-w-lg">
            {/* Live counter - ALWAYS visible */}
            <div className="flex justify-center mb-4">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold"
                style={{ backgroundColor: '#DC2626' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span>{liveCount} people checking eligibility</span>
              </div>
            </div>

            {/* Progress Text */}
            <div className="text-center mb-4">
              {/* Header - HIDES when quiz starts */}
              {!quizStarted && (
                <>
                  <h1
                    className="text-[28px] sm:text-3xl font-extrabold mb-1 leading-tight"
                    style={{ color: '#1e293b', textShadow: '0 1px 3px rgba(255,255,255,0.5)' }}
                  >
                    See If You Qualify for the
                  </h1>
                  <h2 
                    className="text-[28px] sm:text-3xl font-extrabold mb-2 leading-tight"
                    style={{ 
                      color: '#1e293b',
                      textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  >
                    Home Refresh Program
                  </h2>
                  <p 
                    className="text-sm tracking-wide"
                    style={{ color: '#64748b' }}
                  >
                    Takes less than 30 seconds
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
            backgroundColor: 'rgba(0,0,0,0.05)', 
            borderTop: '1px solid rgba(0,0,0,0.1)' 
          }}
        >
          <div className="container mx-auto">
            <div 
              className="flex items-center justify-center gap-2 text-xs"
              style={{ color: 'rgba(0,0,0,0.5)' }}
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
