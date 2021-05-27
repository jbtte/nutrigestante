import styled from 'styled-components';

const Content = styled.div`
  height: 100vh;
  `

  const Bar = styled.div`
  background: linear-gradient(180deg, rgba(252,170,246,0.25) 24%, rgba(170,209,252,0.81) 100%), url('/images/diamond.png');
  height: 15%;
  width: 100%;
  padding: 15px 30px;
  `

  const FormDiv = styled.div`
  height: 70%;
  width: 60%;
  margin: auto;
  padding: 30px 0px; 

  .btn-pink{
    width: 100px;
    font-size: 1.2em;
    margin: 1.5em auto;
    padding: .5em 0;
    border-radius: 3px;
    background: ${props => props.theme.colors.pinkPrimary};
    border: 2px solid ${props => props.theme.colors.pinkPrimary};
    border-radius: 25px;
    text-align: center;
    
    &:hover {
      background: white;
      color: ${props => props.theme.colors.pinkPrimary};
      
      a {
        color: ${props => props.theme.colors.pinkPrimary};
      }
    }

    a{
      color: white;
      text-decoration: none;
      &:hover {
        color: ${props => props.theme.colors.pinkPrimary};
      }
    }
  

    @media (max-width: 768px) {
      font-size: 1em;
      width: 200px;
    }
  }
`

const ImageDiv = styled.div`
  width: 200px; 
  @media (max-width: 768px) {
    width: 150px;
  }
`

const SavedDiv = styled.div`
  text-align: center; 
  color: ${props => props.theme.colors.purpleSecondary};
`

export { Content, Bar, FormDiv, ImageDiv, SavedDiv}