import { useState, useEffect } from "react";
import Quiz from "@/components/Quiz";
import { Shield, Users } from "lucide-react";
import qualifyBgImage from "@/assets/qualify-bg-mountains.png";

const QualifyPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [liveViewers, setLiveViewers] = useState(() =>
    Math.floor(Math.random() * (80 - 50 + 1)) + 50
  );

  // Live viewers - fluctuates between 45-85
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers((prev) => {
        const change = Math.floor(Math.random() * 7) - 3; // -3 to +3
        const newCount = prev + change;
        return Math.max(45, Math.min(85, newCount));
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Image - Fixed */}
      <div className="fixed inset-0 z-0">
        <img
          src={qualifyBgImage}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Light overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Quiz Container */}
        <main className="flex-1 flex items-center justify-center px-4 py-4 sm:py-8">
          <div className="w-full max-w-lg">
            {/* Progress Text */}
            <div className="text-center mb-4">
              {/* Live Activity Indicator - RED for urgency */}
              <div 
                className="inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-xl border-2 border-white/50"
                style={{
                  background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)'
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <Users className="w-3.5 h-3.5" />
                {liveViewers} people checking availability right now
              </div>

              {/* Header - HIDES when quiz starts */}
              {!quizStarted && (
                <>
                  <h1 className="text-xl sm:text-2xl font-bold text-secondary mb-3 leading-relaxed">
                    See If You Qualify for the
                    <br />
                    Home Refresh Program
                  </h1>
                  <p className="text-base text-muted-foreground">
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
        <footer className="w-full py-4 px-4 bg-white/80 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-3.5 h-3.5 text-primary" />
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
