import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StatsSidebar from './components/StatsSidebar';
import Notification from './components/Notification';
import { Section } from './types';
import { Download } from 'lucide-react';
import { RESUME_DATA, EXPERIENCE, PROJECTS, SKILLS } from './constants';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HERO);
  const [isGlitching, setIsGlitching] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleNavigate = (section: Section) => {
    if (section === currentSection) return;
    
    // Trigger Glitch Effect
    setIsGlitching(true);
    setTimeout(() => {
      setCurrentSection(section);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
    setTimeout(() => {
      setIsGlitching(false);
    }, 400);
  };

  const handleDownload = () => {
    // Simulate download start
    setShowNotification(true);
    
    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
    // Trigger the actual download
  const link = document.createElement("a");
  link.href = `${import.meta.env.BASE_URL}resume/Loka-Adarsh-Dronamraju.pdf`;       
  link.download = "Loka_Adarsh_Dronamraju_Resume.pdf";  // File name when downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Optional: hide the notification after 2 seconds
  setTimeout(() => setShowNotification(false), 2000);
};

  return (
    <div className="relative min-h-screen font-sans bg-ghost-darker text-ghost-white selection:bg-neon-cyan selection:text-black">
      
      {/* BACKGROUND LAYERS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Carbon Texture */}
         <div className="absolute inset-0 bg-carbon opacity-30"></div>
         {/* Moving Grid */}
         <div className="absolute inset-0 bg-grid opacity-20"></div>
         {/* Scanline */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[5%] animate-scanline opacity-10"></div>
         {/* Vignette */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className={`relative z-10 min-h-screen flex flex-col transition-opacity duration-100 ${isGlitching ? 'opacity-50 blur-[2px] translate-x-1' : 'opacity-100'}`}>
        
        {currentSection === Section.HERO ? (
          <Hero onStart={() => handleNavigate(Section.EXPERIENCE)} />
        ) : (
          <>
            <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
            
            <main className="flex-grow p-4 md:p-8 pb-20 max-w-7xl mx-auto w-full">
              {currentSection === Section.EXPERIENCE && <Experience />}
              {currentSection === Section.SKILLS && <Skills />}
              {currentSection === Section.PROJECTS && <Projects />}
              {currentSection === Section.CONTACT && <Contact />}
            </main>

            <StatsSidebar />
          </>
        )}

        {/* Global Footer / Extract Intel Button */}
        {currentSection !== Section.HERO && (
          <footer className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-gray-800 py-2 z-40 flex justify-between items-center px-4 md:px-12">
             <div className="text-[10px] text-gray-500 font-mono hidden md:block">
                SYS.VER.3.0.1 // CONNECTED
             </div>
             
             <button 
               onClick={handleDownload}
               className="mx-auto md:mx-0 flex items-center gap-2 bg-caution-orange/10 border border-caution-orange px-4 py-1 text-xs md:text-sm text-caution-orange font-hud font-bold uppercase tracking-wider hover:bg-caution-orange hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,140,0,0.2)]"
             >
               <Download className="w-3 h-3" />
               [ EXTRACT INTEL ]
             </button>
          </footer>
        )}
      </div>

      {/* Glitch Overlay Elements (Only visible during glitch state) */}
      {isGlitching && (
        <div className="fixed inset-0 z-50 pointer-events-none bg-neon-cyan/5 mix-blend-overlay">
           <div className="absolute top-1/4 left-0 w-full h-2 bg-white/20"></div>
           <div className="absolute bottom-1/3 left-0 w-full h-8 bg-black/10"></div>
        </div>
      )}

      <Notification isOpen={showNotification} onClose={() => setShowNotification(false)} />
    </div>
  );
};

export default App;