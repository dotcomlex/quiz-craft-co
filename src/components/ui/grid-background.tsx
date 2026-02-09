import React from "react";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function GridBackground({ children, className = "" }: GridBackgroundProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Grid pattern - subtle for light background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 41, 59, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 41, 59, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Emerald radial glow - softer for light background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(27, 107, 58, 0.08) 0%, rgba(27, 107, 58, 0.03) 25%, transparent 50%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GridBackground;
