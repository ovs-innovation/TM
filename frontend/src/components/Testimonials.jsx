import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Corporate Client",
        review:
            "TM delivered 500 customized mugs for our company event with outstanding print quality. Everything arrived on time and exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Priya Mehta",
        role: "Small Business Owner",
        review:
            "I ordered personalized keychains for my brand launch. The quality, packaging, and customer support were exceptional. Highly recommended!",
        rating: 5,
    },
    {
        name: "Aman Verma",
        role: "Happy Customer",
        review:
            "The custom photo mug I ordered was exactly like the preview. The colors are vibrant, and the finish is premium. Will definitely order again!",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-white py-24">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fce7f3_1px,transparent_1px),linear-gradient(to_bottom,#fce7f3_1px,transparent_1px)] bg-[size:45px_45px] opacity-60"></div>

            {/* Blur */}
            <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="inline-flex items-center rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">
                        ❤️ Testimonials
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-gray-900">
                        Loved by
                        <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                            Thousands of Customers
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-600">
                        From personalized gifts to bulk corporate orders, our customers
                        trust TM for premium customization and exceptional service.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl border border-pink-100 bg-white p-6 sm:p-7 lg:p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Quote Icon */}
                            <Quote
                                size={70}
                                className="absolute -right-4 -top-4 text-pink-100 transition group-hover:text-pink-200 sm:size-[80px]"
                            />

                            <div className="relative">
                                {/* User */}
                                <div className="flex items-center gap-4">
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900">
                                            {item.name}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-pink-600">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="mt-5 flex gap-1">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className="fill-pink-400 text-pink-600 sm:h-[18px] sm:w-[18px]"
                                        />
                                    ))}
                                </div>

                                {/* Review */}
                                <p className="mt-5 text-sm sm:text-base leading-7 text-gray-600">
                                    "{item.review}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 grid grid-cols-2 gap-8 rounded-[35px] bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 p-10 text-center text-white md:grid-cols-4">
                    <div>
                        <h3 className="text-4xl font-black">10K+</h3>
                        <p className="mt-2 text-pink-100">Happy Customers</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-black">50K+</h3>
                        <p className="mt-2 text-pink-100">Products Delivered</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-black">4.9★</h3>
                        <p className="mt-2 text-pink-100">Average Rating</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-black">98%</h3>
                        <p className="mt-2 text-pink-100">Repeat Customers</p>
                    </div>
                </div>
            </div>
        </section>
    );
}