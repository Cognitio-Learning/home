import { IconBrandGithubFilled, IconBrandInstagram, IconMail } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className="w-full h-[15rem] lg:h-[30rem] bg-gradient-to-t from-black to-main-bg flex justify-center">
            <div className="lg:w-2/3 w-full flex justify-between items-center flex-col lg:flex-row p-6">
                <div className="flex flex-col gap-8 lg:flex-row items-center lg:justify-between w-full">
                    <Image src="/svg/logo.svg" width={200} height={100} alt="logo" className="hidden lg:block" />
                    <div className="flex flex-col items-center md:items-start text-white lg:p-8">
                        <h1 className="text-xl lg:text-4xl font-bold text-center md:text-start">Cognitio Learning</h1>
                        <p className="text-md lg:text-lg text-center">Simplified learning for the next generation.</p>
                    </div>
                </div>

                <div className="flex flex-col  text-white p-8 items-center w-full">
                    <h1 className="text-xl lg:text-3xl font-bold hidden lg:block">Contact Us</h1>
                    <div className='flex gap-4'>
                        <Link href="mailto:contact.cognitiolearning@gmail.com"><IconMail stroke={2} size={36} className="hover:cursor-pointer" /></Link>
                        <Link href="https://www.instagram.com/cognitio.learning"><IconBrandInstagram stroke={2} size={36} className="hover:cursor-pointer" /></Link>
                        <Link href="https://github.com/Cognitio-Learning"><IconBrandGithubFilled stroke={2} size={36} color="black" className="hover:cursor-pointer bg-white rounded-full py-1 pb-0" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}