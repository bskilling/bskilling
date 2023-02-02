import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>SFJ Business Solutions</title>
        <meta
          property="og:description"
          content=" SFJ Business Solutions has been a trusted
        knowledge and talent services partner for several multi-national
        organizations. Driven by a core team with a wealth of passion
        and expertise"
        />
        <meta
          name="description"
          content="Official website for SFJ Business Solutions"
        />
        <link rel="icon" href="/ICONW.png " />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SFJ Business Solutions" />
        <meta
          property="og:description"
          content="  SFJ Business Solutions has been a trusted
        knowledge and talent services partner for several multi-national
        organizations. Driven by a core team with a wealth of passion
        and expertise"
        />
        <meta property="og:image" content="/ICONW.png" />
        <meta property="og:url" content="https://www.sfjbs.com/" />
        <meta property="og:site_name" content="SFJ Business Solutions" />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7HKY9E6VRJ"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-7HKY9E6VRJ');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
