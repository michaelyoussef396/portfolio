"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { FAQProps } from "@/types";

const FAQ: React.FC<FAQProps> = ({ faqs, title = "Frequently Asked Questions" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="w-full px-4 py-20 bg-[var(--color-navy)] text-[var(--color-bone)] font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 italic text-center">
          {title} <span className="text-purple">FAQs</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 pb-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left group"
              >
                <span className="text-lg md:text-xl font-semibold group-hover:text-purple transition-colors">
                  {faq.question}
                </span>
                <div className="text-purple group-hover:scale-110 transition-transform">
                  {activeIndex === index ? <IconMinus className="h-6 w-6" /> : <IconPlus className="h-6 w-6" />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
