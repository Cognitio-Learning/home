import { IconBrandPaypal } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen text-white p-6">
            <Image src="/svg/thank_you.svg" alt="Contact Us" width={350} height={350} className='w-3/4 lg:w-[35rem]'/>
            <div className='w-full lg:w-[40rem] pt-20'>
                <h1 className='font-bold text-3xl'>Make a donation!</h1>
                <p className='text-body-text'>We are a non-profit organization that relies on donations to keep our platform running. Your donation will help us continue to provide free educational resources to students around the world.</p>
            </div>
            <div className='flex gap-4 pt-8 items-center'>
                <IconBrandPaypal size={48} />
                <p className='font-semibold'>wgeemail@yahoo.com</p>
            </div>
        </div>
    )
}