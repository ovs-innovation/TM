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
                to="/contact"
                className=" group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/40 active:scale-95"
              >
                {/* Animated Glow */}
                <span
                  className=" absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                {/* Text */}
                <span className="relative z-10">
                  Request Quote
                </span>

                {/* Animated Arrow */}
                <ArrowRight
                  size={20}
                  className=" relative z-10 ml-2 transition-all duration-300 group-hover:translate-x-2"
                />
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
          <div className="relative hidden lg:flex items-center justify-center">

            {/* Animated Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-r from-pink-400/20 via-fuchsia-400/20 to-cyan-300/20 blur-3xl animate-glow"></div>

            {/* Rotating Ring */}

            <div className="absolute h-[430px] w-[430px] rounded-full border border-pink-200/40 border-dashed animate-rotate-slow"></div>

            {/* Glass Circle */}

            <div className="absolute h-80 w-80 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl"></div>

            {/* Floating Dots */}

            <div className="absolute top-10 left-16 h-4 w-4 rounded-full bg-pink-400 animate-bounce"></div>

            <div className="absolute top-32 right-10 h-5 w-5 rounded-full bg-cyan-400 animate-pulse"></div>

            {/* Image */}

            <img
              src={mug}
              alt="Custom Mug"
              className=" relative z-20 w-full max-w-md animate-float drop-shadow-[0_50px_90px_rgba(0,0,0,0.25)] transition-all duration-700 hover:scale-110 hover:rotate-2 cursor-pointer"
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