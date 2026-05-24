'use client';

import { motion } from 'framer-motion';
import { ITestimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: ITestimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="bg-secondary rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
      variants={itemVariants}
    >
      <div className="flex items-center mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-700 mb-8 text-lg italic">&quot;{testimonial.content}&quot;</p>

      <div className="border-t border-gray-300 pt-6">
        <div className="font-semibold text-gray-900">{testimonial.name}</div>
        <div className="text-sm text-gray-600">{testimonial.title}</div>
        <div className="text-sm text-primary font-medium">{testimonial.company}</div>
      </div>
    </motion.div>
  );
}
