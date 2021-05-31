import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faAppleAlt, faQuestion, faComments  } from '@fortawesome/free-solid-svg-icons' 
import FaqModal from './FaqModal'
import faqText from '../../static/faqText'
import {Content, FaqIcons} from '../styled/FaqStyled'
  
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