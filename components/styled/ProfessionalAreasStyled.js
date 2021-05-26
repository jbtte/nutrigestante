import styled from 'styled-components';

const Content = styled.div`
background-image:linear-gradient(180deg, rgba(252,170,246,0.25) 24%, rgba(170,209,252,0.81) 100%),  url('/images/working.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;
height: 400px;
width: 100%;

text-shadow: 1px 1px ${props => props.theme.colors.grayShadow};
color: ${props => props.theme.colors.purpleSecondary};
@media (max-width: 768px) {
  height: 600px
`

const RoundImage = styled.div`
img {
    border-radius: 50%;
  }
  h3 {
     font-size: 24px;
  }
  @media (max-width: 768px) {
    width: 75px;
    margin: 30px;    
    h3 {
      font-size: 18px;
   }
  
  }
`

export { Content, RoundImage}