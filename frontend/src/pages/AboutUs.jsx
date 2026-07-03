import {
    Sparkles,
    Award,
    Users,
    Target,
    ShieldCheck,
    Truck,
    ArrowRight,
} from "lucide-react";
import Footer from "../components/Footer";

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
            <div className="absolute left-[-6rem] top-[-4rem] h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
            <div className="absolute bottom-[-3rem] right-[-2rem] h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 lg:px-10 lg:py-28">
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
                        Explore our wide range of promotional products designed to enhance your brand presence. From personalized pens and mugs to custom apparel and corporate gifts, our items are perfect for events, marketing campaigns, and employee appreciation. Boost engageme
                    </p>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[2rem] border border-pink-100 bg-white/80 p-8 shadow-[0_20px_60px_-20px_rgba(244,114,182,0.35)] backdrop-blur md:p-10">
                        <div className="inline-flex rounded-2xl bg-pink-100 p-3 text-pink-600">
                            <Target size={24} />
                        </div>
                        <h2 className="mt-6 text-3xl font-semibold text-slate-900">Our Mission</h2>
                        <p className="mt-4 text-lg leading-8 text-slate-600">
                            We make premium customization feel effortless by blending innovation, craftsmanship, and thoughtful service into every order.
                        </p>
                        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-pink-600">
                            Crafted for brands, creators, and every special moment
                            <ArrowRight size={16} />
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-gradient-to-br from-pink-600 via-rose-500 to-fuchsia-600 p-8 text-white shadow-[0_20px_60px_-20px_rgba(219,39,119,0.6)] md:p-10">
                        <div className="inline-flex rounded-2xl bg-white/20 p-3">
                            <Award size={24} />
                        </div>
                        <h2 className="mt-6 text-3xl font-semibold">Our Vision</h2>
                        <p className="mt-4 text-lg leading-8 text-pink-50">
                            We aim to become a go-to destination for beautifully personalized products that leave a lasting impression.
                        </p>
                        <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-pink-50">
                            Designed to elevate gifts, campaigns, and everyday essentials with timeless style.
                        </div>
                    </div>
                </div>

                <div className="mt-20">
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