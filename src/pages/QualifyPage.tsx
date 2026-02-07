import { useState } from "react";
import Quiz from "@/components/Quiz";
import { Shield } from "lucide-react";

const QualifyPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Background - Dark Slate */}
      <div className="fixed inset-0 z-0" style={{ backgroundColor: '#0F172A' }} />

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
                  <h1 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-relaxed">
                    See If You Qualify for the
                    <br />
                    <span style={{ color: '#1B6B3A' }}>Home Refresh Program</span>
                  </h1>
                  <p className="text-base text-white/70">
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
