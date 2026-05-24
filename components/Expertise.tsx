'use client';

import { motion } from 'framer-motion';
import { EXPERTISE_CARDS } from '@/lib/constants';

export default function Expertise() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Our Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Everything You Need for Digital Dominance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We blend hardware innovation with digital marketing expertise to give your Hyderabad business the competitive edge it deserves.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {EXPERTISE_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-6">{card.description}</p>
              <ul className="space-y-3">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Get Quote →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
