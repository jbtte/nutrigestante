import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainBanner from '../components/MainBanner'
import Booking from '../components/Booking'
import ProfessionalAreas from '../components/ProfessionalAreas'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Nutricionista para gestantes | Brasília | Fabiola Amaral</title>
      <meta name="description" content="Nutricionista - atendimento exclusivo de gestantes e mulheres que querem engravidar" />
      <link rel="icon" href="/images/logo-sm.png" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
      </Head>

      <main className={styles.main}>
        <MainBanner />
        <Booking />
        <ProfessionalAreas />
      </main>
    </div>
  )
}
