import { JWT } from 'google-auth-library'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { NextRequest, NextResponse } from "next/server";
import { FormValues } from "@/types/types";
import { Resend } from 'resend';

const sheetId = '1iceZCqPn1GETXZB5AfLvTeIeLnYkMQ-TjRWyiSNtRTg';
const resend = new Resend(process.env.resend_key)
export async function POST(req: NextRequest) {
    const data: FormValues = await req.json()

    const email = data.parentsEmail;
    await resend.contacts.create({
        email: email
    }).catch(e => {
        console.error(e)
        return NextResponse.json({ message: "Failed" }, { status: 500 })
    })

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

