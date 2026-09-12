import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Printer,
  Layers,
  Gift,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Award,
  Maximize2,
  Building,
  School,
  Store,
  Calendar,
  HeartHandshake,
  Briefcase,
  Zap,
  Phone,
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
    <section className="relative overflow-hidden bg-slate-50/50 pt-20 md:pt-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 sm:h-96 bg-gradient-to-b from-blue-50/70 to-transparent pointer-events-none" />
      <div className="absolute top-20 -left-20 sm:-left-32 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-sky-100/40 blur-3xl pointer-events-none" />
      <div className="absolute top-60 -right-20 sm:-right-32 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white border border-slate-200 text-[#0A467B] font-semibold text-xs sm:text-sm shadow-xs mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FA0091]" />
            Commercial Printing & Fabrication
          </span>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Printing &{" "}
            <span className="bg-gradient-to-r from-[#0A467B] via-blue-600 to-[#FA0091] bg-clip-text text-transparent">
              Branding Services
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base lg:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto px-2">
            From large-format outdoor visibility and precision flatbed UV printing to bespoke executive gifting, we craft lasting physical impressions for your brand.
          </p>

          {/* Clean Filter Tabs - horizontally scrollable on small devices */}
          <div className="mt-6 sm:mt-8 -mx-3.5 sm:mx-0 px-3.5 sm:px-0">
            <div className="flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1.5 px-0.5">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-[#0A467B] text-white shadow-xs"
                      : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
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
          <div className="mb-8 sm:mb-12 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-slate-100">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0A467B] mb-2">
                  <Printer className="w-3.5 h-3.5" />
                  Digital & Offset Printing
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                  Large Format Printing Solutions
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-light">
                  Grand-scale visual branding engineered for maximum visibility, vibrant colors, and weather resilience.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl sm:rounded-full bg-[#0A467B] hover:bg-[#083863] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all shrink-0"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 pt-5 sm:pt-8 items-start">
              {/* Left: Services list */}
              <div className="lg:col-span-8">
                <h3 className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 sm:mb-4">
                  Services Offered
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
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
                      className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-100 text-slate-700 text-xs sm:text-sm font-medium hover:bg-blue-50/40 hover:border-blue-200 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-[#0A467B] shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Key Highlights */}
              <div className="lg:col-span-4 bg-slate-50/90 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200/70">
                <h3 className="text-[11px] sm:text-xs font-bold text-[#0A467B] uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#FA0091]" />
                  Key Highlights
                </h3>

                <div className="space-y-2 sm:space-y-3">
                  {[
                    { label: "High-Resolution Output", desc: "Up to 1440 DPI crisp image fidelity" },
                    { label: "Indoor & Outdoor Durability", desc: "Fade-resistant against sunlight and rain" },
                    { label: "Weather-Resistant Materials", desc: "Reinforced eyelets and waterproof media" },
                    { label: "Custom Sizes Available", desc: "Tailored to exact architectural measurements" },
                  ].map((hl, i) => (
                    <div key={i} className="p-2.5 sm:p-3 bg-white rounded-xl border border-slate-200/60">
                      <p className="text-xs sm:text-sm font-bold text-slate-800">{hl.label}</p>
                      <p className="text-[11px] text-slate-500 font-light mt-0.5">{hl.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Service 2: UV Printing & Branding Solutions ─── */}
        {(activeTab === "all" || activeTab === "uv-printing") && (
          <div className="mb-8 sm:mb-12 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-slate-100">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  Direct-to-Object UV Technology
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                  UV Printing & Branding Solutions
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-light">
                  High-precision flatbed printing directly onto any hard surface with instant LED curing.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl sm:rounded-full bg-[#0A467B] hover:bg-[#083863] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all shrink-0"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Columns: Substrates | Products | Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-5 sm:pt-8 items-start">
              {/* Column 1: Substrates */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50/60 border border-slate-100">
                <h3 className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 sm:mb-4">
                  UV Printing Services
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {[
                    { title: "Acrylic UV Printing", desc: "Clear premium finish for signage & displays" },
                    { title: "MDF / Sunboard UV Printing", desc: "Durable boards for branding & interior decor" },
                    { title: "Metal & Steel UV Printing", desc: "Long-lasting prints for industrial & corporate use" },
                    { title: "Glass & Tile UV Printing", desc: "Ultra-premium finish for architectural decor" },
                    { title: "Wood UV Printing", desc: "Customized engraving-like textured finish" },
                  ].map((sub, i) => (
                    <li key={i} className="p-2.5 sm:p-3 bg-white rounded-xl border border-slate-200/60">
                      <p className="text-xs sm:text-sm font-bold text-slate-800">{sub.title}</p>
                      <p className="text-[11px] text-slate-500 font-light mt-0.5">{sub.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Branding Products */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50/60 border border-slate-100">
                <h3 className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 sm:mb-4">
                  Branding Products
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {[
                    "Custom Diaries & Notebooks",
                    "Premium Metallic Name Plates",
                    "Drinkware Coasters & Tabletops",
                    "Branded Keychains (UV Gloss Finish)",
                    "Corporate Trophies & Awards",
                    "Architectural Office Signage",
                  ].map((prod, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/60 text-slate-700 text-xs sm:text-sm font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>{prod}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Highlights */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-indigo-50/40 border border-indigo-100/70">
                <h3 className="text-[11px] sm:text-xs font-bold text-indigo-800 uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-indigo-600" />
                  Key Highlights
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { label: "Ultra-High Resolution", desc: "Micro-droplet printhead precision" },
                    { label: "Scratch-Resistant Surfaces", desc: "Durable polymer surface bonding" },
                    { label: "Prints On Any Hard Material", desc: "Metal, acrylic, wood, glass & stone" },
                    { label: "Instant Curing", desc: "LED UV technology with zero drying time" },
                  ].map((hl, i) => (
                    <div key={i} className="p-2.5 sm:p-3 bg-white rounded-xl border border-indigo-100 shadow-xs">
                      <p className="text-xs sm:text-sm font-bold text-slate-900">{hl.label}</p>
                      <p className="text-[11px] text-slate-500 font-light mt-0.5">{hl.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Service 3: Premium Corporate Gifting ─── */}
        {(activeTab === "all" || activeTab === "corporate-gifting") && (
          <div className="mb-8 sm:mb-12 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-slate-100">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-pink-50 text-[#FA0091] mb-2">
                  <Gift className="w-3.5 h-3.5" />
                  Executive Merchandise & Sets
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                  Premium Corporate Gifting
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-light">
                  Tailored corporate hampers, personalized welcome sets, and custom awards for enterprises.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl sm:rounded-full bg-[#0A467B] hover:bg-[#083863] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all shrink-0"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 2 Columns: Products | Why Choose */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 pt-5 sm:pt-8 items-start">
              {/* Products */}
              <div>
                <h3 className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 sm:mb-4">
                  Personalized Branding Gifts
                </h3>
                <div className="space-y-2 sm:space-y-2.5">
                  {[
                    "Customized Branding Gift Sets (Flask, Diary, Pen)",
                    "Nameplates & Desk Name Blocks",
                    "Branded Power Banks & Wireless Chargers",
                    "Laser-Engraved & UV Printed USB Drives",
                    "Corporate Trophies & Recognition Awards",
                    "Bespoke Desk & Wall Photo Frames",
                    "Customized Corporate Calendars & Planners",
                  ].map((gift, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-100 text-slate-700 text-xs sm:text-sm font-medium hover:bg-pink-50/30 hover:border-pink-200 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-[#FA0091] shrink-0" />
                      <span>{gift}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose */}
              <div className="bg-pink-50/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-pink-100/60">
                <h3 className="text-[11px] sm:text-xs font-bold text-[#FA0091] uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FA0091]" />
                  Why Choose Our Corporate Gifts
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { label: "Custom Branding Options", desc: "Laser engraving, UV printing, and debossing" },
                    { label: "Premium Packaging Available", desc: "Curated gift hampers with custom presentation boxes" },
                    { label: "Bulk Orders Supported", desc: "Reliable production capacity for enterprise requirements" },
                    { label: "Suitable for Events & Festivals", desc: "Diwali, New Year, onboarding & conference collections" },
                    { label: "Curated for Corporates", desc: "Designed with modern corporate aesthetics and lasting utility" },
                  ].map((item, i) => (
                    <div key={i} className="p-2.5 sm:p-3 bg-white rounded-xl border border-pink-100/80 shadow-xs">
                      <p className="text-xs sm:text-sm font-bold text-slate-800">{item.label}</p>
                      <p className="text-[11px] text-slate-500 font-light mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── How It Works ─── */}
        <div className="my-10 sm:my-18">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#0A467B] bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Streamlined Process
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-2">
              How It Works
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 font-light">
              From design consultation to doorstep delivery, we make execution effortless.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
            {[
              { num: "01", title: "Select Service", desc: "Choose large format, UV printing, or corporate gifts." },
              { num: "02", title: "Share Artwork", desc: "Provide your logo or collaborate with our layout team." },
              { num: "03", title: "Review Proof", desc: "Approve 3D digital mockups and exact color proofs." },
              { num: "04", title: "Swift Delivery", desc: "Precision fabrication and safe delivery across India." },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/70 p-3 sm:p-5 text-center shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 text-[#0A467B] font-extrabold text-xs sm:text-sm flex items-center justify-center mx-auto mb-2 sm:mb-3.5 border border-blue-100">
                  {step.num}
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-800 mb-0.5 sm:mb-1">{step.title}</h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-light leading-snug sm:leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Industries We Serve ─── */}
        <div className="my-10 sm:my-16 text-center">
          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mb-5 sm:mb-8">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
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
                  className="bg-white rounded-xl border border-slate-200/80 p-3 sm:p-4 shadow-xs flex flex-col items-center justify-center gap-1.5 sm:gap-2 hover:border-[#0A467B]/40 transition-colors"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A467B]" />
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-700 text-center leading-tight">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Consultation CTA Bar ─── */}
        <div className="mt-10 sm:mt-16 rounded-2xl bg-gradient-to-r from-[#0A467B] to-[#083863] p-5 sm:p-8 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg sm:text-2xl font-bold">Have a custom requirement or volume order?</h3>
            <p className="mt-1 text-xs sm:text-sm text-blue-100 font-light">
              Visit our studio in Sector 10 Noida or call us directly for samples and quick quotes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl sm:rounded-full bg-[#FA0091] hover:bg-[#d6007b] text-white font-bold text-xs sm:text-sm shadow-sm transition-all text-center flex items-center justify-center"
            >
              Get In Touch
            </Link>
            <a
              href="tel:9999119402"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl sm:rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-1.5"
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