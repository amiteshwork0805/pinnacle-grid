import { IExpertiseCard, IProcessStep, IService, IPricingTier, ITestimonial, IFAQ, IValue, IStatistic } from './types';

// Company Info
export const COMPANY_NAME = 'Pinnacle Grid';
export const COMPANY_TAGLINE = 'Make Your Brand Inexorable';
export const COMPANY_DESCRIPTION = 'From NFC Smart Visiting Cards to expert Social Media Marketing and Digital Solutions, we provide the tools and strategy to help your business grow and thrive in Hyderabad.';
export const COMPANY_URL = 'https://www.pinnaclegrid.com';
export const COMPANY_PHONE = '+91 9100305750';
export const COMPANY_EMAIL = 'pinnaclegridhyd@gmail.com';
export const COMPANY_ADDRESS = '8-3-945/A/11/101 Nagarjuna Nagar Colony, Opposite Vasan Eye Care, Yellareddy Guda Khairatabad, Hyderabad, Telangana 500073, India';

// Hero Section
export const HERO_BADGE = 'TRUSTED BY 300+ INDIAN BUSINESSES';
export const HERO_HEADLINE = 'Dominate Your Local Market with Smart Digital Solutions';
export const HERO_SUBHEADING = 'From NFC Smart Visiting Cards to expert Social Media Marketing, we provide the tools and strategy to help your business grow and thrive.';

// Values
export const VALUES: IValue[] = [
  { id: 'client-success', title: 'Client Success Focus' },
  { id: 'results-oriented', title: 'Results-Oriented Execution' },
  { id: 'creative-excellence', title: 'Creative Excellence' },
  { id: 'transparency', title: 'Transparency' },
  { id: 'empowerment', title: 'Empowerment' },
];

export const MISSION_STATEMENT = 'Our mission is to empower individuals and businesses by delivering secure, efficient, and user-friendly Digital Marketing services.';

// Expertise Cards (5 main services with details)
export const EXPERTISE_CARDS: IExpertiseCard[] = [
  {
    id: 'nfc-cards',
    title: 'NFC Smart Visiting Cards',
    description: 'Never run out of business cards again. Share your contact, social, and payment links with a simple tap.',
    features: ['One-tap sharing', 'Update details anytime', 'Professional first impression'],
  },
  {
    id: 'google-review',
    title: 'Google Review Cards',
    description: 'Grow your 5-star reviews instantly. Make it effortless for customers to review your Hyderabad business on GMB.',
    features: ['Boost local SEO', 'Direct-to-review link', 'Increase customer trust'],
  },
  {
    id: 'website-dev',
    title: 'Website Development',
    description: 'Fast, responsive, and SEO-optimized websites built for conversions. We turn your visitors into loyal customers.',
    features: ['Custom UI/UX designs', 'Mobile-first development', 'Fast loading speeds'],
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Engage your local Hyderabad audience. We manage your presence on Instagram, FB, and LinkedIn to build authority.',
    features: ['Targeted ad campaigns', 'Content strategy', 'Increased engagement'],
  },
  {
    id: 'gmb-gsv',
    title: 'GMB & GSV Services',
    description: 'Dominate local search. We optimize your Google My Business and provide immersive Google Street View tours.',
    features: ['GMB ranking boost', '360-degree photography', 'Map visibility'],
  },
];

// Process Steps
export const PROCESS_STEPS: IProcessStep[] = [
  {
    number: 1,
    title: 'Discovery & Consultation',
    description: 'We begin with a detailed consultation to understand your business, target audience, and specific goals. This helps us lay the perfect foundation.',
  },
  {
    number: 2,
    title: 'Custom Strategy',
    description: 'Our experts create a tailored digital marketing strategy, selecting the ideal mix of services—from SEO and CRM to social media—to maximize your impact.',
  },
  {
    number: 3,
    title: 'Campaign Execution',
    description: 'We bring the strategy to life by launching and managing your campaigns, ensuring seamless execution and optimization across all platforms.',
  },
  {
    number: 4,
    title: 'Analysis & Growth',
    description: 'We continuously track performance, providing you with transparent reports and data-driven insights to ensure ongoing growth and ROI.',
  },
];

