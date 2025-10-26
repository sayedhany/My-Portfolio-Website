import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* DNS prefetch for external resources */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />

          {/* Preconnect for critical resources */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          {/* Optimized font loading */}
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
              rel="stylesheet"
            />
          </noscript>

          {/* Meta tags for better SEO and performance */}
          <meta name="theme-color" content="#0F1624" />
          {/* Google Search Console verification */}
          <meta
            name="google-site-verification"
            content="zSI-x4__qTHy4lelqmAl0_erYwrpvFF3ipo2bhZN6QY"
          />
          <meta name="msapplication-TileColor" content="#0F1624" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          {/* Canonical URL */}
          <link
            rel="canonical"
            href="https://sayed-hany-portfolio.vercel.app"
          />

          {/* Additional SEO structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Sayed Hany Portfolio",
                url: "https://sayed-hany-portfolio.vercel.app",
                description:
                  "Senior Frontend Developer Portfolio showcasing Angular, React, and Next.js expertise",
                author: {
                  "@type": "Person",
                  name: "Sayed Hany",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://sayed-hany-portfolio.vercel.app/#projects",
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />

          {/* Favicon and app icons */}
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          {/* Prevent FOUC (Flash of Unstyled Content) */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  function setTheme() {
                    document.documentElement.style.visibility = 'visible';
                  }
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', setTheme);
                  } else {
                    setTheme();
                  }
                })();
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
