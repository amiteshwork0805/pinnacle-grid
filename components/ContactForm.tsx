'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [state, setState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
      setState({ isSubmitting: false, isSubmitted: true, error: null });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setState((prev) => ({ ...prev, isSubmitted: false }));
      }, 5000);
    } catch (error) {
      setState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to submit form. Please try again.',
      });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-secondary rounded-lg p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition resize-none"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        {state.error && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {state.error}
          </div>
        )}

        {state.isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
          >
            Thank you! We&apos;ll be in touch shortly.
          </motion.div>
        )}

        <button
          type="submit"
          disabled={state.isSubmitting}
          className="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </motion.form>
  );
}
