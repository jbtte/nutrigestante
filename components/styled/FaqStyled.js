import styled from 'styled-components';


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

  export {Content, FaqIcons}