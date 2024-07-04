import Link from 'next/link';
import React from 'react';

export default function Contact() {
    return (
        <div className="flex justify-center items-center h-screen w-screen text-white ">
            <h1 className="text-4xl font-bold">Temporary form <Link href="/about" className='text-blue-500 underline'>here.</Link></h1>
        </div>
    )
}