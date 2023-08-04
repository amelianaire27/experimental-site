import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { init } from "commandbar";

import '@styles/globals.css'

if (typeof window !== "undefined") {
  init('81136260');
}

function Application({ Component, pageProps }) {

  useEffect(() => {
    const loggedInUserId = '12345'; // example
    window.CommandBar.boot(loggedInUserId).then(() => {
      setCommandBarReady(true);
    });
    return () => {
      window.CommandBar.shutdown();
    }
  }, []);

  return <Component {...pageProps} />
}

export default Application
