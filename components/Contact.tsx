'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from '@/lib/constants';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            {"Let's Connect - We're Just a Click Away!"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold mb-2">Phone</p>
              <p className="text-xl font-bold text-gray-900">{COMPANY_PHONE}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold mb-2">Email</p>
              <p className="text-xl font-bold text-gray-900">{COMPANY_EMAIL}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold mb-2">Address</p>
              <p className="text-gray-700 leading-relaxed">{COMPANY_ADDRESS}</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
