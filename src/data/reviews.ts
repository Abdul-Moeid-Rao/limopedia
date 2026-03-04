export interface Review {
    id: string;
    stars: number;
    text: string;
    author: string;
    description: string;
    serviceTag: string;
    date: string;
    platform: "Google" | "App Store" | "Facebook";
    isVerified: boolean;
}

export const reviews: Review[] = [
    {
        id: "1",
        stars: 5,
        text: "Absolutely flawless experience. The driver was waiting at baggage claim with my name sign, helped with luggage, and the Escalade was spotless. Miami to FLL in pure comfort.",
        author: "Michael T.",
        description: "Business Traveler",
        serviceTag: "Airport Transfer",
        date: "2 days ago",
        platform: "Google",
        isVerified: true
    },
    {
        id: "2",
        stars: 5,
        text: "We use Limopedia weekly for our executive team. The billing and account system is incredibly easy. Every driver is professional and on time.",
        author: "Amanda R.",
        description: "Corporate Client",
        serviceTag: "Corporate Account",
        date: "1 week ago",
        platform: "Google",
        isVerified: true
    },
    {
        id: "3",
        stars: 5,
        text: "Booked the stretch limo for my sister's bachelorette — the party bus was incredible. Driver was so patient and professional. Will book again!",
        author: "Vanessa M.",
        description: "",
        serviceTag: "Events",
        date: "3 weeks ago",
        platform: "Google",
        isVerified: true
    },
    {
        id: "4",
        stars: 5,
        text: "Flight was delayed 2 hours and the driver was still there, no extra charge. That's the kind of service that earns a customer for life.",
        author: "Carlos D.",
        description: "",
        serviceTag: "Airport Transfer",
        date: "1 month ago",
        platform: "Google",
        isVerified: true
    },
    {
        id: "5",
        stars: 5,
        text: "Used Limopedia for our company retreat — 3 Sprinter vans, 40 people, perfect coordination. They handled everything.",
        author: "Jennifer K.",
        description: "Travel Manager",
        serviceTag: "Corporate",
        date: "1 month ago",
        platform: "App Store",
        isVerified: true
    },
    {
        id: "6",
        stars: 5,
        text: "Best limo service in South Florida, period. Have tried others and none compare to Limopedia's professionalism.",
        author: "Robert L.",
        description: "",
        serviceTag: "Repeat Client",
        date: "2 months ago",
        platform: "Google",
        isVerified: true
    },
    {
        id: "7",
        stars: 5,
        text: "Our wedding transportation was perfect. The white stretch limo was immaculate and the driver was so kind and professional.",
        author: "Maria & David S.",
        description: "",
        serviceTag: "Wedding",
        date: "2 months ago",
        platform: "Facebook",
        isVerified: true
    },
    {
        id: "8",
        stars: 5,
        text: "Booked from New York, used Limopedia in Miami for 4 days straight. First class all the way. Will absolutely use next trip.",
        author: "Thomas B.",
        description: "NYC Tourism",
        serviceTag: "Tourism",
        date: "3 months ago",
        platform: "Google",
        isVerified: true
    },
    {
        id: "9",
        stars: 5,
        text: "The corporate portal makes managing rides so easy. Love being able to see all invoices in one place.",
        author: "Sandra H.",
        description: "EA",
        serviceTag: "Corporate",
        date: "4 months ago",
        platform: "App Store",
        isVerified: true
    }
];
