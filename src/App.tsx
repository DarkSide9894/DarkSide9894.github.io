/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  Settings, 
  ShoppingBag, 
  Wrench, 
  ChevronRight, 
  Menu, 
  X,
  Navigation,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-surface text-zinc-900 font-sans selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b-2 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚜</span>
              <span className="font-display font-extrabold text-xl tracking-wider uppercase text-primary">Cloverdale Mower</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary border-b-2 border-transparent hover:border-primary transition-all pb-1 translate-y-0.5">Services</a>
              <a href="#about" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-all">New Mowers</a>
              <a href="#location" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-all">Location</a>
              <button className="border-2 border-primary text-primary px-4 py-2 rounded font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                Call: (323) 555-0198
              </button>
            </div>

            <button 
              className="md:hidden p-2 rounded hover:bg-zinc-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 px-4 py-6"
          >
            <div className="flex flex-col space-y-4">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest">About</a>
              <a href="#location" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest">Location</a>
              <button className="bg-primary text-white w-full py-3 rounded font-bold uppercase tracking-widest">Call Now</button>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[320px] flex items-center bg-gradient-to-br from-primary to-[#2D6A4F] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 relative w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-display font-extrabold leading-tight tracking-tight mb-4">
                Premium Care for <br />Your Premium Lawn.
              </h1>
              <p className="text-lg opacity-90 mb-8 max-w-xl leading-relaxed font-medium">
                Los Angeles' trusted destination for precision mower sales, expert repairs, 
                and genuine replacement parts. Keeping Cloverdale green since 1994.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent text-secondary px-7 py-3 rounded font-bold uppercase text-[13px] tracking-wide transition-all shadow-lg shadow-black/10 hover:brightness-105">
                  Schedule Maintenance
                </button>
                <button className="bg-transparent border-2 border-white text-white px-7 py-3 rounded font-bold uppercase text-[13px] tracking-wide transition-all hover:bg-white hover:text-primary">
                  Browse Inventory
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info Grid Implementation to match theme layout */}
        <section className="py-12 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Main Content Area (2/3 width) */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white border border-border-subtle rounded-lg p-8">
                  <h2 className="text-lg font-bold uppercase tracking-widest text-secondary border-b border-border-subtle pb-4 mb-6">Our Professional Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                      { icon: "⚙️", label: "Engine Tune-Ups" },
                      { icon: "⚔️", label: "Blade Sharpening" },
                      { icon: "🔋", label: "Battery Diagnostics" },
                      { icon: "🧴", label: "Oil & Filter Change" },
                      { icon: "🚚", label: "Pickup & Delivery" },
                      { icon: "🔌", label: "Spark Plug Service" },
                      { icon: "🔧", label: "Full Restoration" },
                      { icon: "🛒", label: "Parts Sourcing" },
                    ].map((svc, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-9 h-9 bg-[#E9F5EE] rounded flex items-center justify-center text-primary font-bold">
                          {svc.icon}
                        </div>
                        <span className="font-semibold text-zinc-700">{svc.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 bg-[#f1f5f9] p-5 rounded border-l-4 border-primary/20 text-sm text-zinc-600 leading-relaxed">
                    <strong className="text-secondary block mb-1">Pro Tip:</strong> 
                    Sharp blades reduce fuel consumption by up to 20% and promote healthier grass growth. Visit us for same-day sharpening.
                  </div>
                </div>

                {/* Preserve original Feature Grid but re-styled */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative bg-white rounded-lg overflow-hidden border border-border-subtle shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src="https://picsum.photos/seed/engine/800/600" 
                        alt="Expert Repair"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 opacity-80"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-bold uppercase tracking-widest text-primary mb-2">Expert Repair</h3>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                        Factory-trained technicians handling everything from tune-ups to complete engine overhauls.
                      </p>
                      <a href="#" className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                        Learn More <ChevronRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <div className="group relative bg-white rounded-lg overflow-hidden border border-border-subtle shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src="https://picsum.photos/seed/lawnmower/800/600" 
                        alt="Premium Sales"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 opacity-80"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-bold uppercase tracking-widest text-primary mb-2">Premium Sales</h3>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                        Authorized dealer for the industry's most reliable mowers. Find the perfect fit for your lawn size.
                      </p>
                      <a href="#" className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                        Learn More <ChevronRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Area (1/3 width) */}
              <div className="space-y-6">
                <div className="bg-white border border-border-subtle rounded-lg p-6">
                  <span className="inline-block px-3 py-1 bg-[#DEF7EC] text-[#03543F] rounded-full text-[10px] font-black uppercase tracking-wider mb-4">
                    ● OPEN NOW
                  </span>
                  
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3].map(i => <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />)}
                    {[1,2].map(i => <Star key={i} className="w-3.5 h-3.5 text-zinc-300" />)}
                    <span className="text-[11px] text-zinc-500 font-bold ml-1">(3.7 from 3 reviews)</span>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-1">Visit Our Store</h4>
                      <p className="text-sm text-secondary leading-relaxed">
                        Cloverdale Ave,<br />
                        Los Angeles, CA 90016<br />
                        United States
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-1">Hours Today</h4>
                      <p className="text-sm text-secondary">08:00 AM – 12:00 PM</p>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 bg-transparent border-2 border-primary text-primary py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all">
                    Get Directions
                  </button>
                </div>

                <div className="bg-secondary text-white rounded-lg p-6">
                  <h3 className="text-base font-bold uppercase tracking-widest mb-2">Inventory Alert</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    New zero-turn models arriving this week. Reserve yours today.
                  </p>
                  <button className="w-full bg-accent text-secondary py-3 rounded font-bold uppercase text-xs tracking-widest border-none shadow-lg shadow-black/20 hover:brightness-105 active:scale-95 transition-all">
                    Request Quote
                  </button>
                </div>

                <div className="bg-white border border-border-subtle rounded-lg p-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-4 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Contact Info
                  </h4>
                  <p className="text-sm text-zinc-600 mb-1">Service & Support Line:</p>
                  <p className="font-bold text-secondary mb-4">(323) 555-0198</p>
                  <a href="#" className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">Claim this business line</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Banner preserved from app but themed */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-dark opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative text-center">
            <h2 className="text-4xl font-display font-extrabold text-white mb-6 tracking-tight">
              Ready for the Sharpest Lawn?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
              Don't wait for your mower to break down. Schedule periodic maintenance today 
              to extend your equipment's life by years.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-accent text-secondary px-8 py-4 rounded font-extrabold uppercase text-sm tracking-widest shadow-xl shadow-black/20 hover:brightness-105 transition-all">
                Get a Free Quote
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all">
                View Catalog
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border-subtle py-12 text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-lg">🚜</span>
              <span className="font-display font-black text-lg text-primary tracking-widest uppercase">Cloverdale Mower</span>
            </div>
            
            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
              <a href="#" className="text-secondary hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Accessibility</a>
            </div>
            
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">
              © 2026 Cloverdale Mower & Garden Shop.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
