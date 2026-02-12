import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(_request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    const toAddress = process.env.RESEND_SANDBOX_TO || "bunkyapp.ph@gmail.com"

    const { error } = await resend.emails.send({
      from: "Bunky <onboarding@resend.dev>",
      to: toAddress,
      subject: "Bunky Test Email",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FC81A0;">Test Email</h2>
          <p>This is a test email sent from the Bunky app (Resend).</p>
          <p style="color: #666; font-size: 12px;">Triggered from /api/resend</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send test email" }, { status: 500 })
    }

    return NextResponse.json({ message: "Test email sent" }, { status: 200 })
  } catch (error) {
    console.error("Error sending test email:", error)
    return NextResponse.json({ error: "Failed to send test email" }, { status: 500 })
  }
}
