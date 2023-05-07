import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-50 dark:bg-dark dark:text-light text-dark text-base">
        <Main />

        <NextScript />
      </body>
    </Html>
  )
}
