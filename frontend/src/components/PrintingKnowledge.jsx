import React from "react";
import {
  Droplet,
  Flame,
  Sun,
  Layers,
  Printer,
  Brush,
  CheckCircle,
  XCircle,
} from "lucide-react";

const technologies = [
  {
    id: "vinyl",
    name: "Vinyl Printing",
    tagline: "Precision-cut heat transfer graphics",
    icon: Layers,
    accent: "bg-emerald-50 text-emerald-600",
    description:
      "Vinyl printing involves cutting designs from colored heat-transfer vinyl and applying them to fabrics or products using high heat and pressure. It produces bold, vibrant graphics with excellent durability.",
    pro: [
      "Bright, solid colors",
      "Excellent durability",
      "Ideal for names & numbers",
      "Suitable for small production runs",
    ],
    con: [
      "Not suitable for highly detailed artwork",
      "Limited color gradients",
      "Can feel slightly raised on fabric",
    ],
    stats: {
      durability: "Excellent",
      resolution: "Vector Precision",
      color: "Solid Colors",
      speed: "2–4 min",
    },
  },
  {
    id: "dtf",
    name: "DTF Printing",
    tagline: "Direct-to-Film transfer technology",
    icon: Printer,
    accent: "bg-violet-50 text-violet-600",
    description:
      "DTF printing transfers full-color artwork from a printed PET film onto fabric using adhesive powder and a heat press. It works on cotton, polyester, blends, and many other textiles.",
    pro: [
      "Prints on almost any fabric",
      "Excellent color vibrancy",
      "Soft hand feel",
      "Suitable for complex artwork",
    ],
    con: [
      "Requires heat pressing",
      "Not as breathable as DTG",
      "Film preparation required",
    ],
    stats: {
      durability: "High",
      resolution: "1440 DPI",
      color: "Full Color",
      speed: "3–5 min",
    },
  },
  {
    id: "screen",
    name: "Screen Printing",
    tagline: "Classic high-volume printing method",
    icon: Brush,
    accent: "bg-rose-50 text-rose-600",
    description:
      "Screen printing pushes ink through a mesh stencil onto the product. It is the preferred method for bulk production due to its vibrant colors, durability, and cost efficiency.",
    pro: [
      "Best for bulk orders",
      "Rich, vibrant colors",
      "Long-lasting prints",
      "Cost-effective at scale",
    ],
    con: [
      "Expensive for small quantities",
      "Each color needs a separate screen",
      "Longer setup time",
    ],
    stats: {
      durability: "Excellent",
      resolution: "High",
      color: "Spot Colors",
      speed: "Very Fast (Bulk)",
    },
  },
  {
    id: "sublimation",
    name: "Dye Sublimation",
    tagline: "Deep molecular ink fusion for full-color wraps",
    icon: Droplet,
    accent: "bg-cyan-50 text-cyan-600",
    description:
      "Dye sublimation uses heat to permanently infuse ink into the coating, producing vibrant edge-to-edge prints with zero surface texture.",
    pro: [
      "Photo-quality printing",
      "Dishwasher safe",
      "Wrap-around printing",
      "Long-lasting colors",
    ],
    con: [
      "Only for coated white products",
      "Cannot print white ink",
      "Limited material compatibility",
    ],
    stats: {
      durability: "Excellent",
      resolution: "300+ DPI",
      color: "Full Color",
      speed: "4–5 min",
    },
  },
  {
    id: "laser",
    name: "Laser Engraving",
    tagline: "Permanent precision engraving",
    icon: Flame,
    accent: "bg-amber-50 text-amber-600",
    description:
      "Fiber lasers permanently engrave the surface by removing material without using ink.",
    pro: [
      "Permanent marking",
      "Scratch proof",
      "Luxury finish",
      "High precision",
    ],
    con: [
      "Single color only",
      "No gradients",
      "Limited artwork styles",
    ],
    stats: {
      durability: "Lifetime",
      resolution: "Very High",
      color: "Monochrome",
      speed: "1–2 min",
    },
  },
  {
    id: "uv",
    name: "UV Printing",
    tagline: "Raised full-color UV printing",
    icon: Sun,
    accent: "bg-indigo-50 text-indigo-600",
    description:
      "UV ink cures instantly using ultraviolet light, allowing vivid printing on almost every material.",
    pro: [
      "Print on almost anything",
      "White ink support",
      "Raised texture",
      "Excellent color accuracy",
    ],
    con: [
      "Can chip with heavy abrasion",
      "Hand wash recommended",
      "Raised surface",
    ],
    stats: {
      durability: "High",
      resolution: "1440 DPI",
      color: "Full Color",
      speed: "2–3 min",
    },
  },
];

export default function PrintingTechnologyCards() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-slate-900">
            Printing Technologies
          </h2>

          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            Choose the ideal printing technology based on durability,
            appearance, material compatibility and finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300">

                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${tech.accent}`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {tech.name}
                  </h3>

                  <p className="text-indigo-600 font-medium text-sm mt-1">
                    {tech.tagline}
                  </p>

                  <p className="text-slate-600 mt-3 leading-relaxed">
                    {tech.description}
                  </p>

                  <div className="mt-4">

                    <h4 className="flex items-center gap-2 text-emerald-600 font-semibold mb-2">
                      <CheckCircle size={18} />
                      Advantages
                    </h4>

                    <ul className="space-y-1">
                      {tech.pro.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-slate-600 flex gap-2"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">

                    <h4 className="flex items-center gap-2 text-red-500 font-semibold mb-3">
                      <XCircle size={18} />
                      Limitations
                    </h4>

                    <ul className="space-y-1">
                      {tech.con.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-slate-600 flex gap-2"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>


                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
