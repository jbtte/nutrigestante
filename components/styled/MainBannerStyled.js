import styled from 'styled-components';

const Content = styled.div`
  background: linear-gradient(180deg, rgba(252,170,246,0.25) 0%, rgba(251,237,250,0.25) 100%), url('/images/pregnant.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    background-position: right;
    width: 100%;
  }
`

const CrossBar = styled.div`
  width: 100%;
  padding: 5px 0px;
  top: 45%;
  position: relative;
  font-size: 22px;
  color: ${props => props.theme.colors.purpleSecondary};
  background: linear-gradient(90deg, rgba(170,209,252,0.3958771008403361) 0%, rgba(237,241,251,0.4042804621848739) 15%, rgba(237,241,251,0) 100%);
  p {
    margin: 0px;
    padding: 0 0px;
    text-align: right;   
  }

  h1{
    font-size: 56px;
    text-align: right;
  }
  
  .banner-text{
    width: 40%;
  }


  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px;
    top: 50%;  
  }
  `

  const LogoImage = styled.div`
    margin: 40px;
    width:250px;
    height:125px;
    @media (max-width: 768px) {
      width:100px;
      height:50px;
      margin: 15px;
    }
  `

  export { Content, CrossBar, LogoImage}