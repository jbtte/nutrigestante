import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'


const Content = styled.div`
  background: linear-gradient(180deg, rgba(252,170,246,0.25) 24%, rgba(170,209,252,0.81) 100%), url('/images/diamond.png');
  height: 500px;
  width: 100%;
  background-attachment: fixed;  
  @media (max-width: 768px) {
    height: 600px;
     }
  `

const Title = styled.h2`
  padding-top: 60px;
  margin-bottom: 40px;
  text-align:center;
  text-shadow: 1px 1px ${props => props.theme.colors.grayShadow};
  color: ${props => props.theme.colors.purpleSecondary};
  
`

const MessageCard = styled.div`
  color: ${props => props.theme.colors.blueDark};
  
  h4{
    line-height: 150%;
    text-align: center;
    opacity: 0.8
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 16px; 
       }
}

  p{
    font-size: 22px;
    text-align: right;
    opacity: 0.70;
    font-family: 'Dancing Script', cursive;

    
  }

  .message-card{
    height: 300px;
  }
`

const MessageBox = ({name, message}) => {
  return (<MessageCard>
      <div className="col-sm-10 col-md-6 mx-auto">
        <div className="message-card">
            <h4>{message}</h4>
            <p>{name}</p>        
          </div>
      </div>
    </MessageCard>
  )
}

export default function Comments({ comments }) {
  const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return (<Content>
      <Title>Olha o carinho das minhas pacientes</Title>
      <Carousel  
        fade
        wrap
        indicators={false} 
        interval={7500}
        pause={'hover'}
        >
          {comments.slice(0,5).map((comment, index) =>{
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