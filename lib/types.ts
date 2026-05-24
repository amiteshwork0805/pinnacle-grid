export interface IExpertiseCard {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface IProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface IService {
  id: string;
  title: string;
  description: string;
}

export interface IPricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features?: string[];
  isPopular?: boolean;
  cta: string;
  contact?: boolean;
}

export interface ITestimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface IFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface IValue {
  id: string;
  title: string;
}

export interface IStatistic {
  id: string;
  value: string;
  label: string;
}
