'use client'

import { SparklesCore } from "@/components/ui/ace/sparkles";
import { IconAffiliate, IconBook, IconRocket, IconSchool } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/shadcn/ui/form"

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address."
  })
})


export default function Home() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setLoading(true)
    setSubscribed(false)
    fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
      if (data.message === "Success") {
        setSubscribed(true)
        setLoading(false)
        form.reset({})
      }
    })
  }

  return (
    <main className="min-h-screen w-full bg-white text-black flex flex-col font-sans selection:bg-purple-100 border-x border-black mx-auto max-w-[1600px]">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-black min-h-[85vh]">
        {/* Left Column */}
        <div className="relative flex flex-col justify-between p-6 lg:p-12 border-r border-black">
          <div className="mt-12 lg:mt-24">
            <div className="inline-block px-3 py-1 border border-black rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-purple-600 text-white">Nonprofit Organization</div>
            <h1 className="text-5xl lg:text-8xl font-medium leading-[0.9] tracking-tighter mb-8 uppercase">
              Free Summer<br />
              Cohorts for<br />
              Middle<br />
              Schoolers.
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-md leading-relaxed mb-12 font-normal">
              Cognitio Learning provides free, high-quality computer science and AI bootcamps. We empower the next generation with the skills to solve real-world problems.
            </p>
          </div>
          
          <div className="flex flex-row w-full border-y border-black -mx-6 lg:-mx-12 mt-12 md:mt-0">
            <Link href="#programs" className="flex-1 border-r border-black py-8 px-8 hover:bg-gray-50 transition-colors flex items-center justify-center group">
               <span className="font-bold text-sm tracking-widest uppercase group-hover:text-purple-600 transition-colors">Our Programs</span>
            </Link>
            <Link href="#newsletter" className="flex-1 border-r border-black py-8 px-8 hover:bg-gray-50 transition-colors flex items-center justify-center group">
               <span className="font-bold text-sm tracking-widest uppercase group-hover:text-purple-600 transition-colors">Join Waitlist</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="relative bg-white flex items-center justify-center overflow-hidden border-t lg:border-t-0 border-black lg:border-l-0">
             <div className="absolute inset-0 w-full h-full opacity-20">
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={400}
                    className="w-full h-full"
                    particleColor="#000000"
                />
             </div>
             
             {/* Abstract Network - Knowledge Graph */}
             <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
                <div className="relative w-full max-w-lg aspect-square border border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    {/* Nodes and Connections */}
                    <svg className="absolute inset-0 w-full h-full p-12" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {/* Connections */}
                        <line x1="200" y1="200" x2="100" y2="100" className="text-gray-300" />
                        <line x1="200" y1="200" x2="300" y2="100" className="text-gray-300" />
                        <line x1="200" y1="200" x2="100" y2="300" className="text-gray-300" />
                        <line x1="200" y1="200" x2="300" y2="300" className="text-gray-300" />
                        <line x1="100" y1="100" x2="300" y2="100" className="text-gray-200" />
                        <line x1="100" y1="300" x2="300" y2="300" className="text-gray-200" />
                        <line x1="100" y1="100" x2="100" y2="300" className="text-gray-200" />
                        
                        {/* Central Node */}
                        <circle cx="200" cy="200" r="40" className="fill-white stroke-black stroke-2" />
                        <text x="200" y="205" textAnchor="middle" className="text-xs font-bold uppercase fill-black stroke-none" style={{fontSize: '10px'}}>Cognitio</text>

                        {/* Peripheral Nodes */}
                        <g className="hover:scale-110 transition-transform origin-[100px_100px] cursor-crosshair">
                            <circle cx="100" cy="100" r="25" className="fill-purple-600 stroke-black stroke-2" />
                            <text x="100" y="105" textAnchor="middle" className="text-xs font-bold uppercase fill-white stroke-none">AI</text>
                        </g>

                        <g className="hover:scale-110 transition-transform origin-[300px_100px] cursor-crosshair">
                            <circle cx="300" cy="100" r="25" className="fill-white stroke-black stroke-2" />
                            <text x="300" y="105" textAnchor="middle" className="text-xs font-bold uppercase fill-black stroke-none">Code</text>
                        </g>

                        <g className="hover:scale-110 transition-transform origin-[100px_300px] cursor-crosshair">
                            <circle cx="100" cy="300" r="25" className="fill-white stroke-black stroke-2" />
                            <text x="100" y="305" textAnchor="middle" className="text-xs font-bold uppercase fill-black stroke-none">Logic</text>
                        </g>

                        <g className="hover:scale-110 transition-transform origin-[300px_300px] cursor-crosshair">
                            <circle cx="300" cy="300" r="25" className="fill-white stroke-black stroke-2" />
                            <text x="300" y="305" textAnchor="middle" className="text-xs font-bold uppercase fill-black stroke-none">Math</text>
                        </g>
                        
                        {/* Decor */}
                        <rect x="350" y="350" width="20" height="20" className="fill-black" />
                        <rect x="30" y="30" width="20" height="20" className="fill-purple-600" />
                    </svg>
                </div>
             </div>
        </div>
      </div>

      {/* Stats / Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-black">
         <div className="border-b md:border-b-0 md:border-r border-black p-12 flex items-center justify-center hover:bg-gray-50 transition-colors h-40">
            <div className="text-left w-full">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Mission Driven</p>
                <p className="text-2xl font-bold text-purple-600">100% <span className="text-black">Free</span></p>
                <p className="text-sm text-black mt-1">for all students.</p>
            </div>
         </div>
         <div className="border-b md:border-b-0 md:border-r border-black p-12 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors h-40 group gap-2">
             <IconRocket size={40} stroke={1} className="group-hover:text-purple-600 transition-colors" />
             <span className="font-bold text-xs uppercase tracking-widest">AI & CS Focused</span>
         </div>
         <div className="border-b md:border-b-0 md:border-r border-black p-12 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors h-40 group gap-2">
             <IconSchool size={40} stroke={1} className="group-hover:text-purple-600 transition-colors" />
             <span className="font-bold text-xs uppercase tracking-widest">Grades 6-8</span>
         </div>
         <div className="p-12 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors h-40 group gap-2">
             <IconAffiliate size={40} stroke={1} className="group-hover:text-purple-600 transition-colors" />
             <span className="font-bold text-xs uppercase tracking-widest">Mentorship</span>
         </div>
      </div>

      {/* Programs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-black" id="programs">
         <div className="border-r border-black p-12 lg:p-24 flex flex-col justify-center">
            <div className="inline-block self-start px-4 py-2 border border-black text-xs font-bold uppercase tracking-widest mb-8 hover:bg-black hover:text-white transition-colors cursor-default">Summer Cohort</div>
            <h2 className="text-4xl lg:text-6xl font-medium mb-8 leading-tight tracking-tight">Intro to Python for AI</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-md leading-relaxed">
              A 5-day intensive summer cohort designed for middle schoolers. Students learn the fundamentals of Python programming and apply them to build real Artificial Intelligence projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/programs/python">
                    <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-purple-600 transition-colors border border-black w-full sm:w-auto">
                    View Curriculum
                    </button>
                </Link>
                <Link href="#newsletter">
                    <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors border border-black w-full sm:w-auto">
                    Apply Now
                    </button>
                </Link>
            </div>
         </div>
         <div className="relative min-h-[500px] bg-gray-50 border-t lg:border-t-0 border-black flex items-center justify-center p-12">
             <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-10 pointer-events-none">
                 {[...Array(36)].map((_, i) => (
                     <div key={i} className="border border-black/20"></div>
                 ))}
             </div>
             <Image src="/svg/code_thinking.svg" width={500} height={400} alt="Python" className="relative z-10 drop-shadow-2xl" />
         </div>
      </div>

      {/* Newsletter / Waitlist Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2" id="newsletter">
         {/* Purple Block */}
         <div className="bg-purple-600 p-12 lg:p-24 text-white border-r border-black flex flex-col justify-center min-h-[600px]">
            <h2 className="text-5xl lg:text-7xl font-medium mb-8 tracking-tight">Applications Opening Soon</h2>
             <p className="text-xl text-white/90 mb-12 max-w-md leading-relaxed font-normal">
                Join our waitlist to get notified when summer cohort applications open. Spaces are limited and filled on a rolling basis.
             </p>
             
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormControl className="w-full">
                            <input 
                                {...field} 
                                type="email" 
                                placeholder="ENTER YOUR EMAIL" 
                                className="w-full bg-transparent border-b-2 border-white px-0 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-black transition-colors font-bold uppercase tracking-wider text-xl" 
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <button 
                        className="self-start mt-8 px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-purple-600 transition-colors text-sm" 
                        type="submit"
                    >
                        {loading ? "Working..." : "Join Waitlist"}
                    </button>
                </form>
            </Form>
            {subscribed && <p className="mt-6 font-bold text-lg animate-pulse">You&apos;re on the list! We&apos;ll be in touch.</p>}
         </div>

         {/* White Grid Block */}
         <div className="bg-white p-12 lg:p-24 flex flex-col justify-between border-t lg:border-t-0 border-black relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4">
                 <IconAffiliate size={64} stroke={0.5} className="text-gray-200" />
             </div>
             <div className="mt-auto">
                <p className="text-[8rem] lg:text-[12rem] leading-none font-bold text-gray-100 -mb-8 lg:-mb-12 -ml-8 select-none">AI</p>
             </div>
         </div>
      </div>

    </main>
  );
}
