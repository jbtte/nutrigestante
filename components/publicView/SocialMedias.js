
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons' 
import { Container } from '../styled/SocialMediasStyled'

export default function SocialMedias () {
  
  return (<>
    <Container className="d-flex">
        <a href="https://www.facebook.com/nutrigestantefabiola" target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="lg" className='p-4'/>
        </a>
        <a href="https://www.instagram.com/nutrigestante_fabiolaamaral/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className='p-4'/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5561981149601" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} className='p-4'/>
        </a>
    </Container>
  </>)
}