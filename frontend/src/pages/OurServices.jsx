import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Printer,
  Layers,
  Gift,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Phone,
  Building,
  Award,
  Store,
  School,
  Calendar,
  HeartHandshake,
} from "lucide-react";
import Footer from "../components/Footer";

export default function OurServices() {
  const [activeTab, setActiveTab] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Solutions" },
    { id: "large-format", label: "Large Format Printing" },
    { id: "uv-printing", label: "UV Printing & Branding" },
    { id: "corporate-gifting", label: "Corporate Gifting" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/60 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 sm:h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute top-20 -left-20 sm:-left-32 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-sky-100/30 blur-3xl pointer-events-none" />
      <div className="absolute top-60 -right-20 sm:-right-32 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-pink-100/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200/80 text-[#0A467B] font-semibold text-xs shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FA0091]" />
            Commercial Printing & Fabrication
          </span>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Printing &{" "}
            <span className="bg-gradient-to-r from-[#0A467B] via-blue-600 to-[#FA0091] bg-clip-text text-transparent">
              Branding Services
            </span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto px-2">
            From large-format outdoor visibility and precision flatbed UV printing to bespoke executive gifting, we craft lasting physical impressions for your brand.
          </p>

          {/* Clean Modern Filter Tabs */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar p-1.5 bg-white/90 backdrop-blur rounded-full border border-slate-200/80 shadow-xs max-w-full">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 whitespace-nowrap px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#0A467B] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Service 1: Large Format Printing Solutions ─── */}
        {(activeTab === "all" || activeTab === "large-format") && (
          <div className="mb-8 sm:mb-12 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-7 lg:p-8 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A467B] to-sky-400" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0A467B] mb-2">
                  <Printer className="w-3.5 h-3.5" />
                  Digital & Offset Printing
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                  Large Format Printing Solutions
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-normal">
                  Grand-scale visual branding engineered for maximum visibility, vibrant colors, and weather resilience.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A467B] to-[#105691] hover:from-[#083863] hover:to-[#0A467B] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all shrink-0 group-hover:translate-x-0.5"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Content Layout: Services List + Key Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 pt-5 sm:pt-6 items-start">
              {/* Services Offered list */}
              <div className="lg:col-span-8">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Services Offered
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {[
                    "Vinyl Banners & Hoardings",
                    "Flex Boards (Frontlit & Backlit)",
                    "One-Way Vision Glass Film",
                    "Canopy & Gazebo Event Tents",
                    "Foam Board & Sunpack Prints",
                    "Roll-Up Standees & Displays",
                    "ACP Board Printing & Facades",
                    "Wall Murals & Window Graphics",
                  ].map((service, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100/90 text-slate-700 text-xs sm:text-sm font-medium hover:bg-blue-50/40 hover:border-blue-200/80 transition-all hover:translate-x-0.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0A467B] shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="lg:col-span-4 bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-100">
                <h3 className="text-xs font-bold text-[#0A467B] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#FA0091]" />
                  Key Highlights
                </h3>

                <div className="space-y-2 sm:space-y-2.5">
                  {[
                    { label: "High-Resolution Output", desc: "Up to 1440 DPI crisp image fidelity" },
                    { label: "Indoor & Outdoor Durability", desc: "Fade-resistant against sunlight and rain" },
                    { label: "Weather-Resistant Materials", desc: "Reinforced eyelets and waterproof media" },
                    { label: "Custom Architectural Sizes", desc: "Tailored to exact site specifications" },
                  ].map((hl, i) => (
                    <div key={i} className="p-2.5 bg-white rounded-xl border border-slate-200/60 shadow-xs">
                      <p className="text-xs sm:text-sm font-bold text-slate-800">{hl.label}</p>
                      <p className="text-[11px] text-slate-500 font-normal mt-0.5">{hl.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Service 2: UV Printing & Branding Solutions ─── */}
        {(activeTab === "all" || activeTab === "uv-printing") && (
          <div className="mb-8 sm:mb-12 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-7 lg:p-8 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  Direct-to-Object UV Technology
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                  UV Printing & Branding Solutions
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-normal">
                  High-precision flatbed printing directly onto any hard surface with instant LED curing.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A467B] to-[#105691] hover:from-[#083863] hover:to-[#0A467B] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all shrink-0 group-hover:translate-x-0.5"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Columns: Substrates | Branding Products | Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-5 sm:pt-6 items-start">
              {/* Column 1: Substrates */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-100">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  UV Substrates
                </h3>
                <div className="space-y-2">
                  {[
                    { title: "Acrylic UV Printing", desc: "Clear premium finish for signage & displays" },
                    { title: "MDF / Sunboard UV", desc: "Durable boards for interior decor & branding" },
                    { title: "Metal & Steel UV", desc: "Industrial-grade durable prints for corporate use" },
                    { title: "Glass & Ceramic Tile UV", desc: "Ultra-premium finish for architectural spaces" },
                    { title: "Textured Wood UV", desc: "Custom tactile finish with rich depth" },
                  ].map((sub, i) => (
                    <div key={i} className="p-2.5 bg-white rounded-xl border border-slate-200/60 shadow-xs">
                      <p className="text-xs sm:text-sm font-bold text-slate-800">{sub.title}</p>
                      <p className="text-[11px] text-slate-500 font-normal mt-0.5">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Branding Products */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-100">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Branding Products
                </h3>
                <div className="space-y-2">
                  {[
                    "Custom Diaries & Notebooks",
                    "Premium Metallic Name Plates",
                    "Drinkware Coasters & Tabletops",
                    "Branded Keychains (UV Gloss Finish)",
                    "Corporate Trophies & Awards",
                    "Architectural Office Signage",
                  ].map((prod, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/60 shadow-xs text-slate-700 text-xs sm:text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>{prod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Highlights */}
              <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/40 border border-indigo-100/70">
                <h3 className="text-xs font-bold text-indigo-800 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-indigo-600" />
                  Key Highlights
                </h3>

                <div className="space-y-2 sm:space-y-2.5">
                  {[
                    { label: "Ultra-High Resolution", desc: "Micro-droplet printhead precision" },
                    { label: "Scratch-Resistant Surfaces", desc: "Durable polymer surface bonding" },
                    { label: "Prints On Any Hard Material", desc: "Metal, acrylic, wood, glass & stone" },
                    { label: "Instant LED Curing", desc: "Smudge-proof finish with zero wait time" },
                  ].map((hl, i) => (
                    <div key={i} className="p-2.5 bg-white rounded-xl border border-indigo-100 shadow-xs">
                      <p className="text-xs sm:text-sm font-bold text-slate-900">{hl.label}</p>
                      <p className="text-[11px] text-slate-500 font-normal mt-0.5">{hl.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Service 3: Premium Corporate Gifting ─── */}
        {(activeTab === "all" || activeTab === "corporate-gifting") && (
          <div className="mb-8 sm:mb-12 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-7 lg:p-8 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FA0091] via-rose-500 to-purple-500" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-pink-50 text-[#FA0091] mb-2">
                  <Gift className="w-3.5 h-3.5" />
                  Executive Merchandise & Sets
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                  Premium Corporate Gifting
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-normal">
                  Tailored corporate hampers, personalized welcome sets, and custom awards for enterprises.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FA0091] to-rose-600 hover:from-[#d6007b] hover:to-[#FA0091] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all shrink-0 group-hover:translate-x-0.5"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 2 Columns: Products List + Why Choose */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 pt-5 sm:pt-6 items-start">
              {/* Products List */}
              <div className="lg:col-span-7">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Personalized Branding Gifts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {[
                    "Customized Branding Gift Sets (Flask, Diary, Pen)",
                    "Nameplates & Desk Name Blocks",
                    "Branded Power Banks & Wireless Chargers",
                    "Laser-Engraved & UV Printed USB Drives",
                    "Corporate Trophies & Recognition Awards",
                    "Bespoke Desk & Wall Photo Frames",
                    "Customized Corporate Calendars & Planners",
                    "Branded Executive Bags & Apparel",
                  ].map((gift, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100/90 text-slate-700 text-xs sm:text-sm font-medium hover:bg-pink-50/40 hover:border-pink-200/80 transition-all hover:translate-x-0.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FA0091] shrink-0" />
                      <span>{gift}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Our Gifts */}
              <div className="lg:col-span-5 bg-pink-50/30 rounded-2xl p-4 sm:p-5 border border-pink-100/60">
                <h3 className="text-xs font-bold text-[#FA0091] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FA0091]" />
                  Why Choose Our Corporate Gifts
                </h3>

                <div className="space-y-2 sm:space-y-2.5">
                  {[
                    { label: "Custom Branding Methods", desc: "Laser engraving, UV printing, and debossing" },
                    { label: "Premium Presentation Box", desc: "Curated gift hampers with bespoke packaging" },
                    { label: "Enterprise Bulk Capability", desc: "Guaranteed turnaround for volume orders" },
                    { label: "Festive & Onboarding Sets", desc: "Perfect for Diwali, New Year & milestones" },
                    { label: "Modern Corporate Utility", desc: "Designed for everyday executive elegance" },
                  ].map((item, i) => (
                    <div key={i} className="p-2.5 bg-white rounded-xl border border-pink-100/80 shadow-xs">
                      <p className="text-xs sm:text-sm font-bold text-slate-800">{item.label}</p>
                      <p className="text-[11px] text-slate-500 font-normal mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── How It Works ─── */}
        <div className="my-12 sm:my-16">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A467B] bg-blue-50 border border-blue-200/60 px-3 py-0.5 rounded-full">
              Streamlined Process
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              How It Works
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 font-normal">
              From initial consultation to doorstep delivery, we make execution effortless.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {[
              { num: "01", title: "Select Service", desc: "Choose large format, UV printing, or corporate gifts." },
              { num: "02", title: "Share Artwork", desc: "Provide your logo or collaborate with our layout team." },
              { num: "03", title: "Review Proof", desc: "Approve 3D digital mockups and exact color proofs." },
              { num: "04", title: "Swift Delivery", desc: "Precision fabrication and safe delivery across India." },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 text-center shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#0A467B] to-sky-500 text-white font-black text-xs sm:text-sm flex items-center justify-center mx-auto mb-3 shadow-xs group-hover:scale-105 transition-transform">
                  {step.num}
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-800 mb-1">{step.title}</h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Industries We Serve ─── */}
        <div className="my-12 sm:my-16 text-center">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FA0091] bg-pink-50 border border-pink-200/60 px-3 py-0.5 rounded-full">
              Versatile Expertise
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 font-normal">
              Trusted by diverse organizations across the country.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: "Corporate Enterprises", icon: Building },
              { label: "PSUs & Government", icon: Award },
              { label: "Retail & Stores", icon: Store },
              { label: "Schools & Colleges", icon: School },
              { label: "Events & Exhibitions", icon: Calendar },
              { label: "Gift Shops & Creators", icon: HeartHandshake },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-xs flex flex-col items-center justify-center gap-2 hover:border-[#0A467B]/40 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-50 group-hover:bg-[#0A467B] text-[#0A467B] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-700 text-center leading-tight">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Consultation CTA Bar ─── */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0A467B] via-[#0e5c9f] to-[#083863] p-6 sm:p-8 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-lg sm:text-2xl font-bold">Have a custom requirement or volume order?</h3>
            <p className="mt-1 text-xs sm:text-sm text-blue-100 font-normal">
              Visit our studio in Sector 10 Noida or call us directly for physical samples and fast turnaround quotes.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#FA0091] hover:bg-[#d6007b] text-white font-bold text-xs sm:text-sm shadow-sm hover:scale-105 transition-all text-center flex items-center justify-center"
            >
              Get In Touch
            </Link>
            <a
              href="tel:9999119402"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 9999119402
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}