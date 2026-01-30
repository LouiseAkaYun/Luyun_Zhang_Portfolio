import React from 'react';

interface Skill {
  name: string;
  level: number; // 1-5
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Analytics & Research',
    skills: [
      { name: 'Python', level: 5 },
      { name: 'Machine Learning', level: 3 },
      { name: 'SPSS', level: 5 },
      { name: 'GAMS', level: 3 },
      { name: 'SQL', level: 4 },
      { name: 'Excel (Expert)', level: 5 },
      { name: '@Risk', level: 5 }
    ]
  },
  {
    title: 'Data Visualization',
    skills: [
      { name: 'Tableau', level: 5 },
      { name: 'PowerBI', level: 4 }
    ]
  },
  {
    title: 'Product Marketing',
    skills: [
      { name: 'Product Portfolio Design', level: 4 },
      { name: 'Website Building', level: 4 }
    ]
  },
  {
    title: 'Creative & Design',
    skills: [
      { name: 'Photography', level: 5 },
      { name: 'Photoshop', level: 4 }
    ]
  }
];

const ProficiencyBar: React.FC<{ level: number }> = ({ level }) => {
  return (
    <div className="flex gap-1 h-1 w-24">
      {[1, 2, 3, 4, 5].map((step) => (
        <div 
          key={step} 
          className={`flex-1 rounded-full transition-colors duration-500 ${
            step <= level ? 'bg-earth-500' : 'bg-earth-200'
          }`}
        />
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-earth-50 border-t border-earth-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-earth-900">Skills & Technical Arsenal</h2>
          <p className="text-earth-900/60 max-w-xl">
            A comprehensive overview of the tools and methodologies I leverage to extract insights and drive operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-xs font-bold text-earth-300 uppercase tracking-[0.2em] border-b border-earth-200 pb-3">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-earth-900 group-hover:text-earth-500 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-earth-300 font-bold uppercase tracking-tighter">
                        {skill.level === 5 ? 'Expert' : skill.level === 4 ? 'Advanced' : 'Proficient'}
                      </span>
                    </div>
                    <ProficiencyBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;