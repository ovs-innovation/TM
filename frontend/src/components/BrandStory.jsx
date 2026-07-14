import React from 'react';
import { Award, Zap, Heart, ShieldCheck } from 'lucide-react';
import tsimg from "../assets/tsimg.png";

export default function BrandStory() {
  return (
    <section id="story" className="py-24 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Our Core Philosophy</h4>
            <h2 className="font-sans text-3xl md:text-5xl font-bold text-pink-600 mb-6 leading-tight">
              Where Precision <br />Meets Custom Craft
            </h2>
            <p className="text-zinc-700 font-medium leading-relaxed mb-6">
              Founded in a cozy print workshop,TM emerged from a simple observation: most custom merchandise companies focus entirely on mass production, sacrificing raw print detail and material longevity.
            </p>
            <p className="text-zinc-700 font-medium leading-relaxed mb-8">
              We took a different path. By blending modern vector fiber lasers, high-density UV printers, and thermal dye sublimation with a custom digital editing interface, we built a print studio that treats every individual piece as an artwork. Whether you need one mug for your studio or 5,000 for your conference, we execute with exact color curves and meticulous quality control.
            </p>

            {/* Grid checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-pink-600">
              <div className="flex gap-3">
                <div className="mt-1 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-black">Quality Calibrated</h4>
                  <p className="text-xs text-slate-800 font-light leading-relaxed">Each batch is tested for heat resistance and clarity before shipment.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 shrink-0">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-black">Zero Minimum Orders</h4>
                  <p className="text-xs text-slate-800 font-light leading-relaxed">No setup penalties. We print 1 copy with the same care as 1,000.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-black">Eco-Conscious Inks</h4>
                  <p className="text-xs text-slate-800 font-light leading-relaxed">Water-based dye-sub inks and zero-VOC UV formulations.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-black">Built by Designers</h4>
                  <p className="text-xs text-slate-800 font-light leading-relaxed">We support bleeding vector paths, rich fonts, and clean lines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative">
            {/* Background decorative square */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/10 to-brand-teal/10 rounded-3xl -rotate-2 transform scale-105 pointer-events-none"></div>

            {/* Main Image Box */}
            <div className="glass-card rounded-3xl p-6 border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none"></div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 mb-6">
                <img
                  src={tsimg}
                  alt="img"
                  className="w-full h-full object-cover object-center opacity-85 hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Stats Block */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-1 bg-white rounded-xl border-2 border-red-300">
                  <span className="block font-serif text-xl font-bold text-pink-600">100%</span>
                  <span className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">Satisfaction</span>
                </div>
                <div className="p-1 bg-white rounded-xl border border-red-300">
                  <span className="block font-serif text-xl font-bold text-pink-600">48hr</span>
                  <span className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">Turnaround</span>
                </div>
                <div className="p-1 bg-white rounded-xl border border-red-300">
                  <span className="block font-serif text-xl font-bold text-pink-600">10k+</span>
                  <span className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
