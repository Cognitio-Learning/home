

import React from "react";

export default function MDXLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>

            <div className="text-white pt-24 h-auto w-screen justify-center items-center flex ">
                <div className="lg:w-1/2 prose prose-neutral prose-invert p-6">
                    {children}
                </div>
            </div>
        </>
    )
}