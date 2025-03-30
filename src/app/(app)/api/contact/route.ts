import { NextRequest, NextResponse } from "next/server";
import { ContactUsOptions } from "@/types/types";
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import ContactUsEmail from "../../../../../emails/contact";

export async function POST(req: NextRequest) {
    const {
        email,
        firstName,
        lastName,
        message
    }: ContactUsOptions = await req.json()

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
        secure: process.env.EMAIL_SERVER_SECURE === "true",
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
        }
    });

    try {
        // Render the React email component to HTML
        const emailHtml = await render(
            ContactUsEmail({ 
                firstName, 
                lastName, 
                email, 
                message 
            })
        );

        // Send the email using nodemailer
        await transporter.sendMail({
            from: process.env.EMAIL_FROM || 'contact@cognitiolearning.com',
            to: process.env.CONTACT_EMAIL_TO || 'contact.cognitiolearning@gmail.com',
            subject: `Cognitio Contact Form Submission from ${firstName} ${lastName}`,
            html: emailHtml
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
}

