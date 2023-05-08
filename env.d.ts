declare global {
  namespace NodeJs {
    interface ProcessEnv {
      NEXT_PUBLIC_NAME: string
      SMTP_HOST: string
      SMTP_PORT: string
      SMTP_USER: string
      SMTP_PASSWORD: string
    }
  }
}
