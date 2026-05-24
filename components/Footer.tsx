'use client';

import { motion } from 'framer-motion';
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About {COMPANY_NAME}</h3>
            <p className="text-gray-400">
              Empowering your financial journey with secure, smart, and seamless solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p className="text-sm">{COMPANY_ADDRESS}</p>
              <p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </p>
              <p>
                <a href={`tel:${COMPANY_PHONE}`} className="hover:text-white transition-colors">
                  {COMPANY_PHONE}
                </a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a href="#" className="inline-block text-gray-400 hover:text-white transition-colors text-2xl">
                in
              </a>
              <a href="#" className="inline-block text-gray-400 hover:text-white transition-colors text-2xl ml-4">
                ig
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <p className="text-center text-gray-400">
            © 2026 {COMPANY_NAME}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
