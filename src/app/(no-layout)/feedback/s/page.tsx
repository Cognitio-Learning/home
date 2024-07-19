'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const router = useRouter()

    useEffect(() => {
        router.push('https://docs.google.com/forms/d/e/1FAIpQLSeHhqRvTTuBWrvITlMxj_YKA37pLfGvrtj0Oz4uhaqWrubNPQ/viewform')
    }, [])
    return null
}