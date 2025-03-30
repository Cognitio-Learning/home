import { JWT } from 'google-auth-library'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { NextRequest, NextResponse } from "next/server";
import { FormValues } from "@/types/types";

const sheetId = '1iceZCqPn1GETXZB5AfLvTeIeLnYkMQ-TjRWyiSNtRTg';

export async function POST(req: NextRequest) {
    const data: FormValues = await req.json()
    const email = data.parentsEmail;
    
    const listmonkApiUrl = process.env.LISTMONK_API_URL || 'http://localhost:9000/api';
    const listmonkApiKey = process.env.LISTMONK_API_TOKEN;
    const listId = parseInt(process.env.LISTMONK_LIST_ID || '1');

    // Subscribe to Listmonk
    const subscribeOpts = {
        email: email,
        name: `${data.firstName} ${data.lastName}`,
        status: 'enabled',
        lists: [listId],
        attributes: { source: 'signup' }
    };

    try {
        const response = await fetch(`${listmonkApiUrl}/subscribers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`api_account1:${listmonkApiKey}`).toString('base64')}`
            },
            body: JSON.stringify(subscribeOpts)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Listmonk API error: ${response.status} - ${errorText}`);
        }
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: "Failed to subscribe" }, { status: 500 });
    }

    const SCOPES = [
        'https://www.googleapis.com/auth/spreadsheets',
    ]

    const jwt = new JWT({
        email: process.env.client_email,
        key: process.env.private_key?.split(String.raw`\n`).join('\n'),
        scopes: SCOPES
    })

    const doc = new GoogleSpreadsheet(sheetId, jwt);
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    const newRow = Object.values(data);
    await sheet.addRow(newRow).catch(e => {
        console.error(e)
        return NextResponse.json({ message: "Failed" }, { status: 500 })
    })

    return NextResponse.json({ message: "Success" }, { status: 200 })
}

