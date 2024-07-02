'use client'

import React from "react";
import { motion } from 'framer-motion'

export default function Motion({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <motion.div className="w-full flex flex-col items-center justify-center"
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: [20, -5, 0],
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
            }} >
            {children}
        </motion.div>
    )
}