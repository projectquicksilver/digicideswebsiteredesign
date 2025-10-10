// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, organization, email, message } = await req.json() as { name: string, organization: string, email: string, phone: string, message: string };


  console.log(name, organization, email, phone, message);

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: `connect@dreamlaunch.studio`,
      to: ['connect@digicides.com'],
      subject: `New Contact Us Form Submission from ${name} (${organization})`,
      html: `
        <h2>New Contact Us Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (data) {
      console.log(data);
      return Response.json({ success: true, data });
    } else {
      return Response.json({ success: false, data });
    }
  } catch (error) {
    console.error('Email send failed:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}

function phone(name: string,organization: string,email: string,phone: any,message: string) {
throw new Error('Function not implemented.');
}
