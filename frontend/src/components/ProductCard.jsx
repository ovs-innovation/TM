import { Heart, Star, ArrowRight } from "lucide-react";

export default function ProductCard({ image, title, description, price, oldPrice }) {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden border border-pink-100 shadow-lg hover:shadow-2xl duration-300">

            <div className="relative overflow-hidden bg-pink-50">

                <img
                    src={image}
                    alt={title}
                    className="h-50 w-full object-contain group-hover:scale-110 duration-500"
                />

                <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs">
                    Bestseller
                </span>

            </div>

            <div className="p-6">

                <div className="flex items-center gap-1 text-yellow-500 mb-3">

                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />

                    <span className="text-gray-500 text-sm ml-2">
                        (120)
                    </span>

                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                    {title}
                </h3>

                <p className="text-gray-500 mt-3 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center gap-3 mt-3">

                    <span className="text-2xl font-bold text-pink-600">
                        ₹{price}
                    </span>

                    <span className="text-gray-400 line-through">
                        ₹{oldPrice}
                    </span>

                </div>

                <div className="flex gap-3 mt-4">

                    <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2">
                        Shop now
                        <ArrowRight size={18} />
                    </button>

                </div>

            </div>

        </div>
    );
}