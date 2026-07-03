import React, { useState } from 'react';
import { Coffee, Key, ChevronRight, Award } from 'lucide-react';

const products = [
  {
    id: 'ceramic-mug',
    category: 'drinkware',
    name: 'Classic Ceramic Mug',
    size: '11 oz (325ml)',
    material: 'Premium Grade A Ceramic',
    desc: 'Standard glossy white mug designed with a heat-receptive coating. Delivers incredibly vibrant photographic wraps.',
    printMethod: 'Dye Sublimation (Full Wrap)',
    price: '$12.99',
    specs: 'Microwave & Dishwasher Safe',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    type: 'Mug',
  },
  {
    id: 'travel-tumbler',
    category: 'drinkware',
    name: 'Explorer Travel Tumbler',
    size: '20 oz (590ml)',
    material: 'Double-wall Stainless Steel',
    desc: 'Vacuum insulated flask with matte powder-coated finish. Perfect for laser engraving to reveal bright metallic logos.',
    printMethod: 'Laser Engraving / UV Print',
    price: '$24.99',
    specs: 'Keeps Hot 12h / Cold 24h',
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=600&q=80',
    type: 'Tumbler',
  },
  {
    id: 'luxe-ceramic-mug',
    category: 'drinkware',
    name: 'Matte Obsidian Mug',
    size: '15 oz (440ml)',
    material: 'Heavy Ceramic',
    desc: 'Stunning oversized mug with a textured matte black exterior and a glossy colored interior.',
    printMethod: 'UV Laser Engraving',
    price: '$16.99',
    specs: 'Dishwasher Safe',
    image: 'https://images.unsplash.com/photo-1539223963953-f0134d479c72?auto=format&fit=crop&w=600&q=80',
    type: 'Mug',
  },
  {
    id: 'acrylic-keychain',
    category: 'keychains',
    name: 'Crystal Acrylic Keytag',
    size: '2.5" x 1.5"',
    material: 'High-Impact Acrylic (4mm)',
    desc: 'Ultra-clear acrylic block with flame-polished edges. Multi-layer UV printing offers gorgeous double-sided depth.',
    printMethod: 'Vibrant UV Printing',
    price: '$4.99',
    specs: 'Dual-side Print / Clear Border',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80',
    type: 'Keychain',
  },
  {
    id: 'leather-keychain',
    category: 'keychains',
    name: 'Artisan Leather Tag',
    size: '3.2" x 0.8"',
    material: 'Full-Grain Vegetable Leather',
    desc: 'Hand-cut oil-tanned leather tags with a solid brass screw post. Finished with elegant embossed lettering.',
    printMethod: 'Laser Branding / Debossing',
    price: '$8.99',
    specs: 'Solid Brass Hardware',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80',
    type: 'Keychain',
  },
  {
    id: 'metal-keychain',
    category: 'keychains',
    name: 'Brushed Alloy Keyring',
    size: '2.0" x 1.0"',
    material: 'Stainless Steel / Zinc Alloy',
    desc: 'Sleek, minimalist metal tags with a matte bead-blasted surface. Delivers highly-detailed permanent contrast marks.',
    printMethod: 'Fiber Laser Marking',
    price: '$6.49',
    specs: 'Scratch & Corrosion Resistant',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    type: 'Keychain',
  },
];

export default function ProductCatalog({ onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all' ? products : products.filter(p => p.category === activeTab);

  const handleCustomize = (product) => {
    if (onSelectProduct) onSelectProduct(product.id);
    document.getElementById('customizer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tabs = [
    { key: 'all', label: 'All Items' },
    { key: 'drinkware', label: 'Drinkware' },
    { key: 'keychains', label: 'Keychains' },
  ];

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-pink-800 mb-4">
            CUSTOMISED PRODUCTS
          </h2>
          <p className="text-black font-light leading-relaxed">
            Personalize Your Space with Customized Items: Explore Unique Customization Options
          </p>

          {/* Tab filter */}
          <div className="flex justify-center gap-2 mt-8 p-1 bg-white border border-slate-200 rounded-full max-w-xs mx-auto shadow-sm">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden group bg-slate-100">
                <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-wider shadow-sm">
                  {product.category === 'drinkware' ? <Coffee className="h-3 w-3" /> : <Key className="h-3 w-3" />}
                  {product.type}
                </span>
                <span className="absolute top-3 right-3 z-10 text-sm font-bold text-white bg-brand-indigo px-3 py-1 rounded-lg shadow-sm">
                  {product.price}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-800 mb-0.5">{product.name}</h3>
                <p className="text-xs text-slate-400 font-mono mb-3">
                  {product.material} &bull; {product.size}
                </p>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-4 flex-1">
                  {product.desc}
                </p>

                <div className="space-y-1.5 border-t border-slate-100 pt-4 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Optimum Print:</span>
                    <span className="font-semibold text-brand-teal">{product.printMethod}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Durability:</span>
                    <span className="font-medium text-amber-500 flex items-center gap-1">
                      <Award className="h-3 w-3" /> {product.specs}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCustomize(product)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-pink-800 to-pink-600 hover:opacity-90 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  Configure & Customize <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
