import { mailOptions, transport } from "../../../emails/client";
import { replaceMergeTags, stripHTMLTags } from "@/emails/helpers";
import { NextResponse } from "next/server";
import {promises as fs} from 'fs';
import path from 'path';
import Error from "next/error";

export async function POST(request: Request) {
    const data = await request.json();

    const htmlFilePath = path.join(process.cwd(), 'emails', 'contact-form.html');
    let htmlContent: string;

    try {
        htmlContent = await fs.readFile(htmlFilePath, 'utf8');
    } catch (err) {
        console.error('Error reading HTML file:', err);
        return new Response('Internal Server Error', { status: 500 });
    }

    // Replace merge tags with values
    htmlContent = replaceMergeTags(data, htmlContent);
    const plainTextContent = stripHTMLTags(htmlContent);

    try {
        await transport.sendMail({
            ...mailOptions,
            subject: 'New Contact Inquiry',
            text: plainTextContent,
            html: htmlContent,
        });
        return NextResponse.json({ success: true});
        
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: err.message }, {status: err.status});
    }
}
