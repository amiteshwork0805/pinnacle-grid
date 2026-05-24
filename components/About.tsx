'use client';

import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="w-full py-20 bg-white">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Pinnacle Grid</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2015, Pinnacle Grid has become the industry leader in intelligent electrical grid solutions. We work with energy providers, utilities, and grid operators across the globe to modernize their infrastructure.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our mission is simple: make electrical grids smarter, more efficient, and more sustainable. With our cutting-edge technology and expert team, we&apos;re transforming the future of energy.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Industry Leading Technology</h3>
                  <p className="text-gray-600">Trusted by the largest grid operators worldwide</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Expert Team</h3>
                  <p className="text-gray-600">Over 200 specialists with decades of experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Continuous Innovation</h3>
                  <p className="text-gray-600">Investing heavily in R&D for next-gen solutions</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            variants={itemVariants}
          >
            <div className="bg-primary-light p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <p className="text-gray-700">Countries Served</p>
            </div>
            <div className="bg-primary-light p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">10B+</div>
              <p className="text-gray-700">Data Points Processed Daily</p>
            </div>
            <div className="bg-primary-light p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">$2T+</div>
              <p className="text-gray-700">Infrastructure Managed</p>
            </div>
            <div className="bg-primary-light p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-gray-700">Customer Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
