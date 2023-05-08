import { NextApiRequest, NextApiResponse } from 'next'

import { sendEmail } from '@/lib/email'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data
  // const {} = req.body

  // await sendEmail({
  //   to: 'wamif40616@larland.com',
  //   subject: 'Hello',
  //   html: '<h1>This is a demo email 🥳</h1>',
  // })

  res.status(200).json({ message: 'Not implemented yet ✅' })
}
