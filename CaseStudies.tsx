import React, { useEffect, useRef } from 'react';
import { CaseStudy } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-ab-testing',
    title: 'A/B Testing FinTech Ads — Gamified vs. Linear Video',
    shortTitle: 'A/B Testing Fintech Ads',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    challenge: 'The core challenge tackled was conversion uncertainty despite high engagement with gamified ads in FinTech. While gamified and educational ad formats captured attention, marketers lacked clarity on whether this engagement translated to real conversion intent.',
    process: 'Design of a 2 (playable vs. linear) x 2 (pre vs. post exposure) mixed-design experiment. Recreated playable versions using interactive quiz elements and immediate feedback loops.',
    tasks: [
      'Recruited N = 359 participants globally via controlled survey platforms.',
      'Designed a multi-stage experimental flow to measure cognitive and behavioral shifts.',
      'Captured metrics for baseline financial literacy, post-exposure confidence, and sign-up intent.',
      'Used SPSS for comprehensive statistical modeling and variance analysis.'
    ],
    features: ['Ad Format (Binary)', 'PFL Score (Pre/Post)', 'User Confidence Level', 'Sign-up Intention', 'Demographic Controls'],
    finalModel: [
      'Model 1: Direct path analysis between Ad Format and Conversion.',
      'Model 2: Introduction of Psychological Mediation (Confidence shift).',
      'Model 3: Regression analysis of demographic interaction effects.',
      'Final: Mediation Model using Hayes PROCESS Macro (Model 4).'
    ],
    keyInsights: [
      'Gamified ads act as confidence-building interventions, not just play.',
      'Conversion is driven by how capable users feel after exposure (Confidence shift).',
      'Highlighting psychological mechanisms enhances predictive power in ad performance evaluation.'
    ],
    practicalImplications: 'Use gamified ads to boost confidence when launching financial services. Deploy gamified formats at mid-funnel stages where education and decision-making matter. Adopt A/B testing with behavioral mediators in creative evaluation.',
    impact: 'Established a psychological link between cognitive self-assessment and fintech adoption.',
    kpis: [
      { label: 'Sample Size', value: '359' },
      { label: 'Primary Tool', value: 'SPSS' }
    ],
    tags: ['A/B Testing', 'Mediation Analysis', 'Hayes PROCESS', 'FinTech']
  },
  {
    id: 'vaccine-cold-chain',
    title: 'Vaccine Cold Chain Logistics Optimization',
    shortTitle: 'Vaccine Cold Chain',
    category: 'Supply Chain',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800',
    challenge: 'Optimally allocating vaccine inventory across distribution points while maintaining cold chain integrity. Addressed multi-period demand uncertainty, limited storage capacity, and vaccine perishability.',
    process: 'Developed a Mixed-Integer Linear Program (MILP) using Python and Gurobi. Extended the model into a stochastic formulation with optimistic, nominal, and pessimistic demand scenarios.',
    tasks: [
      'Defined a 6-period (90-day) planning horizon for urban Southeast Asian logistics.',
      'Integrated WHO-standard cold chain cost parameters for ultra-low temperature storage.',
      'Simulated demand variability using stochastic distribution functions.',
      'Coded the optimization engine in Python using Gurobi Optimizer.'
    ],
    features: ['Demand Uncertainty (3 Scenarios)', 'Storage Capacity Constraints', 'Perishability (Shelf-life)', 'Transportation Costs', 'Recourse Actions'],
    finalModel: [
      'Step 1: Formulate the Deterministic MILP baseline.',
      'Step 2: Define Scenario Probabilities (Optimistic, Nominal, Pessimistic).',
      'Step 3: Implement Stochastic recourse variables for inventory overflows.',
      'Step 4: Execute model and perform sensitivity analysis on storage costs.'
    ],
    keyInsights: [
      'Inventory buffers are essential; Just-in-Time (JIT) strategies are infeasible for vaccines.',
      'Stochastic programming yields 1.8% better cost-efficiency and significantly lower regret cost.',
      'Shortening vaccine shelf-life from 60 days dramatically increases required shipment frequency.'
    ],
    practicalImplications: 'Use multi-period stochastic models for supply strategy. Expand urban cold storage to mitigate central warehouse strain. Develop scenario-based plans for wastage mitigation.',
    impact: 'Achieved a 1.8% efficiency gain while improving service reliability and resilience to demand variability.',
    kpis: [
      { label: 'Cost Efficiency', value: '+1.8%' },
      { label: 'Planning Horizon', value: '90 Days' }
    ],
    tags: ['MILP', 'Gurobi', 'Stochastic Optimization', 'Logistics']
  },
  {
    id: 'airline-loyalty',
    title: 'Airline Business Traveler Loyalty Optimization',
    shortTitle: 'Airline Services Loyalty',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80&w=800',
    challenge: 'Business travelers are a high-value segment, but existing loyalty strategies often fail to reflect key drivers like personalized service, travel frequency, and digital convenience. I tackled the lack of segmentation and data imbalance in satisfaction surveys.',
    process: 'Followed a rigorous three-stage Decision Tree Classifier development process: from an overfit Baseline to a Pre-Pruned model (depth limits), ending with a Post-Pruned final model using cost-complexity pruning.',
    tasks: [
      'Cleaned U.S. Airline Passenger Satisfaction Survey data (34,046 business traveler records).',
      'Engineered features across three domains: Demographics, Flight Info, and Service Ratings.',
      'Addressed data imbalance using class-reweighting techniques.',
      'Conducted recursive feature elimination to identify top predictors.'
    ],
    features: ['Travel Frequency', 'Online Booking Ease', 'Flight Distance', 'Class of Service', 'Arrival Convenience', 'Customer Age'],
    finalModel: [
      'Step 1: Train Baseline Decision Tree (overfit prevention).',
      'Step 2: Apply Pre-Pruning (max_depth=5, min_samples_leaf=10).',
      'Step 3: Implement Post-Pruning via Cost-Complexity Pruning (CCP).',
      'Step 4: Validate with F1-score and confusion matrix analysis.'
    ],
    keyInsights: [
      'Top Predictors: Age (0.214) and Flight Distance (0.142) – loyalty behavior shifts across demographics and routes.',
      'Convenience Matters: Departure/Arrival Convenience (0.121) and Ease of Online Booking (0.092) reflect tight business schedules.',
      'Loyalty is not just satisfaction; it is a blend of convenience, tech integration, and tailored service delivery.'
    ],
    practicalImplications: 'Segment loyalty programs by age and travel distance. Improve digital booking/check-in. Customize offerings like lounge access and wellness perks for long-haul travelers.',
    impact: 'Developed a highly accurate (93.9% Test) and interpretable model for tailored business traveler engagement.',
    kpis: [
      { label: 'Test Accuracy', value: '93.9%' },
      { label: 'F1 Score', value: '0.941' }
    ],
    tags: ['Decision Tree', 'Growth Marketing', 'Python', 'Loyalty Modeling']
  },
  {
    id: 'bank-churn-prediction',
    title: 'Retention Analytics – Bank Customer Churn Prediction',
    shortTitle: 'Bank Churn Prevention',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800',
    challenge: 'Churn among credit card customers causes significant profit loss. I addressed a critical class imbalance issue (only 16% churners) to identify key drivers and inform targeted CRM retention strategies.',
    process: 'Built a pipeline including mode imputation for missing data and SMOTE/Undersampling to fix imbalance. Evaluated Logistic Regression, ANN, and Decision Trees.',
    tasks: [
      'Processed ~10,000 customer records with 21 high-dimensional features.',
      'Implemented SMOTE (Synthetic Minority Over-sampling Technique) to handle class imbalance.',
      'Conducted hyperparameter tuning using Grid Search Cross-Validation.',
      'Visualized feature importance using SHAP (SHapley Additive exPlanations).'
    ],
    features: ['Transaction Count', 'Total Revolving Balance', 'Average Utilization Ratio', 'Customer Seniority', 'Credit Limit', 'Education Level'],
    finalModel: [
      'Step 1: Data Preprocessing (Imputation & Normalization).',
      'Step 2: Resampling using Undersampling to favor Recall.',
      'Step 3: Training an explainable Decision Tree classifier.',
      'Step 4: Evaluating the model on unseen hold-out data.'
    ],
    keyInsights: [
      'High transaction frequency is the strongest indicator of engagement.',
      'Low revolving balance and utilization ratios are significant churn risk flags.',
      'Younger customers transact more frequently, while middle-aged users show higher stability.'
    ],
    practicalImplications: 'Use transaction frequency as a real-time risk flag in CRM. Automate outreach to users with declining activity. Personalize retention offers based on age-activity segments.',
    impact: 'Provided an explainable CRM framework to identify 87.9% of potential churners before they leave.',
    kpis: [
      { label: 'Churn Recall', value: '87.9%' },
      { label: 'Model Type', value: 'Dec. Tree' }
    ],
    tags: ['Churn Prediction', 'SHAP Analysis', 'CRM Optimization', 'SMOTE']
  }
];

