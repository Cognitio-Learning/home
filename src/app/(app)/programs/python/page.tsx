"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/shadcn/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn/ui/card";
import { Button } from "@/components/ui/shadcn/ui/button";
import { Separator } from "@/components/ui/shadcn/ui/separator";
import { IconBook, IconChevronDown, IconCode, IconRocket } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
/* import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/shadcn/ui/form"
import { Input } from "@/components/ui/shadcn/ui/input"
import { Textarea } from "@/components/ui/shadcn/ui/textarea";
import { Button } from "@/components/ui/shadcn/ui/button"; */
import React/*  { useEffect, useState }  */ from "react";
/* 
const formSchema = z.object({
    firstName: z.string()
        .min(2, {
            message: "First name must be at least 2 characters long",
        }),
    lastName: z.string()
        .min(2, {
            message: "Last name must be at least 2 characters long",
        }),
    grade: z.coerce.number().int()
        .positive()
        .min(4, {
            message: "Grade must be at least 4",
        })
        .max(12, {
            message: "Grade must be at most 12",
        }),
    kidsEmail: z.string()
        .email({
            message: "Invalid email address",
        }),
    parentsPhone: z.string()
        .min(10, {
            message: "Phone number must be at least 10 characters long",
        }),
    parentFirstName: z.string()
        .min(2, {
            message: "First name must be at least 2 characters long",
        }),
    parentLastName: z.string()
        .min(2, {
            message: "Last name must be at least 2 characters long",
        }),
    parentsEmail: z.string()
        .email({
            message: "Invalid email address",
        }),
    heardFrom: z.string()
}) */

export default function Python() {

    /* const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            grade: 4,
            kidsEmail: '',
            parentsPhone: '',
            parentFirstName: '',
            parentLastName: '',
            parentsEmail: '',
            heardFrom: ''
        }
    })

    const [registered, setRegistered] = useState(false) */

    /* const onSubmit = (data: z.infer<typeof formSchema>) => {
        setRegistered(false)
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if(data.message === 'Success') {
                setRegistered(true)
                form.reset({})
            } else {
                setRegistered(false)
            }
        })
    } */


    return (
        <div className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <section className="w-full max-w-7xl px-4 sm:px-6 py-24 md:py-32 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700">
                        Intro to Python for AI
                    </h1>
                    <p className="text-muted-foreground">
                        Welcome to &quot;Intro to Python for AI,&quot; a 5 day <span className="text-foreground font-semibold">beginner-friendly course</span> designed to introduce young learners to the exciting world of programming and AI. This bootcamp is perfect for kids aged <span className="text-foreground font-semibold">8-14</span> who are eager to explore the basics of Python and how it can be used to create intelligent applications.
                    </p>
                    
                    <Card className="bg-secondary/5 border-primary/10">
                        <CardContent className="p-6 space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <IconRocket className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold">Cost: <span className="text-green-500">FREE</span></p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <IconBook className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold">Age Group: 8-14 years</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <IconCode className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold">Further updates: <Link href='/#newsletter' className="text-primary hover:underline">Subscribe to our newsletter</Link></p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="#signup">
                            <Button size="lg" className="w-full sm:w-auto rounded-full">
                                Register Now
                            </Button>
                        </Link>
                        <Link href="/programs/python/content">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full">
                                View Content
                            </Button>
                        </Link>
                    </div>
                </div>
                
                <div className="lg:w-1/2 hidden lg:flex justify-center">
                    <Image 
                        src="/svg/teaching.svg" 
                        width={500} 
                        height={500} 
                        alt="Teaching illustration" 
                        className="max-w-md" 
                    />
                </div>
            </section>
            
            <Link href="#about" className="animate-bounce mt-4 mb-16">
                <div className="flex flex-col items-center">
                    <span className="text-sm text-muted-foreground mb-2">Learn More</span>
                    <IconChevronDown size={32} className="text-primary" />
                </div>
            </Link>
            
            {/* Course Structure Section */}
            <section id="about" className="w-full max-w-7xl px-4 sm:px-6 py-16 bg-secondary/5 rounded-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Course Structure</h2>
                    <Separator className="w-24 mx-auto bg-primary/50" />
                </div>
                
                <div className="flex flex-col items-center max-w-3xl mx-auto">
                    <Card className="w-full bg-background/70 border-primary/10 mb-12">
                        <CardHeader>
                            <CardTitle className="text-2xl">Intro to Python for AI</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                Through this bootcamp, students will learn the basics of Python, AI concepts, and implementation of AI. Students will develop critical thinking skills, problem-solving skills, and most importantly creativity.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <div className="space-y-2">
                                    <p className="font-semibold">Course Dates:</p>
                                    <p className="text-muted-foreground">July 15 - July 19, 2024</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-semibold">Time:</p>
                                    <p className="text-muted-foreground">4:00 PM - 5:30 PM</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-semibold">Location:</p>
                                    <p className="text-muted-foreground">Online</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-semibold">Links:</p>
                                    <p className="text-muted-foreground">Will be sent via our newsletter</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    
                    <Accordion type="multiple" className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Introduction and Basics of Python</AccordionTrigger>
                            <AccordionContent>
                                This section introduces participants to the bootcamp, outlining its goals and benefits, especially focusing on the advantages of learning and implementing AI. Participants will then dive into the basics of Python, covering fundamental concepts and building a strong foundation in programming. View day-by-day curriculum <Link href='/programs/python/content' className="text-primary hover:underline">here</Link>.
                            </AccordionContent>
                        </AccordionItem>
                        {/* <AccordionItem value="item-2">
                            <AccordionTrigger> Introduction to AI and Implementation</AccordionTrigger>
                            <AccordionContent>
                                This section introduces participants to AI concepts and how to implement them using Python. Participants will learn the basics of machine learning and AI, explore different AI models, and implement simple AI algorithms. View day-by-day curriculum <Link href='/programs/python/content' className="text-blue-500">here</Link>.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Basics of Fullstack and AI Backend</AccordionTrigger>
                            <AccordionContent>
                                This section introduces participants to the basics of HTML and fullstack web development. Participants will learn how to create a simple web application that takes user input, processes it with a backend AI model, and displays the response on the web page. View day-by-day curriculum <Link href='/programs/python/content' className="text-blue-500">here</Link>.
                            </AccordionContent>
                        </AccordionItem> */}
                    </Accordion>
                </div>
            </section>
            
            {/* Sign Up Section */}
            <section id="signup" className="w-full max-w-7xl px-4 sm:px-6 py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 hidden lg:block">
                        <Image 
                            src="/svg/signup.svg" 
                            width={500} 
                            height={500} 
                            alt="Sign up illustration" 
                            className="max-w-md" 
                        />
                    </div>
                    
                    <div className="lg:w-1/2 space-y-6">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
                            <Separator className="w-24 mx-auto lg:mx-0 bg-primary/50 mb-6" />
                        </div>
                        
                        <Card className="bg-background/70 border-primary/10">
                            <CardContent className="p-6">
                                <p className="text-muted-foreground leading-relaxed">
                                    Sign ups have been officially closed for 2024. Thank you to everyone who participated! We&apos;ll be hosting similar bootcamps next summer. Join our newsletter to stay updated!
                                </p>
                                
                                <div className="mt-8">
                                    <Link href="/#newsletter">
                                        <Button className="w-full rounded-full">
                                            Subscribe to Newsletter
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}