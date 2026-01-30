import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onResetProjects: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onResetProjects }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#work', reset: true },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleLinkClick = (reset?: boolean) => {
    if (reset) onResetProjects();
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-earth-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tighter text-earth-900 z-[70]">
            LUYUN<span className="text-earth-500">.</span>PORTFOLIO
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={() => handleLinkClick(item.reset)}
                className="text-sm font-medium text-earth-900/70 hover:text-earth-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => handleLinkClick()}
              className="bg-earth-900 text-earth-50 px-5 py-2 rounded-full text-sm font-medium hover:bg-earth-500 transition-colors"
            >
              Get in touch
            </a>
          </div>

          <button 
            className="md:hidden text-earth-900 z-[70] p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-earth-50 z-50 md:hidden transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col h-full justify-center items-center gap-10 px-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={() => handleLinkClick(item.reset)}
              className="text-4xl font-bold text-earth-900 hover:text-earth-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => handleLinkClick()}
            className="mt-4 bg-earth-900 text-earth-50 px-8 py-4 rounded-full text-lg font-bold hover:bg-earth-500 transition-colors shadow-lg"
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;