import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-habito-neutral-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-3xl font-bold text-habito-teal-light mb-4 inline-block">Habito</span>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              India's first behavioral health platform built exclusively for urban young professionals.
            </p>
            <p className="text-lg font-serif italic text-habito-teal-light/80">
              "You're not sick yet. That's exactly the right time."
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white tracking-wide">Platform</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#features" className="hover:text-habito-teal-light transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-habito-teal-light transition-colors">Health Score</a></li>
              <li><a href="#business" className="hover:text-habito-teal-light transition-colors">Enterprise (B2B)</a></li>
              <li><a href="#pricing" className="hover:text-habito-teal-light transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white tracking-wide">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-habito-teal-light transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-habito-teal-light transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-habito-teal-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-habito-teal-light transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="text-center md:text-left mb-4 md:mb-0">© {new Date().getFullYear()} Habito Health Tech. All rights reserved.</p>
          <div className="flex items-center">
            Built with <Heart size={16} className="mx-1.5 text-habito-teal-primary fill-habito-teal-primary" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
}
