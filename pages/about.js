import { useRouter } from "next/router";

function About() {
  const router = useRouter();

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

export default About;