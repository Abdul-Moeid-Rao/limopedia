"use client";
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className="mb-12">
                <h1 className="text-4xl font-playfair font-bold text-navy mb-3">Welcome Back</h1>
                <p className="text-gray-500 font-medium">Log in to manage your bookings and account.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                    <div className="relative group">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold transition-colors" size={20} />
                        <input
                            type="email"
                            placeholder="name@company.com"
                            className="w-full h-16 pl-14 pr-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-gold focus:bg-white transition-all font-medium text-navy placeholder:text-gray-300"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between px-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
                        <button type="button" className="text-[10px] font-black uppercase tracking-widest text-gold hover:underline">Forgot Password?</button>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold transition-colors" size={20} />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full h-16 pl-14 pr-14 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-gold focus:bg-white transition-all font-medium text-navy placeholder:text-gray-300"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gold transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3 py-2">
                    <input
                        type="checkbox"
                        id="remember"
                        className="w-5 h-5 rounded-lg border-gray-200 text-gold focus:ring-gold"
                    />
                    <label htmlFor="remember" className="text-sm font-bold text-navy select-none cursor-pointer">Remember me</label>
                </div>

                <button className="btn-gold w-full h-16 text-sm flex items-center justify-center gap-4 group">
                    Log In
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100" /></div>
                    <div className="relative flex justify-center text-xs uppercase tracking-[0.3em] font-black"><span className="bg-white px-4 text-gray-300">or continue with</span></div>
                </div>

                <button type="button" className="w-full h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center gap-4 hover:border-gold transition-colors group">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span className="text-sm font-bold text-navy group-hover:text-gold transition-colors">Sign in with Google</span>
                </button>
            </form>
        </div>
    );
}
