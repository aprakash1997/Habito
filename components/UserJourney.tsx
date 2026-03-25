"use client";

import { motion } from "framer-motion";
import { BellRing, ClipboardList, Zap, ArrowUpRight, TrendingUp } from "lucide-react";

export default function UserJourney() {
  const steps = [
    {
      num: "01",
      title: "Trigger",
      desc: "You encounter Habito at a natural health anxiety moment—turning 30, a friend's diagnosis, or a new job insurance activation.",
      icon: <BellRing className="w-5 h-5" />
    },
    {
      num: "02",
      title: "Onboard",
      desc: "5-minute Behavioral Health Profile. Receive your personalized Habit Risk Index. Understand your real risk areas for the first time.",
      icon: <ClipboardList className="w-5 h-5" />
    },
    {
      num: "03",
      title: "Activate",
      desc: "3 micro-habits assigned. First Pulse Check completed. WhatsApp nudges begin. First 30 days free.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      num: "04",
      title: "Convert",
      desc: "Paywall activates at the first anomaly flag on Pulse Check—when emotional stakes and willingness to act are highest.",
      icon: <ArrowUpRight className="w-5 h-5" />
    },
    {
      num: "05",
      title: "Retain",
      desc: "Monthly habit streaks, quarterly lab panels, Health Ally check-ins, Health Buddy referral. Longitudinal data creates powerful lock-in.",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-habito-teal-light/50 rounded-full blur-[80px] -z-10"
          ></motion.div>
          <span className="text-habito-teal-primary font-bold tracking-wider uppercase text-sm mb-4 block">The User Flow</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-habito-neutral-dark mb-6">The Journey to Baseline</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            How we turn health anxiety into sustainable, lifelong prevention through behavioral science.
          </p>
        </div>

        <div className="relative">
          {/* Main vertical line for timeline */}
          <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-habito-teal-light via-habito-teal-primary to-white md:-translate-x-1/2 rounded-full hidden sm:block"></div>

          <div className="space-y-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-[45%] hidden md:block"></div>
                
                {/* Timeline Node */}
                <div className="hidden sm:flex w-12 h-12 rounded-full bg-white border-4 border-habito-teal-primary items-center justify-center font-bold text-habito-teal-primary text-sm shadow-xl absolute left-8 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 z-10 mt-6 md:mt-0">
                  {step.num}
                </div>
                
                <div className={`w-full md:w-[45%] bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-habito-teal-light transition-all duration-300 ml-16 sm:ml-24 md:ml-0 relative ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  {/* Mobile-only node */}
                  <div className="sm:hidden absolute -left-16 top-6 w-10 h-10 rounded-full bg-habito-teal-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {step.num}
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="p-3 bg-gradient-to-br from-habito-teal-light to-white text-habito-teal-deep rounded-xl shadow-sm border border-gray-50">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
