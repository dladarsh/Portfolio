import React from 'react';
import { Section } from '../types';

interface NavigationProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const navItems = [
    { id: Section.EXPERIENCE, label: 'OPERATION: GENESIS', sub: 'EXP' },
    { id: Section.SKILLS, label: 'OPERATION: ARSENAL', sub: 'SKILL' },
    { id: Section.PROJECTS, label: 'OPERATION: GHOST', sub: 'INTEL' },
    { id: Section.CONTACT, label: 'OPERATION: COMMS', sub: 'SIGNAL' },
  ];

  return (
    <nav className="w-full flex justify-center md:justify-start overflow-x-auto py-4 px-2 md:px-0 border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-50 scrollbar-hide">
      <div className="flex gap-2 md:gap-6 min-w-max px-4">
        {navItems.map((item) => {
          const isActive = currentSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                relative px-4 py-2 font-hud text-sm md:text-base font-bold tracking-wider transition-all duration-300
                flex items-center gap-2 group
                ${isActive ? 'text-neon-cyan bg-neon-cyan/10' : 'text-gray-500 hover:text-gray-300'}
              `}
            >
              {/* Bracket styling */}
              <span className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}>[</span>
              
              <div className="flex flex-col items-start">
                 <span className="leading-none">{item.label}</span>
                 {isActive && (
                   <span className="text-[10px] text-caution-orange font-data tracking-[0.2em] animate-pulse">
                     // STATUS: ACTIVE
                   </span>
                 )}
              </div>

              <span className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}>]</span>
              
              {/* Bottom active line */}
              <div className={`absolute bottom-0 left-0 h-[2px] bg-neon-cyan transition-all duration-300 ${isActive ? 'w-full shadow-[0_0_10px_#00E5FF]' : 'w-0'}`}></div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;