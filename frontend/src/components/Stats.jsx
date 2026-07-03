import {
    Users,
    ShoppingBag,
    Star,
    Headphones,
    Palette,
    Truck,
    ShieldCheck,
    Gift,
} from "lucide-react";

export default function StatsSection() {
    const stats = [
        {
            icon: Users,
            value: "10K+",
            label: "Happy Customers",
        },
        {
            icon: ShoppingBag,
            value: "50+",
            label: "Premium Products",
        },
        {
            icon: Star,
            value: "4.8",
            label: "Customer Rating",
        },
        {
            icon: Headphones,
            value: "24/7",
            label: "Support Available",
        },
    ];

    const features = [
        {
            icon: Palette,
            title: "Easy Design Tool",
            subtitle: "Intuitive customizer",
        },
        {
            icon: Star,
            title: "HD-Quality Prints",
            subtitle: "Crystal clear output",
        },
        {
            icon: Truck,
            title: "Pan-India Shipping",
            subtitle: "Fast & reliable",
        },
        {
            icon: ShieldCheck,
            title: "Satisfaction Guarantee",
            subtitle: "100% quality assured",
        },
        {
            icon: Gift,
            title: "Gift-Ready Packaging",
            subtitle: "Beautifully wrapped",
        },
    ];

    return (
        <section className="bg-white py-20">

            <div className="max-w-7xl mx-auto px-6">

                {/* Top Stats */}

                <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden border border-gray-200 shadow-xl">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="relative bg-white p-10 text-center border-r last:border-r-0 border-gray-200"
                            >
                                <Icon className="w-5 h-5 text-pink-600 mx-auto mb-5" />

                                <h2 className="text-5xl font-bold text-pink-600">
                                    {item.value}
                                </h2>

                                <p className="mt-2 text-gray-500 font-medium">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">

                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300"
                            >
                                <Icon className="text-pink-600 mb-5" size={24} />

                                <h3 className="font-semibold text-lg text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="text-gray-500 text-sm mt-2">
                                    {item.subtitle}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>

        </section>
    );
}