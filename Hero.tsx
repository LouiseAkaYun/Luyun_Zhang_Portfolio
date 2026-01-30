import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-earth-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-earth-100 text-earth-500 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Marketing & Supply Chain Analyst
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-earth-900 mb-8 leading-[1.1]">
            Grounded logic. <br />
            <span className="italic serif font-normal text-earth-300">Creative</span> solutions. <br />
            Data-driven impact.
          </h1>
          <p className="text-lg md:text-xl text-earth-900/70 mb-10 leading-relaxed max-w-2xl">
            I help businesses bridge the gap between complex datasets and actionable strategy, 
            optimizing marketing ROI and supply chain resilience through rigorous analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#work" 
              className="px-8 py-4 bg-earth-900 text-earth-50 rounded-lg font-medium text-center hover:bg-earth-500 transition-all transform hover:-translate-y-1"
            >
              View My Projects
            </a>
            <a 
              href="#about" 
              className="px-8 py-4 border border-earth-200 text-earth-900 rounded-lg font-medium text-center hover:bg-earth-100 transition-all"
            >
              Learn About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;