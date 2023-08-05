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
          The story of this app is that it was created for the sole purpose of testing out the various CommandBar
          settings.
        </p>
        <p className="description">
          Check out the <a href='https://www.commandbar.com/sdk' target='_blank'>CommandBar docs</a> for more information!
        </p>
      </main>

      <Footer />
    </div>
  )
}
