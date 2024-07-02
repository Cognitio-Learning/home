import Link from 'next/link';
import React from 'react';

export default function Content() {

    const pages = [
        {
            hover: "/python/content/pages/day-1",
            href: "/python/content/pages/day-1",
            title: "Day 1: Introduction to Python",
            description: "Learn the basics of Python programming language.",
        },
        {
            hover: "/python/content/pages/day-2",
            href: "/python/content/pages/day-2",
            title: "Day 2: Python Control Structures",
            description: "Learn about loops and conditional statements in Python.",
        },
        {
            hover: "/python/content/pages/day-3",
            href: "/python/content/pages/day-3",
            title: "Day 3: Functions and Modules",
            description: "Learn about functions and modules in Python.",
        }
    ]

    return (
        <div className="h-screen w-screen text-white flex justify-center items-center" >
            <div className='flex justify-center items-center md:w-3/4 flex-wrap gap-4 p-4'>
                {
                    pages.map((page, index) => {
                        return (
                            <Link
                                href={page.href}
                                key={index}
                                className=' border border-black bg-zinc-950 rounded-xl hover:bg-zinc-900'
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full" >
                                    <h3 className=" !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        {page.title}
                                    </h3>
                                    <div className="text-base !m-0 pb-4 font-normal">
                                        <span className="text-slate-500">
                                            {page.description}
                                        </span>
                                    </div>
                                </div>
                            </Link>


                        )
                    })
                }
            </div>
        </div >
    )
}
