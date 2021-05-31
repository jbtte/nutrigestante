import Carousel from 'react-bootstrap/Carousel'
import {Content, Title, MessageCard} from '../styled/CommentsStyled'

const MessageBox = ({name, message}) => {
  return (<MessageCard>
      <div className="col-sm-10 col-md-6 mx-auto">
        <div className="message-card">
            <h4 className={message.length > 350 ? "small-font" : ""} >{message}</h4> 
            <p>{name}</p>        
          </div>
      </div>
    </MessageCard>
  )
}

export default function Comments({ comments }) {
    const commentsShowed = () => {
      const randomComments = comments.sort(() => Math.random() - 0.5);
      return randomComments.slice(0,10) 
    }
      
  return (<Content>
      <Title>Olha o carinho das minhas pacientes</Title>
      <Carousel  
        fade
        wrap
        indicators={false} 
        interval={7500}
        pause={'hover'}
        >
          {commentsShowed().map((comment, index) =>{
            return (
              <Carousel.Item key={index}>
                <MessageBox name={comment.name} message={comment.message}/>
              </Carousel.Item>
            )
            })
          }
      </Carousel>
    </Content>)
}