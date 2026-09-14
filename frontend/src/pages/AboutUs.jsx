import {
    Sparkles,
    Award,
    Users,
    Target,
    ShieldCheck,
    Truck,
    ArrowRight,
    Eye,
    Quote,
} from "lucide-react";
import Footer from "../components/Footer";
import rajanImg from "../assets/rajan.png";
import shiveshImg from "../assets/shivesh.png";

const values = [
    {
        icon: ShieldCheck,
        title: "Premium Quality",
        text: "High-definition printing with durable finishes and vibrant colors that last.",
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        text: "Reliable shipping and secure packaging across India for every order.",
    },
    {
        icon: Users,
        title: "Happy Customers",
        text: "Thousands of clients trust us for thoughtful gifts and custom merchandise.",
    },
    {
        icon: Sparkles,
        title: "Creative Designs",
        text: "Endless customization options for celebrations, branding, and personal style.",
    },
];

const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "50+", label: "Products" },
    { value: "4.9★", label: "Customer Rating" },
    { value: "24/7", label: "Support" },
];

export default function About() {
    return (
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fffdfd_0%,#fdf2f8_45%,#fff7ed_100%)] pt-24 md:pt-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbcfe8_1px,transparent_1px),linear-gradient(to_bottom,#fbcfe8_1px,transparent_1px)] bg-[size:48px_48px] opacity-80" />
            <div className="absolute left-[-6rem] top-[-4rem] h-72 w-72 rounded-full bg-pink-200/40 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-3rem] right-[-2rem] h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-10 lg:py-24">
                {/* Hero Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-medium text-pink-600 shadow-sm backdrop-blur">
                        <Sparkles size={16} />
                        About Our Company
                    </span>
                    <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        We create
                        <span className="mt-2 block bg-gradient-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
                            Memorable, Personalized
                        </span>
                        products
                    </h1>
                    <p className="mx-auto mt-6 text-md leading-8 text-slate-600 sm:text-md">
                        Explore our wide range of promotional products designed to enhance your brand presence. From personalized pens and mugs to custom apparel and corporate gifts, our items are perfect for events, marketing campaigns, and employee appreciation. Boost engagement and leave a lasting impression with premium quality customization.
                    </p>
                </div>

                {/* Our Vision & Our Mission - Compact & Modern */}
                <div className="mt-10 sm:mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
                    {/* Our Vision */}
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A467B] to-sky-400" />
                        <div className="absolute top-0 right-0 w-36 h-36 bg-sky-100/30 rounded-full blur-2xl pointer-events-none" />

                        <div>
                            <div className="flex items-center justify-between mb-3.5">
                                <div className="inline-flex rounded-xl bg-sky-50 border border-sky-100 p-2 text-[#0A467B] shadow-xs">
                                    <Eye size={18} />
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A467B] bg-sky-50/90 border border-sky-200/60 px-2.5 py-0.5 rounded-full">
                                    Future Direction
                                </span>
                            </div>

                            <h3 className="text-base sm:text-lg font-black tracking-wide text-slate-900 mb-2">
                                OUR VISION
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                “We aim to achieve rapid rise in seamless integration into consumers’ lives, offering seamless connectivity of related services with a breadth of related events, such as content or promotion, customized as per the user’s preferences.”
                            </p>
                        </div>

                        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A467B] group-hover:text-sky-600 transition-colors">
                            <span>Seamless Integration & Experience</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>

                    {/* Our Mission */}
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FA0091] to-rose-400" />
                        <div className="absolute top-0 right-0 w-36 h-36 bg-pink-100/30 rounded-full blur-2xl pointer-events-none" />

                        <div>
                            <div className="flex items-center justify-between mb-3.5">
                                <div className="inline-flex rounded-xl bg-pink-50 border border-pink-100 p-2 text-[#FA0091] shadow-xs">
                                    <Target size={18} />
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FA0091] bg-pink-50/90 border border-pink-200/60 px-2.5 py-0.5 rounded-full">
                                    Core Purpose
                                </span>
                            </div>

                            <h3 className="text-base sm:text-lg font-black tracking-wide text-slate-900 mb-2">
                                OUR MISSION
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                “We always strive and excel in the delivery of our services to our clients by being unique, diverse in sectors of business, innovation and in the art of our solutions, and client satisfaction shall remain our goal.”
                            </p>
                        </div>

                        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#FA0091] group-hover:text-pink-600 transition-colors">
                            <span>Client Satisfaction & Innovation</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Founder's Message Section - Compact & Modern */}
                <div className="mt-14 sm:mt-16">
                    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-semibold text-[#0A467B] shadow-xs backdrop-blur">
                            <Quote size={13} className="text-[#FA0091]" />
                            Leadership & Vision
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                            FOUNDER'S <span className="bg-gradient-to-r from-[#0A467B] via-blue-600 to-[#FA0091] bg-clip-text text-transparent">MESSAGE</span>
                        </h2>
                        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 font-medium">
                            The Vision Behind Tossmart Private Limited
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
                        {/* Founder Card 1: Rajan Kumar Awasthi */}
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-sky-100/50 to-transparent rounded-bl-full pointer-events-none" />

                            <div>
                                <div className="flex items-center justify-between gap-3 mb-4">
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0A467B]"></span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FA0091]"></span>
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 ml-1">Leadership</span>
                                        </div>
                                        <h3 className="text-sm sm:text-base font-black text-[#0A467B] uppercase tracking-wide">
                                            FOUNDER'S MESSAGE
                                        </h3>
                                        <p className="text-xs text-slate-500 font-medium truncate">
                                            Operations & Execution
                                        </p>
                                    </div>

                                    {/* Circular Photo */}
                                    <div className="relative shrink-0">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#0A467B] via-sky-400 to-[#FA0091] shadow-md">
                                            <img
                                                src={rajanImg}
                                                alt="Rajan Kumar Awasthi"
                                                className="w-full h-full rounded-full object-cover bg-white"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    <p>
                                        <strong className="text-slate-900 font-semibold">At Tossmart Private Limited,</strong> we believe creativity is more than design it is experience. Every project we handle is crafted with the intention of making your brand stand out with clarity, color, and purpose.
                                    </p>
                                    <p>
                                        Strong operations are the backbone of every successful company. At Tossmart, we ensure seamless execution from production to delivery with a focus on quality, precision, and time commitment. Whether it's printing, branding, gifting, or fixtures, our team works tirelessly to provide reliable service and a smooth experience for every client.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm sm:text-base font-bold text-[#0A467B]">
                                        Rajan Kumar Awasthi
                                    </h4>
                                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                                        Co-Founder & Operation Head
                                    </p>
                                </div>
                                <Quote className="text-[#0A467B]/25 w-5 h-5" />
                            </div>
                        </div>

                        {/* Founder Card 2: Shivesh Dixit */}
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-pink-100/50 to-transparent rounded-bl-full pointer-events-none" />

                            <div>
                                <div className="flex items-center justify-between gap-3 mb-4">
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0A467B]"></span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FA0091]"></span>
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 ml-1">Leadership</span>
                                        </div>
                                        <h3 className="text-sm sm:text-base font-black text-[#0A467B] uppercase tracking-wide">
                                            FOUNDER'S MESSAGE
                                        </h3>
                                        <p className="text-xs text-slate-500 font-medium truncate">
                                            Sales, Growth & Strategy
                                        </p>
                                    </div>

                                    {/* Circular Photo */}
                                    <div className="relative shrink-0">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#0A467B] via-pink-400 to-[#FA0091] shadow-lg">
                                            <img
                                                src={shiveshImg}
                                                alt="Shivesh Dixit"
                                                className="w-full h-full rounded-full object-cover bg-white"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    <p>
                                        <strong className="text-slate-900 font-semibold">At Tossmart Private Limited,</strong> our mission is simple to help brands communicate better. In today's competitive world, printing, branding, and gifting are not just services...they are powerful tools that connect businesses with their customers.
                                    </p>
                                    <p>
                                        My role in Sales & Marketing is to understand our clients' vision and translate it into solutions that deliver real results. Whether it's store branding, corporate gifts, UV printing, or event materials, we focus on creating value, building relationships, and ensuring long-term satisfaction.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm sm:text-base font-bold text-[#0A467B]">
                                        Shivesh Dixit
                                    </h4>
                                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                                        Co-Founder & Head of Sales & Marketing
                                    </p>
                                </div>
                                <Quote className="text-[#FA0091]/25 w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mt-24">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Why Choose Us</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                            Every detail is thoughtfully handled so your ideas arrive beautifully finished.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {values.map(({ icon: Icon, title, text }) => (
                            <div
                                key={title}
                                className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="inline-flex rounded-2xl bg-pink-50 p-3 text-pink-600">
                                    <Icon size={22} />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 gap-4 rounded-[2rem] border border-pink-100 bg-white/80 p-4 shadow-sm sm:p-6 lg:grid-cols-4 lg:p-8">
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl bg-slate-50 p-4 text-center sm:p-5"
                        >
                            <div className="text-2xl font-semibold text-pink-600 sm:text-3xl lg:text-4xl">
                                {item.value}
                            </div>

                            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </section>
    );
}