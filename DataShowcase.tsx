import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', baseline: 4000, optimized: 4400 },
  { month: 'Feb', baseline: 3000, optimized: 3800 },
  { month: 'Mar', baseline: 2000, optimized: 3200 },
  { month: 'Apr', baseline: 2780, optimized: 4200 },
  { month: 'May', baseline: 1890, optimized: 3900 },
  { month: 'Jun', baseline: 2390, optimized: 4800 },
  { month: 'Jul', baseline: 3490, optimized: 5600 },
];

const DataShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-earth-50 border-y border-earth-200 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 tracking-tight text-earth-900">The Data Advantage</h2>
          <p className="text-earth-900/60 mb-8 leading-relaxed">
            I believe that every creative campaign or logistical shift should be backed by measurable projections. 
            My approach typically yields a 25-40% improvement in performance metrics through predictive modeling 
            and iterative testing.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-bold text-earth-500">24%</p>
              <p className="text-sm text-earth-300 font-medium uppercase tracking-wider">Avg. ROI Increase</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-earth-500">15.5k</p>
              <p className="text-sm text-earth-300 font-medium uppercase tracking-wider">SKUs Managed</p>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-full bg-white p-6 rounded-2xl border border-earth-100 shadow-sm shadow-earth-200/50">
          <h4 className="text-xs font-bold text-earth-300 uppercase tracking-widest mb-4">Process Optimization Delta</h4>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9A8D83" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#9A8D83" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f3" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9A8D83'}} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(154,141,131,0.1)' }}
              />
              <Area 
                type="monotone" 
                dataKey="optimized" 
                stroke="#9A8D83" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorOptimized)" 
              />
              <Area 
                type="monotone" 
                dataKey="baseline" 
                stroke="#D2C5B8" 
                strokeDasharray="5 5"
                fill="transparent" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default DataShowcase;