const FeatureVisual: React.FC<{ features: string[] }> = ({ features }) => (
  <div className="bg-white border border-earth-100 p-6 rounded-2xl shadow-sm my-6">
    <h5 className="text-[10px] font-bold text-earth-300 uppercase tracking-widest mb-4 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
      Data Feature Map
    </h5>
    <div className="flex flex-wrap gap-2">
      {features.map((feature, i) => (
        <div key={i} className="px-3 py-1.5 bg-earth-50 border border-earth-200 rounded-lg text-[11px] font-medium text-earth-900/60 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-earth-500"></span>
          {feature}
        </div>
      ))}
    </div>
  </div>
);

const ProjectDetailView: React.FC<{ 
  study: CaseStudy; 
  onClose: () => void; 
  onNavigate: (id: string) => void;
  prevProject: CaseStudy;
  nextProject: CaseStudy;
}> = ({ study, onClose, onNavigate, prevProject, nextProject }) => {
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    detailRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [study.id]);

  return (
    <div ref={detailRef} className="bg-white rounded-[2rem] border border-earth-100 shadow-xl overflow-hidden max-w-5xl mx-auto">
      <div className="relative h-[400px]">
        <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 to-transparent flex items-end p-12">
          <div className="text-earth-50">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
              {study.category}
            </span>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl">{study.title}</h3>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-8 md:p-16 space-y-16">
        <section className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h4 className="text-xs font-bold text-earth-300 uppercase tracking-widest mb-4">Challenge</h4>
            <p className="text-earth-900/70 text-[15px] leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-earth-300 uppercase tracking-widest mb-4">Process & Implementation</h4>
            <ul className="space-y-4">
              {study.tasks?.map((task, idx) => (
                <li key={idx} className="flex gap-4 text-[14px] text-earth-900/70 leading-relaxed">
                  <span className="text-earth-500 font-bold">•</span> {task}
                </li>
              ))}
            </ul>
            {study.features && <FeatureVisual features={study.features} />}
          </div>
        </section>

        <section className="bg-earth-100 rounded-3xl p-8 md:p-12">
          <h4 className="text-xs font-bold text-earth-300 uppercase tracking-widest mb-8 text-center">Modeling Strategy</h4>
          <div className="max-w-xl mx-auto">
            <ul className="space-y-4">
              {study.finalModel?.map((step, idx) => (
                <li key={idx} className="flex gap-4 text-[14px] text-earth-900 font-medium">
                  <span className="bg-earth-200 text-earth-500 w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold flex-shrink-0">{idx+1}</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xs font-bold text-earth-300 uppercase tracking-widest mb-6">Key Insights</h4>
            <ul className="space-y-4">
              {study.keyInsights?.map((insight, idx) => (
                <li key={idx} className="flex gap-4 text-[14px] text-earth-900/70">
                  <span className="text-earth-500 font-bold">•</span> {insight}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-earth-300 uppercase tracking-widest mb-6">Practical Impact</h4>
            <div className="bg-earth-100/50 border-l-4 border-earth-500 p-6 rounded-r-2xl mb-8">
              <p className="text-earth-900 text-[14px] font-medium leading-relaxed italic">"{study.practicalImplications}"</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {study.kpis.map((kpi, idx) => (
                <div key={idx} className="bg-white border border-earth-100 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-earth-900">{kpi.value}</p>
                  <p className="text-[10px] text-earth-300 font-bold uppercase tracking-wider">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-12 border-t border-earth-100">
           <div className="flex flex-wrap gap-2">
            {study.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-earth-100 text-earth-500 text-[10px] rounded-full font-bold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <div className="pt-16 border-t border-earth-100 flex flex-col sm:flex-row justify-between items-center gap-8 text-sm font-bold">
          <button 
            onClick={() => onNavigate(prevProject.id)}
            className="flex flex-col items-center sm:items-start group flex-1 w-full sm:w-auto text-center sm:text-left"
          >
            <span className="text-earth-300 text-[10px] uppercase tracking-widest mb-2 group-hover:text-earth-500 transition-colors">Previous Project</span>
            <span className="text-earth-900 group-hover:text-earth-500 transition-colors text-base">{prevProject.shortTitle}</span>
          </button>
          <button 
            onClick={() => onNavigate(nextProject.id)}
            className="flex flex-col items-center sm:items-end group flex-1 w-full sm:w-auto text-center sm:text-right"
          >
            <span className="text-earth-300 text-[10px] uppercase tracking-widest mb-2 group-hover:text-earth-500 transition-colors">Next Project</span>
            <span className="text-earth-900 group-hover:text-earth-500 transition-colors text-base">{nextProject.shortTitle}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface CaseStudyTOCProps {
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
}

const CaseStudyTOC: React.FC<CaseStudyTOCProps> = ({ selectedProjectId, setSelectedProjectId }) => {
  const [filter, setFilter] = React.useState<'All' | 'Marketing' | 'Supply Chain'>('All');

  const filteredStudies = filter === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(s => s.category === filter);

  const activeProjectIndex = CASE_STUDIES.findIndex(s => s.id === selectedProjectId);
  const currentProject = CASE_STUDIES[activeProjectIndex];

  const getPrevProject = () => {
    const idx = (activeProjectIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
    return CASE_STUDIES[idx];
  };

  const getNextProject = () => {
    const idx = (activeProjectIndex + 1) % CASE_STUDIES.length;
    return CASE_STUDIES[idx];
  };

  if (selectedProjectId && currentProject) {
    return (
      <section id="work" className="py-32 px-6 bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <button 
              onClick={() => setSelectedProjectId(null)}
              className="text-earth-900/50 hover:text-earth-900 text-sm font-bold flex items-center gap-2 group transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Back to project overview
            </button>
          </div>
          <ProjectDetailView 
            study={currentProject} 
            onClose={() => setSelectedProjectId(null)} 
            onNavigate={(id) => setSelectedProjectId(id)}
            prevProject={getPrevProject()}
            nextProject={getNextProject()}
          />
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="py-32 px-6 bg-earth-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-earth-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Selected Work</span>
            <h2 className="text-5xl font-bold tracking-tight mb-6 text-earth-900">Project Table of Contents</h2>
            <p className="text-earth-900/60 text-xl leading-relaxed">
              Explore my detailed methodologies and frameworks across marketing analytics and supply chain strategy.
            </p>
          </div>
          <div className="flex bg-white p-1 rounded-full border border-earth-100 shadow-sm self-start">
            {(['All', 'Marketing', 'Supply Chain'] as const).map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-xs font-bold rounded-full transition-all ${
                  filter === cat ? 'bg-earth-900 text-earth-50 shadow-sm' : 'text-earth-300 hover:text-earth-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredStudies.map(study => (
            <div 
              key={study.id}
              onClick={() => setSelectedProjectId(study.id)}
              className="group cursor-pointer bg-white rounded-[2rem] border border-earth-100 p-4 transition-all hover:shadow-2xl hover:shadow-earth-200/50"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[1.5rem] mb-8 relative">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-earth-900 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold text-earth-900 leading-tight group-hover:text-earth-500 transition-colors">{study.title}</h3>
                  <div className="w-10 h-10 rounded-full border border-earth-100 flex items-center justify-center text-earth-300 group-hover:bg-earth-900 group-hover:text-earth-50 transition-all transform group-hover:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTOC;