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
        <main className="min-h-screen w-full bg-white text-black flex flex-col font-sans selection:bg-purple-100 border-x border-black mx-auto max-w-[1600px]">
            {/* Hero / About Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-black min-h-[80vh]">
                <div className='border-r border-black p-12 lg:p-24 flex flex-col justify-center'>
                    <div className="inline-block self-start px-4 py-2 border border-black text-xs font-bold uppercase tracking-widest mb-8 bg-purple-600 text-white">Our Mission</div>
                    <h1 className="text-5xl lg:text-7xl font-medium leading-[0.9] tracking-tighter mb-8 uppercase">
                        Simplified<br />
                        Learning for<br />
                        The Next<br />
                        Generation.
                    </h1>
                    <p className='text-lg lg:text-xl text-gray-600 max-w-md leading-relaxed mb-12 font-normal'>
                        At Cognitio Learning, we believe in empowering the next generation with the language of the future: <span className='font-bold text-purple-600'>CODE</span>. We&apos;re dedicated to making computer science education accessible, engaging, fun, and most importantly, <span className='font-bold text-black underline decoration-purple-600 decoration-2 underline-offset-4'>SIMPLE</span> for young learners.
                    </p>
                    <Link href="/programs/python">
                        <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-purple-600 transition-colors border border-black w-full sm:w-auto">
                            Join A Cohort
                        </button>
                    </Link>
                </div>
                <div className="relative bg-gray-50 border-t lg:border-t-0 border-black flex items-center justify-center overflow-hidden p-12">
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-10 pointer-events-none">
                        {[...Array(36)].map((_, i) => (
                            <div key={i} className="border border-black/20"></div>
                        ))}
                    </div>
                    <div className="relative z-10 border border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(147,51,234,1)] max-w-md">
                        <h3 className='text-2xl font-bold uppercase tracking-wide mb-4 border-b border-black pb-4'>Our Story</h3>
                        <p className='text-gray-600 leading-relaxed'>
                            The spark for Cognitio Learning ignited from a personal realization. While discovering a passion for programming later in life, we recognized the immense potential impact of an early exposure to programming. Countless young minds possess the curiosity and aptitude to excel, but often lack the opportunity to discover them at a crucial developmental stage.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-black min-h-[80vh]">
                <div className='hidden lg:flex border-r border-black p-12 lg:p-24 flex-col justify-center bg-purple-600 text-white'>
                    <h2 className='text-5xl lg:text-7xl font-medium mb-8 tracking-tight'>Get In Touch</h2>
                    <p className='text-xl text-white/90 max-w-md leading-relaxed font-normal mb-12'>
                        We&apos;d love to hear from you! Whether you have questions about our programs, want to partner with us, or just want to say hello.
                    </p>
                    <div className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center animate-spin-slow">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                </div>
                
                <div className="p-12 lg:p-24 flex flex-col justify-center">
                    <h2 className="font-bold text-3xl uppercase tracking-widest mb-8 lg:hidden">Contact Us</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full max-w-lg">
                            <div className="flex flex-col gap-8 w-full">
                                <div className="flex flex-col md:flex-row gap-8 w-full">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</FormLabel>
                                                <FormControl>
                                                    <Input  {...field} className="uppercase bg-transparent border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-purple-600 transition-colors rounded-none border-t-0 border-x-0 focus-visible:ring-0 placeholder:text-gray-300" placeholder="JANE" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</FormLabel>
                                                <FormControl>
                                                    <Input {...field} className="uppercase bg-transparent border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-purple-600 transition-colors rounded-none border-t-0 border-x-0 focus-visible:ring-0 placeholder:text-gray-300" placeholder="DOE" />
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
                                            <FormLabel className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</FormLabel>
                                            <FormControl>
                                                <Input  {...field} className="uppercase bg-transparent border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-purple-600 transition-colors rounded-none border-t-0 border-x-0 focus-visible:ring-0 placeholder:text-gray-300" placeholder="JANE@EXAMPLE.COM" />
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
                                            <FormLabel className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</FormLabel>
                                            <FormControl>
                                                <Textarea  {...field} className="bg-transparent border-b-2 border-gray-200 px-0 py-2 text-black focus:outline-none focus:border-purple-600 transition-colors rounded-none border-t-0 border-x-0 focus-visible:ring-0 resize-none min-h-[100px] placeholder:text-gray-300" placeholder="HOW CAN WE HELP?" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <button type="submit" className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-purple-600 transition-colors border border-black self-start mt-4">
                                Send Message
                            </button>
                            {
                                messaged && <p className="text-purple-600 font-bold mt-4">Message sent! We&apos;ll be in touch soon.</p>
                            }
                        </form>
                    </Form>
                </div>
            </div>
        </main>
    )
}
