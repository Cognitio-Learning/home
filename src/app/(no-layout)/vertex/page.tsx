'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const router = useRouter()

    useEffect(() => {
        router.push('https://ai.google.dev/gemini-api/docs/api-key')
    }, [])
    return null
}