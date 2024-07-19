import { NextRequest, NextResponse } from "next/server";
import { ContactUsOptions } from "@/types/types";
import { Resend } from 'resend'
import WelcomeEmail from "../../../../../emails/welcome";
import ContactUsEmail from "../../../../../emails/contact";

const resend = new Resend(process.env.resend_key)

export async function POST(req: NextRequest) {
    const {
        email,
        firstName,
        lastName,
        message
    }: ContactUsOptions = await req.json()

    let { error } = await resend.emails.send({
        subject: "New message from Cognitio Contact",
        from: "Cognitio <contact@messages.cognitiolearning.com>",
        to: "contact.cognitiolearning@gmail.com",
        react: ContactUsEmail({
            email,
            firstName,
            lastName,
            message
        })
    })
    if (error) NextResponse.json({ message: "Failed" }, { status: 500 })

    return NextResponse.json({ message: "Success" }, { status: 200 })
}

