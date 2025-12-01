
import React from "react";

export default function MDXLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="min-h-screen w-full bg-white text-black flex flex-col font-sans selection:bg-purple-100 border-x border-black mx-auto max-w-[1600px]">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/4 border-r border-black p-8 hidden lg:block">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Contents</p>
                    {/* Table of contents could go here */}
                </div>
                <div className="lg:w-3/4 p-8 lg:p-12">
                    <div className="prose prose-neutral prose-lg max-w-none prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-h1:text-5xl prose-h2:text-3xl prose-p:text-gray-600 prose-a:text-purple-600 prose-strong:text-black">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}
