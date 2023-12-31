import { useEffect, useState } from "react";
import { init } from "commandbar";

import '@styles/globals.css'

if (typeof window !== "undefined") {
  init('81136260');
}

function Application({ Component, pageProps }) {
  const [commandBarReady, setCommandBarReady] = useState(false);

  useEffect(() => {
    const loggedInUserId = '12345'; // example
    
    window.CommandBar.boot(loggedInUserId).then(() => {
      setCommandBarReady(true);
    });

    return () => {
      window.CommandBar.shutdown();
    }
  }, []);

  useEffect (() => {
    if (commandBarReady) {
    return () => {
      window.CommandBar.trackEvent("buttonClicked", {})};
    }
  });

  return <Component {...pageProps} />
}

export default Application