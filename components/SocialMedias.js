import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons' 

const Container = styled.div`
  height: 150px;

  a{
    font-size: 30px;
    color: ${props => props.theme.colors.blueDark};
    margin: auto 30px;
    padding: 30px;
    &:hover{
      color: ${props => props.theme.colors.pinkPrimary};
    }
  }


  @media (max-width: 768px) {
      padding: 60px 0;
      h1 {
        font-size: 1.5em;
    }
  }
`

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