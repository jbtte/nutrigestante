import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

import Theme from "../theme/main";
import Comment from '../models/comments'
import dbConnect from '../middleware/mongodb'
import styles from '../styles/Home.module.css'
import MainBanner from '../components/MainBanner'
import Booking from '../components/Booking'
import ProfessionalAreas from '../components/ProfessionalAreas'
import Bio from '../components/Bio'
import Comments from '../components/Comments'
import Vitrium from '../components/Vitrium'
import Faq from '../components/Faq'
import SocialMedias from '../components/SocialMedias'



function Home({ comments }) {
  return (
    <div className={styles.container}>
      <Head>
      <title>Nutricionista para gestantes | Brasília | Fabiola Amaral</title>
      <meta name="description" content="Nutricionista - atendimento exclusivo de gestantes e mulheres que querem engravidar" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" /> 
      <meta name="theme-color" content="#95c0d0" />

      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" 
        crossorigin="anonymous" 
        />

      </Head>

      <Theme>
        <MainBanner />
        <Booking message={"Vamos começar a sua dieta!"}/>
        <ProfessionalAreas />
        <Bio />
        <Comments comments={comments}/>
        <Booking message={"Vamos conversar sobre o seu bem-estar e do bebê!"}/>
        <Faq />
        <SocialMedias />
        <Vitrium />
      </Theme>
  

    </div>

  )
}

/* Retrieves comments data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Comment.find({})
  const comments = result.map((doc) => {
    const comment = doc.toObject()
    comment.createdAt = comment.createdAt.toString()
    comment.updatedAt = comment.updatedAt.toString()
    comment._id = comment._id.toString()
    return comment
  })

  return { props: { comments: comments } }
}


export default Home
