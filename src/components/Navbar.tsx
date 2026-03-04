"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { Menu, X, ChevronDown, Phone, Globe } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    // Use the translation hook
    const { lang, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { key: "navServices", href: "/#services", hasDropdown: true },
        { key: "navFleet", href: "/fleet" },
        { key: "navCities", href: "/cities" },
        { key: "navReviews", href: "/reviews" },
        { key: "navAffiliate", href: "/affiliate" },
        { key: "navAbout", href: "/about" },
        { key: "navPricing", href: "/pricing" },
    ];

    const services = [
        { key: "serviceAirport", href: "/services/airport-transfers" },
        { key: "serviceCorporate", href: "/services/corporate" },
        { key: "serviceEvents", href: "/services/events-weddings" },
        { key: "serviceHourly", href: "/services/hourly-hire" },
        { key: "serviceGroup", href: "/services/group-party-bus" },
        { key: "serviceCity", href: "/services/city-tours" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full bg-navy py-4 shadow-lg z-[100]"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-playfair font-bold text-white tracking-tight shrink-0">
                    Limopedia
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <div
                            key={link.key}
                            className="relative group"
                            onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                            onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                        >
                            <Link
                                href={link.href}
                                className="text-white hover:text-gold transition-colors font-bold text-xs uppercase tracking-[0.15em] flex items-center gap-1.5"
                            >
                                <span data-i18n={link.key}>{t(link.key)}</span>
                                {link.hasDropdown && <ChevronDown size={16} />}
                            </Link>

                            {link.hasDropdown && isServicesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-[110]">
                                    {services.map((service) => (
                                        <Link
                                            key={service.key}
                                            href={service.href}
                                            className="block px-4 py-2 text-navy hover:bg-secondary transition-colors"
                                            data-i18n={service.key}
                                        >
                                            {t(service.key)}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center space-x-6">
                    {/* Language Switcher */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsLanguageOpen(true)}
                        onMouseLeave={() => setIsLanguageOpen(false)}
                    >
                        <button className="flex items-center gap-1.5 text-white hover:text-gold transition-colors font-bold text-xs uppercase tracking-widest py-2">
                            <Globe size={16} />
                            {lang === 'EN' ? '🇬🇧 EN' : '🇷🇺 RU'}
                            <ChevronDown size={14} className={cn("transition-transform", isLanguageOpen && "rotate-180")} />
                        </button>

                        {isLanguageOpen && (
                            <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-[110]">
                                <button
                                    onClick={() => setLanguage("EN")}
                                    className={cn("w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-2", lang === "EN" ? "text-gold font-bold bg-navy/5" : "text-navy hover:bg-secondary")}
                                >
                                    🇬🇧 US English
                                </button>
                                <button
                                    onClick={() => setLanguage("RU")}
                                    className={cn("w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-2", lang === "RU" ? "text-gold font-bold bg-navy/5" : "text-navy hover:bg-secondary")}
                                >
                                    🇷🇺 Русский
                                </button>
                            </div>
                        )}
                    </div>

                    <Link href="/book">
                        <button className="btn-gold" data-i18n="navBookNow">{t("navBookNow")}</button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-navy border-t border-white/10 p-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 shadow-xl">
                    {navLinks.map((link) => (
                        <div key={link.key}>
                            <button
                                className="text-white text-lg font-medium flex items-center justify-between w-full"
                                onClick={() => link.hasDropdown && setIsServicesOpen(!isServicesOpen)}
                            >
                                <span data-i18n={link.key}>{t(link.key)}</span>
                                {link.hasDropdown && <ChevronDown className={cn("transition-transform", isServicesOpen && "rotate-180")} />}
                            </button>
                            {link.hasDropdown && isServicesOpen && (
                                <div className="pl-4 mt-2 space-y-2">
                                    {services.map((service) => (
                                        <Link
                                            key={service.key}
                                            href={service.href}
                                            className="block text-white/70 hover:text-white py-1"
                                            data-i18n={service.key}
                                        >
                                            {t(service.key)}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                        {/* Mobile Language Switcher */}
                        <div className="flex items-center justify-between text-white py-2">
                            <div className="flex items-center gap-2">
                                <Globe size={18} className="text-gold" />
                                <span className="text-lg font-medium" data-i18n="navLanguage">{t("navLanguage")}</span>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setLanguage("EN")}
                                    className={cn("font-bold transition-colors", lang === "EN" ? "text-gold" : "text-white/60 hover:text-white")}
                                >
                                    🇬🇧 EN
                                </button>
                                <span className="text-white/20">|</span>
                                <button
                                    onClick={() => setLanguage("RU")}
                                    className={cn("font-bold transition-colors", lang === "RU" ? "text-gold" : "text-white/60 hover:text-white")}
                                >
                                    🇷🇺 RU
                                </button>
                            </div>
                        </div>

                        <a href="tel:8883000069" className="text-white flex items-center gap-2">
                            <Phone size={18} /> (888) 300-0069
                        </a>
                        <Link href="/book" className="w-full">
                            <button className="btn-gold w-full text-center" data-i18n="navBookNow">{t("navBookNow")}</button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
