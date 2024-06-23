import { MacbookScroll } from "@/components/ui/macbook";
import { SparklesCore } from "@/components/ui/sparkles";
import { IconAffiliate, IconBook, IconMail, IconRocket } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen text-white flex-col items-center justify-between ">
      <div className="h-screen w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="text-6xl lg:text-9xl font-bold text-center relative z-20">
          Cognitio Learning
        </h1>
        <p className="text-xl lg:text-2xl font-bold mt-6 relative z-20 text-center">Simplified learning for the next generation.</p>
        <div className="w-[40rem] h-40 relative">
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
        <Link className="font-semibold text-lg lg:text-xl bg-white rounded-lg p-4 text-black" href="#start">See what it's about.</Link>
      </div>

      <div className="w-full overflow-hidden hidden lg:block" id="start">
        <MacbookScroll
          title={"Simple and easy to learn."}
          src="/home/code-snippet1.png"
          showGradient={true}
        />
      </div>
      <div className="lg:-mt-[5rem] flex flex-col items-center text-body-text mt-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-white ">What we offer</h1>
        <div className="flex md:justify-between gap-16 mt-8 items-center lg:flex-row flex-col">
          <div className="lg:w-[40rem] w-1/2 md:w-full flex items-center lg:items-start flex-col ">
            <h1 className="text-xl lg:text-3xl font-bold text-white">Interactive Learning</h1>
            <p className="text-md ">Our carefully designed curriculum makes learning to code simple and fun. With step-by-step instructions and interactive exercises, kids can learn at easily, building confidence as they go.</p>
          </div>
          <div className="w-7/12">
            <Image src="/home/mockup1.png" width={600} height={400} alt="mockup" className="rounded-xl" sizes="(max-width: 640px) 100vw, 50vw" />
          </div>
        </div>

        <div className="flex md:justify-between gap-16 mt-8 items-center flex-col lg:flex-row-reverse">
          <div className="lg:w-[40rem] w-1/2 md:w-full flex items-center lg:items-start flex-col ">
            <h1 className="text-xl lg:text-3xl font-bold text-white">Hands-on AI Projects</h1>
            <p className="text-md ">Our carefully designed curriculum makes learning to code simple and fun. With step-by-step instructions and interactive exercises, kids can learn at easily, building confidence as they go.</p>
          </div>
          <div className="w-7/12">
            <Image src="/home/mockup2.png" width={600} height={400} alt="mockup" className="rounded-xl" sizes="(max-width: 640px) 100vw, 50vw" />
          </div>
        </div>

        <div className="flex md:justify-between gap-16 mt-8 lg:mt-16 items-center lg:flex-row flex-col">
          <div className="w-[20rem] md:w-[40rem] flex items-center lg:items-start flex-col ">
            <h1 className="text-xl lg:text-3xl font-bold text-white">Experienced Mentors</h1>
            <p className="text-md">Our team of experienced mentors is dedicated to guiding students through their coding and AI journey. With personalized support and encouragement, we help everyone reach their full potential</p>
          </div>
        </div>

        <div className="w-[40rem]"></div>
      </div>

      <div className="py-32 flex justify-center flex-col items-center w-full mt-20">
        <h1 className="text-3xl lg:text-4xl font-bold text-white pb-8">Why choose us?</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col items-center w-[25rem]">
            <IconBook size={100} stroke={1} color="#5e17eb" />
            <h1 className="text-xl lg:text-2xl font-bold text-white mt-4 mb-2">Engaging Curriculum</h1>
            <p className="text-body-text text-center">Our curriculum is designed with young learners in mind, making complex topics simple and exciting. We use kid-friendly and real-world examples to keep kids engaged and motivated.</p>
          </div>
          <div className="flex flex-col items-center w-[25rem]">
            <IconAffiliate size={100} stroke={1} color="#5e17eb" />
            <h1 className="text-xl lg:text-2xl font-bold text-white mt-4 mb-2">Inclusive and Accessible</h1>
            <p className="text-body-text text-center">Cognitio is committed to making coding and AI education accessible to all children. All courses that we offer are <span className=" text-white">FREE</span> to ensure no one is left behind.</p>
          </div>
          <div className="flex flex-col items-center w-[25rem]">
            <IconRocket size={100} stroke={1} color="#5e17eb" />
            <h1 className="text-xl lg:text-2xl font-bold text-white mt-4 mb-2">Future-Ready Skills</h1>
            <p className="text-body-text text-center">We prepare kids for the future by teaching them the skills they need to succeed in a technology-driven world. Our programs focus on creativity, critical thinking, and problem-solving. </p>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-gradient-to-tr bg-main-bg h-[40rem] mt-20 flex flex-col items-center py-20">
        <h1 className="text-2xl lg:text-5xl font-bold">Stay connected with Cognitio</h1>
        <p className="text-gray-300 text-lg leading-8 w-3/4 lg:w-1/3 text-center ">Don't miss out on the latest updates and resources from Cognitio. Our newsleter keeps you informed about new programs, upcoming events, and exciting projects. Whether you're a parent, teacher, or a young learner our newsletter is your gateway to all things coding and AI.</p>
        <form className="flex gap-4 lg:gap-8 mt-10 ">
          <input type="email" placeholder="Enter your email" className="min-w-0 flex-auto rounded-md lg:w-[20rem] border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
          <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg" type="submit">Subscribe</button>
        </form>
      </div>

      {/* Footer */}

      <div className="w-full h-[15rem] lg:h-[30rem] bg-gradient-to-t from-black to-main-bg flex justify-center">
        <div className="w-2/3 flex justify-between items-center flex-col lg:flex-row p-6">
          <div className="flex flex-col gap-8 lg:flex-row items-center lg:justify-between">
            <Image src="/home/logo.svg" width={200} height={100} alt="logo" className="hidden lg:block" />

            <div className="flex flex-col items-center text-white lg:p-8">
              <h1 className="text-xl lg:text-4xl font-bold">Cognitio Learning</h1>
              <p className="text-md lg:text-lg text-center">Simplified learning for the next generation.</p>
            </div>
          </div>

          <div className="flex flex-col  text-white p-8 items-center">
            <h1 className="text-xl lg:text-4xl font-bold hidden lg:block">Contact Us</h1>
            <Link href="mailto:contact.cognitiolearning@gmail.com"><IconMail stroke={2} size={36} className="hover:cursor-pointer" /></Link>
          </div>
        </div>
      </div>
    </main>

  );
}
