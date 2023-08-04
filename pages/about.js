import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="About" />
        <p className="description">
          Trying to get CommandBar to show on all pages....
        </p>
      </main>

      <Footer />
    </div>
  )
}
