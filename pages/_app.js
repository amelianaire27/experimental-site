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

  useEffect(() =>{
    const onSearchContacts = (query) => {
      return fetch(`https://catfact.ninja/fact`)
        .then(response => response.json())
        .then(data => {
          // Extract the fact from the API response
          const catFact = data.fact;
          // Return the fact as a choice to the CommandBar
          return [{ key: catFact, text: catFact }];
        })
        .catch(error => {
          console.error('Error fetching cat fact:', error);
          return []; // Return an empty array as choices if there's an error
        });
    };
    
    // Register search function to CommandBar
    window.CommandBar.addArgumentChoices('contacts', [],
      {
        onInputChange: onSearchContacts
      }
    );
    
  })

  return <Component {...pageProps} />
}

export default Application
