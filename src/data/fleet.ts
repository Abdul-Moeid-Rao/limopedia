export interface Vehicle {
    id: string;
    category: string;
    name: string;
    description: string;
    passengers: number;
    bags: number;
    startingPrice: number;
    hourlyPrice?: string;
    features: string[];
    image: string;
    gallery: string[];
    mostPopular?: boolean;
    amenities: string[];
}

export const vehicles: Vehicle[] = [
    {
        id: "exec-sedan",
        category: "sedan",
        name: "Executive Sedan",
        description: "Lincoln Continental or Cadillac CT6. Professional and discreet for business travelers.",
        passengers: 3,
        bags: 2,
        startingPrice: 75,
        features: ["Leather", "Climate", "WiFi", "Charging"],
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80"
        ],
        amenities: ["Complimentary Bottled Water", "Live Flight Tracking", "Professional Uniformed Chauffeur", "24/7 Dispatch Support"]
    },
    {
        id: "luxury-suv",
        category: "suv",
        name: "Luxury SUV",
        description: "Cadillac Escalade or Lincoln Navigator. The ultimate standard in South Florida luxury.",
        passengers: 6,
        bags: 4,
        startingPrice: 95,
        features: ["Leather", "Panoramic", "WiFi", "TV Screen"],
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
        ],
        mostPopular: true,
        amenities: ["Spacious Luggage Capacity", "Rear Climate Control", "Premium Sound System", "Child Seats Available On Request"]
    },
    {
        id: "stretch-limo",
        category: "stretch",
        name: "Stretch Limousine",
        description: "Lincoln MKT Stretch. Iconic elegance for weddings, anniversaries and special events.",
        passengers: 8,
        bags: 2,
        startingPrice: 145,
        features: ["Bar", "Mood Lighting", "Sound System", "Privacy Partition"],
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
        ],
        amenities: ["Fiber Optic Lighting", "Champagne Flutes & Ice", "Bluetooth Audio Connection", "Extra Deep Tinted Windows"]
    },
    {
        id: "super-stretch",
        category: "stretch",
        name: "Super Stretch Limo",
        description: "Lincoln 120\" Stretch. When ordinary isn't enough, make an entrance with more space.",
        passengers: 10,
        bags: 2,
        startingPrice: 185,
        features: ["Full Bar", "LED Ceiling", "Sound System"],
        image: "https://images.unsplash.com/photo-1590362891175-379207e32159?auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1590362891175-379207e32159?auto=format&fit=crop&q=80"
        ],
        amenities: ["Multi-Color LED Lighting", "Upgraded Sound with Subwoofers", "Dual Bar Areas", "Touch Screen Controls"]
    },
    {
        id: "sprinter-van",
        category: "sprinter",
        name: "Mercedes Sprinter Van",
        description: "Perfect Group transport for corporate retreats, golf trips, and family outings.",
        passengers: 14,
        bags: 14,
        startingPrice: 130,
        features: ["Captain Seats", "WiFi", "USB Charging", "TV"],
        image: "https://images.unsplash.com/photo-1522066657682-62ed798cd322?auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1522066657682-62ed798cd322?auto=format&fit=crop&q=80"
        ],
        amenities: ["High-Top Standing Room", "Forward Facing Seating", "Individual AC Vents", "Extra Large Luggage Area"]
    },
    {
        id: "sprinter-vip",
        category: "sprinter",
        name: "Mercedes Sprinter VIP",
        description: "Custom Executive configured Sprinter with a private jet interior experience.",
        passengers: 8,
        bags: 8,
        startingPrice: 175,
        features: ["Leather Captains", "Mini Bar", "WiFi", "Privacy"],
        image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80"
        ],
        amenities: ["Reclining Massage Seats", "Smart TV with Apple TV", "Nespresso Machine & Bar", "Privacy Partition with Intercom"]
    },
    {
        id: "mini-bus",
        category: "bus",
        name: "Mini Bus",
        description: "Reliable and efficient logistics for weddings and corporate group movements.",
        passengers: 24,
        bags: 24,
        startingPrice: 180,
        features: ["AC", "Reclining Seats", "Storage"],
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
        ],
        amenities: ["Overhead Parcel Racks", "Rear Luggage Compartment", "PA System for Announcements", "Reading Lights"]
    },
    {
        id: "party-bus",
        category: "bus",
        name: "Party Bus",
        description: "The ultimate mobile event space. Entertainment-focused interior for large groups.",
        passengers: 30,
        bags: 0,
        startingPrice: 250,
        hourlyPrice: "/hr",
        features: ["LED Lights", "Sound System", "Dance Floor", "Bar"],
        image: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&q=80"
        ],
        amenities: ["Dance Pole (Removable)", "Dual 40-inch Smart TVs", "Perimeter Leather Seating", "High Volume Fog Machine Available"]
    },
    {
        id: "motor-coach",
        category: "motorcoach",
        name: "Motor Coach Bus",
        description: "National standard for large groups. Maximum comfort for long-distance travel.",
        passengers: 55,
        bags: 55,
        startingPrice: 295,
        features: ["Luggage Bay", "AC", "Reclining", "PA System"],
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80"
        ],
        amenities: ["Onboard Restroom", "Underfloor Luggage Bays", "USB Ports at Every Seat", "Climate Control per Passenger"]
    }
];
