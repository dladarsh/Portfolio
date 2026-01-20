import React, { useState } from 'react';
import { SKILLS } from '../constants';
import { Cpu, Database, Code, Activity, Layers, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getIcon = (cat: string) => {
    switch(cat) {
      case 'Languages': return <Code className="w-5 h-5" />;
      case 'Databases': return <Database className="w-5 h-5" />;
      case 'Analytics': return <Activity className="w-5 h-5" />;
      case 'Libraries': return <Layers className="w-5 h-5" />;
      case 'Tools': return <Terminal className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-hud tracking-widest text-neon-cyan mb-8 uppercase flex items-center gap-3">
        <Cpu className="animate-pulse" /> Loadout Configuration
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div key={category} className="bg-gray-900/60 p-6 border border-gray-700 relative overflow-hidden group">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-600 group-hover:border-neon-cyan transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-600 group-hover:border-neon-cyan transition-colors"></div>

            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-800">
               <span className="text-caution-orange">{getIcon(category)}</span>
               <h3 className="font-hud text-lg text-ghost-white tracking-wider">{category.toUpperCase()}</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {SKILLS.filter(s => s.category === category).map(skill => (
                <div 
                  key={skill.id}
                  className="relative group/perk cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className={`
                    h-20 flex flex-col items-center justify-center border-2 bg-gray-800/80 transition-all duration-200
                    ${hoveredSkill === skill.id ? 'border-neon-cyan shadow-[0_0_10px_rgba(0,229,255,0.4)] bg-gray-800' : 'border-gray-600 hover:border-gray-400'}
                  `}>
                    <span className="font-hud font-bold text-sm text-center px-2">{skill.name}</span>
                    <div className="w-full px-4 mt-2">
                       <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-caution-orange" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                       </div>
                    </div>
                  </div>

                  {/* Tooltip HUD */}
                  {hoveredSkill === skill.id && (
                    <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-black/95 border border-neon-cyan p-3 text-xs shadow-2xl pointer-events-none">
                       <div className="flex justify-between text-neon-cyan font-hud mb-1">
                          <span>LEVEL: ELITE</span>
                          <span>{skill.level}/100</span>
                       </div>
                       <div className="w-full h-px bg-gray-700 mb-2"></div>
                       <div className="text-gray-300 font-data mb-2">
                          <span className="text-caution-orange font-bold">PRO-PERK ENABLED:</span>
                          <br/>
                          {skill.perkDetail}
                       </div>
                       <div className="space-y-1">
                          <div className="flex justify-between text-[10px] text-gray-500 uppercase">
                             <span>Efficiency</span>
                             <span>Deployment Ready</span>
                          </div>
                          <div className="w-full h-1 bg-gray-800">
                             <div className="h-full bg-neon-cyan animate-pulse" style={{ width: '100%' }}></div>
                          </div>
                       </div>
                       {/* Triangle pointer */}
                       <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-neon-cyan"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;