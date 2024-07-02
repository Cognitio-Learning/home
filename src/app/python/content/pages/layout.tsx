

import React from "react";

export default function MDXLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>

            <div className="text-white pt-24 h-auto lg:h-screen w-screen justify-center items-center flex ">
                <div className="lg:w-1/2 prose prose-neutral dark:prose-invert p-6">
                    {children}
                </div>
            </div>
        </>
    )
}