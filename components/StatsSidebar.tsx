import React from 'react';
import { STATS } from '../constants';

const StatsSidebar: React.FC = () => {
  return (
    <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 w-48 flex-col gap-6 p-4 border-l border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="text-xs font-hud text-red-500 text-center animate-pulse tracking-widest border-b border-red-900/30 pb-2">
        [ LIVE ] MONITORING
      </div>
      
      {Object.entries(STATS).map(([key, value]) => (
        <div key={key} className="space-y-1">
           <div className="flex justify-between text-[10px] uppercase font-hud text-gray-400">
             <span>{key}</span>
             <span>{value}%</span>
           </div>
           <div className="h-1.5 w-full bg-gray-800 relative overflow-hidden">
             <div 
               className="absolute top-0 left-0 h-full bg-neon-cyan shadow-[0_0_8px_#00E5FF]"
               style={{ width: `${value}%` }}
             ></div>
           </div>
        </div>
      ))}

      <div className="mt-4 border-t border-white/10 pt-4 text-[10px] text-gray-600 font-mono leading-tight">
        <p>SYSTEM OPTIMIZED</p>
        <p>PING: 14ms</p>
        <p>PACKET LOSS: 0%</p>
      </div>
    </div>
  );
};

export default StatsSidebar;