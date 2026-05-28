import { motion } from 'motion/react';
import { Mic, BrainCircuit, Rocket, LayoutGrid, Briefcase, GraduationCap, Users } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    { 
      num: 1, 
      title: "Record", 
      desc: "Upload voice samples, write your bio, paste your content. 10 minutes.",
      icon: Mic
    },
    { 
      num: 2, 
      title: "Train", 
      desc: "Our AI learns your tone, expertise, and communication style.",
      icon: BrainCircuit
    },
    { 
      num: 3, 
      title: "Deploy", 
      desc: "Share your clone link. It handles conversations while you sleep.",
      icon: Rocket
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 md:py-32 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-20"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">From you, to clone, in three steps.</h2>
        </motion.div>

        <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[24px] md:rounded-[32px] p-6 md:p-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 md:gap-4 relative shadow-2xl">

          {steps.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="relative z-10 flex flex-col gap-2 flex-1 pt-4 md:pt-0 border-t border-white/5 md:border-none"
            >
              <div className="flex items-center gap-3 md:mb-2">
                <span className="text-[10px] font-bold text-brand-indigo uppercase tracking-widest bg-brand-indigo/10 px-2 py-0.5 rounded">Step 0{step.num}</span>
              </div>
              <h5 className="text-lg md:text-xl font-bold font-display">{step.title}</h5>
              <p className="text-xs md:text-sm text-brand-slate max-w-[280px] leading-relaxed block">{step.desc}</p>
            </motion.div>
          ))}
          
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-[50%] left-[10%] right-[10%] h-[1px] flex-1 bg-gradient-to-r from-brand-indigo via-brand-indigo/50 to-transparent opacity-30 -translate-y-[50%] pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(108,99,255,0) 0%, rgba(108,99,255,1) 50%, rgba(108,99,255,0) 100%)' }}></div>
        </div>
      </div>
    </section>
  );
}

export function UseCases() {
  const cases = [
    {
      title: "Content Engine",
      subtitle: "Turn your expertise into daily content.",
      desc: "Your clone helps create hooks, scripts, captions, posts, and ideas from your voice, stories, offers, and point of view.",
      emoji: "✍️"
    },
    {
      title: "Organic Attention",
      subtitle: "Stay visible without living online.",
      desc: "Post consistently across platforms so your market keeps seeing you, hearing from you, and remembering what you do.",
      emoji: "👁️"
    },
    {
      title: "Prospect Conversations",
      subtitle: "Create more reasons for people to reply.",
      desc: "Use clone-powered content and messaging to start the small conversations that turn into sales calls, referrals, and opportunities.",
      emoji: "💬"
    },
    {
      title: "Inbound Demand",
      subtitle: "Make your market come to you.",
      desc: "Build trust at scale so prospects already know your value before they ever book a call.",
      emoji: "🧲"
    }
  ];

  return (
    <section id="use-cases" className="py-24 px-6 md:py-32 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-brand-indigo/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-16 md:mb-24 text-center"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-tight max-w-4xl mx-auto">Built for people who need more attention, more content, and more conversations without becoming a full-time content team.</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
           {cases.map((card, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ delay: idx * 0.1, duration: 0.5 }}
               className="bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-[24px] p-6 lg:p-8 flex flex-col hover:bg-white/[0.05] transition-all group overflow-hidden relative"
             >
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/10 blur-[50px] rounded-full group-hover:bg-brand-indigo/20 transition-all duration-500 pointer-events-none"></div>
               <div className="text-4xl mb-6">
                 {card.emoji}
               </div>
               <div>
                 <h4 className="font-bold text-xl mb-1 text-brand-white">
                   {card.title}
                 </h4>
                 <p className="font-medium text-brand-indigo text-[13px] mb-3 leading-tight opacity-90">
                   {card.subtitle}
                 </p>
                 <p className="text-sm text-brand-slate leading-relaxed">
                   {card.desc}
                 </p>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
