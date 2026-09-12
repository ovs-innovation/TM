import React from 'react';
import { Layers, Mail, Phone, MapPin, Globe, AtSign, Share2 } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-100 border-t border-slate-200 py-16 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-indigo/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand Info */}
          <div className="md:col-span-1">
            <img src={logo} className='w-[60px] h-[60px]' />
            <p className="text-sm text-slate-600 font-light mb-6 leading-relaxed">
              Precision-pressed designs on ceramic drinkware and artisan keychains. We build lasting custom impressions.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 bg-white hover:bg-brand-indigo/10 text-slate-400 hover:text-pink-800 rounded-lg border border-slate-200 transition-all duration-200">
                <AtSign className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white hover:bg-brand-indigo/10 text-slate-400 hover:text-pink-800 rounded-lg border border-slate-200 transition-all duration-200">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white hover:bg-brand-indigo/10 text-slate-400 hover:text-pink-800 rounded-lg border border-slate-200 transition-all duration-200">
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-pink-700 tracking-wider uppercase mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map(({ name, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-slate-600 hover:text-pink-800 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-medium text-pink-700 tracking-wider uppercase mb-4">Contact Studio</h4>
            <ul className="space-y-3 text-sm text-slate-600 font-light">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-pink-700 shrink-0" />
                <a href="mailto:support@tossmart.com" className="hover:text-pink-800 transition-colors">support@tossmart.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-pink-700 shrink-0" />
                <a href="tel:9999119402" className="hover:text-pink-800 transition-colors">+91 9999119402</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-pink-700 shrink-0 mt-0.5" />
                <span>C 61, Sector 10 Noida</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold text-pink-700 tracking-wider uppercase mb-4">Subscribe to Offers</h4>
            <p className="text-sm text-slate-500 font-light mb-4 leading-relaxed">
              Get notified about seasonal volume discounts and new printing options.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email"
                className="bg-white border border-slate-200 text-slate-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-teal w-full font-light placeholder:text-slate-400"
              />
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-800 font-light">
          <p>© {currentYear} ChromaCraft Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
