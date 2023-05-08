import nodemailer from 'nodemailer'

import env from '@/config/env'

export type EmailPayload = {
  to: string
  subject: string
  html: string
}

// Setup SMTP credentials
const smtpOptions = {
  host: env.email.host || '',
  port: parseInt(env.email.port || ''),
  secure: false,
  auth: {
    user: env.email.username || '',
    pass: env.email.password || '',
  },
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: env.email.username,
    ...data,
  })
}
