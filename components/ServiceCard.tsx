'use client';

import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fi';
import { IService } from '@/lib/types';

interface ServiceCardProps {
  service: IService;
  index?: number;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  FiGrid: Icons.FiGrid,
  FiTrendingUp: Icons.FiTrendingUp,
  FiZap: Icons.FiZap,
  FiActivity: Icons.FiActivity,
  FiSun: Icons.FiSun,
  FiBriefcase: Icons.FiBriefcase,
  FiBook: Icons.FiBook,
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Icons.FiGrid;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  const hoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -10 },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow"
      variants={itemVariants}
      whileHover="hover"
      initial="rest"
      animate="rest"
      custom={hoverVariants}
    >
      <motion.div
        className="mb-4 inline-block p-3 bg-primary-light rounded-lg"
        variants={hoverVariants}
      >
        <Icon className="w-8 h-8 text-primary" />
      </motion.div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-700 mb-6">{service.description}</p>

      <div className="space-y-2">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-start">
            <svg className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
