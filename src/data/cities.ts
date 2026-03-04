export interface City {
    id: string;
    name: string;
    description: string;
    image: string;
    airportCode?: string;
    tags: string[];
    isFeatured?: boolean;
    state: string;
}

export interface Route {
    from: string;
    to: string;
    time: string;
    price: number;
}

export const featuredCities: City[] = [
    {
        id: "miami",
        name: "Miami",
        description: "Miami International Airport (MIA)",
        image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&q=80",
        airportCode: "MIA",
        tags: ["Airport Transfers", "Corporate Rides", "Events"],
        isFeatured: true,
        state: "FL"
    },
    {
        id: "fort-lauderdale",
        name: "Fort Lauderdale",
        description: "Fort Lauderdale-Hollywood International Airport (FLL)",
        image: "https://images.unsplash.com/photo-1543739225-349c0ce4684c?auto=format&fit=crop&q=80",
        airportCode: "FLL",
        tags: ["Airport Transfers", "Corporate Rides", "Events"],
        isFeatured: true,
        state: "FL"
    },
    {
        id: "palm-beach",
        name: "Palm Beach",
        description: "Palm Beach International Airport (PBI)",
        image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80",
        airportCode: "PBI",
        tags: ["Airport Transfers", "Corporate Rides", "Events"],
        isFeatured: true,
        state: "FL"
    },
    {
        id: "boca-raton",
        name: "Boca Raton",
        description: "Palm Beach International (PBI)",
        image: "https://images.unsplash.com/photo-1610448721566-473f917b5160?auto=format&fit=crop&q=80",
        airportCode: "PBI",
        tags: ["Airport Transfers", "Corporate Rides", "Events"],
        isFeatured: true,
        state: "FL"
    },
    {
        id: "orlando",
        name: "Orlando",
        description: "Orlando International Airport (MCO)",
        image: "https://images.unsplash.com/photo-1561026040-4202359404d0?auto=format&fit=crop&q=80",
        airportCode: "MCO",
        tags: ["Airport Transfers", "Corporate Rides", "Events"],
        isFeatured: true,
        state: "FL"
    },
    {
        id: "tampa",
        name: "Tampa",
        description: "Tampa International Airport (TPA)",
        image: "https://images.unsplash.com/photo-1545624903-51922c19965d?auto=format&fit=crop&q=80",
        airportCode: "TPA",
        tags: ["Airport Transfers", "Corporate Rides", "Events"],
        isFeatured: true,
        state: "FL"
    }
];

export const secondaryCities: City[] = [
    { id: "naples", name: "Naples", description: "Southwest Florida International (RSW)", airportCode: "RSW", state: "FL", tags: [], image: "" },
    { id: "keys", name: "Florida Keys", description: "", state: "FL", tags: [], image: "" },
    { id: "ft-myers", name: "Fort Myers", description: "", state: "FL", tags: [], image: "" },
    { id: "sarasota", name: "Sarasota", description: "", state: "FL", tags: [], image: "" },
    { id: "jax", name: "Jacksonville", description: "", state: "FL", tags: [], image: "" },
    { id: "chicago", name: "Chicago", description: "O'Hare International (ORD) or Midway (MDW)", airportCode: "ORD / MDW", state: "IL", tags: [], image: "" },
    { id: "new-york", name: "New York", description: "JFK, LaGuardia (LGA), or Newark (EWR)", airportCode: "JFK / LGA / EWR", state: "NY", tags: [], image: "" },
    { id: "atlanta", name: "Atlanta", description: "", state: "GA", tags: [], image: "" },
    { id: "dubai", name: "Dubai", description: "", state: "UAE", tags: [], image: "" },
    { id: "istanbul", name: "Istanbul", description: "", state: "Turkey", tags: [], image: "" }
];

export const popularRoutes: Route[] = [
    { from: "MIA Airport", to: "Miami Beach Hotel", time: "25 min", price: 75 },
    { from: "FLL Airport", to: "Fort Lauderdale Downtown", time: "20 min", price: 65 },
    { from: "Miami", to: "Boca Raton", time: "55 min", price: 120 },
    { from: "Miami", to: "Orlando", time: "3.5 hrs", price: 320 },
    { from: "MIA Airport", to: "Port of Miami (Cruise)", time: "15 min", price: 65 },
    { from: "FLL", to: "Palm Beach", time: "45 min", price: 110 },
    { from: "Miami", to: "Fort Lauderdale", time: "35 min", price: 95 },
    { from: "Miami Beach", to: "Palm Beach", time: "1.5 hrs", price: 165 }
];
