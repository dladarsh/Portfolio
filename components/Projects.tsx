import React from 'react';
import { PROJECTS } from '../constants';
import { FileText, Radio, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
        <h2 className="text-2xl font-hud tracking-widest text-ghost-white uppercase">
          Mission Intel // Database
        </h2>
        <div className="flex items-center gap-2 text-red-500 text-sm font-bold animate-pulse">
           <Radio className="w-4 h-4" /> LIVE FEED
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id}
            className="group relative bg-gray-900 border border-gray-700 overflow-hidden hover:border-caution-orange transition-colors duration-300 flex flex-col"
          >
            {/* Live Feed Overlay Effect on Thumbnail */}
            <div className="h-48 w-full bg-black relative overflow-hidden border-b border-gray-700 shrink-0">
               <img 
                 src={project.image || `https://picsum.photos/seed/${project.id}/600/300`} 
                 alt={project.name} 
                 className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none"></div>
               <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-[10px] text-neon-cyan border border-neon-cyan/30 font-hud">
                  REC ●
               </div>
               {/* Scanline */}
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10%] w-full animate-scanline pointer-events-none"></div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
               <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-hud text-ghost-white group-hover:text-caution-orange transition-colors uppercase">
                      INTEL FILE: {project.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono mt-1 uppercase">{project.tech}</p>
                  </div>
                  <FileText className="text-gray-600 group-hover:text-caution-orange" />
               </div>

               <div className="space-y-2 mb-6 flex-grow">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-sm text-gray-400 font-data border-l-2 border-gray-800 pl-3">
                      {desc}
                    </p>
                  ))}
               </div>

               <div className="mt-auto border-t border-gray-800 pt-3 flex items-center justify-between">
                  <div className="flex justify-between items-center text-xs font-mono text-gray-500 w-full">
                     <span>{project.period}</span>
                     
                     {project.link ? (
                       <a 
                         href={project.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center gap-1 text-neon-cyan hover:text-white transition-colors uppercase font-bold tracking-wider"
                       >
                         [ ACCESS DOCUMENTS ] <ExternalLink className="w-3 h-3" />
                       </a>
                     ) : (
                       <span className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">[ ACCESS GRANTED ]</span>
                     )}
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;