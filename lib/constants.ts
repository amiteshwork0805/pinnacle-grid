import { IService, IPricingTier, ITestimonial, IFAQ, IProcessStep } from './types';

export const SERVICES: IService[] = [
  {
    id: 'grid-planning',
    title: 'Grid Planning & Design',
    description: 'Strategic planning and architectural design of your electrical grid infrastructure.',
    icon: 'FiGrid',
    features: ['Load forecasting', 'Network topology', 'Capacity analysis', 'Redundancy planning'],
  },
  {
    id: 'infrastructure-management',
    title: 'Infrastructure Management',
    description: 'Comprehensive management and maintenance of grid infrastructure.',
    icon: 'FiTrendingUp',
    features: ['Asset tracking', 'Preventive maintenance', 'Equipment monitoring', 'Performance analytics'],
  },
  {
    id: 'energy-optimization',
    title: 'Energy Optimization',
    description: 'Optimize energy distribution and reduce operational costs.',
    icon: 'FiZap',
    features: ['Load balancing', 'Peak shaving', 'Demand response', 'Cost reduction'],
  },
  {
    id: 'smart-metering',
    title: 'Smart Metering Solutions',
    description: 'Advanced metering infrastructure for real-time data collection.',
    icon: 'FiActivity',
    features: ['Real-time monitoring', 'Data analytics', 'Anomaly detection', 'Customer insights'],
  },
  {
    id: 'renewable-integration',
    title: 'Renewable Integration',
    description: 'Seamless integration of renewable energy sources into your grid.',
    icon: 'FiSun',
    features: ['Solar integration', 'Wind integration', 'Battery storage', 'Microgrid solutions'],
  },
  {
    id: 'consulting',
    title: 'Grid Consulting',
    description: 'Expert consulting services for grid modernization and digital transformation.',
    icon: 'FiBriefcase',
    features: ['Modernization strategy', 'Digital transformation', 'Regulatory compliance', 'Best practices'],
  },
  {
    id: 'training',
    title: 'Training & Support',
    description: 'Comprehensive training programs and ongoing technical support.',
    icon: 'FiBook',
    features: ['Staff training', 'Technical documentation', '24/7 support', 'Custom training'],
  },
];

export const PROCESS_STEPS: IProcessStep[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Assessment & Planning',
    description: 'We analyze your current grid infrastructure and develop a comprehensive modernization strategy.',
    icon: 'FiCheckCircle',
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Design & Architecture',
    description: 'Our experts design scalable, secure solutions tailored to your specific needs.',
    icon: 'FiCheckCircle',
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Implementation',
    description: 'We deploy solutions with minimal downtime and maximum reliability.',
    icon: 'FiCheckCircle',
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Support & Optimization',
    description: 'Continuous monitoring and optimization ensure peak performance.',
    icon: 'FiCheckCircle',
  },
];

export const PRICING_TIERS: IPricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 5000,
    period: 'per month',
    description: 'Perfect for small grids and pilot projects',
    features: [
      'Grid monitoring & analytics',
      'Basic smart metering',
      'Email support',
      'Monthly reporting',
      'Up to 1,000 data points',
    ],
    isPopular: false,
    ctaText: 'Get Started',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 12000,
    period: 'per month',
    description: 'Ideal for medium-sized grid operators',
    features: [
      'Everything in Starter',
      'Advanced analytics & ML predictions',
      'Full smart metering suite',
      'Priority phone & email support',
      'Weekly reporting',
      'Up to 10,000 data points',
      'Renewable integration',
    ],
    isPopular: true,
    ctaText: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 0,
    period: 'custom pricing',
    description: 'Customized solutions for large-scale operations',
    features: [
      'Everything in Professional',
      'Custom infrastructure design',
      'Dedicated account manager',
      '24/7 phone support',
      'Daily reporting & real-time dashboards',
      'Unlimited data points',
      'API access & custom integrations',
      'On-site training & consulting',
    ],
    isPopular: false,
    ctaText: 'Contact Sales',
  },
];

export const TESTIMONIALS: ITestimonial[] = [
  {
    id: 'testimonial-1',
    name: 'John Mitchell',
    title: 'Grid Operations Manager',
    company: 'Metropolitan Power Supply',
    content:
      'Pinnacle Grid transformed our operations. We reduced downtime by 40% and improved efficiency significantly.',
  },
  {
    id: 'testimonial-2',
    name: 'Sarah Chen',
    title: 'Chief Technology Officer',
    company: 'Green Energy Solutions',
    content:
      'The renewable integration capabilities are outstanding. We integrated solar seamlessly into our existing infrastructure.',
  },
  {
    id: 'testimonial-3',
    name: 'Michael Rodriguez',
    title: 'Director of Infrastructure',
    company: 'Regional Utility Network',
    content:
      'Outstanding customer support and technical expertise. They guided us through every step of our digital transformation.',
  },
  {
    id: 'testimonial-4',
    name: 'Emma Thompson',
    title: 'Operations Director',
    company: 'Northern Grid Corporation',
    content:
      'The smart metering solutions provided us with insights we never had before. ROI was achieved within 6 months.',
  },
];

export const FAQS: IFAQ[] = [
  {
    id: 'faq-1',
    question: 'How does Pinnacle Grid help reduce costs?',
    answer:
      'Our AI-powered analytics optimize energy distribution, eliminate waste, and provide real-time insights. Customers typically see 15-30% cost reduction within the first year through improved efficiency and demand management.',
  },
  {
    id: 'faq-2',
    question: 'Is integration with existing infrastructure difficult?',
    answer:
      'No, our solutions are designed for seamless integration. We work with your existing systems and infrastructure. Our team handles the entire deployment process with minimal disruption to your operations.',
  },
  {
    id: 'faq-3',
    question: 'What kind of support do you provide?',
    answer:
      'We offer tiered support from email to 24/7 phone support depending on your plan. Our dedicated support team includes certified engineers ready to assist with any technical issues or questions.',
  },
  {
    id: 'faq-4',
    question: 'Can you handle renewable energy sources?',
    answer:
      'Absolutely! Our platform is built to integrate solar, wind, and battery storage systems. We handle the complexities of variable renewable sources and ensure stable grid operation.',
  },
  {
    id: 'faq-5',
    question: 'How is data security handled?',
    answer:
      'Data security is paramount. We use enterprise-grade encryption, multi-factor authentication, and comply with industry standards. All data is encrypted both in transit and at rest.',
  },
  {
    id: 'faq-6',
    question: 'What is the typical implementation timeline?',
    answer:
      'Implementation timelines vary based on your grid size and complexity. Small grids typically take 2-4 weeks, while large enterprise deployments may take 3-6 months. We provide detailed project plans upfront.',
  },
];

export const COMPANY_NAME = 'Pinnacle Grid';
export const COMPANY_DESCRIPTION = 'Leading intelligent electrical grid solutions for modern energy infrastructure.';
export const COMPANY_URL = 'https://www.pinnaclegrid.com';
