import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

import corporateBranding from "../assets/works/corporate-branding.png";
import corporateOfficeFixtures from "../assets/works/corporate-office-fixtures.png";
import eventExhibitionBranding from "../assets/works/event-exhibition-branding.png";
import retailBranding from "../assets/works/retail-branding.png";
import retailDisplaySolutions from "../assets/works/retail-display-solutions.png";
import vehicleBranding from "../assets/works/vehicle-branding.png";
import corporateGiftSet from "../assets/works/corporate-gift-set.png";
import vanBranding from "../assets/works/van-branding.png";
import custom3dMiniatureGifting from "../assets/works/custom-3d-miniature-gifting.png";
import acrylicUvPrinting from "../assets/works/acrylic-uv-printing.png";
import eventExhibitionDecor from "../assets/works/event-exhibition-decor.png";
import customizeNamePlate from "../assets/works/customize-name-plate.png";

const showcaseItems = [
  {
    id: 1,
    title: "Corporate Branding",
    category: "Branding",
    image: corporateBranding,
    description: "Outdoor pylons, institutional facades, and complete enterprise branding solutions.",
  },
  {
    id: 2,
    title: "Corporate Office Fixtures",
    category: "Fixtures",
    image: corporateOfficeFixtures,
    description: "Premium metallic desk nameplates, executive signage, and interior fixtures.",
  },
  {
    id: 3,
    title: "Event & Exhibition Branding",
    category: "Events",
    image: eventExhibitionBranding,
    description: "Grand entrance archways, expo pavilion stalls, and immersive branded zones.",
  },
  {
    id: 4,
    title: "Retail Branding",
    category: "Retail",
    image: retailBranding,
    description: "High-impact retail point-of-sale display fixtures, shop-in-shop, and storefronts.",
  },
  {
    id: 5,
    title: "Retail Display Solutions",
    category: "Retail",
    image: retailDisplaySolutions,
    description: "Custom floor standing merchandising units, metal racks, and POS displays.",
  },
  {
    id: 6,
    title: "Vehicle Branding",
    category: "Transit",
    image: vehicleBranding,
    description: "Full-coverage and spot car wraps crafted from premium weather-resistant vinyl.",
  },
  {
    id: 7,
    title: "Corporate Gift Set",
    category: "Gifting",
    image: corporateGiftSet,
    description: "Executive onboarding kits, customized insulated bottles, diaries, and metal pens.",
  },
  {
    id: 8,
    title: "Van Branding",
    category: "Transit",
    image: vanBranding,
    description: "High-visibility mobile marketing campaign trucks and roadshow vehicle branding.",
  },
  {
    id: 9,
    title: "Custom & 3D Miniature Gifting",
    category: "Gifting",
    image: custom3dMiniatureGifting,
    description: "Edge-lit LED mementos, corporate recognition awards, and laser-engraved 3D trophies.",
  },
  {
    id: 10,
    title: "Acrylic UV Printing",
    category: "UV Printing",
    image: acrylicUvPrinting,
    description: "Ultra-sharp direct UV printing on acrylic sheets with elegant metallic standoffs.",
  },
  {
    id: 11,
    title: "Event & Exhibition Decor",
    category: "Events",
    image: eventExhibitionDecor,
    description: "Themed floral arch backdrops, customized event stages, and celebration decor.",
  },
  {
    id: 12,
    title: "Customize Name Plate",
    category: "Fixtures",
    image: customizeNamePlate,
    description: "Handcrafted resin and laser-embossed metallic house & office nameplates.",
  },
];

const categories = ["All", "Branding", "Retail", "Transit", "Gifting", "Events", "UV Printing"];

export default function OurWorkShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollContainerRef = useRef(null);

  const filteredItems =
    activeCategory === "All"
      ? showcaseItems
      : showcaseItems.filter((item) => item.category === activeCategory);

  // If showing All, duplicate items for seamless loop marquee
  const displayItems =
    activeCategory === "All"
      ? [...showcaseItems, ...showcaseItems]
      : [...filteredItems, ...filteredItems];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A467B_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0A467B] font-semibold text-xs mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FA0091]" />
              Production & Fabrication Gallery
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A467B] uppercase tracking-wide">
              OUR WORK SHOWCASE
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal max-w-xl">
              Explore our turnkey portfolio across corporate identity, retail fixtures, vehicle wraps, and custom gifting.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={handleScrollLeft}
              aria-label="Scroll Left"
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#0A467B] hover:text-white hover:border-[#0A467B] transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleScrollRight}
              aria-label="Scroll Right"
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#0A467B] hover:text-white hover:border-[#0A467B] transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#0A467B] text-white shadow-sm scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Scrollable Track Container */}
      <div className="relative w-full overflow-hidden group/marquee">
        {/* Soft Left & Right Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto no-scrollbar py-4 px-4 sm:px-6 cursor-grab active:cursor-grabbing"
        >
          {/* Continuous Right-to-Left Marquee Track */}
          <div className="animate-marquee-left flex gap-5 items-stretch">
            {displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-52 sm:w-56 shrink-0 bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center relative overflow-hidden group"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A467B] via-sky-400 to-[#FA0091] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Compact Circular Image Frame */}
                <div className="relative mb-3.5 mt-1">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#0A467B] via-sky-400 to-[#FA0091] shadow-md group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-[#0A467B] shadow-xs whitespace-nowrap">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#0A467B] transition-colors duration-200 mb-1.5 line-clamp-1">
                  {item.title}
                </h3>

                {/* Compact Description */}
                <p className="text-[11px] text-slate-500 font-light leading-relaxed mb-4 line-clamp-2 flex-1">
                  {item.description}
                </p>

                {/* Compact Link */}
                <Link
                  to="/contact"
                  className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-[#0A467B] hover:text-[#FA0091] transition-colors group/link"
                >
                  Enquire Now
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Mini CTA Bar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-2xl bg-gradient-to-r from-[#0A467B] via-[#0d4f87] to-[#0A467B] px-6 py-4 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#FA0091] shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-slate-100">
              Need custom branding, retail fixtures, or bulk promotional gifting for your brand?
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-4 py-2 rounded-full bg-gradient-to-r from-[#FA0091] to-rose-500 hover:from-rose-600 hover:to-[#FA0091] text-white font-bold text-xs shadow transition-all hover:scale-105"
          >
            Get A Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
