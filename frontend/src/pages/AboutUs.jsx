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
                    <p className="mx-auto mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
                        Explore our wide range of promotional products designed to enhance your brand presence. From personalized pens and mugs to custom apparel and corporate gifts, our items are perfect for events, marketing campaigns, and employee appreciation. Boost engagement and leave a lasting impression with premium quality customization.
                    </p>
                </div>

                {/* Our Vision & Our Mission - Flex Layout */}
                <div className="mt-16 flex flex-col md:flex-row gap-8 items-stretch">
                    {/* Our Vision */}
                    <div className="flex-1 rounded-[2rem] bg-gradient-to-br from-[#0A467B] via-[#0e5c9f] to-[#1277c6] p-8 text-white shadow-[0_20px_60px_-20px_rgba(10,70,123,0.5)] md:p-10 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
                        <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                        <div>
                            <div className="inline-flex rounded-2xl bg-white/15 p-3.5 backdrop-blur shadow-inner">
                                <Eye size={28} className="text-sky-200" />
                            </div>
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                                OUR VISION
                            </h2>
                            <p className="mt-4 text-base sm:text-lg leading-relaxed text-blue-50 font-normal">
                                “We aim to achieve rapid rise in seamless integration into consumers’ lives, offering seamless connectivity of related services with a breadth of related events, such as content or promotion, customized as per the user’s preferences.”
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-sky-200 pt-4 border-t border-white/15">
                            Seamless Integration & Personalized Experience
                            <ArrowRight size={16} />
                        </div>
                    </div>

                    {/* Our Mission */}
                    <div className="flex-1 rounded-[2rem] bg-gradient-to-br from-[#0A467B] via-[#105691] to-[#0A467B] p-8 text-white shadow-[0_20px_60px_-20px_rgba(10,70,123,0.5)] md:p-10 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
                        <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-pink-500/20 blur-2xl pointer-events-none" />
                        <div>
                            <div className="inline-flex rounded-2xl bg-white/15 p-3.5 backdrop-blur shadow-inner">
                                <Target size={28} className="text-pink-300" />
                            </div>
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                                OUR MISSION
                            </h2>
                            <p className="mt-4 text-base sm:text-lg leading-relaxed text-blue-50 font-normal">
                                “We always strive and excel in the delivery of our services to our clients by being unique, diverse in sectors of business, innovation and in the art of our solutions, and client satisfaction shall remain our goal.”
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-pink-200 pt-4 border-t border-white/15">
                            Client Satisfaction & Solution Innovation
                            <ArrowRight size={16} />
                        </div>
                    </div>
                </div>

                {/* Founder's Message Section - Flex Layout */}
                <div className="mt-24">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#0A467B] shadow-sm backdrop-blur">
                            <Quote size={15} className="text-[#FA0091]" />
                            Leadership & Vision
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                            FOUNDER'S <span className="bg-gradient-to-r from-[#0A467B] via-blue-600 to-[#FA0091] bg-clip-text text-transparent">MESSAGE</span>
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
                            The Vision Behind Tossmart Private Limited
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                        {/* Founder Card 1: Rajan Kumar Awasthi */}
                        <div className="flex-1 rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(10,70,123,0.18)] backdrop-blur transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
                            {/* Decorative background curve */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-sky-100/60 to-transparent rounded-bl-full pointer-events-none" />

                            <div>
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-black text-[#0A467B] uppercase tracking-wide">
                                            FOUNDER'S MESSAGE
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                                            The Vision Behind Tossmart Private Limited
                                        </p>
                                        <div className="flex items-center gap-1.5 mt-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#0A467B]"></span>
                                            <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#FA0091]"></span>
                                        </div>
                                    </div>

                                    {/* Circular Photo */}
                                    <div className="relative shrink-0">
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#0A467B] via-sky-400 to-[#FA0091] shadow-lg">
                                            <img
                                                src={rajanImg}
                                                alt="Rajan Kumar Awasthi"
                                                className="w-full h-full rounded-full object-cover bg-white"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                                    <p>
                                        <strong className="text-slate-900">At Tossmart Private Limited,</strong> we believe creativity is more than design it is experience. Every project we handle is crafted with the intention of making your brand stand out with clarity, color, and purpose.
                                    </p>
                                    <p className="text-slate-600 font-light">
                                        Strong operations are the backbone of every successful company. At Tossmart, we ensure seamless execution from production to delivery with a focus on quality, precision, and time commitment. Whether it's printing, branding, gifting, or fixtures, our team works tirelessly to provide reliable service and a smooth experience for every client. Your trust motivates us to raise our standards every single day.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-[#0A467B]">
                                        Rajan Kumar Awasthi
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                                        Co-Founder & Operation Head
                                    </p>
                                </div>
                                <Quote className="text-[#0A467B]/20 w-8 h-8" />
                            </div>
                        </div>

                        {/* Founder Card 2: Shivesh Dixit */}
                        <div className="flex-1 rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(250,0,145,0.18)] backdrop-blur transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
                            {/* Decorative background curve */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-pink-100/60 to-transparent rounded-bl-full pointer-events-none" />

                            <div>
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-black text-[#0A467B] uppercase tracking-wide">
                                            FOUNDER'S MESSAGE
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                                            The Vision Behind Tossmart Private Limited
                                        </p>
                                        <div className="flex items-center gap-1.5 mt-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#0A467B]"></span>
                                            <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#FA0091]"></span>
                                        </div>
                                    </div>

                                    {/* Circular Photo */}
                                    <div className="relative shrink-0">
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#0A467B] via-pink-400 to-[#FA0091] shadow-lg">
                                            <img
                                                src={shiveshImg}
                                                alt="Shivesh Dixit"
                                                className="w-full h-full rounded-full object-cover bg-white"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                                    <p>
                                        <strong className="text-slate-900">At Tossmart Private Limited,</strong> our mission is simple to help brands communicate better. In today's competitive world, printing, branding, and gifting are not just services...they are powerful tools that connect businesses with their customers.
                                    </p>
                                    <p className="text-slate-600 font-light">
                                        My role in Sales & Marketing is to understand our clients' vision and translate it into solutions that deliver real results. Whether it's store branding, corporate gifts, UV printing, or event materials, we focus on creating value, building relationships, and ensuring long-term satisfaction.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-[#0A467B]">
                                        Shivesh Dixit
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                                        Co-Founder & Head of Sales & Marketing
                                    </p>
                                </div>
                                <Quote className="text-[#FA0091]/20 w-8 h-8" />
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