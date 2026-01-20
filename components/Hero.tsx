import React from 'react';
import { RESUME_DATA } from '../constants';
import { ChevronDown, Target } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden p-4 min-h-[90vh]">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-60 filter contrast-125 brightness-75 saturate-50"
          />
          {/* Gradient Overlay for depth and text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-ghost-darker/90 via-ghost-darker/20 to-ghost-darker"></div>
          <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Decorative Grid Overlay specific to Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0"></div>

      <div className="z-10 flex flex-col items-center max-w-4xl w-full">
        {/* Profile Image with Tactical Filters */}
        <div className="relative mb-8 group cursor-crosshair">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-tactical-gray relative z-10 shadow-[0_0_20px_rgba(0,229,255,0.3)] group-hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] transition-all duration-500">
             <img 
              src="https://picsum.photos/400/400" 
              alt="Operative" 
              className="w-full h-full object-cover filter sepia hue-rotate-[180deg] contrast-125 hover:hue-rotate-[90deg] transition-all duration-700"
            />
             {/* Crosshair Overlay */}
             <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity">
                <Target className="w-full h-full p-8 text-neon-cyan animate-spin-slow" />
             </div>
          </div>
          
          {/* Status Rings */}
          <div className="absolute -inset-4 border border-dashed border-gray-600 rounded-full animate-[spin_10s_linear_infinite] opacity-30"></div>
          <div className="absolute -inset-8 border border-dotted border-neon-cyan rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-20"></div>
        </div>

        {/* Text Intel */}
        <div className="text-center space-y-4 font-hud">
          <h2 className="text-neon-cyan text-sm md:text-base tracking-[0.3em] uppercase opacity-80 animate-pulse">
            Asset name:
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-ghost-white tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Loka Adarsh Dronamraju
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 text-caution-orange text-lg md:text-xl font-bold tracking-widest bg-black/40 px-4 py-1 border-x-2 border-caution-orange text-center">
            <span className="animate-pulse">●</span> STATUS: {RESUME_DATA.title.toUpperCase()}
          </div>
        </div>

        {/* Contact Intel Grid (Unredacted) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mt-10">
            {[
              { label: 'COMMS LINK', value: RESUME_DATA.contact.email },
              { label: 'SECURE LINE', value: RESUME_DATA.contact.phone },
              { label: 'LAST KNOWN LOC', value: RESUME_DATA.location }
            ].map((item, idx) => (
              <div key={idx} className="w-full bg-black/40 border border-gray-700 p-4 relative group hover:border-neon-cyan/50 hover:bg-black/60 transition-all duration-300">
                 {/* Tactical Corners */}
                 <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 
                 <div className="text-[10px] font-hud text-caution-orange font-bold tracking-widest mb-1 opacity-80">
                    [ {item.label} ]
                 </div>
                 <div className="font-data text-sm text-ghost-white tracking-wider break-words">
                    {item.value}
                 </div>
              </div>
            ))}
        </div>

        {/* Tactical Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent my-10 opacity-50"></div>

        {/* CTA Button */}
        <button 
          onClick={onStart}
          className="group relative px-8 py-3 bg-transparent overflow-hidden"
        >
          <div className="absolute inset-0 border border-neon-cyan skew-x-[-12deg] bg-neon-cyan/5 group-hover:bg-neon-cyan/20 transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-neon-cyan"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-neon-cyan"></div>
          
          <div className="relative flex items-center gap-3 font-hud text-ghost-white tracking-widest group-hover:text-neon-cyan transition-colors">
             <span className="animate-pulse">[</span> COMMENCE MISSION <span className="animate-pulse">]</span>
             <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;