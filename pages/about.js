import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="About" />
        <p className="description">
          This is a site I've created so I can implement some features of CommandBar.
        </p>
      </main>

      <Footer />
    </div>
  )
}