"use client";

import { ShieldCheck, Award, GraduationCap } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-habito-teal-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Foundation</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-habito-neutral-dark mb-6">Science, not pseudoscience.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Habito is built on rigorous clinical behavioral science, partnering with India's top diagnostic labs to deliver real health outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
             {
               icon: <ShieldCheck className="w-8 h-8 text-habito-teal-primary" />,
               title: "Clinical Behavioral Science",
               desc: "Our nudges are rooted in proven behavioral economics, habit loop theory, and clinical loss aversion models."
             },
             {
               icon: <Award className="w-8 h-8 text-habito-teal-primary" />,
               title: "Certified Health Allies",
               desc: "Every human interaction is with a certified health coach or wellness nurse, ensuring clinically sound guidance."
             },
             {
               icon: <GraduationCap className="w-8 h-8 text-habito-teal-primary" />,
               title: "Top-Tier Lab Partners",
               desc: "We integrate directly with Thyrocare and Dr. Lal Pathlabs for accurate, at-home preventative lab panels."
             }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-[2rem] p-10 border border-gray-100 text-center hover:bg-habito-teal-light/20 hover:border-habito-teal-light/50 transition-all duration-300">
              <div className="mx-auto w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-habito-teal-primary">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
