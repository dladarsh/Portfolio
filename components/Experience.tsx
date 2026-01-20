import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { ChevronDown, Briefcase, MapPin, Terminal } from 'lucide-react';
import RedactedText from './RedactedText';

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCE[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <div className="mb-8">
        <div className="flex items-center gap-4 text-caution-orange mb-2">
          <Terminal className="w-6 h-6" />
          <h2 className="text-2xl font-hud tracking-widest border-b-2 border-caution-orange pb-2 uppercase w-full">
            Field Reports // Classified
          </h2>
        </div>
        
        {/* Tactical System Hint */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-neon-cyan tracking-widest opacity-80 animate-pulse pl-1">
            <span>[ SYSTEM ADVISORY ]</span>
            <span>HOVER CURSOR OVER REDACTED ZONES TO DECLASSIFY INTEL</span>
        </div>
      </div>

      <div className="space-y-4">
        {EXPERIENCE.map((exp) => {
          const isExpanded = expandedId === exp.id;
          // Combine details into a single string for the redacted block
          const formattedDetails = exp.details.map(point => `>> ${point}`).join('\n\n');

          return (
            <div 
              key={exp.id}
              className={`
                border border-l-4 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm
                ${isExpanded ? 'border-neon-cyan border-l-neon-cyan shadow-[0_0_15px_rgba(0,229,255,0.1)]' : 'border-gray-700 border-l-gray-500 hover:border-gray-500'}
              `}
            >
              {/* Header */}
              <button 
                onClick={() => toggleExpand(exp.id)}
                className="w-full flex flex-col md:flex-row md:items-center justify-between p-4 text-left font-data focus:outline-none"
              >
                <div className="space-y-1">
                  <h3 className={`text-lg md:text-xl font-bold uppercase tracking-tight flex items-center gap-2 ${isExpanded ? 'text-white' : 'text-gray-400'}`}>
                    {exp.role}
                    {isExpanded && <span className="text-[10px] bg-neon-cyan text-black px-2 py-0.5 rounded-sm font-bold">ACTIVE INTEL</span>}
                  </h3>
                  <div className="text-sm text-gray-400 flex items-center gap-2">
                    <Briefcase className="w-3 h-3 text-caution-orange" />
                    {exp.company} 
                    {exp.location && (
                      <>
                        <span className="text-gray-600">|</span> 
                        <MapPin className="w-3 h-3 text-caution-orange" />
                        {exp.location}
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex items-center gap-4">
                  <div className="text-xs font-mono text-neon-cyan bg-neon-cyan/10 px-3 py-1 border border-neon-cyan/20">
                     [TIMESTAMP: {exp.period.replace('–', '//').replace('Present', 'ACTIVE')}]
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-neon-cyan' : ''}`} />
                </div>
              </button>

              {/* Content */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-4 pt-0 border-t border-dashed border-gray-700 mx-4 mt-2">
                   {/* Using RedactedText for the entire description block */}
                   <div className="mt-4">
                      <RedactedText 
                        text={formattedDetails} 
                        label="MISSION DETAILS" 
                        className="w-full"
                      />
                   </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;