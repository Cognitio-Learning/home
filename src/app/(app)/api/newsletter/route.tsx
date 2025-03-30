import { NextRequest, NextResponse } from "next/server";
import { NewsletterOptions } from "@/types/types";

export async function POST(req: NextRequest) {
    const data: NewsletterOptions = await req.json()
    const email = data.email;
    
    const listmonkApiUrl = process.env.LISTMONK_API_URL || 'http://localhost:9000/api';
    const listmonkApiKey = process.env.LISTMONK_API_TOKEN;
    const listId = parseInt(process.env.LISTMONK_LIST_ID || '1');
    const templateId = parseInt(process.env.LISTMONK_TEMPLATE_ID || '1');

    // Subscribe to Listmonk
    const subscribeOpts = {
        email: email,
        name: email.split('@')[0], // Basic name from email
        status: 'enabled',
        lists: [listId],
        attributes: { source: 'newsletter' }
    };

    try {
        // Add subscriber
        const subscribeResponse = await fetch(`${listmonkApiUrl}/subscribers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`api_account1:${listmonkApiKey}`).toString('base64')}`
            },
            body: JSON.stringify(subscribeOpts)
        });

        if (!subscribeResponse.ok) {
            const errorText = await subscribeResponse.text();
            throw new Error(`Listmonk API error: ${subscribeResponse.status} - ${errorText}`);
        }

        // Send the welcome email through Listmonk campaigns
        const campaignResponse = await fetch(`${listmonkApiUrl}/campaigns`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`api_account1:${listmonkApiKey}`).toString('base64')}`
            },
            body: JSON.stringify({
                name: 'Welcome Email',
                subject: 'Welcome to the Cognitio Newsletter!',
                lists: [listId],
                from_email: process.env.EMAIL_FROM || 'newsletter@cognitiolearning.com',
                type: 'regular',
                content_type: 'richtext',
                body: 'Welcome to Cognitio Newsletter! Thank you for subscribing.',
                template_id: templateId
            })
        });

        if (!campaignResponse.ok) {
            const errorText = await campaignResponse.text();
            throw new Error(`Listmonk API error: ${campaignResponse.status} - ${errorText}`);
        }
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: "Failed" }, { status: 500 });
    }

    return NextResponse.json({ message: "Success" }, { status: 200 })
}

