"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/shadcn/ui/accordion";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Python() {

    return (
        <main className="min-h-screen w-full bg-white text-black flex flex-col font-sans selection:bg-purple-100 border-x border-black mx-auto max-w-[1600px]">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-black min-h-[85vh]">
                <div className="border-r border-black p-12 lg:p-24 flex flex-col justify-center">
                    <div className="inline-block self-start px-4 py-2 border border-black text-xs font-bold uppercase tracking-widest mb-8 bg-purple-600 text-white">Bootcamp</div>
                    <h1 className="text-5xl lg:text-7xl font-medium leading-[0.9] tracking-tighter mb-8 uppercase">
                        Intermediate<br />
                        Data Science<br />
                        & ML
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-md leading-relaxed mb-12 font-normal">
                        Welcome to our <span className="text-purple-600 font-bold">intermediate bootcamp</span> designed for learners ready to dive deeper into data analysis, visualization, and machine learning with Python.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 mb-12 border border-black p-6 bg-gray-50">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Cost</p>
                            <p className="text-xl font-bold">100% FREE</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Age Group</p>
                            <p className="text-xl font-bold">10-14 Years</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Format</p>
                            <p className="text-xl font-bold">Online</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Duration</p>
                            <p className="text-xl font-bold">5 Days</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#signup">
                            <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-purple-600 transition-colors border border-black w-full sm:w-auto">
                                Register Now
                            </button>
                        </Link>
                        <Link href="/programs/intermed/content">
                            <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors border border-black w-full sm:w-auto">
                                View Curriculum
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="relative bg-white border-t lg:border-t-0 border-black flex items-center justify-center overflow-hidden p-12">
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <Image src="/svg/teaching.svg" width={500} height={100} alt="teaching" className="w-full max-w-lg drop-shadow-2xl" />
                </div>
            </div>

            {/* Course Structure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-black" id="about">
                <div className="border-r border-black p-12 lg:p-24 bg-gray-50">
                    <h2 className="text-4xl font-medium leading-tight tracking-tighter mb-8 uppercase">Course Structure</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        This bootcamp advances beyond the basics, teaching students to work with real datasets using Pandas, create professional visualizations, and build machine learning models. Students will strengthen their analytical thinking and data-driven problem-solving skills.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                            <div>
                                <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Data Analysis</h3>
                                <p className="text-sm text-gray-600">Master Pandas, data cleaning, and manipulation.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">2</div>
                            <div>
                                <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Visualization</h3>
                                <p className="text-sm text-gray-600">Create charts with Matplotlib and Seaborn.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">3</div>
                            <div>
                                <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Machine Learning</h3>
                                <p className="text-sm text-gray-600">Build and train ML models with Scikit-Learn.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="p-12 lg:p-24">
                    <Accordion type="multiple" className="w-full">
                        <AccordionItem value="item-1" className="border-b border-black">
                            <AccordionTrigger className="hover:no-underline hover:text-purple-600 uppercase font-bold tracking-wider text-sm py-6">Advanced Python & Data Science Tools</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                                This bootcamp is designed for students who already understand Python fundamentals. We focus on practical data science tools: working with complex data structures, analyzing real datasets with Pandas, creating visualizations, and building machine learning models with Scikit-Learn. View day-by-day curriculum <Link href='/programs/intermed/content' className="text-purple-600 font-bold hover:underline">here</Link>.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            {/* Sign Up Section */}
            <div className="bg-purple-600 text-white p-12 lg:p-24 border-b border-black" id="signup">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-6xl font-medium leading-tight tracking-tighter mb-8 uppercase">Sign Up Closed</h2>
                    <p className="text-xl text-white/90 leading-relaxed mb-12">
                        Sign ups have been officially closed for 2025. Thank you to everyone who participated! We&apos;ll be hosting similar bootcamps next summer. Join our newsletter to stay updated!
                    </p>
                    <Link href="/#newsletter">
                        <button className="bg-white text-purple-600 px-10 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors border border-white">
                            Join Waitlist
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
