"use client";
import { Check } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ProgressBarProps {
    currentStep: number;
}

const steps = [
    { id: 1, label: "Trip Details", icon: "📍" },
    { id: 2, label: "Choose Vehicle", icon: "🚗" },
    { id: 3, label: "Your Info", icon: "👤" },
    { id: 4, label: "Payment", icon: "💳" },
];

export default function ProgressBar({ currentStep }: ProgressBarProps) {
    return (
        <div className="bg-white border-b border-gray-100 sticky top-0 z-40 py-4 shadow-sm">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center justify-between relative">
                    {/* Background Progress Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

                    {/* Steps */}
                    {steps.map((step) => {
                        const isActive = step.id === currentStep;
                        const isCompleted = step.id < currentStep;

                        return (
                            <div key={step.id} className="relative z-10 flex flex-col items-center">
                                <div
                                    className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2",
                                        isCompleted
                                            ? "bg-gold border-gold text-white shadow-md"
                                            : isActive
                                                ? "bg-white border-gold text-gold shadow-lg scale-110"
                                                : "bg-white border-gray-200 text-gray-400"
                                    )}
                                >
                                    {isCompleted ? (
                                        <Check size={20} strokeWidth={3} />
                                    ) : (
                                        <span className="text-sm font-bold">{step.id}</span>
                                    )}
                                </div>
                                <span className={cn(
                                    "mt-2 text-[10px] md:text-sm font-semibold tracking-tight whitespace-nowrap",
                                    isActive ? "text-navy" : "text-gray-400"
                                )}>
                                    {isActive && <span className="mr-1 inline-block animate-bounce">{step.icon}</span>}
                                    {step.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
