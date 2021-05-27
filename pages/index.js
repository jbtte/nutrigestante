
import Theme from "../theme/main";
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Comment from '../models/comments'
import dbConnect from '../middleware/mongodb'

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
  const result = await Comment.find({approved: true})
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
