'use client';

import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fi';
import { PROCESS_STEPS } from '@/lib/constants';

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Process</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A streamlined approach to transforming your electrical grid infrastructure
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div key={step.id} variants={itemVariants} className="relative">
                <div className="bg-primary-light rounded-lg p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-block p-3 bg-primary rounded-full">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    {index < PROCESS_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-10 w-8 h-8 bg-white border-4 border-primary rounded-full"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
