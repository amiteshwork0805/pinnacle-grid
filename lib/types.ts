export interface IService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface IPricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface ITestimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface IFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface IProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
}
