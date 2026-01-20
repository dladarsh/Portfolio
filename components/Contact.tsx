import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';
import { Mail, Phone, MapPin, Send, Lock, Radio, Linkedin, Github, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');

    // Construct the mailto link
    const subject = encodeURIComponent(`[GHOST PROTOCOL] Transmission from ${formState.name}`);
    const body = encodeURIComponent(
      `// ENCRYPTED TRANSMISSION //\n\n` +
      `OPERATIVE: ${formState.name}\n` +
      `RETURN COMMS: ${formState.email}\n\n` +
      `INTEL:\n${formState.message}\n\n` +
      `// END TRANSMISSION //`
    );

    const mailtoLink = `mailto:${RESUME_DATA.contact.email}?subject=${subject}&body=${body}`;

    // Simulate "uplink" delay for effect, then trigger mailto
    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus('SENT');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('IDLE'), 3000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
        <h2 className="text-2xl font-hud tracking-widest text-ghost-white uppercase flex items-center gap-3">
          <Radio className="text-caution-orange animate-pulse" /> Establish Uplink
        </h2>
        <div className="text-xs font-mono text-neon-cyan border border-neon-cyan/30 px-2 py-1 flex items-center gap-2">
          <ShieldCheck className="w-3 h-3" /> SECURE UPLINK // ACTIVE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Direct Comms */}
        <div className="space-y-6">
          <p className="text-gray-400 font-data mb-6 border-l-2 border-caution-orange pl-4">
            Direct communication lines are open. Intercepting operative signal...
            <br />
            Select a frequency below to initiate contact.
          </p>

          <div className="space-y-4">
            {/* Email Card - Standard Mailto */}
            <div className="group relative bg-gray-900/50 p-6 border border-gray-700 hover:border-neon-cyan transition-colors duration-300">
               <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                  <Mail className="w-12 h-12 text-neon-cyan" />
               </div>
               <h3 className="text-xs font-hud text-gray-500 uppercase mb-1">Secure Email Relay</h3>
               <a 
                 href={`mailto:${RESUME_DATA.contact.email}`} 
                 className="text-lg md:text-xl font-bold text-ghost-white group-hover:text-neon-cyan transition-colors break-all"
               >
                 {RESUME_DATA.contact.email}
               </a>
            </div>

            {/* Phone Card */}
            <div className="group relative bg-gray-900/50 p-6 border border-gray-700 hover:border-neon-cyan transition-colors duration-300">
               <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                  <Phone className="w-12 h-12 text-neon-cyan" />
               </div>
               <h3 className="text-xs font-hud text-gray-500 uppercase mb-1">Sat-Phone Link</h3>
               <a href={`tel:${RESUME_DATA.contact.phone}`} className="text-lg md:text-xl font-bold text-ghost-white group-hover:text-neon-cyan transition-colors">
                 {RESUME_DATA.contact.phone}
               </a>
            </div>

            {/* Location & Socials */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-4 border border-gray-700 col-span-2">
                   <h3 className="text-[10px] font-hud text-gray-500 uppercase mb-2 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Base of Ops
                   </h3>
                   <p className="text-white font-mono text-sm">{RESUME_DATA.location}</p>
                </div>
                
                <a 
                  href={RESUME_DATA.contact.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 p-4 border border-gray-700 hover:bg-neon-cyan/5 hover:border-neon-cyan transition-colors cursor-pointer group"
                >
                   <h3 className="text-[10px] font-hud text-gray-500 uppercase mb-2 flex items-center gap-1 group-hover:text-neon-cyan">
                      <Github className="w-3 h-3" /> Repository
                   </h3>
                   <p className="text-white font-mono text-sm group-hover:text-neon-cyan">GitHub</p>
                </a>

                <a 
                  href={RESUME_DATA.contact.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 p-4 border border-gray-700 hover:bg-neon-cyan/5 hover:border-neon-cyan transition-colors cursor-pointer group"
                >
                   <h3 className="text-[10px] font-hud text-gray-500 uppercase mb-2 flex items-center gap-1 group-hover:text-neon-cyan">
                      <Linkedin className="w-3 h-3" /> Network
                   </h3>
                   <p className="text-white font-mono text-sm group-hover:text-neon-cyan">LinkedIn</p>
                </a>
            </div>
          </div>
        </div>

        {/* Right Column: Transmission Form */}
        <div className="relative">
           {/* Background decorative elements */}
           <div className="absolute -inset-4 border border-dashed border-gray-800 pointer-events-none z-0"></div>
           <div className="absolute top-0 left-0 w-2 h-2 bg-caution-orange"></div>
           <div className="absolute bottom-0 right-0 w-2 h-2 bg-caution-orange"></div>

           <form onSubmit={handleSubmit} className="relative z-10 bg-black/40 backdrop-blur-sm p-6 border border-gray-700 space-y-6">
              
              <div className="flex items-center gap-2 mb-4 text-caution-orange">
                 <Lock className="w-4 h-4" />
                 <span className="text-xs font-hud tracking-widest">TRANSMISSION PROTOCOL</span>
              </div>

              {/* Name Input */}
              <div className="space-y-1">
                 <label htmlFor="name" className="text-xs font-mono text-gray-500 uppercase block">Operative ID (Name)</label>
                 <div className="relative group">
                    <div className="absolute inset-y-0 left-0 w-1 bg-gray-700 group-focus-within:bg-neon-cyan transition-colors"></div>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-gray-900/80 border border-gray-700 text-ghost-white p-3 pl-4 focus:outline-none focus:border-neon-cyan font-data tracking-wider"
                      placeholder="ENTER ID..."
                    />
                 </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                 <label htmlFor="email" className="text-xs font-mono text-gray-500 uppercase block">Return Frequency (Email)</label>
                 <div className="relative group">
                    <div className="absolute inset-y-0 left-0 w-1 bg-gray-700 group-focus-within:bg-neon-cyan transition-colors"></div>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-gray-900/80 border border-gray-700 text-ghost-white p-3 pl-4 focus:outline-none focus:border-neon-cyan font-data tracking-wider"
                      placeholder="SECURE@DOMAIN..."
                    />
                 </div>
              </div>

              {/* Message Input */}
              <div className="space-y-1">
                 <label htmlFor="message" className="text-xs font-mono text-gray-500 uppercase block">Mission Intel (Message)</label>
                 <div className="relative group">
                    <div className="absolute inset-y-0 left-0 w-1 bg-gray-700 group-focus-within:bg-neon-cyan transition-colors"></div>
                    <textarea 
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-gray-900/80 border border-gray-700 text-ghost-white p-3 pl-4 focus:outline-none focus:border-neon-cyan font-data tracking-wider resize-none"
                      placeholder="UPLOAD DATA PACKET..."
                    />
                 </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={status !== 'IDLE'}
                className={`
                  w-full py-3 font-hud font-bold tracking-widest text-sm uppercase flex items-center justify-center gap-2 transition-all duration-300
                  ${status === 'IDLE' ? 'bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black' : ''}
                  ${status === 'SENDING' ? 'bg-caution-orange/10 border border-caution-orange text-caution-orange cursor-wait' : ''}
                  ${status === 'SENT' ? 'bg-green-500/20 border border-green-500 text-green-500' : ''}
                `}
              >
                {status === 'IDLE' && (
                  <>
                    [ INITIATE UPLINK ] <Send className="w-4 h-4" />
                  </>
                )}
                {status === 'SENDING' && 'ESTABLISHING SECURE CONNECTION...'}
                {status === 'SENT' && 'TRANSMISSION SECURED'}
              </button>
              
              {status === 'SENT' && (
                 <div className="text-[10px] text-gray-500 text-center font-mono mt-2">
                    // LAUNCHING COMMS RELAY //
                 </div>
              )}

           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;