import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const phoneNumber = "919999119402";

    const message = encodeURIComponent(
        "Hi TM, I'm interested in customizing a product."
    );

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        >
            {/* Pulse Ring */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>

            {/* Main Button */}
            <div className="relative flex items-center overflow-hidden rounded-full bg-[#25D366] shadow-xl transition-all duration-500 hover:w-52 sm:hover:w-56 w-13 h-13 sm:w-16 sm:h-16 hover:shadow-green-500/50 hover:scale-105 active:scale-95">
                {/* Icon */}
                <div className="flex h-13 w-13 sm:h-16 sm:w-16 items-center justify-center flex-shrink-0">
                    <FaWhatsapp
                        className="text-white text-2xl sm:text-[32px] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                    />
                </div>

                {/* Text */}
                <span className="whitespace-nowrap text-white text-xs sm:text-sm font-semibold opacity-0 translate-x-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 pr-4">
                    Chat with us
                </span>
            </div>
        </a>
    );
}