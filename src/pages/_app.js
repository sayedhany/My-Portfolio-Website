import { useEffect } from "react";
import Head from "next/head";
import Theme from "../styles/theme";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

export default function App({ Component, pageProps }) {
  // Remove server-side injected CSS on hydration
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        {/* Viewport meta for responsive design */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Default meta tags */}
        <meta
          name="description"
          content="Portfolio website showcasing projects and skills"
        />
        <meta name="author" content="Sayed Hany" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sayed Hany - Portfolio" />
        <meta
          property="og:description"
          content="Portfolio website showcasing projects and skills"
        />
        <meta property="og:site_name" content="Sayed Hany Portfolio" />
        <meta
          property="og:url"
          content="https://sayed-hany-portfolio.vercel.app"
        />
        <meta
          property="og:image"
          content="https://sayed-hany-portfolio.vercel.app/og-image.jpg"
        />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sayed Hany - Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio website showcasing projects and skills"
        />
        <meta
          name="twitter:image"
          content="https://sayed-hany-portfolio.vercel.app/og-image.jpg"
        />

        {/* Default title */}
        <title>Sayed Hany - Portfolio</title>
      </Head>

      <ErrorBoundary>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </ErrorBoundary>
    </>
  );
}
