import styled from 'styled-components';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faAppleAlt, faQuestion, faComments  } from '@fortawesome/free-solid-svg-icons' 
import FaqModal from './FaqModal'
import faqText from '../static/faqText'

const Content = styled.div`
  background: linear-gradient(180deg, rgba(252,170,246,0.25) 24%, rgba(170,209,252,0.81) 100%), url('/images/consultorio-2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 400px;
  width: 100%;
  font-size: 12px;
  color: ${props => props.theme.colors.blueDark};
  text-shadow: 1px 1px ${props => props.theme.colors.purpleSecondary};

  h1{
    color: ${props => props.theme.colors.purpleSecondary};
    text-shadow: 1px 1px ${props => props.theme.colors.grayShadow};
  }
  `

  const FaqIcons = styled.div`
    width: 40%;
    margin: auto auto;
    filter: drop-shadow(0px 0px 1px ${props => props.theme.colors.purpleSecondary});
    
    svg{
      padding: 40px;
    }

  svg:hover{
    filter: drop-shadow(0px 0px 4px ${props => props.theme.colors.pinkPrimary});
  }

    @media (max-width: 768px) {
      width: 80%;
      margin: auto auto;

      svg{
        margin: 0 10px;
        padding: 0px;
      }
    }
  `
export default function Faq() {
  const [clock, setClock] = useState(false);
  const [comment, setComment] = useState(false);
  const [apple, setApple] = useState(false);
  const [question, setQuestion] = useState(false);

  // Comment
  const handleCommentClose = () => setComment(false);
  const handleClockClose = () => setClock(false);
  const handleAppleClose = () => setApple(false);
  const handleQuestionClose = () => setQuestion(false);

  return (<>
    <Content>
      <h1 className="py-5 text-center">Como é a consulta</h1>
      <FaqIcons className='d-flex justify-content-around'>
        <FontAwesomeIcon icon={faComments} onClick={() => setComment(true)}/>
        <FontAwesomeIcon icon={faClock} onClick={() => setClock(true)} />
        <FontAwesomeIcon icon={faAppleAlt} onClick={() => setApple(true)} />
        <FontAwesomeIcon icon={faQuestion} onClick={()=>setQuestion(true)} />
      </FaqIcons>
    </Content>

    <FaqModal element ={faqText.comment} show={comment } close={handleCommentClose}/>
    <FaqModal element ={faqText.clock} show={clock } close={handleClockClose}/>
    <FaqModal element ={faqText.apple} show={apple } close={handleAppleClose}/>
    <FaqModal element ={faqText.question} show={question} close={handleQuestionClose}/>
 </> )
}