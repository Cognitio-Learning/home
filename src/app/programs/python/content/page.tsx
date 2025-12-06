import Link from 'next/link';
import React from 'react';

export default function Content() {

    const pages = [
        {
            href: "/programs/python/content/pages/day-1",
            title: "Day 1: Introduction to Python",
            description: "Learn the basics of Python programming language.",
        },
        {
            href: "/programs/python/content/pages/day-2",
            title: "Day 2: Python Control Structures",
            description: "Learn about loops and conditional statements in Python.",
        },
        {
            href: "/programs/python/content/pages/day-3",
            title: "Day 3: Functions and Modules",
            description: "Learn about functions and modules in Python.",
        },
        {
            href: "/programs/python/content/pages/day-4",
            title: "Day 4: Introduction to AI concepts",
            description: "Learn about AI concepts",
        },
        {
            href: "/programs/python/content/pages/day-5",
            title: "Day 5: Building AI Projects",
            description: "Apply Python and AI concepts to build real projects.",
        }
    ]

    return (
        <main className="min-h-screen w-full bg-white text-black flex flex-col font-sans selection:bg-purple-100 border-x border-black mx-auto max-w-[1600px]">
            <div className="border-b border-black p-12 lg:p-24 bg-gray-50">
                <div className="inline-block px-3 py-1 border border-black rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-purple-600 text-white">Curriculum</div>
                <h1 className="text-5xl lg:text-7xl font-medium leading-[0.9] tracking-tighter mb-8 uppercase">
                    Intro to Python<br />
                    For AI
                </h1>
                <p className="text-lg text-gray-600 max-w-xl font-normal">
                    A comprehensive 5-day journey from basic programming concepts to building your first Artificial Intelligence projects.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    pages.map((page, index) => {
                        return (
                            <Link
                                href={page.href}
                                key={index}
                                className='group border-b border-r border-black p-8 hover:bg-purple-600 hover:text-white transition-all min-h-[250px] flex flex-col justify-between'
                            >
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50 group-hover:opacity-80 group-hover:text-white">Day 0{index + 1}</div>
                                    <h3 className="text-2xl font-bold uppercase tracking-wide mb-4 group-hover:text-white leading-tight">
                                        {page.title.replace(/Day \d+: /, "")}
                                    </h3>
                                </div>
                                <div className="text-sm text-gray-500 group-hover:text-white/90 font-normal">
                                    {page.description}
                                </div>
                            </Link>
                        )
                    })
                }
                
            </div>
            
        </main>
    )
}
