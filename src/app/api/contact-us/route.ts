// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs'; // ✅ Ensures Node environment on Vercel

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // ✅ Extract all form fields correctly
    const { name, organization, email, phone, message } = await req.json() as { 
      name: string; 
      organization: string; 
      email: string; 
      phone: string; 
      message: string; 
    };

    console.log("Form Data:", name, organization, email, phone, message);

    // ✅ Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // ✅ Send the email through Resend
    const data = await resend.emails.send({
      from: 'connect@digicides.com',   // ✅ Updated sender email
      to: ['connect@digicides.com'],   // ✅ Recipient
      subject: `New Contact Form Submission from ${name}${organization ? ` (${organization})` : ''}`,
      html: `
        <h2>New Contact Us Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <p style="font-size:12px;color:#666;">Submitted on: ${new Date().toLocaleString('en-IN')}</p>
      `,
    });

    // ✅ Return success
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Email send failed:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
