"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/shadcn/ui/accordion";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
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
import { Button } from "@/components/ui/shadcn/ui/button";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

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
})

export default function Python() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        setRegistered(false)
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            console.log(data)
            setRegistered(true)
        })
    }

    const [registered, setRegistered] = useState(false)

    /* useEffect(() => {
        if(form.formState.isSubmitSuccessful) {
            form.reset({})
        }
    }, [form.formState, form.reset]) */

    return (
        <div className="flex flex-col items-center justify-center w-screen text-white p-3">
            <div className="flex justify-center gap-8 flex-col lg:flex-row px-8 items-center mb-20 h-screen">
                <div className="w-full lg:w-[35rem]">
                    <h1 className="text-4xl font-bold">Intro to Python for AI</h1>
                    <p className="text-lg text-body-text tracking-tight mt-4">Welcome to "Intro to Python for AI," a <span className="text-white font-semibold">beginner-friendly course</span> designed to introduce young learners to the exciting world of programming and AI. This bootcamp is perfect for kids aged <span className="text-white font-semibold">8-14</span> who are eager to explore the basics of Python and how it can be used to create intelligent.</p>
                    <Link href="#signup"><button className="bg-primary py-2 px-6 mt-10 lg:mt-20 font-semibold rounded-lg hover:opacity-80">Register Now</button></Link>

                </div>
                <Image src="/svg/teaching.svg" width={500} height={100} alt="teaching" className="w-2/3 lg:w-[40rem] hidden lg:block" />
            </div>
            <Link href="#about" className="-mt-[10rem]"><IconChevronDown size={32} className=" animate-bounce" /></Link>
            <div className="pt-20 lg:pt-[15rem] pb-20 justify-center flex flex-col items-center w-full" id="about">
                <h1 className="font-bold text-3xl">Course Structure</h1>
                <div className="flex flex-col items-center gap-20 w-full md:w-3/4 lg:w-1/2">
                    <div className="">
                        <h2 className="text-2xl font-semibold text-center lg:text-start mt-8 lg:mt-0">Intro to Python for AI</h2>
                        <p className="text-lg text-body-text tracking-tight mt-4 text-center lg:text-start ">Through this bootcamp, students will learn the basics of python, basic AI concepts, implementation of AI, and the essentials of fullstack web development. Students will develop critical thinking skills, problem solving skills, and most importantly creatvitiy. </p>
                    </div>
                    <Accordion type="multiple" className="w-full" >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Introduction and Basics of Python</AccordionTrigger>
                            <AccordionContent>
                                This section introduces participants to the bootcamp, outlining its goals and benefits, especially focusing on the advantages of learning and implementing AI. Participants will then dive into the basics of Python, covering fundamental concepts and building a strong foundation in programming. View day-by-day curriculum <Link href='/' className="text-blue-500">here</Link>.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger> Introduction to AI and Implementation</AccordionTrigger>
                            <AccordionContent>
                                This section introduces participants to AI concepts and how to implement them using Python. Participants will learn the basics of machine learning and AI, explore different AI models, and implement simple AI algorithms. View day-by-day curriculum <Link href='/' className="text-blue-500">here</Link>.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Basics of Fullstack and AI Backend</AccordionTrigger>
                            <AccordionContent>
                                This section introduces participants to the basics of HTML and fullstack web development. Participants will learn how to create a simple web application that takes user input, processes it with a backend AI model, and displays the response on the web page. View day-by-day curriculum <Link href='/' className="text-blue-500">here</Link>.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="mt-20 lg:w-1/2 flex flex-col items-center" id="signup">
                    <div className="w-full flex gap-4">
                        <Image src="/svg/signup.svg" width={100} height={100} alt="teaching" className="w-1/2 hidden lg:block" />
                        <div className="lg:w-1/2 w-full flex flex-col items-center">
                            <h1 className="font-bold text-3xl mb-4">Sign Up</h1>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                                    <div className="flex flex-col gap-4 w-full">
                                        <div className="grow flex gap-4 w-full">
                                            <FormField
                                                control={form.control}
                                                name="firstName"
                                                render={({ field }) => (
                                                    <FormItem className="w-1/2">
                                                        <FormLabel>Student's First Name</FormLabel>
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
                                                        <FormLabel>Student's Last Name</FormLabel>
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
                                            name="kidsEmail"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Student's Email</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} className="bg-white text-black" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="grade"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Grade</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} className="bg-white text-black" />
                                                    </FormControl>
                                                    <FormDescription>
                                                        This course is recommended for students in grades 4-8 in the upcoming school year.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="grow flex gap-4 w-full">
                                            <FormField
                                                control={form.control}
                                                name="parentFirstName"
                                                render={({ field }) => (
                                                    <FormItem className="w-1/2">
                                                        <FormLabel>Parent's First Name</FormLabel>
                                                        <FormControl>
                                                            <Input  {...field} className="bg-white text-black" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="parentLastName"
                                                render={({ field }) => (
                                                    <FormItem className="w-1/2">
                                                        <FormLabel>Parent's Last Name</FormLabel>
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
                                            name="parentsPhone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Parent's Phone</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} className="bg-white text-black" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <FormField
                                            control={form.control}
                                            name="parentsEmail"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Parent's Email</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} className="bg-white text-black" />
                                                    </FormControl>
                                                    <FormDescription>
                                                        Please provide an email address that you check regularly. We will use this email address to send you important information about the bootcamp.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="heardFrom"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>How did you hear about us?</FormLabel>
                                                    <FormControl>
                                                        <Textarea {...field} className="bg-white text-black resize-none" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Button type="submit" className="bg-primary py-2 font-semibold rounded-lg hover:opacity-80">Register Now</Button>
                                    {
                                        registered && <p className="text-green-500">Successfully registered!</p>
                                    }
                                </form>
                            </Form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}