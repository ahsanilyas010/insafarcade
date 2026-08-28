import { NextRequest, NextResponse } from 'next/server'

// TODO (client): Replace this stub with your email service or CRM integration.
// Options:
//   - Resend / SendGrid / Nodemailer: send an email notification on each enquiry
//   - HubSpot / Salesforce / Zoho CRM: POST to their leads API
//   - Airtable / Notion: append a row to your leads database
// Required environment variables would go in .env.local (gitignored).

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, interest, size, message } = body

    if (!name || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log submission (replace with real integration below)
    console.log('[enquiry]', {
      name,
      phone,
      email,
      interest,
      size,
      message,
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[enquiry] error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
