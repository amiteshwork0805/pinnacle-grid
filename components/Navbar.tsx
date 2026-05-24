'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { COMPANY_NAME } from '@/lib/constants';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white shadow-lg z-50"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold text-primary flex items-center"
            variants={itemVariants}
          >
            {COMPANY_NAME}
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                variants={itemVariants}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Desktop CTA Button */}
          <motion.button
            className="hidden md:block px-6 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg"
            variants={itemVariants}
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            variants={itemVariants}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-200 py-4 space-y-4"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary transition-colors font-medium px-4"
                  onClick={() => setIsOpen(false)}
                  variants={itemVariants}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                className="w-full mx-4 px-6 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all"
                variants={itemVariants}
              >
                Get Started
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
