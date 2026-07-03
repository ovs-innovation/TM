import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Sparkles,
} from "lucide-react";

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
        <section className="relative min-h-screen overflow-hidden bg-white">
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

                    <h1 className="text-5xl md:text-6xl font-black text-gray-900">
                        Contact
                        <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                            TM
                        </span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-600 leading-5">
                        Have questions about our products? Need a custom quote? We're here to help.
                    </p>

                </div>

                {/* Main Content */}

                <div className="grid lg:grid-cols-2 gap-16 mt-20">

                    {/* Left Side */}

                    <div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            We'd Love To Hear From You
                        </h2>

                        <p className="text-gray-600 leading-8 mb-10">
                            TM specializes in premium custom printing for mugs,
                            keychains, bottles, gifts, and corporate merchandise.
                            Whether you're ordering one personalized gift or thousands of
                            branded products, we're committed to delivering exceptional
                            quality and outstanding customer service.
                        </p>

                        <div className="space-y-6">

                            <div className="flex items-start gap-5 bg-white rounded-3xl shadow-lg border border-pink-100 p-6 hover:shadow-xl transition">

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

                    <div className="bg-white rounded-[35px] shadow-2xl border border-pink-100 p-10">

                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Send an Enquiry
                        </h2>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-6 md:flex-row">
                                <div className="flex-1">
                                    <label className="mb-2 block font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                                        required
                                    />
                                </div>

                                <div className="flex-1">
                                    <label className="mb-2 block font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="productName"
                                    value={formData.productName}
                                    onChange={handleChange}
                                    placeholder="Custom Order"
                                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    rows="6"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    className="w-full rounded-xl border border-gray-300 px-5 py-4 resize-none outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                                    required
                                ></textarea>
                            </div>

                            {status ? (
                                <div className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-pink-700">
                                    {status}
                                </div>
                            ) : null}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={18} />
                            </button>
                        </form>

                    </div>

                </div>

                {/* Bottom CTA */}

                <div className="mt-24 rounded-[40px] bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 p-16 text-center text-white">

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's Build Something Amazing Together
                    </h2>

                    <p className="max-w-2xl mx-auto text-pink-100 text-lg mb-8">
                        From personalized gifts to large-scale corporate branding, ChromaCraft
                        is your trusted partner for premium custom printing solutions.
                    </p>

                    <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                        Start Your Project
                    </button>

                </div>

            </div>
        </section>
    );
}