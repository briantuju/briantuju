declare global {
  namespace NodeJs {
    interface ProcessEnv {
      NEXT_PUBLIC_NAME: string
    }
  }
}
