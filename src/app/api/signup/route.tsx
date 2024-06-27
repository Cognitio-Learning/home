import { JWT } from 'google-auth-library'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { NextRequest, NextResponse } from "next/server";
import { FormValues } from "@/types/types";

const sheetId = '1iceZCqPn1GETXZB5AfLvTeIeLnYkMQ-TjRWyiSNtRTg';

export async function POST(req: NextRequest) {
    const data: FormValues = await req.json()
    const SCOPES = [
        'https://www.googleapis.com/auth/spreadsheets',
    ]

    const jwt = new JWT({
        email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
        key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.split(String.raw`\n`).join('\n'),
        scopes: SCOPES
    })

    const doc = new GoogleSpreadsheet(sheetId, jwt);
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    const newRow = Object.values(data);
    await sheet.addRow(newRow);

    return NextResponse.json({ message: "Success" }, { status: 200 })
}

