import React from "react";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function GridBackground({ children, className = "" }: GridBackgroundProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Grid pattern - very subtle for light background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 41, 59, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 41, 59, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Emerald radial glow - very subtle */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(27, 107, 58, 0.04) 0%, transparent 40%)',
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
