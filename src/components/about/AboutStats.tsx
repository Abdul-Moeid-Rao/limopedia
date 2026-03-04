"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from "@/components/LanguageContext";

const StatCounter = ({ end, suffix, labelKey }: { end: number, suffix: string, labelKey: string }) => {
    const { t } = useLanguage();
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setHasStarted(true);
            }
        }, { threshold: 0.5 });

        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let start = 0;
        const duration = 2000;
        const startTime = Date.now();

        const updateCount = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (outQuad)
            const easeProgress = 1 - (1 - progress) * (1 - progress);

            const currentCount = start + (end - start) * easeProgress;
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        };

        requestAnimationFrame(updateCount);
    }, [hasStarted, end]);

    return (
        <div ref={countRef} className="text-center group">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter group-hover:text-gold transition-colors duration-500">
                {Number.isInteger(end) ? Math.floor(count) : count.toFixed(1)}{suffix}
            </div>
            <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-500" data-i18n={labelKey}>
                {t(labelKey)}
            </div>
        </div>
    );
};

export default function AboutStats() {
    const stats = [
        { labelKey: "statYears", value: 10, suffix: "+" },
        { labelKey: "statVehicles", value: 20, suffix: "+" },
        { labelKey: "statCities", value: 12, suffix: "" },
        { labelKey: "statRating", value: 4.9, suffix: "" },
        { labelKey: "statPassengers", value: 5000, suffix: "+" }
    ];

    return (
        <section className="py-20 bg-navy relative overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {stats.map((stat, idx) => (
                        <StatCounter
                            key={idx}
                            end={stat.value}
                            suffix={stat.suffix}
                            labelKey={stat.labelKey}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
