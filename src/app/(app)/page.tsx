'use client'

import { BackgroundGradient } from "@/components/ui/ace/background-gradient";
import { MacbookScroll } from "@/components/ui/ace/macbook";
import { Button } from "@/components/ui/shadcn/ui/button";
import { IconAffiliate, IconBook, IconRocket } from "@tabler/icons-react";
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
import { Input } from "@/components/ui/shadcn/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/shadcn/ui/card";
import { Separator } from "@/components/ui/shadcn/ui/separator";

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
    <>
      <section className="relative w-full min-h-[100vh] py-32 flex flex-col items-center justify-center overflow-visible">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center z-10">
          <div className="inline-flex items-center rounded-full px-4 py-1 mb-8 border border-border/40 bg-background/70 backdrop-blur-sm shadow-sm">
            <span className="text-xs font-medium text-muted-foreground">Free CS & AI Education</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-primary"></div>
            <span className="text-xs font-medium text-primary">For Ages 8-14</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-primary to-indigo-400 animate-gradient">
            Welcome to Cognitio Learning
          </h1>
          
          <p className="text-lg md:text-xl pb-12 max-w-2xl text-muted-foreground leading-relaxed">
            Empowering young minds through <span className="text-foreground font-medium">innovative education</span> in computer science and artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pb-16">
            <Link href="/programs/python">
              <Button className="rounded-full px-8 shadow-lg shadow-primary/20" size="lg">
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="rounded-full px-8 border-primary/20" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl mb-20">
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/50 backdrop-blur-md border border-border/30">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Free Education</div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/50 backdrop-blur-md border border-border/30">
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Projects to Build</div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/50 backdrop-blur-md border border-border/30">
              <div className="text-3xl font-bold text-primary mb-1">Expert</div>
              <div className="text-sm text-muted-foreground">Mentors</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator positioned relative to section */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Macbook Section */}
      <div className="w-full overflow-hidden hidden lg:block" id="start">
        <MacbookScroll
          title={"Simple and easy to learn."}
          src="/code-snippet1.png"
          showGradient={true}
        />
      </div>

      {/* What We Offer Section */}
      <section className="container mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What we offer</h2>
          <Separator className="w-24 mx-auto bg-primary/50" />
        </div>
        
        {/* Interactive Learning */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">Interactive Learning</h3>
            <p className="text-muted-foreground">Our carefully designed curriculum makes learning to code simple and fun. With step-by-step instructions and interactive exercises, kids can learn at ease, building confidence as they go.</p>
          </div>
          <div className="lg:w-1/2">
            <Image 
              src="/mockup1.png" 
              width={600} 
              height={400} 
              alt="Interactive learning interface" 
              className="rounded-xl shadow-xl object-cover" 
              sizes="(max-width: 640px) 100vw, 50vw" 
            />
          </div>
        </div>
        
        {/* AI Projects */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-24">
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">Hands-on AI Projects</h3>
            <p className="text-muted-foreground">We introduce children to the fascinating world of artificial intelligence through fun and practical projects. From creating chatbots to exploring machine learning, we bring AI concepts to life in an accessible way.</p>
          </div>
          <div className="lg:w-1/2">
            <Image 
              src="/mockup2.png" 
              width={600} 
              height={400} 
              alt="AI project interface" 
              className="rounded-xl shadow-xl object-cover" 
              sizes="(max-width: 640px) 100vw, 50vw" 
            />
          </div>
        </div>
        
        {/* Mentors */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">Experienced Mentors</h3>
            <p className="text-muted-foreground">Our team of experienced mentors is dedicated to guiding students through their coding and AI journey. With personalized support and encouragement, we help everyone reach their full potential.</p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
              <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                <IconBook size={80} stroke={1.5} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why choose us?</h2>
            <Separator className="w-24 mx-auto bg-primary/50" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto p-4 rounded-full bg-primary/10 mb-4">
                  <IconBook size={50} stroke={1.5} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Engaging Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Our curriculum is designed with young learners in mind, making complex topics simple and exciting. We use kid-friendly and real-world examples to keep kids engaged and motivated.</p>
              </CardContent>
            </Card>
            
            {/* Card 2 */}
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto p-4 rounded-full bg-primary/10 mb-4">
                  <IconAffiliate size={50} stroke={1.5} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Inclusive and Accessible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Cognitio is committed to making coding and AI education accessible to all children. All courses that we offer are <span className="text-foreground font-semibold">FREE</span> to ensure no one is left behind.</p>
              </CardContent>
            </Card>
            
            {/* Card 3 */}
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto p-4 rounded-full bg-primary/10 mb-4">
                  <IconRocket size={50} stroke={1.5} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Future-Ready Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">We prepare kids for the future by teaching them the skills they need to succeed in a technology-driven world. Our programs focus on creativity, critical thinking, and problem-solving.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Programs</h2>
          <Separator className="w-24 mx-auto bg-primary/50" />
        </div>
        
        <div className="flex justify-center">
          <BackgroundGradient className="max-w-sm bg-background/80 border border-border/40 p-6 rounded-2xl">
            <Image 
              src="/svg/code_thinking.svg" 
              width={300} 
              height={200} 
              alt="Python programming" 
              className="w-full mb-6" 
            />
            <h2 className="text-2xl font-bold mb-3">Intro to Python for AI</h2>
            <p className="text-muted-foreground mb-6">Learn the basics of Python and AI in this introductory course. Perfect for beginners!</p>
            <Link href="/programs/python">
              <Button className="w-full rounded-lg">Get Started</Button>
            </Link>
          </BackgroundGradient>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-gradient-to-b from-background to-primary/20 py-20" id="newsletter">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stay connected with Cognitio</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Don&apos;t miss out on the latest updates and resources from Cognitio. Our newsletter keeps you informed about new programs, upcoming events, and exciting projects. Whether you&apos;re a parent, teacher, or a young learner our newsletter is your gateway to all things coding and AI.
          </p>
          
          <Card className="bg-background/70 backdrop-blur-md border-primary/20">
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            placeholder="Enter your email" 
                            className="border-border/30 bg-background/50 h-12" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="h-12 px-8 rounded-md" disabled={loading}>
                    {loading ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
              </Form>
              
              {subscribed && (
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-md text-green-500">
                  You have successfully subscribed to our newsletter!
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
