"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function BusinessModel() {
  return (
    <section id="business" className="py-24 bg-habito-neutral-dark text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-habito-teal-primary font-bold tracking-wider uppercase text-sm mb-4 block">Unit Economics</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Built to Scale</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Asset-light infrastructure. Dual distribution. High retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* B2C Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 sm:p-10 border border-white/10 hover:border-habito-teal-primary/30 transition-all duration-300 flex flex-col group"
          >
            <div className="mb-8">
              <span className="text-habito-teal-light font-bold uppercase tracking-wider text-xs mb-3 block px-3 py-1 bg-white/10 rounded-full w-max">Direct to Consumer</span>
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-habito-teal-light transition-colors">B2C Subscription</h3>
              <div className="flex items-end space-x-2">
                <span className="text-5xl font-bold text-white">₹399</span>
                <span className="text-gray-400 mb-1 font-medium">/ month</span>
              </div>
              <p className="text-gray-500 text-sm mt-3 font-medium">or ₹3,499 billed annually</p>
            </div>
            
            <ul className="space-y-5 mb-10 flex-grow">
              {["Full Behavioral App Access", "Biweekly Pulse Checks (AI-powered)", "Quarterly Lab Panels (at home)", "1x Health Ally Check-in / Qtr"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-white/10 p-1 rounded-full mr-4 mt-0.5">
                    <Check className="w-4 h-4 text-habito-teal-primary" />
                  </div>
                  <span className="text-gray-300 text-base">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6 border-t border-white/10 mt-auto">
              <p className="text-sm font-medium text-habito-teal-primary flex justify-between">
                <span>Core revenue driver</span>
                <span>~52% Margin</span>
              </p>
            </div>
          </motion.div>

          {/* B2B Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-habito-teal-primary/20 to-habito-neutral-dark backdrop-blur-md rounded-[2rem] p-8 sm:p-10 border border-habito-teal-primary/50 relative overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="absolute top-0 right-0 bg-habito-teal-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-bl-xl shadow-md z-10">
              Growth Flywheel
            </div>
            
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-habito-teal-primary/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="mb-8 relative z-10">
              <span className="text-habito-teal-light font-bold uppercase tracking-wider text-xs mb-3 block px-3 py-1 bg-habito-teal-primary/20 border border-habito-teal-primary/30 rounded-full w-max">Employer Wellness</span>
              <h3 className="text-3xl font-bold mb-4 text-white">B2B Integration</h3>
              <div className="flex items-end space-x-2">
                <span className="text-5xl font-bold text-white">₹299</span>
                <span className="text-gray-400 mb-1 font-medium">/ employee / mo</span>
              </div>
              <p className="text-gray-500 text-sm mt-3 font-medium">Min. 50 seats required</p>
            </div>
            
            <ul className="space-y-5 mb-10 flex-grow relative z-10">
              {["Everything in B2C Tier", "Aggregated Org Health Dashboard", "Priority Care Pathway Routing", "Dedicated Success Manager"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-habito-teal-primary/20 p-1 rounded-full mr-4 mt-0.5 border border-habito-teal-primary/30">
                    <Check className="w-4 h-4 text-habito-teal-light" />
                  </div>
                  <span className="text-gray-200 text-base">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6 border-t border-habito-teal-primary/20 mt-auto relative z-10">
              <p className="text-sm font-medium text-white flex justify-between">
                <span>High value, low CAC</span>
                <span className="text-habito-teal-light">~60%+ Margin</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
