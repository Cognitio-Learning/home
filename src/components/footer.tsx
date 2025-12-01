import { IconBrandGithubFilled, IconBrandInstagram, IconMail } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full border-t border-black bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 border-r border-black flex flex-col justify-between h-full">
                    <div>
                         <h1 className="text-2xl font-bold tracking-tighter mb-2">Cognitio Learning</h1>
                         <p className="text-sm text-gray-500">Simplified learning for the next generation.</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-8">© {new Date().getFullYear()} Cognitio Learning. All rights reserved.</p>
                </div>
                <div className="p-12 flex flex-col justify-center items-start md:items-start gap-8">
                     <div className="flex flex-col gap-4">
                        <h3 className="font-bold uppercase tracking-widest text-sm">Contact</h3>
                        <Link href="mailto:contact.cognitiolearning@gmail.com" className="hover:text-purple-600 transition-colors flex items-center gap-2">
                            <IconMail size={20} /> contact.cognitiolearning@gmail.com
                        </Link>
                     </div>
                     <div className="flex gap-6 mt-4">
                        <Link href="https://www.instagram.com/cognitio.learning" className="hover:text-purple-600 transition-colors">
                            <IconBrandInstagram size={24} />
                        </Link>
                        <Link href="https://github.com/Cognitio-Learning" className="hover:text-purple-600 transition-colors">
                            <IconBrandGithubFilled size={24} />
                        </Link>
                     </div>
                </div>
            </div>
        </footer>
    )
}
