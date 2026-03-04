"use client";
import Image from "next/image";
import { Users, Briefcase, Wifi, Coffee, Star, ArrowRight, Info } from "lucide-react";

interface Vehicle {
    id: string;
    name: string;
    description: string;
    image: string;
    passengers: number;
    bags: number;
    price: number;
    features: string[];
}

const vehicles: Vehicle[] = [
    {
        id: "sedan",
        name: "Executive Sedan",
        description: "Perfect for airport transfers and point-to-point business travel.",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
        passengers: 3,
        bags: 3,
        price: 95,
        features: ["WiFi", "Water", "Leather Seats"]
    },
    {
        id: "suv",
        name: "Luxury SUV",
        description: "The gold standard for luxury groups and corporate outings.",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
        passengers: 6,
        bags: 6,
        price: 145,
        features: ["Extra Room", "Premium Audio", "Heated Seats"]
    },
    {
        id: "sprinter",
        name: "Mercedes Sprinter Van",
        description: "Spacious and elegant for larger groups and events.",
        image: "https://images.unsplash.com/photo-1522066657682-62ed798cd322?auto=format&fit=crop&q=80",
        passengers: 14,
        bags: 14,
        price: 245,
        features: ["TV/DVD", "Power Outlets", "Cold Drinks"]
    },
    {
        id: "limo",
        name: "Stretch Limousine",
        description: "Classic luxury for weddings, proms, and special nights out.",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80",
        passengers: 10,
        bags: 4,
        price: 350,
        features: ["Bar Service", "Fiber Optics", "Privacy Partiton"]
    }
];

interface Step2Props {
    onNext: (vehicle: Vehicle) => void;
}

export default function Step2ChooseVehicle({ onNext }: Step2Props) {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 text-center lg:text-left">
                <h1 className="text-3xl font-playfair font-bold text-navy mb-2">Select Your Vehicle</h1>
                <p className="text-gray-500 font-medium">All prices shown are for your exact route — no hidden fees</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                <button className="px-6 py-2 rounded-full border border-gold bg-gold text-white text-sm font-bold shadow-md">Recommended</button>
                <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-500 hover:border-gold hover:text-gold transition-all text-sm font-medium">Price: Low to High</button>
                <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-500 hover:border-gold hover:text-gold transition-all text-sm font-medium">Capacity</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300 group">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={vehicle.image}
                                alt={vehicle.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-gold text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                                    TOP PICK
                                </span>
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-playfair font-bold text-navy mb-2">{vehicle.name}</h3>
                                    <div className="flex gap-4 text-gray-500 text-sm font-medium">
                                        <span className="flex items-center gap-1.5"><Users size={16} className="text-gold" /> {vehicle.passengers} Pax</span>
                                        <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-gold" /> {vehicle.bags} Bags</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Total</span>
                                    <span className="text-3xl font-bold text-gold tracking-tight">${vehicle.price}</span>
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
                                {vehicle.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {vehicle.features.map(feature => (
                                    <span key={feature} className="px-3 py-1 bg-secondary text-navy text-[10px] font-bold rounded-full uppercase tracking-wider">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => onNext(vehicle)}
                                    className="btn-gold flex-1 py-4 flex items-center justify-center gap-2 group/btn"
                                >
                                    Select Vehicle
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                                <button className="flex items-center justify-center gap-2 px-6 py-4 text-navy font-bold text-sm bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all">
                                    <Info size={16} />
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
