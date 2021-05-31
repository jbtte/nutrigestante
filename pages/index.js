
import Theme from "../theme/main";
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Comment from '../models/comments'
import dbConnect from '../middleware/mongodb'

import MainBanner from '../components/PublicView/MainBanner'
import Booking from '../components/PublicView/Booking'
import ProfessionalAreas from '../components/PublicView/ProfessionalAreas'
import Bio from '../components/PublicView/Bio'
import Comments from '../components/PublicView/Comments'
import Vitrium from '../components/PublicView/Vitrium'
import Faq from '../components/PublicView/Faq'
import SocialMedias from '../components/PublicView/SocialMedias'

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
