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
        <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-24">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fce7f3_1px,transparent_1px),linear-gradient(to_bottom,#fce7f3_1px,transparent_1px)] bg-[size:45px_45px] opacity-60"></div>

            {/* Blur */}
            <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                {/* Heading */}
                <div className="mx-auto mb-8 sm:mb-16 max-w-3xl text-center">
                    <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-pink-600">
                        ❤️ Testimonials
                    </span>

                    <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                        Loved by{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                            Thousands of Customers
                        </span>
                    </h2>

                    <p className="mt-3 sm:mt-5 text-xs sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        From personalized gifts to bulk corporate orders, our customers
                        trust TM for premium customization and exceptional service.
                    </p>
                </div>

                {/* Cards - Flex Layout */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-stretch">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-pink-100 bg-white p-5 sm:p-7 lg:p-8 shadow-xs sm:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
                        >
                            {/* Quote Icon */}
                            <Quote
                                size={55}
                                className="absolute -right-2 -top-2 text-pink-100/80 transition group-hover:text-pink-200 sm:size-[70px] pointer-events-none"
                            />

                            <div className="relative">
                                {/* User */}
                                <div className="flex items-center gap-3">
                                    <div>
                                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                                            {item.name}
                                        </h3>

                                        <p className="text-[11px] sm:text-xs text-pink-600 font-semibold mt-0.5">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="mt-3 sm:mt-4 flex gap-1">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={15}
                                            className="fill-pink-400 text-pink-500 sm:size-[17px]"
                                        />
                                    ))}
                                </div>

                                {/* Review */}
                                <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-gray-600">
                                    "{item.review}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats - Flex Layout */}
                <div className="mt-10 sm:mt-16 flex flex-wrap sm:flex-nowrap items-center justify-around gap-4 sm:gap-6 rounded-2xl sm:rounded-[35px] bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 p-5 sm:p-8 lg:p-10 text-center text-white shadow-md">
                    <div className="flex-1 min-w-[120px] sm:min-w-0 p-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">10K+</h3>
                        <p className="mt-1 text-[11px] sm:text-sm text-pink-100 font-medium">Happy Customers</p>
                    </div>

                    <div className="flex-1 min-w-[120px] sm:min-w-0 p-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">50K+</h3>
                        <p className="mt-1 text-[11px] sm:text-sm text-pink-100 font-medium">Products Delivered</p>
                    </div>

                    <div className="flex-1 min-w-[120px] sm:min-w-0 p-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">4.9★</h3>
                        <p className="mt-1 text-[11px] sm:text-sm text-pink-100 font-medium">Average Rating</p>
                    </div>

                    <div className="flex-1 min-w-[120px] sm:min-w-0 p-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">98%</h3>
                        <p className="mt-1 text-[11px] sm:text-sm text-pink-100 font-medium">Repeat Customers</p>
                    </div>
                </div>
            </div>
        </section>
    );
}