"use client";
import Link from "next/link";
import { Phone, HelpCircle } from "lucide-react";

export default function BookingHeader() {
    return (
        <header className="bg-white border-b border-gray-200 py-4 shadow-sm relative z-50">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-playfair font-bold text-navy tracking-tight">
                    Limopedia
                </Link>

                <div className="flex items-center gap-6">
                    <a
                        href="tel:8883000069"
                        className="hidden sm:flex items-center gap-2 text-navy hover:text-gold transition-colors font-semibold"
                    >
                        <Phone size={18} className="text-gold" />
                        (888) 300-0069
                    </a>
                    <a href="#" className="flex items-center gap-1 text-gray-500 hover:text-navy transition-colors text-sm font-medium">
                        <HelpCircle size={16} />
                        Need Help?
                    </a>
                </div>
            </div>
        </header>
    );
}