// Statistics
export const STATISTICS: IStatistic[] = [
  { id: 'satisfaction', value: '0+', label: 'Customer Satisfaction' },
  { id: 'reviews', value: '0+', label: '5-Star Reviews' },
  { id: 'growth', value: '0x', label: 'Business Growth' },
];

// Services (7 main services)
export const SERVICES: IService[] = [
  {
    id: 'gsv',
    title: 'Google Street View (GSV)',
    description: '360-degree virtual business tours for enhanced online visibility and engagement.',
  },
  {
    id: 'gmb',
    title: 'Google My Business (GMB)',
    description: 'Full optimization of your GMB profile to help your business rank higher in local search results.',
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    description: 'Instagram, Facebook, YouTube & more. We handle reels, ads, strategy, and influencer campaigns.',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Solutions',
    description: 'SEO, SEM, PPC, email campaigns, branding, and lead generation funnels.',
  },
  {
    id: 'crm',
    title: 'CRM & Automation Tools',
    description: 'Custom CRM systems with smart marketing automation to streamline workflows.',
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'SEO-optimized, responsive websites including e-commerce and portfolio platforms.',
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    description: 'Data-driven advertising strategies crafted to maximize your ROI.',
  },
];

// Pricing Tiers
export const PRICING_TIERS: IPricingTier[] = [
  {
    id: 'nfc-basic',
    name: 'Smart NFC Card',
    price: '₹1999',
    period: 'one-time',
    description: 'Premium quality NFC-embedded cards with custom design and lifetime portal access.',
    cta: 'Contact for Pricing',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    price: '₹9,999',
    period: 'monthly',
    description: 'Comprehensive monthly management including Social Media, GMB, and SEO support.',
    cta: 'Get Quote',
    isPopular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise / Custom',
    price: 'Contact Us',
    description: 'Tailor-made software, bulk NFC orders, or full-scale business automation solutions.',
    cta: 'Contact Now',
    contact: true,
  },
];

// Testimonials
export const TESTIMONIALS: ITestimonial[] = [
  {
    id: 'ravi-kumar',
    quote: 'Pinnacle Grid set up our Google My Business profile and within 3 weeks we started getting walk-in customers who found us through Google Search. Highly recommend.',
    author: 'Ravi Kumar',
    role: 'Restaurant Owner',
    location: 'Hyderabad',
  },
  {
    id: 'sana-fatima',
    quote: 'The NFC Smart Card they designed for me looks premium and works perfectly. My clients are always impressed when I tap to share my contact details.',
    author: 'Sana Fatima',
    role: 'Boutique Owner',
    location: 'Hyderabad',
  },
  {
    id: 'arjun-mehta',
    quote: 'Their social media team handles everything — reels, captions, posting schedule. My Instagram following doubled in 2 months.',
    author: 'Arjun Mehta',
    role: 'Freelance Consultant',
    location: 'Hyderabad',
  },
];

// FAQs
export const FAQS: IFAQ[] = [
  {
    id: 'nfc-what',
    question: 'What is an NFC Smart Visiting Card and how does it work?',
    answer: 'An NFC Smart Visiting Card is a premium physical card embedded with a microchip. When someone taps it with their smartphone, it instantly opens your digital profile — no app needed. It works on all modern Android and iPhone devices.',
  },
  {
    id: 'nfc-delivery',
    question: 'How long does it take to deliver the NFC cards?',
    answer: 'Standard delivery typically takes 7-10 business days from order confirmation. We also offer expedited shipping options for urgent requirements. Contact us for specific timelines.',
  },
  {
    id: 'nfc-fee',
    question: 'Do I need to pay a monthly fee after buying the NFC card?',
    answer: 'No monthly fees are required. After purchasing the NFC card, you get lifetime access to our portal to manage and update your card details. It\'s a one-time investment.',
  },
  {
    id: 'marketing-package',
    question: 'What does the Digital Marketing package include?',
    answer: 'Our Digital Marketing package includes: Social Media Management (Facebook, Instagram, LinkedIn), Google My Business Optimization, SEO basics, content creation, ad management, and monthly performance reports.',
  },
  {
    id: 'hyderabad-consultation',
    question: 'Are you based in Hyderabad and do you offer in-person consultations?',
    answer: 'Yes, we\'re based in Hyderabad. We offer both in-person consultations at our office and virtual meetings. Schedule a free consultation with us to discuss your business needs.',
  },
];

// Navigation
export const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];
