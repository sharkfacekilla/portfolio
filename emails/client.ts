import nodemailer from 'nodemailer';

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const adminFullEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL_FULL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

export const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: adminEmail,
        pass,
    }
});

export const mailOptions = {
    from: adminFullEmail,
    to: adminFullEmail,
}