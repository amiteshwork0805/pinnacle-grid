'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import ContactForm from './ContactForm';

export default function Contact() {
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to transform your electrical grid? Contact our team today.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary">
                    <FiPhone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">Phone</h3>
              </div>
              <p className="text-gray-700 ml-16">+1 (800) 123-4567</p>
              <p className="text-gray-700 ml-16">Available 24/7</p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary">
                    <FiMail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">Email</h3>
              </div>
              <p className="text-gray-700 ml-16">hello@pinnaclegrid.com</p>
              <p className="text-gray-700 ml-16">sales@pinnaclegrid.com</p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary">
                    <FiMapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">Headquarters</h3>
              </div>
              <p className="text-gray-700 ml-16">123 Energy Boulevard</p>
              <p className="text-gray-700 ml-16">San Francisco, CA 94102</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
