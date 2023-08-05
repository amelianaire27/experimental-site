import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '../components/Button';

export default function Home() {
  const handleButtonClick = () => {
    window.CommandBar.trackEvent("buttonClicked", {});
  };
  const onSearchCats = () => {
    return fetch(`https://catfact.ninja/fact`)
    .then(response => response.json())
  };
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          This is a Next.js site, it's pretty sweet!
        </p>
        <p className="description">
          To navigate between pages, use Cmd+K or Ctrl+K. You can also click the button below, see what happens...
        </p>
        <Button label="Click Me" onClick={handleButtonClick} />
      </main>

      <Footer />
    </div>
  )
}
