export interface InnovationArea {
  id: number;
  title: string;
  description: string;
  details: string[];
}

export interface TechnologyDomain {
  id: number;
  title: string;
  bestFor: string;
  learningCurve: string;
  industryDemand: string;
  investmentFactors: string;
  keyFeatures: string[];
}

export interface Space {
  id: string;
  title: string;
  description: string;
  icon: string;
}