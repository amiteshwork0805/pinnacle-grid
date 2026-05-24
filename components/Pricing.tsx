'use client';

import { motion } from 'framer-motion';
import { PRICING_TIERS } from '@/lib/constants';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Pricing</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Premium Solutions at Honest Prices
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible plans tailored to your specific business requirements. Free consultation available.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`rounded-xl p-8 ${tier.isPopular ? 'bg-blue-600 text-white shadow-2xl scale-105' : 'bg-gray-50 border border-gray-200'}`}
            >
              {tier.isPopular && <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold w-fit mb-4">Most Popular</div>}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className={`text-3xl font-bold mb-4`}>{tier.price}</p>
              <p className={`mb-6 ${tier.isPopular ? 'text-blue-100' : 'text-gray-600'}`}>{tier.description}</p>
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${tier.isPopular ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-orange-600 font-semibold mt-8"
        >
          ⚠️ Limited slots available for monthly marketing retainers!
        </motion.p>
      </div>
    </section>
  );
}
