import React, { useEffect, useState } from 'react';
import { Skull } from 'lucide-react';

interface NotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ isOpen, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      // Auto dismiss after 4 seconds
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 500); // Wait for animation to finish
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b-4 border-caution-orange shadow-[0_10px_50px_rgba(255,140,0,0.3)]">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-center gap-6 animate-[glitch_0.3s_ease-out_1]">
          
          <div className="relative">
             <Skull className="w-16 h-16 text-gray-400" />
             <Skull className="w-16 h-16 text-caution-orange absolute top-0 left-0 animate-pulse opacity-50 blur-sm" />
          </div>

          <div className="text-center md:text-left">
             <h2 className="text-3xl md:text-5xl font-hud font-black text-white uppercase italic tracking-tighter drop-shadow-md text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
               ASSET ACQUIRED
             </h2>
             <p className="text-caution-orange font-mono text-sm md:text-base tracking-widest mt-1 font-bold">
               INTEL SECURED: FIELD OPERATIVE DATA DOWNLOADED
             </p>
          </div>

          <div className="hidden md:block w-24 h-1 bg-caution-orange shadow-[0_0_10px_#FF8C00]"></div>
        </div>
      </div>
      
      {/* Sound effect simulation via vibration if supported */}
      {visible && <div className="sr-only">Notification Sound Played</div>}
    </div>
  );
};

export default Notification;