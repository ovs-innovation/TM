import React, { useRef } from "react";
import { Award, ChevronLeft, ChevronRight, Sparkles, Building2 } from "lucide-react";

import client01 from "../assets/clients/client-01-mahindra.png";
import client02 from "../assets/clients/client-02-defence.png";
import client03 from "../assets/clients/client-03-labour.png";
import client04 from "../assets/clients/client-04-dlf.png";
import client05 from "../assets/clients/client-05-bharat-petroleum.png";
import client06 from "../assets/clients/client-06-indianoil.png";
import client07 from "../assets/clients/client-07-bhagwati.png";
import client08 from "../assets/clients/client-08-croma.png";
import client09 from "../assets/clients/client-09-swaraj.png";
import client10 from "../assets/clients/client-10-vansun.png";
import client11 from "../assets/clients/client-11-chargeup.png";
import client12 from "../assets/clients/client-12-daks.png";
import client13 from "../assets/clients/client-13-hmb.png";
import client14 from "../assets/clients/client-14-blkashyap.png";
import client15 from "../assets/clients/client-15-bsl.png";
import client16 from "../assets/clients/client-16-statemirror.png";
import client17 from "../assets/clients/client-17-pathkind.png";
import client18 from "../assets/clients/client-18-shoppe.png";
import client19 from "../assets/clients/client-19-zoje.png";
import client20 from "../assets/clients/client-20-bhargava.png";
import client21 from "../assets/clients/client-21-srl.png";
import client22 from "../assets/clients/client-22-bmw.png";
import client23 from "../assets/clients/client-23-hindikhabar.png";
import client24 from "../assets/clients/client-24-dabang.png";

const rowOne = [
  { name: "Mahindra Rise", logo: client01 },
  { name: "Ministry of Defence", logo: client02 },
  { name: "Ministry of Labour & Employment", logo: client03 },
  { name: "DLF Building India", logo: client04 },
  { name: "Bharat Petroleum", logo: client05 },
  { name: "IndianOil", logo: client06 },
  { name: "Bhagwati Products Ltd", logo: client07 },
  { name: "Croma (A Tata Enterprise)", logo: client08 },
  { name: "Mera Swaraj", logo: client09 },
  { name: "Vansun", logo: client10 },
  { name: "Chargeup", logo: client11 },
  { name: "DAKS India", logo: client12 },
];

const rowTwo = [
  { name: "HMB", logo: client13 },
  { name: "B L Kashyap", logo: client14 },
  { name: "BSL Group", logo: client15 },
  { name: "State Mirror", logo: client16 },
  { name: "Pathkind Labs", logo: client17 },
  { name: "Shoppe Navrang", logo: client18 },
  { name: "ZOJE Sewing Machine", logo: client19 },
  { name: "Bhargava Phytolab", logo: client20 },
  { name: "SRL Diagnostics", logo: client21 },
  { name: "BMW Brand Marketing Works", logo: client22 },
  { name: "Hindi Khabar", logo: client23 },
  { name: "Dabang EV", logo: client24 },
];

export default function ValuedClients() {
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  const scrollLane = (ref, offset) => {
    if (ref.current) {
      ref.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white overflow-hidden border-t border-slate-100">
      {/* Halftone texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A467B_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/30 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0A467B] font-semibold text-xs mb-3 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-[#FA0091]" />
            Enterprise Trust & Collaborations
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Valued <span className="bg-gradient-to-r from-[#0A467B] via-blue-600 to-[#FA0091] bg-clip-text text-transparent">Clients</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-500 font-light max-w-2xl mx-auto">
            Trusted by national institutions, public sector leaders, and leading retail brands for exceptional branding and production quality.
          </p>
        </div>
      </div>

      {/* Marquee Track 1 (Right to Left) */}
      <div className="relative w-full overflow-hidden mb-6 group/track1">
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div
          ref={rowOneRef}
          className="overflow-x-auto no-scrollbar py-2 px-4 cursor-grab active:cursor-grabbing"
        >
          <div className="animate-marquee-left flex gap-5 items-center">
            {[...rowOne, ...rowOne].map((client, idx) => (
              <div
                key={`lane1-${idx}`}
                className="w-44 sm:w-48 h-24 shrink-0 bg-white rounded-2xl border border-slate-200/80 p-3 shadow-sm hover:shadow-xl hover:border-[#0A467B]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Track 2 (Right to Left with offset / or reverse) */}
      <div className="relative w-full overflow-hidden group/track2">
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div
          ref={rowTwoRef}
          className="overflow-x-auto no-scrollbar py-2 px-4 cursor-grab active:cursor-grabbing"
        >
          <div className="animate-marquee-right flex gap-5 items-center">
            {[...rowTwo, ...rowTwo].map((client, idx) => (
              <div
                key={`lane2-${idx}`}
                className="w-44 sm:w-48 h-24 shrink-0 bg-white rounded-2xl border border-slate-200/80 p-3 shadow-sm hover:shadow-xl hover:border-[#FA0091]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
