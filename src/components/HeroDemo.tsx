import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Bot } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-indigo/15 rounded-full blur-[100px] -z-10 mix-blend-screen animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] bg-brand-violet/15 rounded-full blur-[90px] -z-10 mix-blend-screen animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] bg-brand-indigo/10 rounded-full blur-[120px] -z-10 mix-blend-screen animate-blob animation-delay-4000"></div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-brand-indigo/10 border border-brand-indigo/30 text-brand-indigo text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Now in early access</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-extrabold text-[36px] sm:text-[44px] md:text-[80px] leading-[1.05] tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-brand-slate"
        >
          Scale yourself.<br className="hidden md:block"/>Not your hours.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-slate max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Train your digital twin in minutes. Let it think, speak, and respond like you — so you can create more content, handle more demand, and stay visible everywhere without working more hours.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-brand-slate"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-bg bg-brand-slate/20 flex items-center justify-center overflow-hidden">
                 <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User avatar" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <span className="flex items-center gap-1 font-medium">
            Join 2,400+ coaches, creators, and founders already cloning themselves
          </span>
        </motion.div>
      </div>
    </section>
  );
}
