export interface CaseStudy {
  id: string;
  title: string;
  shortTitle: string;
  category: 'Marketing' | 'Supply Chain' | 'Data Science';
  image: string;
  challenge: string;
  process: string;
  impact: string;
  tasks?: string[];
  finalModel?: string[];
  features?: string[];
  keyInsights?: string[];
  practicalImplications?: string;
  kpis: { label: string; value: string }[];
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}