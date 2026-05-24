'use client';

import { motion } from 'framer-motion';
import { IPricingTier } from '@/lib/types';

interface PricingCardProps {
  tier: IPricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const hoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -20 },
  };

  return (
    <motion.div
      className={`rounded-lg p-8 flex flex-col relative transition-all ${
        tier.isPopular
          ? 'bg-primary text-white shadow-2xl ring-2 ring-primary'
          : 'bg-white shadow-lg'
      }`}
      variants={itemVariants}
      whileHover="hover"
      initial="rest"
      animate="rest"
      custom={hoverVariants}
    >
      {tier.isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <h3 className={`text-2xl font-bold mb-2 ${tier.isPopular ? 'text-white' : 'text-gray-900'}`}>
        {tier.name}
      </h3>
      <p className={`mb-6 ${tier.isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
        {tier.description}
      </p>

      <div className="mb-6">
        {tier.price === 0 ? (
          <div className={`text-2xl font-bold ${tier.isPopular ? 'text-white' : 'text-primary'}`}>
            Custom Pricing
          </div>
        ) : (
          <>
            <span className={`text-4xl font-bold ${tier.isPopular ? 'text-white' : 'text-gray-900'}`}>
              ${tier.price.toLocaleString()}
            </span>
            <span className={tier.isPopular ? 'text-blue-100' : 'text-gray-600'}>
              /{tier.period}
            </span>
          </>
        )}
      </div>

      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all ${
          tier.isPopular
            ? 'bg-white text-primary hover:bg-blue-50'
            : 'bg-primary text-white hover:bg-primary-dark'
        }`}
      >
        {tier.ctaText}
      </button>

      <div className="space-y-4 flex-grow">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <svg
              className={`h-5 w-5 mr-3 flex-shrink-0 mt-0.5 ${
                tier.isPopular ? 'text-white' : 'text-primary'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={tier.isPopular ? 'text-blue-50' : 'text-gray-700'}>
              {feature}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
