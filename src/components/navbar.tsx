'use client';

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function NavBar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("sticky top-0 inset-x-0 w-full z-50 bg-white border-b border-black", className)}>
            <div className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-black tracking-tight">
                    <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                    Cognitio
                </Link>
                <div className="flex items-center gap-8 text-sm font-medium text-black uppercase tracking-wider">
                    <Link href="/programs/python" className="hover:text-purple-600 transition-colors">Programs</Link>
                    <Link href="/about" className="hover:text-purple-600 transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-purple-600 transition-colors">Contact</Link>
                </div>
            </div>
        </div>
    );
}
