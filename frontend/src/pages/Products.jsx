import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

const products = [
    {
        title: "Key Chain",
        description: "High-quality cotton t-shirt with custom printing.",
        price: 699,
        oldPrice: 999,
        image: img1,
    },
    {
        title: "Mug",
        description: "Personalized acrylic keychain with your design.",
        price: 199,
        oldPrice: 299,
        image: img2,
    },
    {
        title: "Custom Cup",
        description: "Premium steel bottle with UV printing.",
        price: 799,
        oldPrice: 999,
        image: img3,
    },
    {
        title: "Mug",
        description: "High-quality cotton t-shirt with custom printing.",
        price: 699,
        oldPrice: 999,
        image: img1,
    },
    {
        title: "Keychain",
        description: "Personalized acrylic keychain with your design.",
        price: 199,
        oldPrice: 299,
        image: img2,
    },
    {
        title: "Custom Cup",
        description: "Premium steel bottle with UV printing.",
        price: 799,
        oldPrice: 999,
        image: img3,
    }
];

export default function Products() {
    return (
        <section className="relative bg-white py-24 overflow-hidden">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fce7f3_1px,transparent_1px),linear-gradient(to_bottom,#fce7f3_1px,transparent_1px)] bg-[size:50px_50px] opacity-60"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <span className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full">
                        Our Products
                    </span>

                    <h1 className="text-6xl font-black mt-6">
                        Customize Anything
                    </h1>

                    <p className="text-gray-500 max-w-2xl mx-auto mt-5">
                        Discover premium-quality personalized products for gifts,
                        businesses, and special occasions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            {...product}
                        />
                    ))}

                </div>
            </div>
        </section>
    );
}