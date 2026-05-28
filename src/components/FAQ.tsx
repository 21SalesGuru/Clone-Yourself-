import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What does Clone Yourself actually do?",
    answer: "Clone Yourself helps turn you, your knowledge, your voice, and your point of view into a scalable content and communication system. Instead of spending hours writing posts, editing videos, planning content, and trying to keep up with algorithms, your clone helps produce content and conversations that build attention, trust, and inbound demand."
  },
  {
    question: "Is this just another AI chatbot?",
    answer: "No. The goal is not just to create a bot that answers questions. Clone Yourself is built to help you scale your presence. That includes content creation, organic posting, audience engagement, prospect conversations, and building a system that helps people know, like, and trust you before they ever get on a call."
  },
  {
    question: "Who is this for?",
    answer: "Clone Yourself is for founders, agency owners, recruiters, coaches, sales leaders, consultants, and operators whose business depends on attention, trust, and consistent communication. If your expertise, personality, or credibility helps drive sales, recruiting, referrals, or client acquisition, this is built for you."
  },
  {
    question: "How does this help me get more attention?",
    answer: "The modern organic sales game rewards consistency and watch time. Your clone helps turn your ideas, stories, expertise, and offers into content that can be posted consistently across platforms, so more people know who you are and what you do."
  },
  {
    question: "Will the content still sound like me?",
    answer: "That is the point. Your clone is trained around your voice, tone, stories, beliefs, expertise, and communication style. The more real context you provide, the more the output can feel like something you would actually say instead of generic AI content."
  },
  {
    question: "Do I need to be good at social media?",
    answer: "No. This is designed for people who understand their business but do not want to become full-time copywriters, video editors, content strategists, or algorithm experts. Clone Yourself helps turn what you already know into usable content and conversations."
  },
  {
    question: "What kind of content can my clone help create?",
    answer: "Your clone can help create short-form video scripts, social posts, captions, hooks, replies, DM responses, thought-leadership content, prospect education, recruiting content, and offer-driven content designed to create inbound attention."
  },
  {
    question: "Does this replace me?",
    answer: "No. It extends you. Your clone gives you leverage by helping produce and distribute your ideas faster. You are still the source of the strategy, expertise, offer, and judgment. The clone helps package and scale it."
  },
  {
    question: "How is this different from hiring a content team?",
    answer: "A traditional content team may need writers, editors, strategists, designers, and managers. Clone Yourself is designed to give one person the output and consistency of a larger team by systemizing your content and communication style."
  },
  {
    question: "Can this help my agency look bigger than it is?",
    answer: "Yes. One of the biggest advantages of AI-powered content infrastructure is that a small team can create the appearance, consistency, and output of a much larger organization. More content, more conversations, and more visibility create more perceived authority."
  },
  {
    question: "Will this generate leads?",
    answer: "Clone Yourself is built to support organic inbound demand. It does not guarantee leads by itself, but it helps you do the activities that create inbound: posting consistently, building trust, creating content that gets watched, and starting more conversations with prospects."
  },
  {
    question: "Do I still need paid ads or lead lists?",
    answer: "No. The system is designed around organic attention. Paid ads and lead lists can still be useful, but Clone Yourself is focused on helping you create demand through content, attention, referrals, and inbound conversations."
  },
  {
    question: "What do I need to provide to build my clone?",
    answer: "You should provide your voice, content, offers, stories, bio, previous posts, videos, FAQs, sales messaging, and examples of how you communicate. The better the inputs, the stronger the clone."
  },
  {
    question: "How long does it take to build?",
    answer: "A basic clone can be created quickly, but a high-performing clone improves as more context, content, and examples are added. The first version gives you leverage. The refined version becomes infrastructure."
  },
  {
    question: "Can my clone handle DMs or prospect conversations?",
    answer: "Yes, your clone can help with repeatable conversations, common objections, FAQs, prospect education, and follow-up messaging. For high-value or sensitive conversations, you should still review or take over directly."
  },
  {
    question: "Will people know it is AI?",
    answer: "That depends on how you deploy it. In many cases, the clone is used to help create content and draft responses behind the scenes. If it is directly interacting with people, transparency and control are recommended."
  },
  {
    question: "What if the clone says something wrong?",
    answer: "You can review, correct, and refine the clone. It should be treated as a system that improves over time, not a set-it-and-forget-it replacement for your judgment. Boundaries, approval flows, and topic restrictions can help prevent bad outputs."
  },
  {
    question: "Is this safe for my personal brand?",
    answer: "Yes, when used correctly. The clone should be trained on your actual beliefs, expertise, offers, and communication style. The goal is not to make fake content. The goal is to scale the real things you already say, teach, sell, and believe."
  },
  {
    question: "What makes Clone Yourself different from just using ChatGPT?",
    answer: "ChatGPT is general-purpose. Clone Yourself is built around your identity, offer, voice, content strategy, and business goals. It is not just about generating text. It is about building a repeatable system for attention, trust, and inbound opportunity."
  },
  {
    question: "Why does this matter now?",
    answer: "AI is making it easier for smaller teams and less experienced competitors to create more content, show up more often, and capture more attention. If attention is part of your sales process, you cannot afford to rely only on manual output."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 relative z-10" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-brand-slate text-lg">Everything you need to know about scaling yourself.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-[24px] overflow-hidden"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
              >
                <h3 className="font-bold text-lg pr-8">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-indigo/10 flex items-center justify-center"
                >
                  <ChevronDown className="w-5 h-5 text-brand-indigo" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-brand-slate leading-relaxed border-t border-white/5">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
