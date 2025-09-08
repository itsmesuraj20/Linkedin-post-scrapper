import nodemailer from 'nodemailer';
export async function sendNotification(email, subject, text) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    await transporter.sendMail({
        from: 'no-reply@linkedin-scraper.com',
        to: email,
        subject,
        text,
    });
}
//# sourceMappingURL=notification.js.map