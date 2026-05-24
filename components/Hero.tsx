'use client';

import { motion } from 'framer-motion';
import { HERO_BADGE, HERO_HEADLINE, HERO_SUBHEADING } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                {HERO_BADGE}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              {HERO_HEADLINE}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              {HERO_SUBHEADING}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Quote Now
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Services
              </button>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="w-full aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Floating elements */}
              <motion.div
                className="absolute w-20 h-20 bg-blue-200 rounded-full opacity-60"
                style={{ top: '10%', right: '15%' }}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-32 h-32 bg-green-200 rounded-full opacity-40"
                style={{ bottom: '5%', left: '-10%' }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              {/* Center content */}
              <div className="relative z-10 text-center">
                <div className="text-7xl mb-4">🎯</div>
                <p className="text-lg font-semibold text-gray-800">Digital Marketing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
