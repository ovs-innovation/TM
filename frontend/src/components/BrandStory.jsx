import React from 'react';
import { Award, Zap, Heart, ShieldCheck } from 'lucide-react';

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
                  src="https://scontent.fdel1-5.fna.fbcdn.net/v/t39.30808-6/534413413_122095378580988419_771764437091334626_n.jpg?stp=dst-jpg_tt6&cstp=mx1125x425&ctp=s1125x425&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Lr0p0q4JqGAQ7kNvwHsWNd6&_nc_oc=AdqEd98Fq31kR-WP1XVTXHVE8xFJhC_gXZKHmsaj2pN-Qc6dwVc-1qrI7VW0g2uB72F-In6mVAjGsoZuUzQnZ2Vx&_nc_zt=23&_nc_ht=scontent.fdel1-5.fna&_nc_gid=xAgm4zo5hXWjD77duhiNJw&_nc_ss=7b289&oh=00_AQA2prE8H8jHPAieNlhgQ0hit0dN62mb5icp0WZ2siu-GQ&oe=6A4D1EBA"
                  alt="img"
                  className="w-full h-full object-cover object-center opacity-85 hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Stats Block */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-white rounded-xl border border-slate-300">
                  <span className="block font-serif text-2xl font-bold text-pink-600">100%</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Satisfaction</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-300">
                  <span className="block font-serif text-2xl font-bold text-pink-600">48hr</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Turnaround</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-300">
                  <span className="block font-serif text-2xl font-bold text-pink-600">10k+</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
