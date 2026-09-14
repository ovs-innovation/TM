import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Tent,
  Signpost,
  Store,
  Gift,
  Check,
  Phone,
  MessageCircle,
} from "lucide-react";
import Footer from "../components/Footer";

// Hero Showroom Asset
import showroomHeroImg from "../assets/showroom-hero-hd.png";
import pylonImg from "../assets/pylon-highlight-hd.png";

// Mahindra Shopee Development Assets
import shoppeMainImg from "../assets/shoppe-main-clean.png";
import shoppeCounterImg from "../assets/shoppe-counter-clean.png";
import shoppeRacksImg from "../assets/shoppe-racks-clean.png";
import shoppeFrontImg from "../assets/shoppe-front-clean.png";
import shoppeWalkImg from "../assets/shoppe-walk-clean.png";

// 3D Miniature Model Assets
import tractorMiniatureImg from "../assets/tractor-miniature-model.png";
import swarajMiniatureImg from "../assets/swaraj-miniature-model.png";
import swarajSideImg from "../assets/swaraj-side-model.png";
import cromaMiniatureImg from "../assets/croma-miniature-model.png";
import rotavatorMiniatureImg from "../assets/rotavator-miniature-model.png";

export default function RetailBranding() {
  const whatWeDoCards = [
    {
      id: 1,
      icon: Tent,
      badgeColor: "bg-pink-50 text-[#FA0091] border-pink-200/80",
      emoji: "🏕️",
      title: "Canopy & Gazebo Tent",
      desc: "Branded outdoor setups for campaigns, dealer meets, roadshows and activations.",
    },
    {
      id: 2,
      icon: Signpost,
      badgeColor: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200/80",
      emoji: "🪧",
      title: "Standee & Lollipop",
      desc: "Portable promotional display systems with custom branding and durable fabrication.",
    },
    {
      id: 3,
      icon: Store,
      badgeColor: "bg-sky-50 text-[#0A467B] border-sky-200/80",
      emoji: "🏪",
      title: "In-Shop Branding",
      desc: "Wall graphics, fascia, counters, display racks, ACP, acrylic, vinyl and LED signage.",
    },
    {
      id: 4,
      icon: Gift,
      badgeColor: "bg-rose-50 text-rose-600 border-rose-200/80",
      emoji: "🎁",
      title: "Marketing Material",
      desc: "Dealer POSM, danglers, posters, display units, promotional items and campaign kits.",
    },
  ];

  const miniatureModels = [
    {
      id: 1,
      tag: "CROMA",
      title: "Croma Showroom",
      image: cromaMiniatureImg,
      desc: "Retail façade, interiors, shelving, illuminated signage and realistic branding.",
    },
    {
      id: 2,
      tag: "SWARAJ",
      title: "Swaraj Tractor",
      image: tractorMiniatureImg,
      desc: "Detailed tractor model with authentic colors, decals and display-ready finishing.",
    },
    {
      id: 3,
      tag: "ROTAVATOR",
      title: "Rotavator",
      image: rotavatorMiniatureImg,
      desc: "Mechanical scale model highlighting implement profile, blades and structure.",
    },
    {
      id: 4,
      tag: "HARVESTER",
      title: "Harvester",
      image: swarajSideImg,
      desc: "High-detail miniature with realistic proportions and exhibition-quality finish.",
    },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#fffdfd_0%,#fdf2f8_45%,#fff7ed_100%)] text-slate-900 relative overflow-hidden">
      {/* ─── Global Background Patterns ─── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbcfe8_1px,transparent_1px),linear-gradient(to_bottom,#fbcfe8_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 pointer-events-none" />
      <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-pink-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-[40rem] -right-20 w-96 h-96 rounded-full bg-fuchsia-200/30 blur-3xl pointer-events-none" />

      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              {/* Category Pill / Tagline */}
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-pink-600 shadow-xs backdrop-blur-md mb-5 sm:mb-6">
                <Sparkles size={14} className="text-[#FA0091]" />
                <span className="tracking-wide uppercase font-bold text-[11px] sm:text-xs">
                  Retail Branding &bull; Fabrication &bull; Marketing Material
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] mb-5 sm:mb-6">
                We Build{" "}
                <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-[#FA0091] bg-clip-text text-transparent inline-block font-black">
                  Brands
                </span>
                <br />
                That Stand Out.
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10">
                TossMart Pvt Ltd delivers complete retail branding solutions—from
                marketing material and pylon signage to complete showroom
                development and 3D miniature models.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#what-we-do"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-8 py-3.5 sm:py-4 font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/40 active:scale-95 text-sm sm:text-base"
                >
                  <span className="relative z-10">View Our Work</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 ml-2 transition-all duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200/90 font-semibold text-sm sm:text-base shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>

            {/* Right Showcase Card Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none group">
                {/* Glow behind image */}
                <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-pink-400/30 via-rose-300/20 to-sky-300/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

                <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/90 bg-white shadow-[0_20px_50px_-20px_rgba(250,0,145,0.2)] transition-transform duration-500 group-hover:scale-[1.01]">
                  <img
                    src={showroomHeroImg}
                    alt="Mahindra Modern Motors Showroom Retail Branding by Tossmart"
                    className="w-full h-auto object-cover block"
                  />
                  {/* Clean Floating End-to-End Badge */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/80 max-w-[230px] sm:max-w-[270px]">
                    <h4 className="text-sm sm:text-base font-extrabold text-[#e5252a] tracking-tight mb-0.5">
                      End-to-End
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-700 font-medium leading-snug">
                      Design, fabrication, branding & installation under one roof.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. WHAT WE DO: MARKETING MATERIAL & RETAIL BRANDING ─── */}
      <section id="what-we-do" className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#FA0091] font-bold text-xs uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              WHAT WE DO
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4">
              Marketing Material &{" "}
              <span className="bg-gradient-to-r from-[#0A467B] via-pink-600 to-[#FA0091] bg-clip-text text-transparent">
                Retail Branding
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Outdoor and in-shop solutions designed for dealerships, events, product launches and retail activation.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoCards.map((card) => (
              <div
                key={card.id}
                className="bg-white/95 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Ambient corner light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50/60 rounded-bl-full pointer-events-none" />

                <div>
                  {/* Icon container */}
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xs ${card.badgeColor}`}
                  >
                    <span role="img" aria-label={card.title}>
                      {card.emoji}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#FA0091] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. HIGHLIGHT PROJECT: PYLON SIGNAGE & LANDMARK BRANDING ─── */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/80 shadow-[0_20px_50px_-20px_rgba(250,0,145,0.12)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A467B] font-bold text-xs uppercase tracking-wider mb-3">
                  HIGHLIGHT PROJECT
                </span>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
                  Pylon Signage &{" "}
                  <span className="bg-gradient-to-r from-[#0A467B] to-[#FA0091] bg-clip-text text-transparent">
                    Landmark Branding
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mb-8">
                  High-visibility illuminated pylon work engineered for durability, clean finishing and strong brand recall.
                </p>

                {/* Feature Checklist */}
                <div className="space-y-4 mb-9">
                  {[
                    {
                      title: "ACP / MS Fabrication",
                      desc: "Precision-built body structure with weather-resistant finish.",
                    },
                    {
                      title: "LED & Acrylic Branding",
                      desc: "Front-lit, back-lit and logo illumination options.",
                    },
                    {
                      title: "Site Installation",
                      desc: "Foundation, electrical integration and on-site commissioning.",
                    },
                  ].map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3.5">
                      <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shrink-0 shadow-xs text-white">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          {feat.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
                  <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-pink-100 shadow-xs hover:shadow-md transition">
                    <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-1">
                      360°
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-700">
                      Execution
                    </div>
                  </div>

                  <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-blue-100 shadow-xs hover:shadow-md transition">
                    <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-[#0A467B] to-sky-600 bg-clip-text text-transparent mb-1">
                      High
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-700">
                      Visibility
                    </div>
                  </div>

                  <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-fuchsia-100 shadow-xs hover:shadow-md transition">
                    <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-[#FA0091] to-fuchsia-600 bg-clip-text text-transparent mb-1">
                      OEM
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-700">
                      Finish
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Pylon Image Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-white transition-transform duration-500 hover:scale-[1.01]">
                  <img
                    src={pylonImg}
                    alt="Mahindra Regional Distribution Centre Jaipur Pylon Signage by Tossmart"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. TURNKEY RETAIL DEVELOPMENT: MAHINDRA M_SHOPEE ─── */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#FA0091] font-bold text-xs uppercase tracking-wider mb-3">
              <Store size={13} />
              TURNKEY RETAIL DEVELOPMENT
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4">
              Mahindra M_Shopee{" "}
              <span className="bg-gradient-to-r from-[#0A467B] via-pink-600 to-[#FA0091] bg-clip-text text-transparent">
                Showroom Development
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Complete showroom transformation—from front fascia and glass graphics to counters, racks, product display and interior branding.
            </p>
          </div>

          {/* 5-Image Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Left Main Storefront Image */}
            <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 bg-white transition-all duration-300 group">
              <img
                src={shoppeMainImg}
                alt="Mahindra M_Shopee Complete Showroom Transformation"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 min-h-[320px] sm:min-h-[420px]"
              />
            </div>

            {/* Right 4-Tile Sub-grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
              {/* Counter */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-200/80 bg-white transition-all duration-300 group aspect-[4/3]">
                <img
                  src={shoppeCounterImg}
                  alt="Mahindra M_Shopee Front Reception Counter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Racks */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-200/80 bg-white transition-all duration-300 group aspect-[4/3]">
                <img
                  src={shoppeRacksImg}
                  alt="Mahindra M_Shopee Interior Display Racks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Front View */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-200/80 bg-white transition-all duration-300 group aspect-[4/3]">
                <img
                  src={shoppeFrontImg}
                  alt="Mahindra M_Shopee Storefront Front View"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Street Walk View */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-200/80 bg-white transition-all duration-300 group aspect-[4/3]">
                <img
                  src={shoppeWalkImg}
                  alt="Mahindra M_Shopee Exterior Finish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. 3D MINIATURE & SCALE MODELS ─── */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#FA0091] font-bold text-xs uppercase tracking-wider mb-3">
              <Gift size={13} />
              3D MINIATURE & SCALE MODELS
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4">
              Realistic Miniature{" "}
              <span className="bg-gradient-to-r from-[#0A467B] via-pink-600 to-[#FA0091] bg-clip-text text-transparent">
                Brand Experiences
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Premium scale models for presentation, exhibitions, dealer launches and corporate display. Custom dimensions, detailing, lighting and branding available.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {miniatureModels.map((item) => (
              <div
                key={item.id}
                className="bg-white/95 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Decorative soft blob */}
                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-gradient-to-tl from-pink-100/50 to-transparent rounded-full pointer-events-none" />

                <div>
                  {/* Visual Preview Image */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl bg-slate-50/80 border border-slate-100 p-2.5 flex items-center justify-center mb-5 group-hover:scale-[1.03] transition-transform duration-300 overflow-hidden shadow-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain filter contrast-[1.02]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-[#FA0091] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. PROJECT CTA BANNER ─── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0A467B] via-slate-900 to-[#FA0091] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            {/* Ambient decorative glowing blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-sm">
                <Sparkles size={12} className="text-pink-400" />
                Let's Build Together
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Have a branding or showroom project?
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-200 font-normal leading-relaxed max-w-2xl">
                Share your site photos, dimensions and brand guidelines. Tossmart can take it from concept to installation.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <Store size={14} className="text-pink-400" /> C 61, Sector 10 Noida
                </span>
              </div>
            </div>

            <div className="relative z-10 shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white hover:bg-pink-50 text-slate-900 font-bold text-sm sm:text-base shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Request Proposal
                <ArrowRight size={16} className="ml-2 text-pink-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}
