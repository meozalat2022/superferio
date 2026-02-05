import { NextResponse } from 'next/server'

export async function POST(req) {
  const body = await req.json()

  console.log('NEW CONTACT MESSAGE:', body)

  // Later we will send email using Resend or Nodemailer

  return NextResponse.json({ success: true })
}
