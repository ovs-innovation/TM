import React from "react";
import { ArrowRight, Sparkles, Shield, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import mug from "../assets/mug.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe,transparent_35%),radial-gradient(circle_at_bottom_right,#ccfbf1,transparent_30%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbcfe8_1px,transparent_1px),linear-gradient(to_bottom,#fbcfe8_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
      <div className="absolute left-[-6rem] top-[-4rem] h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute bottom-[-3rem] right-[-2rem] h-80 w-80 rounded-full bg-fuchsia-200/20 blur-3xl" />
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbcfe8_1px,transparent_1px),linear-gradient(to_bottom,#fbcfe8_1px,transparent_1px)] bg-[size:48px_48px] opacity-80" />

      {/* Blur circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-5">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left max-w-xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium text-pink-600 shadow-sm">
              <Sparkles className="w-4 h-4" />
              India's Smart Product Customizer
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.95] text-slate-900">
              Customize

              <br />

              <span className="bg-gradient-to-r from-pink-700 via-fuchsia-700 to-pink-800 bg-clip-text text-transparent">
                Premium Products
              </span>
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600 max-w-lg">
              Design premium mugs, keychains, bottles, t-shirts and more with our powerful live customizer. High-quality printing with fast delivery and vibrant colors.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/30 hover:scale-105 hover:bg-pink-700 transition"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 hover:border-pink-500 hover:text-pink-600 transition"
              >
                Request Quote
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">200+</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Orders Delivered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">48 Hrs</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Fast Production
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">100%</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Customizable
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:flex justify-center items-center">

            {/* Background Glow */}
            <div className="absolute h-[450px] w-[450px] rounded-full bg-gradient-to-r from-pink-300/30 via-fuchsia-300/20 to-cyan-300/20 blur-3xl"></div>

            {/* Glass Circle */}
            <div className="absolute h-72 w-72 rounded-full border border-white/40 backdrop-blur-2xl"></div>

            <img
              src={mug}
              alt="Custom Mug"
              className="relative w-full max-w-md drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)] hover:scale-105 transition duration-700"
            />
          </div>

        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-5">
              <Sparkles className="text-cyan-600" />
            </div>

            <h3 className="font-bold text-xl text-slate-900 mb-3">
              No Minimum Order
            </h3>

            <p className="text-slate-600">
              Order one product or thousands. Perfect for gifts, businesses and
              events.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-5">
              <Shield className="text-green-600" />
            </div>

            <h3 className="font-bold text-xl text-slate-900 mb-3">
              Premium Print Quality
            </h3>

            <p className="text-slate-600">
              Sharp colors, durable printing and long-lasting finishes on every
              product.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-5">
              <RotateCcw className="text-orange-600" />
            </div>

            <h3 className="font-bold text-xl text-slate-900 mb-3">
              Fast Delivery
            </h3>

            <p className="text-slate-600">
              Quick production and reliable shipping with real-time order
              updates.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}