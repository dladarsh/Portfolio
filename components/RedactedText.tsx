import React, { useState, useRef, useEffect } from 'react';

interface RedactedTextProps {
  text: string;
  className?: string;
  label?: string;
  delay?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const RedactedText: React.FC<RedactedTextProps> = ({ text, className = '', label = 'CLASSIFIED', delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startScramble = () => {
    setIsHovered(true);
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n") return char;
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
      }

      iteration += 1; // Scramble speed (characters per frame)
    }, 5); // Faster scramble for longer text blocks
  };

  const reset = () => {
    setIsHovered(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text); 
  };

  return (
    <div 
      className={`group relative flex flex-col items-start cursor-crosshair w-full ${className}`}
      onMouseEnter={startScramble}
      onMouseLeave={reset}
    >
        {/* Label Header */}
        <div className="flex items-center gap-2 mb-1 w-full select-none">
            <span className={`text-[10px] font-hud font-bold tracking-widest transition-colors duration-300 ${isHovered ? 'text-neon-cyan' : 'text-caution-orange'}`}>
                [ {isHovered ? 'ACCESS GRANTED' : label} ]
            </span>
            <div className={`h-px flex-grow transition-colors duration-300 opacity-30 ${isHovered ? 'bg-neon-cyan' : 'bg-caution-orange'}`}></div>
        </div>

        {/* Text Container */}
        <div className="relative w-full overflow-hidden">
           {/* Actual Text */}
           <p className={`font-data text-sm text-gray-300 leading-relaxed whitespace-pre-wrap transition-colors duration-300 ${isHovered ? 'text-ghost-white' : 'text-transparent'}`}>
             {displayText}
           </p>
           
           {/* The Redacted Bar Overlay */}
           <div 
             className={`absolute inset-0 bg-black z-10 transform transition-transform duration-500 ease-out origin-left ${isHovered ? 'scale-x-0' : 'scale-x-100'}`}
           >
             {/* Decorative lines on the black bar */}
             <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5"></div>
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5"></div>
             
             {/* Subtle glitch pattern on the bar */}
             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"></div>
           </div>
        </div>
    </div>
  );
};

export default RedactedText;