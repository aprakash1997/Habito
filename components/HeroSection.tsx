"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, HeartPulse } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-habito-teal-light/50 to-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-1.5 shadow-sm border border-habito-teal-light mb-6">
              <ShieldCheck size={18} className="text-habito-teal-primary" />
              <span className="text-sm font-medium text-gray-700">India's First Behavioral Health Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-habito-neutral-dark leading-tight mb-6">
              You're <span className="text-habito-teal-primary">not sick</span> yet. <br />
              <span className="text-gray-500 text-4xl lg:text-5xl mt-2 block font-medium">That's exactly the right time.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Habito is a preventive health OS for urban professionals. We work quietly with your life to build clinical micro-habits, catch early-warning trends, and keep you out of the hospital.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#demo" className="w-full sm:w-auto px-8 py-3.5 bg-habito-teal-primary text-white rounded-full font-medium text-lg hover:bg-habito-teal-deep transition-all shadow-md hover:shadow-lg flex items-center justify-center group overflow-hidden relative">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center">
                  Get Your Health Score
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#solution" className="w-full sm:w-auto px-8 py-3.5 bg-white text-habito-neutral-dark border border-gray-200 rounded-full font-medium text-lg hover:border-habito-teal-primary hover:text-habito-teal-primary transition-colors flex items-center justify-center">
                How it works
              </a>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500 font-medium tracking-wide border-t border-gray-100 pt-6">
              <div className="flex items-center"><Activity size={16} className="mr-2 text-habito-teal-primary" /> DATA DRIVEN</div>
              <div className="flex items-center"><HeartPulse size={16} className="mr-2 text-habito-teal-primary" /> DOCTOR BACKED</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-full"
          >
            {/* App Mockup Visual */}
            <div className="relative bg-white rounded-[2.5rem] p-4 shadow-2xl border-4 border-gray-100 mt-10 lg:mt-0 aspect-[9/18] sm:aspect-auto sm:h-[600px] overflow-hidden group hover:border-habito-teal-light transition-colors duration-500">
              <div className="absolute top-0 inset-x-0 h-8 bg-white rounded-t-[2.5rem] z-20 flex justify-center items-center backdrop-blur-md bg-white/50 border-b border-gray-50">
                <div className="w-20 h-1.5 bg-gray-200 rounded-full"></div>
              </div>
              
              <div className="pt-8 h-full flex flex-col space-y-4 bg-gray-50/50 rounded-2xl p-4 overflow-hidden relative">
                {/* Mockup content */}
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Today</p>
                    <h3 className="font-bold text-lg text-habito-neutral-dark">Habit Risk Index</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-habito-teal-light flex items-center justify-center text-habito-teal-primary font-bold text-xl shadow-inner border border-white">82</div>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100/80">
                  <p className="text-xs text-gray-400 mb-1 uppercase font-semibold">Top Focus Area</p>
                  <p className="font-bold text-habito-neutral-dark text-lg mb-3">Sleep Debt</p>
                  <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden flex">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-orange-400 h-full rounded-full"
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-gray-700">Today's Micro-habits</h4>
                  <div className="space-y-3">
                    {[
                      { title: "Drink 1 glass of water on waking", tag: "EASY", done: true },
                      { title: "No screens 30m before bed", tag: "MEDIUM", done: false },
                      { title: "10 min walking after lunch", tag: "STRETCH", done: false },
                    ].map((habit, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 + (i * 0.1) }}
                        key={i} 
                        className={`p-3.5 rounded-xl flex items-center justify-between border ${habit.done ? 'bg-gradient-to-r from-habito-teal-light/40 to-white border-habito-teal-light/60 shadow-sm' : 'bg-white border-gray-100 hover:border-gray-200 transition-colors'}`}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${habit.done ? 'bg-habito-teal-primary border-habito-teal-primary text-white shadow-inner' : 'border-gray-300'}`}>
                            {habit.done && <ShieldCheck size={12} />}
                          </div>
                          <span className={`${habit.done ? 'text-gray-400 line-through' : 'text-gray-700 font-medium'} text-sm`}>{habit.title}</span>
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider ${habit.done ? 'text-gray-400 bg-gray-100/50' : 'text-gray-500 bg-gray-100'}`}>{habit.tag}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative floating elements */}
                <motion.div 
                  animate={{ y: [0, -12, 0] }} 
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -right-6 top-32 bg-white/90 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-white flex items-center space-x-3 z-10 hidden sm:flex"
                >
                  <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-600 shadow-inner">
                    <Activity size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Pulse Check</p>
                    <p className="text-sm font-bold text-habito-neutral-dark">Stable Trend</p>
                  </div>
                </motion.div>

                {/* Gradient fade at bottom of mockup */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-habito-teal-light/40 to-habito-teal-primary/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
