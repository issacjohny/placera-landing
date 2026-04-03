import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY || 'missing')

export async function POST(request: Request) {
  try {
    const { name, email, college, interest, message } = await request.json()

    if (!name || !email || !college) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Placera Contact <noreply@placera.in>',
      to: 'johnydurai@gmail.com',
      subject: `New enquiry from ${college}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <div style="background: #1D9E75; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New contact form submission</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">via placera.in</p>
          </div>
          <div style="background: #f8f9fc; border-radius: 12px; padding: 24px; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a18; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a18; font-weight: 500;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">College</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a18; font-weight: 500;">${college}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">Interested in</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a18; font-weight: 500;">${interest || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #888; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1a1a18;">${message || 'No message provided'}</td>
              </tr>
            </table>
          </div>
          <a href="mailto:${email}" style="display: inline-block; background: #1D9E75; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">Reply to ${name}</a>
          <p style="font-size: 12px; color: #aaa; margin-top: 24px;">This email was sent from the contact form on placera.in</p>
        </div>
      `,
    })

    await resend.emails.send({
      from: 'Placera <noreply@placera.in>',
      to: email,
      subject: 'We received your message — Placera',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <div style="background: #1D9E75; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Thanks for reaching out, ${name}!</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">We will get back to you within 24 hours.</p>
          </div>
          <div style="padding: 0 8px;">
            <p style="font-size: 15px; color: #444; line-height: 1.7;">Hi ${name},</p>
            <p style="font-size: 15px; color: #444; line-height: 1.7;">Thank you for your interest in Placera. We have received your message and will respond within 24 hours on working days.</p>
            <p style="font-size: 15px; color: #444; line-height: 1.7;">In the meantime you can start your free 30-day trial right now — no credit card needed.</p>
            <a href="https://login.placera.in/signup" style="display: inline-block; background: #1D9E75; color: #ffffff; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-size: 15px; font-weight: 500; margin: 8px 0 24px;">Start free trial</a>
            <p style="font-size: 14px; color: #888; line-height: 1.6;">Best regards,<br/><strong style="color: #1a1a18;">Issac Johny</strong><br/>Founder, Placera<br/>johnydurai@gmail.com</p>
          </div>
          <div style="border-top: 1px solid #eee; margin-top: 32px; padding-top: 16px;">
            <p style="font-size: 12px; color: #aaa; margin: 0;">Placera · Smart Placement Management for Indian Colleges · placera.in</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}