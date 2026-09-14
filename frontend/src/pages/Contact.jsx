import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Sparkles,
} from "lucide-react";
import Footer from "../components/Footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        productName: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setStatus("");

        try {
            const response = await fetch("http://localhost:8000/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    productName: formData.productName,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus("✅ Enquiry sent successfully!");

                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    productName: "",
                    message: "",
                });
            } else {
                setStatus(data.message || "Failed to send enquiry.");
            }
        } catch (error) {
            console.error(error);
            setStatus("❌ Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative min-h-screen bg-white">
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16">
                {/* Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbcfe8_1px,transparent_1px),linear-gradient(to_bottom,#fbcfe8_1px,transparent_1px)] bg-[size:40px_40px] opacity-70 pointer-events-none" />

                <div className="absolute top-16 -left-10 w-60 h-60 rounded-full bg-pink-200 blur-3xl opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-10 right-0 w-72 h-72 rounded-full bg-purple-200 blur-3xl opacity-50 pointer-events-none"></div>

                <div className="relative z-10">

                    {/* Heading */}
                    <div className="text-center max-w-xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Contact{" "}
                            <span className="inline-flex tracking-tight">
                                <span className="text-[#0A467B]">T</span>
                                <span className="text-[#F0108C]">M</span>
                            </span>
                        </h1>

                        <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                            Have questions about our products or need a custom quote? We're here to help.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-8 sm:mt-10 items-start">

                        {/* Left Side: Contact Details */}
                        <div className="lg:col-span-5 space-y-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-pink-600 mb-1">
                                    We'd Love To Hear From You
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    <span className="font-semibold"><span className="text-[#0A467B]">T</span><span className="text-[#F0108C]">M</span></span> specializes in premium custom printing for mugs,
                                    keychains, bottles, gifts, and corporate merchandise.
                                    Delivering exceptional quality and outstanding customer service.
                                </p>
                            </div>

                            <div className="space-y-2.5">
                                <div className="flex items-center gap-3 rounded-xl bg-white border border-pink-100 shadow-xs p-3 hover:border-pink-200 hover:shadow-sm transition-all">
                                    <div className="bg-pink-50 p-2.5 rounded-lg text-pink-600 shrink-0">
                                        <Phone size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-xs font-semibold text-gray-500">Phone</h3>
                                        <a href="tel:9999119402" className="text-xs sm:text-sm font-medium text-gray-800 hover:text-pink-600 transition truncate block">
                                            +91 9999119402
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-xl bg-white border border-pink-100 shadow-xs p-3 hover:border-pink-200 hover:shadow-sm transition-all">
                                    <div className="bg-pink-50 p-2.5 rounded-lg text-pink-600 shrink-0">
                                        <Mail size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-xs font-semibold text-gray-500">Email</h3>
                                        <a href="mailto:support@tossmart.com" className="text-xs sm:text-sm font-medium text-gray-800 hover:text-pink-600 transition truncate block">
                                            support@tossmart.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-xl bg-white border border-pink-100 shadow-xs p-3 hover:border-pink-200 hover:shadow-sm transition-all">
                                    <div className="bg-pink-50 p-2.5 rounded-lg text-pink-600 shrink-0">
                                        <MapPin size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-xs font-semibold text-gray-500">Address</h3>
                                        <p className="text-xs sm:text-sm font-medium text-gray-800">
                                            C 61, Sector 10 Noida
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-xl bg-white border border-pink-100 shadow-xs p-3 hover:border-pink-200 hover:shadow-sm transition-all">
                                    <div className="bg-pink-50 p-2.5 rounded-lg text-pink-600 shrink-0">
                                        <Clock size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-xs font-semibold text-gray-500">Working Hours</h3>
                                        <p className="text-xs sm:text-sm font-medium text-gray-800">
                                            Monday - Saturday: 9:00 AM - 7:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="lg:col-span-7 bg-white rounded-2xl border border-pink-100 shadow-md p-4 sm:p-6">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                                Send an Enquiry
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-3.5">
                                {/* Name & Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="mb-1 block text-xs font-semibold text-gray-700">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full rounded-lg border border-gray-200 bg-gray-50/40 px-3 py-2 text-xs sm:text-sm outline-none transition-all duration-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-xs font-semibold text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full rounded-lg border border-gray-200 bg-gray-50/40 px-3 py-2 text-xs sm:text-sm outline-none transition-all duration-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone & Product */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="mb-1 block text-xs font-semibold text-gray-700">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                            className="w-full rounded-lg border border-gray-200 bg-gray-50/40 px-3 py-2 text-xs sm:text-sm outline-none transition-all duration-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-xs font-semibold text-gray-700">
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            name="productName"
                                            value={formData.productName}
                                            onChange={handleChange}
                                            placeholder="Mug, Keychain, Bottle..."
                                            className="w-full rounded-lg border border-gray-200 bg-gray-50/40 px-3 py-2 text-xs sm:text-sm outline-none transition-all duration-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="mb-1 block text-xs font-semibold text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        rows={3}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your customization requirements..."
                                        className="w-full rounded-lg border border-gray-200 bg-gray-50/40 px-3 py-2 text-xs sm:text-sm resize-none outline-none transition-all duration-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                                        required
                                    />
                                </div>

                                {/* Status */}
                                {status && (
                                    <div className="rounded-lg border border-pink-200 bg-pink-50 px-3 py-2 text-xs text-pink-700">
                                        {status}
                                    </div>
                                )}

                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-pink-200 hover:shadow-md hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    <Send
                                        size={15}
                                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                                    />
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Bottom CTA Banner */}
                    <div className="relative mt-8 sm:mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0A467B] via-[#0b3c66] to-[#FA0091] px-4 py-6 sm:px-6 sm:py-7 text-center text-white shadow-xl border border-white/10">
                        <div className="hidden sm:block absolute -top-12 -left-12 h-32 w-32 rounded-full bg-white/15 blur-2xl pointer-events-none"></div>
                        <div className="hidden sm:block absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-pink-400/20 blur-2xl pointer-events-none"></div>

                        <div className="relative z-10 max-w-xl mx-auto">
                            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 py-0.5 text-xs font-semibold backdrop-blur text-white">
                                ✨ Ready to Start?
                            </span>

                            <h2 className="mt-2.5 text-lg sm:text-2xl font-extrabold leading-snug tracking-tight text-white">
                                Let's Build Something Amazing Together
                            </h2>

                            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-200">
                                From personalized gifts to premium corporate merchandise,
                                TM helps bring your ideas to life with high-quality custom printing.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <Footer className="w-full h-full" />
        </section>

    );
}