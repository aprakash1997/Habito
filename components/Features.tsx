"use client";

import { motion } from "framer-motion";
import { Activity, Shield, Users, Stethoscope, Droplet, Target } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Behavioral Profiling Engine",
      desc: "Maps lifestyle risks like stress, sleep debt, and food windows to generate your true Habit Risk Index.",
      icon: <Activity className="w-6 h-6 text-habito-teal-deep" />
    },
    {
      title: "Micro-Habit Prescriptions",
      desc: "Clinically-backed nudges in 3 tiers (Easy, Medium, Stretch) stacked onto your existing daily routines.",
      icon: <Target className="w-6 h-6 text-habito-teal-deep" />
    },
    {
      title: "Biweekly Pulse Checks",
      desc: "90-second check-ins tracking energy and mood to allow our AI to flag anomaly trends before illness hits.",
      icon: <Shield className="w-6 h-6 text-habito-teal-deep" />
    },
    {
      title: "Lab-on-Schedule",
      desc: "Quarterly preventative lab panels tailored to you, delivered home, and translated into plain-English stories.",
      icon: <Droplet className="w-6 h-6 text-habito-teal-deep" />
    },
    {
      title: "Human Health Ally",
      desc: "Quarterly video check-ins with a certified health coach or nurse to bridge the digital trust gap.",
      icon: <Users className="w-6 h-6 text-habito-teal-deep" />
    },
    {
      title: "Crisis-to-Care Bridge",
      desc: "If clinical thresholds are crossed, we auto-trigger instant teleconsults and follow-up specialists.",
      icon: <Stethoscope className="w-6 h-6 text-habito-teal-deep" />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="features" className="py-24 bg-gray-50/50 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-habito-teal-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-habito-neutral-dark mb-6">The Habito OS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Six pillars of preventive health working seamlessly in the background of your busy lifestyle to build measurable resilience.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              variants={item}
              key={idx}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-habito-teal-light flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner group-hover:bg-habito-teal-primary">
                {/* Clone icon to change color on hover properly */}
                <div className="group-hover:text-white transition-colors duration-300 text-habito-teal-primary">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
// Required for React.cloneElement
import React from 'react';
