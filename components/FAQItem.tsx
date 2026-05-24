'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IFAQ } from '@/lib/types';

interface FAQItemProps {
  faq: IFAQ;
  index: number;
}

export default function FAQItem({ faq, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
      >
        <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          ↓
        </motion.span>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-white border-t border-gray-200">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
