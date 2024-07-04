'use client'

import { BackgroundGradient } from "@/components/ui/ace/background-gradient";
import { MacbookScroll } from "@/components/ui/ace/macbook";
import { SparklesCore } from "@/components/ui/ace/sparkles";
import { Button } from "@/components/ui/shadcn/ui/button";
import { IconAffiliate, IconBook, IconRocket } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
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
      }
    })
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset({})
    }
  }, [form.formState, form.reset])

  return (
    <main className="flex min-h-screen text-white flex-col items-center justify-between w-screen p-4">
      <div className="h-screen w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="text-6xl lg:text-9xl font-bold text-center relative z-20">
          Cognitio Learning
        </h1>
        <p className="text-xl lg:text-2xl font-bold mt-6 relative z-20 text-center">Simplified learning for the next generation.</p>
        <div className="lg:w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-main-bg [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <Link className="font-semibold text-lg lg:text-xl bg-white rounded-lg p-4 text-black" href="#start">See what it&apos;s about.</Link>
      </div>


      <div className="w-full overflow-hidden hidden lg:block" id="start">
        <MacbookScroll
          title={"Simple and easy to learn."}
          src="/code-snippet1.png"
          showGradient={true}
        />
      </div>
      <div className="lg:-mt-[5rem] flex flex-col items-center text-body-text mt-12 w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-white ">What we offer</h1>
        <div className="flex justify-between gap-16 mt-8 items-center lg:flex-row flex-col">
          <div className="lg:w-[40rem] flex lg:items-start flex-col ">
            <h1 className="text-xl lg:text-3xl font-bold text-white">Interactive Learning</h1>
            <p className="text-md">Our carefully designed curriculum makes learning to code simple and fun. With step-by-step instructions and interactive exercises, kids can learn at ease, building confidence as they go.</p>
          </div>
          <div className="lg:w-7/12 flex lg:justify-end">
            <Image src="/mockup1.png" width={600} height={400} alt="mockup" className="rounded-xl" sizes="(max-width: 640px) 100vw, 50vw" />
          </div>
        </div>

        <div className="flex md:justify-between gap-16 mt-8 items-center flex-col lg:flex-row-reverse">
          <div className="lg:w-[40rem] flex lg:items-start flex-col ">
            <h1 className="text-xl lg:text-3xl font-bold text-white ">Hands-on AI Projects</h1>
            <p className="text-md lg:text-start">We introduce children to the fascinating world of artificial intelligence through fun and practical projects. From creating chatbots to exploring machine learning, we bring AI concepts to life in an accessible way.</p>
          </div>
          <div className="lg:w-7/12">
            <Image src="/mockup2.png" width={600} height={400} alt="mockup" className="rounded-xl" sizes="(max-width: 640px) 100vw, 50vw" />
          </div>
        </div>

        <div className="flex md:justify-between gap-16 mt-8 lg:mt-16 items-center lg:flex-row flex-col">
          <div className="md:w-[40rem] flex flex-col lg:text-center">
            <h1 className="text-xl lg:text-3xl font-bold text-white ">Experienced Mentors</h1>
            <p className="text-md">Our team of experienced mentors is dedicated to guiding students through their coding and AI journey. With personalized support and encouragement, we help everyone reach their full potential</p>
          </div>
        </div>

        <div className="lg:w-[40rem]"></div>
      </div>

      <div className="py-32 flex justify-center flex-col items-center w-full mt-20">
        <h1 className="text-3xl lg:text-4xl font-bold text-white pb-8">Why choose us?</h1>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <div className="flex flex-col items-center lg:w-1/4">
            <IconBook size={100} stroke={1} color="#5e17eb" />
            <h1 className="text-xl lg:text-2xl font-bold text-white mt-4 mb-2">Engaging Curriculum</h1>
            <p className="text-body-text text-center">Our curriculum is designed with young learners in mind, making complex topics simple and exciting. We use kid-friendly and real-world examples to keep kids engaged and motivated.</p>
          </div>
          <div className="flex flex-col items-center lg:w-1/4">
            <IconAffiliate size={100} stroke={1} color="#5e17eb" />
            <h1 className="text-xl lg:text-2xl font-bold text-white mt-4 mb-2">Inclusive and Accessible</h1>
            <p className="text-body-text text-center">Cognitio is committed to making coding and AI education accessible to all children. All courses that we offer are <span className=" text-white font-semibold">FREE</span> to ensure no one is left behind.</p>
          </div>
          <div className="flex flex-col items-center lg:w-1/4">
            <IconRocket size={100} stroke={1} color="#5e17eb" />
            <h1 className="text-xl lg:text-2xl font-bold text-white mt-4 mb-2">Future-Ready Skills</h1>
            <p className="text-body-text text-center">We prepare kids for the future by teaching them the skills they need to succeed in a technology-driven world. Our programs focus on creativity, critical thinking, and problem-solving. </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-20">Our Programs</h1>
        <div className="hover:cursor-default">
          <BackgroundGradient className="max-w-sm bg-zinc-900 p-4 rounded-[22px]">
            <Image src="/svg/code_thinking.svg" width={300} height={200} alt="python" className="m-4 w-full" />
            <h2 className="text-xl font-bold">Intro to Python for AI</h2>
            <p className="text-body-text w-3/4">Learn the basics of Python and AI in this introductory course. Perfect for beginners!</p>
            <div className="flex mt-4">
              <Link href="/programs/python"><Button>Get Started</Button></Link>
            </div>
          </BackgroundGradient>
        </div>
      </div>
      <div className="w-full bg-gradient-to-tr bg-main-bg h-[40rem] mt-20 flex flex-col items-center py-20">
        <h1 className="text-xl lg:text-5xl font-bold ">Stay connected with Cognitio</h1>
        <p className="text-gray-300 text-md md:text-lg leading-8 lg:w-1/3 text-center mt-8">Don&apos;t miss out on the latest updates and resources from Cognitio. Our newsleter keeps you informed about new programs, upcoming events, and exciting projects. Whether you&apos;re a parent, teacher, or a young learner our newsletter is your gateway to all things coding and AI.</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4 lg:gap-8 mt-10 flex-col md:flex-row w-full lg:w-1/3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="w-full">
                    <input {...field} type="email" placeholder="Enter your email" className="min-w-0 flex-auto rounded-md  border-0 bg-white/5 px-3.5 py-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 py-2 md:py-4 rounded-lg" type="submit">Subscribe</button>          </form>
        </Form>
        {loading && <p className="mt-4 text-purple-300">Working...</p>}
        {subscribed && <p className="mt-4 text-green-500">You have subscribed to our newsletter!</p>}
      </div>
    </main>

  );
}
