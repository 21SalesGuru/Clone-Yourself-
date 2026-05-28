import { motion } from 'motion/react';

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:py-32 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-brand-violet/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">People who've already <br className="hidden sm:block"/>cloned themselves.</h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            "L2BNEVMLan8",
            "xLxO3CsKK3U",
            "E1iSpJcA0VA",
            "_zZuduH92ck"
          ].map((videoId, idx) => (
            <motion.div
              key={videoId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-[32px] p-4 lg:p-5 shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/10 to-brand-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]"></div>
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-brand-bg/50 border border-white/5 mx-auto flex items-center justify-center">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube video player ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
