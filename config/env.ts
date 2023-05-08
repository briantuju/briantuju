/**
 * Define environment variables
 */
const env = {
  name: process.env.NEXT_PUBLIC_NAME,

  email: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    username: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
  },

  pageClipApiKey: process.env.NEXT_PUBLIC_PAGECLIP_API_KEY,
}

export default env
