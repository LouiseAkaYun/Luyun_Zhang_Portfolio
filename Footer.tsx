import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-earth-900 border-t border-white/10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter text-earth-50">
          LUYUN<span className="text-earth-500">.</span>PORTFOLIO
        </div>
        
        <div className="flex gap-8">
          <a 
            href="https://www.linkedin.com/in/luyun-louise-zhang-24b033231/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-earth-200 hover:text-earth-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        
        <div className="text-sm text-earth-200/50">
          © 2026 Luyun Zhang
        </div>
      </div>
    </footer>
  );
};

export default Footer;