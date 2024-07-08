import { mailOptions, transport } from "../../../emails/client";
import { replaceMergeTags, stripHTMLTags } from "@/emails/helpers";
import { NextResponse } from "next/server";
import {promises as fs} from 'fs';
import path from 'path';

/**
 * Adapted for TypeScript from https://www.youtube.com/watch?v=BSpvNl4sokE
 * @param request The incoming request to send.
 * @returns N/A. Sends an email to myself.
 */
export async function POST(request: Request) {
    //await the data
    const data = await request.json();

    //get the current working directory path for the html template for the email
    const htmlFilePath = path.join(process.cwd(), 'emails', 'contact-form.html');
    //defining the type
    let htmlContent: string;

    //try reading the html file, throw 500 if error.
    try {
        htmlContent = await fs.readFile(htmlFilePath, 'utf8');
    } catch (err) {
        console.error('Error reading HTML file:', err);
        return new Response('Internal Server Error', { status: 500 });
    }

    
    htmlContent = replaceMergeTags(data, htmlContent);
    //turn html content into plain text
    const plainTextContent = stripHTMLTags(htmlContent);

    //try sending the mail to email. return success if ok, return error otherwise.
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
