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
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                {/* Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbcfe8_1px,transparent_1px),linear-gradient(to_bottom,#fbcfe8_1px,transparent_1px)] bg-[size:48px_48px] opacity-80" />

                <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-pink-200 blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-200 blur-3xl opacity-60"></div>

                <div className="relative max-w-7xl mx-auto px-6 py-24">

                    {/* Heading */}

                    <div className="text-center max-w-3xl mx-auto">

                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-100 text-pink-600 font-medium mb-6">
                            <Sparkles size={18} />
                            Let's Connect
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                            Contact
                            <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                                TM
                            </span>
                        </h1>

                        <p className="mt-6 text-base sm:text-lg text-gray-600 leading-7 px-2">
                            Have questions about our products? Need a custom quote? We're here to help.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-14 lg:mt-20">

                        {/* Left Side */}

                        <div>

                            <p className="text-pink-900 text-sm font-bold sm:text-base leading-7 mb-8">
                                We'd Love To Hear From You
                            </p>

                            <p className="text-gray-600 leading-8 mb-10">
                                TM specializes in premium custom printing for mugs,
                                keychains, bottles, gifts, and corporate merchandise.
                                Whether you're ordering one personalized gift or thousands of
                                branded products, we're committed to delivering exceptional
                                quality and outstanding customer service.
                            </p>

                            <div className="space-y-6">

                                <div className="flex items-start gap-4 rounded-2xl bg-white border border-pink-100 shadow-md p-4 sm:p-6 hover:shadow-xl transition-all">

                                    <div className="bg-pink-100 p-4 rounded-2xl">
                                        <Phone className="text-pink-600" />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg">Phone</h3>
                                        <p className="text-gray-600">
                                            +91 98765 43210
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-start gap-5 bg-white rounded-3xl shadow-lg border border-pink-100 p-6 hover:shadow-xl transition">

                                    <div className="bg-pink-100 p-4 rounded-2xl">
                                        <Mail className="text-pink-600" />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg">Email</h3>
                                        <p className="text-gray-600">
                                            hello@chromacraft.com
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-start gap-5 bg-white rounded-3xl shadow-lg border border-pink-100 p-6 hover:shadow-xl transition">

                                    <div className="bg-pink-100 p-4 rounded-2xl">
                                        <MapPin className="text-pink-600" />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg">Address</h3>
                                        <p className="text-gray-600">
                                            New Delhi, India
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-start gap-5 bg-white rounded-3xl shadow-lg border border-pink-100 p-6 hover:shadow-xl transition">

                                    <div className="bg-pink-100 p-4 rounded-2xl">
                                        <Clock className="text-pink-600" />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg">
                                            Working Hours
                                        </h3>

                                        <p className="text-gray-600">
                                            Monday - Saturday
                                        </p>

                                        <p className="text-gray-600">
                                            9:00 AM - 7:00 PM
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Contact Form */}

                        <div className="bg-white rounded-3xl lg:rounded-[35px] border border-pink-100 shadow-xl lg:shadow-2xl p-5 sm:p-8 lg:p-10">

                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                                Send an Enquiry
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                                            required
                                        />
                                    </div>

                                </div>

                                {/* Phone */}

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Phone Number
                                    </label>

                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                                    />
                                </div>

                                {/* Product */}

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Product Name
                                    </label>

                                    <input
                                        type="text"
                                        name="productName"
                                        value={formData.productName}
                                        onChange={handleChange}
                                        placeholder="Custom Mug, T-Shirt, Bottle..."
                                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                                    />
                                </div>

                                {/* Message */}

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Message
                                    </label>

                                    <textarea
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your customization requirements..."
                                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm sm:text-base resize-none outline-none transition-all duration-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                                        required
                                    />
                                </div>

                                {/* Status */}

                                {status && (
                                    <div className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-pink-700">
                                        {status}
                                    </div>
                                )}

                                {/* Button */}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-5 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-pink-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}

                                    <Send
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>

                            </form>

                        </div>

                    </div>

                    <div className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-14 text-center text-white shadow-xl">

                        {/* Background Blur - Hidden on Mobile */}
                        <div className="hidden sm:block absolute -top-16 -left-16 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="hidden sm:block absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-white/10 blur-3xl"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">

                            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
                                ✨ Ready to Start?
                            </span>

                            <h2 className="mt-4 text-2xl sm:text-4xl font-bold leading-tight">
                                Let's Build Something
                                <span className="block">Amazing Together</span>
                            </h2>

                            <p className="mt-4 text-sm sm:text-base leading-6 text-pink-100">
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