import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const phoneNumber = "8882474389";

    const message = encodeURIComponent(
        "Hi TM, I'm interested in customizing a product."
    );

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed bottom-6 right-6 z-50"
        >
            {/* Pulse Ring */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

            {/* Main Button */}
            <div className="relative flex items-center overflow-hidden rounded-full bg-[#25D366] shadow-2xl transition-all duration-500 hover:w-56 w-16 h-16 hover:shadow-green-500/50 hover:scale-110">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center flex-shrink-0">
                    <FaWhatsapp
                        size={34}
                        className="text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125"
                    />
                </div>

                {/* Text */}
                <span className="whitespace-nowrap text-white font-semibold opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    Chat with us
                </span>
            </div>
        </a>
    );
}