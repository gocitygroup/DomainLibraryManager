export interface ProgrammingLanguage {
  id: number;
  name: string;
  icon: string;
  bestFor: string;
  learningCurve: 'Easy' | 'Medium' | 'Hard';
  industryDemand: 'Low' | 'Medium' | 'High' | 'Very High';
  investment: 'Low' | 'Medium' | 'High';
  advancedFeatures: string[];
}