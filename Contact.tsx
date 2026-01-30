import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you! Your message has been sent (simulated).');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-earth-900 text-earth-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-tight">
              Let's solve your next <br className="hidden sm:block" /> analytical challenge.
            </h2>
            <p className="text-earth-100/70 text-base md:text-lg mb-12 leading-relaxed max-w-md">
              Whether you need a full supply chain audit or a more robust marketing attribution strategy, 
              I'm open to full-time roles and high-impact consultancy projects.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start sm:items-center gap-4 md:gap-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-earth-900/50 border border-white/10 rounded-full flex items-center justify-center text-earth-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] md:text-xs font-bold text-earth-300 uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-base md:text-lg font-medium break-all text-earth-200">luyun.zhang.2026@marshall.usc.edu</p>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center gap-4 md:gap-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-earth-900/50 border border-white/10 rounded-full flex items-center justify-center text-earth-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] md:text-xs font-bold text-earth-300 uppercase tracking-widest mb-1">Based In</p>
                  <p className="text-base md:text-lg font-medium">Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-white/10 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-earth-200 uppercase tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-earth-900/50 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-earth-300 transition-all text-earth-50 placeholder:text-earth-100/30" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-earth-200 uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-earth-900/50 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-earth-300 transition-all text-earth-50 placeholder:text-earth-100/30" 
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-earth-200 uppercase tracking-widest mb-2">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-earth-900/50 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-earth-300 transition-all text-earth-50 placeholder:text-earth-100/30" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={submitted}
                className="w-full py-4 bg-earth-500 hover:bg-earth-300 text-earth-900 rounded-xl font-bold transition-all disabled:opacity-50"
              >
                {submitted ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;