import React from 'react';

const About: React.FC = () => {
  const education = [
    {
      institution: 'University of Southern California, Marshall School of Business',
      location: 'Los Angeles, CA',
      date: 'December 2026',
      degree: 'Master of Science in Global Supply Chain Management (STEM)',
      courses: ['Spreadsheet Modeling for Business Insights', 'Communication for Management', 'Python for Business Analytics']
    },
    {
      institution: 'The University of Edinburgh',
      location: 'Edinburgh, UK',
      date: 'June 2025',
      degree: 'Master of Arts (Hons) with First Class Honour in Business with Marketing',
      courses: ['Marketing', 'Business Research Methods', 'Brand Management', 'Financial Services Marketing', 'Persuasion']
    },
    {
      institution: 'The University of Hong Kong',
      location: 'Hong Kong SAR',
      date: 'June 2024',
      degree: 'Bachelor of Business Administration in Marketing (Exchange)',
      courses: ['Advertising Management', 'Big Data Marketing', 'Consumer Behavior', 'Marketing Analytics', 'Research']
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-earth-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-earth-100 rounded-3xl overflow-hidden relative z-10 shadow-2xl shadow-earth-200/50">
              <img 
                src="https://raw.githubusercontent.com/LouiseAkaYun/public_pictures/main/Self-portrait.jpg" 
                alt="Luyun Zhang - Professional Profile" 
                className="object-cover w-full h-full transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-earth-200 rounded-full blur-3xl -z-0 opacity-40"></div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-earth-100 border border-earth-200 rounded-full text-[10px] md:text-xs font-bold text-earth-500 uppercase tracking-wider shadow-sm">
                📍 Los Angeles, CA
              </span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
              Hi, I’m Luyun Zhang. <br /> Explorer. Creative. <span className="italic serif font-normal text-earth-300">Analyst.</span>
            </h2>
            <div className="space-y-6 text-earth-900/70 text-base md:text-lg leading-relaxed mb-12">
              <p>
                I am a passionate explorer of systems and markets. Having lived and worked across China, Hong Kong, the UK and the US, I’ve developed a unique lens for identifying patterns in consumer behavior and supply chain dynamics.
              </p>
              <p>
                I love trying new things and letting creative ideas spark freely. However, my true strength 
                lies in grounding those ideas with a data-driven mindset. To me, math isn't just numbers; 
                it’s the language I use to interpret the world and turn initiatives into productive, high-impact decisions.
              </p>
              <p className="italic font-medium text-earth-900 border-l-2 border-earth-500 pl-4 py-1 text-base md:text-lg">
                "Data helps me bridge the gap between creative sparks and operational excellence."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-earth-900 tracking-tighter">4+</p>
                <p className="text-[10px] font-bold text-earth-500 uppercase tracking-widest">Global Regions</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-earth-900 tracking-tighter">1st</p>
                <p className="text-[10px] font-bold text-earth-500 uppercase tracking-widest">Class Honours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 border-t border-earth-200">
          <h3 className="text-[10px] md:text-xs font-bold text-earth-300 uppercase tracking-[0.3em] mb-12 text-center">Academic Foundation</h3>
          <div className="grid gap-12">
            {education.map((edu, idx) => (
              <div key={idx} className="group relative grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8 pb-12 border-b border-earth-100 last:border-0">
                <div>
                  <p className="text-xs md:text-sm font-bold text-earth-500 mb-1">{edu.date}</p>
                  <p className="text-xs md:text-sm font-medium text-earth-900/40">{edu.location}</p>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-earth-900 mb-2 group-hover:text-earth-500 transition-colors leading-tight">{edu.institution}</h4>
                  <p className="text-earth-900/70 text-sm md:text-base font-medium mb-4">{edu.degree}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map(course => (
                      <span key={course} className="text-[9px] md:text-[10px] bg-earth-100 text-earth-500 px-2 py-1 rounded border border-earth-200/50">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;