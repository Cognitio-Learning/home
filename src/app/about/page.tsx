"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/shadcn/ui/form"
import { Textarea } from '@/components/ui/shadcn/ui/textarea';
import { Input } from '@/components/ui/shadcn/ui/input';

const formSchema = z.object({
    firstName: z.string()
        .min(2, {
            message: "First name must be at least 2 characters long",
        }),
    lastName: z.string()
        .min(2, {
            message: "Last name must be at least 2 characters long",
        }),
    email: z.string()
        .email({
            message: "Invalid email address",
        }),
    message: z.string()
        .min(10, {
            message: "Message must be at least 10 characters long",
        })
})

export default function About() {
    const [messaged, setMessaged] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        setMessaged(false)
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if (data.message === 'Success') {
                setMessaged(true)
            } else {
                setMessaged(false)
            }
        })
    }

    return (
        <div className="flex justify-center items-center min-h-screen w-screen text-white flex-col p-6">
            <div className='flex justify-center gap-8 flex-col lg:flex-row lg:px-8 items-center mb-20 h-screen'>
                <div className='w-full lg:w-[35rem] '>
                    <h1 className='text-body-text font-semibold text-md uppercase'>About Us</h1>
                    <h3 className='text-3xl lg:text-5xl text-white font-semibold leading-tight'>Simplified learning for the next generation.</h3>
                    <p className='text-body-text leading-relaxed'>At Cognitio Learning, we believe in empowering the next generation with the language of the future: <span className='font-semibold text-white'>code</span>. We're dedicated to making computer science education accessible, engaging, fun, and most importantly, <span className='font-semibold text-white underline'>simple</span> for young learners. We equip them with the skills and confidence to thrive in our increasingly technology-driven world.</p>
                    <Link href="/programs/python"><button className="bg-primary py-2 px-6 mt-10 lg:mt-20 font-semibold rounded-lg hover:opacity-80">Sign Up</button></Link>
                </div>
                <Image src="/svg/people.svg" width={450} height={80} alt="teaching" className="w-2/3 lg:w-[40rem] hidden lg:block" />
            </div>
            <div className='flex justify-center text-center flex-col items-center w-full lg:w-1/3'>
                <h1 className='text-body-text font-semibold text-md uppercase'>Our Story</h1>
                <h3 className='text-2xl lg:text-3xl text-white font-semibold leading-tight'>The story of Cognitio Learning</h3>
                <p className='text-body-text leading-loose pt-8'>The spark for Cognitio Learning ignited from a personal realization. While discovering a passion for programming later in life, we recognized the immense potential impact of an early exposure to programming. Countless young minds possess the curiosity and aptitude to excel, but often lack the opportunity to discover them at a crucial developmental stage. Driven by this belief, we've dedicated ourselves to bridging this gap, ensuring that the next generation has the chanace to explore the exciting possibilities of technology from a young age.</p>
            </div>
            
            {/* Team section */}
            {/* testimonials :( */}

            <div className='flex justify-center gap-8 flex-col lg:flex-row lg:px-8 items-center mb-20 h-screen'>
                <div className='hidden lg:block w-full lg:w-[35rem] '>
                    <h1 className='text-body-text font-semibold text-md uppercase'>Contact Us</h1>
                    <h3 className='text-2xl lg:text-3xl text-white font-semibold leading-tight pb-6'>We'd love to hear from you! Let's get in touch.</h3>
                    <Image src="/svg/search.svg" width={450} height={80} alt="teaching" className="w-2/3 lg:w-[30rem] hidden lg:block" />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col items-center">
                    <h1 className="font-bold text-3xl mb-4">Send us a message!</h1>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col gap-4 w-full">
                                <div className="grow flex gap-4 w-full">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem className="w-1/2">
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input  {...field} className="bg-white text-black" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem className="w-1/2">
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input {...field} className="bg-white text-black" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input  {...field} className="bg-white text-black" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea  {...field} className="bg-white text-black resize-none" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <button type="submit" className="bg-primary py-2 font-semibold rounded-lg hover:opacity-80">Send Message</button>
                            {
                                messaged && <p className="text-green-500">Sent message! We'll reply through the email you provided!</p>
                            }
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}