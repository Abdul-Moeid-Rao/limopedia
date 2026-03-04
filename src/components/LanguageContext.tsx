"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/lib/translations';

type Language = 'EN' | 'RU';

interface LanguageContextType {
    lang: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'EN',
    setLanguage: () => { },
    t: (key, fallback) => fallback || key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>('EN');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('limopedia_language') as Language;
        if (savedLang === 'EN' || savedLang === 'RU') {
            setLang(savedLang);
            document.documentElement.lang = savedLang.toLowerCase();
            document.documentElement.dir = 'ltr';
        }
        setMounted(true);
    }, []);

    const applyLanguage = (newLang: Language) => {
        if (newLang === lang) return;

        // Start fade out
        setIsTransitioning(true);

        // Wait for CSS transition (300ms) before changing language state
        setTimeout(() => {
            setLang(newLang);
            localStorage.setItem('limopedia_language', newLang);
            document.documentElement.lang = newLang.toLowerCase();
            document.documentElement.dir = 'ltr';

            // Fade back in
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 300);
    };

    const t = (key: string, fallback?: string) => {
        if (!mounted) return fallback || key;
        const currentTranslations = translations[lang];
        return currentTranslations[key] || fallback || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLanguage: applyLanguage, t }}>
            <div
                className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
