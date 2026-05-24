'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-primary-light overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          variants={itemVariants}
        >
          Intelligent Electrical Grid Solutions
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Transform your energy infrastructure with cutting-edge technology. Reduce costs, improve reliability, and embrace renewable energy.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white hover:bg-secondary text-primary font-semibold rounded-lg border-2 border-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            Watch Demo
          </button>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 text-center"
          variants={itemVariants}
        >
          <div>
            <div className="text-3xl font-bold text-primary">500+</div>
            <p className="text-gray-600">Active Grids</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">99.9%</div>
            <p className="text-gray-600">Uptime</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">50K+</div>
            <p className="text-gray-600">Users</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
