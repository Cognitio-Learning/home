'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const router = useRouter()

    useEffect(() => {
        router.push('https://docs.google.com/forms/d/e/1FAIpQLSe8io9ILGjooefN9XAnZdyqqSf-iPjAlnqD9um5MFFrAcCeOw/viewform')
    }, [])
    return null
}