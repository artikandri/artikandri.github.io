import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={`Argi Candri | ${pageProps.title}`} />
      <Component {...pageProps} />
      <LinkPreview url="https://artikandri.github.io" width="400px" />;
    </Layout>
  );
}

export default MyApp;
