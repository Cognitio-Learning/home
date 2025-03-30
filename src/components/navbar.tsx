'use client';

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Button } from "./ui/shadcn/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function NavBar({ className }: { className?: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div
            className={cn("fixed top-0 inset-x-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border/40 py-2", className)}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/svg/logo.svg" width={40} height={40} alt="Cognitio Logo" className="h-8 w-auto" />
                    <span className="font-bold text-lg hidden sm:inline-block">Cognitio Learning</span>
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <div className="relative group">
                        <span className="font-medium cursor-pointer hover:text-primary transition-colors">
                            Programs
                        </span>
                        <div className="absolute left-0 top-full w-48 pt-2 hidden group-hover:block">
                            <div className="bg-background backdrop-blur-md border border-border/40 rounded-md shadow-lg p-3">
                                <Link href="/programs/python" className="block px-3 py-2 rounded-md hover:bg-secondary/40 transition-colors">
                                    Python for AI
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/about" className="font-medium hover:text-primary transition-colors">
                        About Us
                    </Link>
                    <Link href="/contact" className="font-medium hover:text-primary transition-colors">
                        Contact
                    </Link>
                    <Link href="/team" className="font-medium hover:text-primary transition-colors">
                        Team
                    </Link>
                </nav>
                
                <div className="hidden md:flex items-center space-x-2">
                    <ThemeToggle />
                    <Link href="/#newsletter">
                        <Button size="sm" variant="secondary" className="rounded-full font-medium">Subscribe</Button>
                    </Link>
                </div>
                
                {/* Mobile Menu Button */}
                <div className="flex items-center space-x-2 md:hidden">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
                        {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                    </Button>
                </div>
            </div>
            
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden pt-2 pb-4 px-4 sm:px-6 border-t border-border/40 bg-background/80 backdrop-blur-md">
                    <div className="space-y-1">
                        <div className="py-2">
                            <div className="px-3 py-2 font-medium">Programs</div>
                            <Link href="/programs/python" className="block px-6 py-2 text-sm rounded-md hover:bg-secondary/40 transition-colors">
                                Python for AI
                            </Link>
                        </div>
                        <Link href="/about" className="block px-3 py-2 rounded-md hover:bg-secondary/40 transition-colors">
                            About Us
                        </Link>
                        <Link href="/contact" className="block px-3 py-2 rounded-md hover:bg-secondary/40 transition-colors">
                            Contact
                        </Link>
                        <Link href="/team" className="block px-3 py-2 rounded-md hover:bg-secondary/40 transition-colors">
                            Team
                        </Link>
                        <div className="pt-4 pb-2">
                            <Link href="/#newsletter" className="block w-full">
                                <Button size="sm" className="w-full rounded-md font-medium">Subscribe</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}