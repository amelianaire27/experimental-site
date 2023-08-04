import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '../components/Button';

export default function Home() {
  const handleButtonClick = () => {
    
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
          This is a Next.js site, it's pretty sweet.
        </p>
        <Button label="Click Me" onClick={handleButtonClick} />
      </main>

      <Footer />
    </div>
  )
}
