"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-habito-teal-light top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl font-bold text-habito-teal-deep">Habito</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#problem" className="text-gray-600 hover:text-habito-teal-primary transition-colors font-medium">The Problem</a>
            <a href="#solution" className="text-gray-600 hover:text-habito-teal-primary transition-colors font-medium">Our Solution</a>
            <a href="#features" className="text-gray-600 hover:text-habito-teal-primary transition-colors font-medium">Features</a>
            <a href="#demo" className="bg-habito-teal-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-habito-teal-deep transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              Get Health Score
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-habito-teal-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-habito-teal-light">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg flex flex-col items-center">
            <a href="#problem" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-habito-teal-primary font-medium w-full text-center py-2">The Problem</a>
            <a href="#solution" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-habito-teal-primary font-medium w-full text-center py-2">Our Solution</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-habito-teal-primary font-medium w-full text-center py-2">Features</a>
            <a href="#demo" onClick={() => setIsOpen(false)} className="block text-center bg-habito-teal-primary text-white w-full py-3 rounded-md font-medium max-w-xs mt-2">
              Get Health Score
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
