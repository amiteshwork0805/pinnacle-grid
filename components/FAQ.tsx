'use client';

import { motion } from 'framer-motion';
import { FAQS } from '@/lib/constants';
import FAQItem from './FAQItem';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Utilize our tools to develop your concepts and bring your vision to life. Once complete, effortlessly share your creations.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
