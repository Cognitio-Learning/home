import { IconBrandGithubFilled, IconBrandInstagram, IconMail } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/shadcn/ui/button'
import { Separator } from './ui/shadcn/ui/separator' 

export default function Footer() {
    return (
        <footer className="w-full bg-background/95 border-t border-border/40 mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="space-y-4 col-span-1 lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src="/svg/logo.svg" width={40} height={40} alt="Cognitio Logo" />
                            <span className="font-bold text-lg">Cognitio Learning</span>
                        </Link>
                        <p className="text-muted-foreground max-w-xs">
                            Simplified learning for the next generation. Making computer science and AI accessible to all.
                        </p>
                        <div className="flex space-x-3">
                            <Link href="mailto:contact.cognitiolearning@gmail.com" aria-label="Email">
                                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                                    <IconMail className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="https://www.instagram.com/cognitio.learning" aria-label="Instagram">
                                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                                    <IconBrandInstagram className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="https://github.com/Cognitio-Learning" aria-label="GitHub">
                                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                                    <IconBrandGithubFilled className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Programs */}
                    <div className="space-y-4">
                        <h3 className="font-medium text-lg">Programs</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/programs/python" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Python for AI
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About */}
                    <div className="space-y-4">
                        <h3 className="font-medium text-lg">About</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <Separator className="my-8" />
                
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Cognitio Learning. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <Link href="/#newsletter">
                            <Button variant="outline" size="sm" className="rounded-full">
                                Subscribe to newsletter
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}