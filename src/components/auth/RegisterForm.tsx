"use client";
import React, { useState } from 'react';
import { User, Mail, Lock, Phone, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const getPasswordStrength = () => {
        if (!password) return 0;
        let strength = 0;
        if (password.length > 8) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        if (/[^A-Za-z0-9]/.test(password)) strength += 25;
        return strength;
    };

    const strength = getPasswordStrength();
    const strengthColor = strength <= 25 ? "bg-red-500" : strength <= 50 ? "bg-orange-500" : strength <= 75 ? "bg-yellow-500" : "bg-green-500";
    const strengthText = strength <= 25 ? "Weak" : strength <= 50 ? "Fair" : strength <= 75 ? "Good" : "Excellent";

    return (
        <div>
            <div className="mb-12">
                <h1 className="text-4xl font-playfair font-bold text-navy mb-3">Create Account</h1>
                <p className="text-gray-500 font-medium">Join thousands of satisfied passengers.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">First Name</label>
                        <div className="relative group">
                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold transition-colors" size={20} />
                            <input type="text" placeholder="John" className="w-full h-16 pl-14 pr-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-gold focus:bg-white transition-all font-medium text-navy placeholder:text-gray-300" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
                        <input type="text" placeholder="Doe" className="w-full h-16 px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-gold focus:bg-white transition-all font-medium text-navy placeholder:text-gray-300" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                    <div className="relative group">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold transition-colors" size={20} />
                        <input type="email" placeholder="john@example.com" className="w-full h-16 pl-14 pr-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-gold focus:bg-white transition-all font-medium text-navy placeholder:text-gray-300" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                    <div className="relative group">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold transition-colors" size={20} />
                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full h-16 pl-14 pr-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-gold focus:bg-white transition-all font-medium text-navy placeholder:text-gray-300" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Password</label>
                    <div className="relative group">
                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold transition-colors" size={20} />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-16 pl-14 pr-14 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-gold focus:bg-white transition-all font-medium text-navy placeholder:text-gray-300"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gold transition-colors">
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {password && (
                        <div className="px-1 pt-2">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Strength: {strengthText}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{strength}%</span>
                            </div>
                            <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className={`h-full ${strengthColor} transition-all duration-500`} style={{ width: `${strength}%` }} />
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-y-3 py-2">
                    <div className="flex items-start gap-3">
                        <input type="checkbox" id="terms" className="mt-1 w-5 h-5 rounded-lg border-gray-200 text-gold focus:ring-gold" />
                        <label htmlFor="terms" className="text-xs font-bold text-navy leading-relaxed select-none cursor-pointer">
                            I agree to the <Link href="#" className="text-gold underline">Terms of Service</Link> and <Link href="#" className="text-gold underline">Privacy Policy</Link>
                        </label>
                    </div>
                    <div className="flex items-start gap-3">
                        <input type="checkbox" id="marketing" className="mt-1 w-5 h-5 rounded-lg border-gray-200 text-gold focus:ring-gold" />
                        <label htmlFor="marketing" className="text-xs font-bold text-navy leading-relaxed select-none cursor-pointer">
                            Send me booking confirmations and offers via email
                        </label>
                    </div>
                </div>

                <button className="btn-gold w-full h-16 text-sm flex items-center justify-center gap-4 group">
                    Create Account
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </div>
    );
}
