"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, Zap, Target, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section id="problem" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* The Problem */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4 border border-red-100"
          >
            The Silent Crisis
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-habito-neutral-dark mb-6">
            You feel <span className="text-gray-400 italic">"fine"</span>. Until you don't.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            1 in 3 young professionals in urban India has an undetected lifestyle condition compiling silently. The system is designed to treat the sickness, not protect the baseline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Clock className="w-8 h-8 text-orange-500" />,
              title: "Time Poverty",
              desc: "Desk jobs, 60-hour weeks, and long commutes leave zero bandwidth for proactive health. Checking health is at the bottom of the to-do list."
            },
            {
              icon: <AlertCircle className="w-8 h-8 text-red-500" />,
              title: "The Optimism Bias",
              desc: "'I'm young, I'll deal with it later.' This mindset delays action until a health crisis strikes, making interventions 4-8x more expensive."
            },
            {
              icon: <Zap className="w-8 h-8 text-yellow-500" />,
              title: "Broken Incentives",
              desc: "Current healthcare is designed for sick people. There is no system, no longitudinal record, and no family doctor for prevention at 28."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="bg-gray-50 w-16 h-16 rounded-2xl shadow-inner flex items-center justify-center mb-6 group-hover:bg-white transition-colors border border-gray-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* The Solution */}
        <motion.div
          id="solution"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-habito-neutral-dark rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Animated background glows */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-habito-teal-primary rounded-full blur-[100px]"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"
          ></motion.div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-habito-teal-light text-sm font-medium mb-8 backdrop-blur-md border border-white/10 uppercase tracking-widest">
                The Habito Way
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Prevention shouldn't <br className="hidden md:block" /> be a chore.
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl">
                Habito is a behavior change engine disguised as a wellness companion.
                <span className="text-white font-medium"> Think Duolingo meets preventive healthcare. </span>
                By blending nudge theory, habit loops, and longitudinal data, we turn prevention into a seamless daily practice.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Built into your routine",
                  "Personalized risk profile",
                  "Under 7 minutes a day",
                  "WhatsApp-native tracking"
                ].map((point, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    key={i}
                    className="flex items-center text-gray-200 bg-white/5 p-3 rounded-xl border border-white/5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-habito-teal-primary mr-3 flex-shrink-0" />
                    <span className="font-medium text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-habito-teal-primary to-transparent opacity-50"></div>
              <h3 className="text-2xl font-serif font-bold mb-8 text-center text-white">The Shift</h3>
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-white/5 relative z-10 overflow-hidden group">
                    <div className="absolute inset-0 bg-habito-teal-primary/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                    <span className="text-gray-500 w-1/3 text-sm font-medium">Generic Advice</span>
                    <ArrowRight size={16} className="text-gray-600" />
                    <span className="text-habito-teal-light w-1/2 font-bold text-right tracking-wide">Micro-actions</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-white/5 relative z-10 overflow-hidden group">
                    <div className="absolute inset-0 bg-habito-teal-primary/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 delay-75"></div>
                    <span className="text-gray-500 w-1/3 text-sm font-medium">Annual checkup</span>
                    <ArrowRight size={16} className="text-gray-600" />
                    <span className="text-habito-teal-light w-1/2 font-bold text-right tracking-wide">Biweekly pulse</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-white/5 relative z-10 overflow-hidden group">
                    <div className="absolute inset-0 bg-habito-teal-primary/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 delay-150"></div>
                    <span className="text-gray-500 w-1/3 text-sm font-medium">App churn</span>
                    <ArrowRight size={16} className="text-gray-600" />
                    <span className="text-habito-teal-light w-1/2 font-bold text-right tracking-wide">Data lock-in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
