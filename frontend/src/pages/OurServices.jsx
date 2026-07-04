import { Sparkles, Palette, Briefcase, Gift, Shirt, Coffee, Package, ArrowRight, CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function OurServices() {
    const services = [
        {
            icon: <Coffee size={36} />,
            title: "Custom Mugs",
            desc: "Premium ceramic and travel mugs printed with vibrant, long-lasting designs for gifts, events, and businesses.",
        },
        {
            icon: <Gift size={36} />,
            title: "Personalized Gifts",
            desc: "Create memorable gifts with names, photos, logos, or unique artwork for every special occasion.",
        },
        {
            icon: <Shirt size={36} />,
            title: "Custom Apparel",
            desc: "High-quality t-shirts, hoodies, caps, and apparel printed using advanced techniques.",
        },
        {
            icon: <Briefcase size={36} />,
            title: "Corporate Branding",
            desc: "Promotional products, office merchandise, employee welcome kits, and corporate gifts.",
        },
        {
            icon: <Palette size={36} />,
            title: "Product Customization",
            desc: "Upload your own artwork and preview products before placing your order.",
        },
        {
            icon: <Package size={36} />,
            title: "Bulk Printing",
            desc: "Affordable bulk orders for schools, events, startups, and businesses with quick turnaround.",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white">

            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbcfe8_1px,transparent_1px),linear-gradient(to_bottom,#fbcfe8_1px,transparent_1px)] bg-[size:48px_48px] opacity-80" />

            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-200 blur-3xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-200 blur-3xl opacity-60"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-24">

                <div className="text-center max-w-3xl mx-auto">

                    <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-medium mb-6">
                        <Sparkles size={18} />
                        What We Offer
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                        Our
                        <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-600 leading-8">
                        <span className="text-black font-bold">T</span><span className="text-pink-700 font-bold">M</span> helps individuals and businesses transform ordinary
                        products into personalized masterpieces through premium-quality
                        printing and customization.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className="bg-white border border-pink-100 rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        >
                            <Link to="/contact">
                                <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-6">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    {service.desc}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-28">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                        How It Works
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            "Choose Product",
                            "Upload Design",
                            "Live Preview",
                            "Delivered"
                        ].map((step, i) => (

                            <div key={i} className="text-center">

                                <div className="w-15 h-15 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    {i + 1}
                                </div>

                                <h3 className="font-bold text-xl mb-2">
                                    {step}
                                </h3>

                                <p className="text-gray-600">
                                    Simple, quick, and hassle-free ordering experience.
                                </p>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Industries */}

                <div className="mt-28">

                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                        Industries We Serve
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Corporate Companies",
                            "Schools & Colleges",
                            "Event Organizers",
                            "Small Businesses",
                            "Online Creators",
                            "Gift Shops",
                        ].map((item) => (

                            <div
                                key={item}
                                className="bg-white rounded-2xl border border-pink-100 p-6 shadow hover:shadow-xl transition flex items-center gap-3"
                            >
                                <CheckCircle className="text-pink-600" />
                                <span className="font-semibold text-gray-700">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose */}

                <div className="mt-14 sm:mt-20 lg:mt-28 rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-14 text-white shadow-xl">

                    <h2 className="mb-8 text-center text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        Why Choose TM?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8">

                        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 text-center transition duration-300 hover:bg-white/15 hover:-translate-y-1">

                            <h3 className="mb-1 text-lg sm:text-xl lg:text-2xl font-semibold">
                                Premium Quality
                            </h3>

                            <p className="text-sm sm:text-base leading-6 text-pink-100">
                                HD printing with durable materials and vibrant colors that make every custom product stand out.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-center transition duration-300 hover:bg-white/15 hover:-translate-y-1">

                            <h3 className="mb-2 text-lg sm:text-xl lg:text-2xl font-semibold">
                                Fast Delivery
                            </h3>

                            <p className="text-sm sm:text-base leading-6 text-pink-100">
                                Nationwide shipping with secure packaging and quick turnaround for every order.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-center transition duration-300 hover:bg-white/15 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">

                            <h3 className="mb-2 text-lg sm:text-xl lg:text-2xl font-semibold">
                                Affordable Pricing
                            </h3>

                            <p className="text-sm sm:text-base leading-6 text-pink-100">
                                Competitive pricing for personalized gifts, single purchases, and bulk corporate orders.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="mt-24 text-center">

                    <h2 className="text-5xl font-bold text-gray-900">
                        Ready To Create Something Unique?
                    </h2>

                    <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
                        Start designing your personalized products today and let us bring
                        your creativity to life with premium printing.
                    </p>
                </div>
            </div>

            <Footer />
        </section>
    );
}