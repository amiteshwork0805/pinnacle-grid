'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS, STATISTICS } from '@/lib/constants';

export default function Process() {
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
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Our Process</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Your Pathway to Digital Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {`We follow a clear and strategic process to elevate your brand's online presence and drive measurable results. Here's how we achieve it together:`}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-8 h-full">
                <div className="inline-block w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-white"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            {STATISTICS.map((stat) => (
              <div key={stat.id}>
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
