import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY is missing");
}

const resend = new Resend(apiKey);


export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
       from: "Esteban Portfolio <contact@estebancl.dev>",
        to: ["luis.esteban.castaneda.luque@gmail.com"],
        subject: `New message from ${name}`,
        replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}
