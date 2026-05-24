'use client';

import { motion } from 'framer-motion';
import { VALUES, MISSION_STATEMENT } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Welcome to Pinnacle Grid - Hyderabad&apos;s Leading Digital Marketing & Consulting Agency
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Pinnacle Grid, we believe in empowering businesses with the tools and technologies needed to thrive in the digital age. Based in the heart of Hyderabad, our financial-grade services cater to a wide range of industries seeking growth, innovation, and visibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Values and Vision</h3>
            <ul className="space-y-4">
              {VALUES.map((value) => (
                <motion.li
                  key={value.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{value.title}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission Statement</h3>
            <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-blue-600 pl-6">
              &ldquo;{MISSION_STATEMENT}&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-96 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🏢</div>
            <p className="text-gray-600 font-semibold">About Pinnacle Grid Hyderabad</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
