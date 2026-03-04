import React from 'react';
import { CalendarClock, CreditCard, History, Download, Settings, ChevronRight, LogOut, MapPin } from "lucide-react";
import Link from 'next/link';

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-24">
            <div className="container mx-auto px-4 max-w-7xl pt-12">

                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-playfair font-bold text-navy mb-2">Welcome Back, Alexander</h1>
                        <p className="text-gray-500 font-medium">Manage your bookings, payment methods, and account settings.</p>
                    </div>
                    <Link href="/book" className="mt-6 md:mt-0 btn-gold hidden md:block">
                        New Booking
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-[30px] border border-navy/5 shadow-sm overflow-hidden sticky top-32">
                            <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-navy text-gold flex items-center justify-center font-bold text-xl leading-none">
                                    AP
                                </div>
                                <div>
                                    <p className="font-bold text-navy">Alexander Pierce</p>
                                    <p className="text-xs text-gray-500">Corporate Account</p>
                                </div>
                            </div>
                            <nav className="p-4 space-y-2">
                                <Link href="#upcoming" className="flex items-center justify-between p-3 rounded-xl bg-navy text-white font-medium">
                                    <div className="flex items-center gap-3">
                                        <CalendarClock size={18} className="text-gold" />
                                        Upcoming Rides
                                    </div>
                                    <ChevronRight size={16} className="opacity-50" />
                                </Link>
                                <Link href="#history" className="flex items-center justify-between p-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                                    <div className="flex items-center gap-3">
                                        <History size={18} />
                                        Past Rides
                                    </div>
                                    <ChevronRight size={16} className="opacity-50" />
                                </Link>
                                <Link href="#billing" className="flex items-center justify-between p-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                                    <div className="flex items-center gap-3">
                                        <CreditCard size={18} />
                                        Billing & Payments
                                    </div>
                                    <ChevronRight size={16} className="opacity-50" />
                                </Link>
                                <Link href="#settings" className="flex items-center justify-between p-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                                    <div className="flex items-center gap-3">
                                        <Settings size={18} />
                                        Account Settings
                                    </div>
                                    <ChevronRight size={16} className="opacity-50" />
                                </Link>
                            </nav>
                            <div className="p-4 border-t border-gray-100">
                                <button className="flex items-center gap-3 p-3 w-full text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors">
                                    <LogOut size={18} />
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:w-3/4 space-y-8">

                        {/* Status Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-[30px] border border-navy/5 shadow-sm flex flex-col justify-center">
                                <p className="text-gray-500 font-medium mb-1">Upcoming Rides</p>
                                <p className="text-3xl font-playfair font-bold text-navy">2</p>
                            </div>
                            <div className="bg-white p-6 rounded-[30px] border border-navy/5 shadow-sm flex flex-col justify-center">
                                <p className="text-gray-500 font-medium mb-1">Completed Rides</p>
                                <p className="text-3xl font-playfair font-bold text-navy">14</p>
                            </div>
                            <div className="bg-navy p-6 rounded-[30px] shadow-sm flex flex-col justify-center relative overflow-hidden group hover:shadow-xl transition-all">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full" />
                                <p className="text-gray-300 font-medium mb-1 relative z-10">Wallet Balance</p>
                                <p className="text-3xl font-playfair font-bold text-gold relative z-10">$0.00</p>
                            </div>
                        </div>

                        {/* Upcoming Rides Section */}
                        <div className="bg-white rounded-[30px] border border-navy/5 shadow-sm overflow-hidden">
                            <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="text-2xl font-playfair font-bold text-navy">Upcoming Trips</h2>
                            </div>
                            <div className="p-8 space-y-6">

                                {/* Trip Card 1 */}
                                <div className="border border-gray-100 rounded-2xl p-6 hover:border-navy/20 transition-colors">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <div className="inline-block bg-navy/5 text-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                                                Confirmed
                                            </div>
                                            <p className="text-sm text-gray-500 font-medium">Tomorrow, Mar 5, 2026 • 8:30 AM</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-navy">Executive Sedan</p>
                                            <p className="text-sm text-gray-500">Conf: #LMR-8921</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 mb-8">
                                        <div className="w-8 flex flex-col items-center mt-1">
                                            <div className="w-3 h-3 rounded-full bg-navy" />
                                            <div className="w-0.5 h-12 bg-gray-200 my-1" />
                                            <div className="w-3 h-3 rounded-full border-2 border-gold bg-white" />
                                        </div>
                                        <div className="space-y-6 flex-1">
                                            <div>
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Pickup</p>
                                                <p className="font-medium text-navy">Four Seasons Hotel Miami</p>
                                                <p className="text-sm text-gray-500">1435 Brickell Ave, Miami, FL 33131</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Drop-off</p>
                                                <p className="font-medium text-navy">Miami International Airport (MIA)</p>
                                                <p className="text-sm text-gray-500">American Airlines Departure Terminal</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-6 border-t border-gray-100">
                                        <button className="flex-1 py-3 text-sm font-bold text-navy border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                            Modify Flight
                                        </button>
                                        <button className="flex-1 py-3 text-sm font-bold text-red-500 border border-red-100 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                                            Cancel Trip
                                        </button>
                                    </div>
                                </div>
                                {/* End Trip Card */}

                            </div>
                        </div>

                        {/* Recent History / Invoices */}
                        <div className="bg-white rounded-[30px] border border-navy/5 shadow-sm overflow-hidden">
                            <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="text-2xl font-playfair font-bold text-navy">Recent Invoices</h2>
                            </div>
                            <div className="p-0">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-widest text-gray-500">
                                        <tr>
                                            <th className="p-6 font-bold">Date</th>
                                            <th className="p-6 font-bold">Route</th>
                                            <th className="p-6 font-bold">Amount</th>
                                            <th className="p-6 font-bold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="p-6 font-medium text-navy">Feb 28, 2026</td>
                                            <td className="p-6 text-gray-600">Miami Beach ➝ MIA</td>
                                            <td className="p-6 font-medium text-navy">$185.00</td>
                                            <td className="p-6">
                                                <button className="text-gold font-bold hover:text-navy flex items-center gap-2 transition-colors">
                                                    <Download size={16} /> PDF
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="p-6 font-medium text-navy">Jan 14, 2026</td>
                                            <td className="p-6 text-gray-600">Hourly (As-Directed) 4HR</td>
                                            <td className="p-6 font-medium text-navy">$450.00</td>
                                            <td className="p-6">
                                                <button className="text-gold font-bold hover:text-navy flex items-center gap-2 transition-colors">
                                                    <Download size={16} /> PDF
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
