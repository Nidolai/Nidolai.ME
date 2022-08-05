import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111111" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#111111" />
        </Head>
        <body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument