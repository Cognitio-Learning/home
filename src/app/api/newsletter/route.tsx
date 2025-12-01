import { NextRequest, NextResponse } from "next/server";
import { NewsletterOptions } from "@/types/types";
import { Resend } from 'resend'
import WelcomeEmail from "../../../../emails/welcome";

const resend = new Resend(process.env.resend_key)

export async function POST(req: NextRequest) {
    const emailData: NewsletterOptions = await req.json()

    const email = emailData.email;
    
    // Create contact without audienceId (new Resend API)
    await resend.contacts.create({
        email: emailData.email
    } as any).catch(e => {
        console.error(e)
        return NextResponse.json({ message: "Failed" }, { status: 500 })
    })

    const { data, error } = await resend.emails.send({
        subject: "Welcome to the Cognitio Newsletter!",
        from: "Cognitio <newsletter@messages.cognitiolearning.org>",
        to: email,
        react: WelcomeEmail({
            email
        })
    })
    if (error) return NextResponse.json({ error }, { status: 500 })

    return NextResponse.json({ data }, { status: 200 })
}

