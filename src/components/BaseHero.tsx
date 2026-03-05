"use client";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

interface BaseHeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: string;
    showBreadcrumbs?: boolean;
    breadcrumbs?: { label: string; href?: string }[];
    showButtons?: boolean;
    customContent?: React.ReactNode;
    overlayOpacity?: number;
}

export default function BaseHero({
    title,
    subtitle,
    description,
    backgroundImage = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
    showBreadcrumbs = false,
    breadcrumbs = [],
    showButtons = true,
    customContent,
    overlayOpacity = 0.6
}: BaseHeroProps) {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[600px] md:h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-110 animate-slow-zoom"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            >
                <div className={`absolute inset-0 bg-navy/${overlayOpacity * 100} backdrop-blur-[2px]`} />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/80" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 pt-16 md:pt-12 pb-24 md:pb-32 text-center lg:text-left">
                {/* Breadcrumbs */}
                {showBreadcrumbs && (
                    <nav className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-8 md:mb-12">
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                {crumb.href ? (
                                    <Link 
                                        href={crumb.href} 
                                        className="hover:text-gold transition-colors"
                                        data-i18n={crumb.label}
                                    >
                                        {t(crumb.label)}
                                    </Link>
                                ) : (
                                    <span className="text-gold" data-i18n={crumb.label}>
                                        {t(crumb.label)}
                                    </span>
                                )}
                                {index < breadcrumbs.length - 1 && (
                                    <ChevronRight size={12} className="opacity-50" />
                                )}
                            </React.Fragment>
                        ))}
                    </nav>
                )}

                <div className="max-w-4xl mx-auto lg:mx-0">
                    {subtitle && (
                        <span
                            className="inline-block text-gold font-bold tracking-[0.2em] text-xs md:text-sm mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 uppercase"
                            data-i18n={subtitle}
                        >
                            {t(subtitle)}
                        </span>
                    )}
                    
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold text-white leading-tight mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 px-2 md:px-0">
                        {typeof title === 'string' && title.includes('<br>') ? (
                            title.split('<br>').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < title.split('<br>').length - 1 && <br />}
                                </React.Fragment>
                            ))
                        ) : (
                            <span data-i18n={title}>{t(title)}</span>
                        )}
                    </h1>

                    {description && (
                        <p
                            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 md:px-0 mx-auto lg:mx-0"
                            data-i18n={description}
                        >
                            {t(description)}
                        </p>
                    )}

                    {customContent}

                    {showButtons && (
                        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                            <Link href="/book" className="w-full sm:w-auto">
                                <button className="btn-gold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 flex items-center gap-2 group w-full justify-center">
                                    <span data-i18n="heroBtnBook">{t("heroBtnBook")}</span>
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </button>
                            </Link>
                            <a
                                href="tel:8883000069"
                                className="text-white border-2 border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white hover:text-navy transition-all duration-300 w-full sm:w-auto text-center text-sm md:text-base"
                                data-i18n="heroBtnCall"
                            >
                                {t("heroBtnCall")}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
