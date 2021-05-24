import styled from 'styled-components';

const Content = styled.div`
  background: linear-gradient(180deg, rgba(252,170,246,0.25) 0%, rgba(251,237,250,0.25) 100%), url('/images/vitrium.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;

  a{
    text-decoration: underline;
    color: #2e669e
  }
  @media (max-width: 768px) {
    background-position: 20% 0%;
  }
`

const CrossBar = styled.div`
  width: 100%;
  padding: 5px 160px;
  top: 20%;
  position: relative;
  font-size: 22px;
  color: #2e669e;
  background: linear-gradient(90deg, rgba(170,209,252,0.3958771008403361) 0%, rgba(237,241,251,0.4042804621848739) 15%, rgba(237,241,251,0) 100%);
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px;
    top: 25%;

    h1 {
      font-size: 22px;
    }
  }
  `

export default function Vitrium () {
  return (
    <Content>
      <CrossBar className="d-flex jsutify-content-between">
        <div>
          <p>Onde eu atendo</p>
          <h4>Vitrium Centro Médico </h4>
          <p>SGAS 614 - L2 Sul - Sala 151  - (<a href="https://www.google.com.br/maps/place/Nutricionista+para+Gestantes+-+Nutri%C3%A7%C3%A3o+gestante/@-15.8357103,-47.9142477,18z/data=!4m5!3m4!1s0x0:0x214df389edb21b55!8m2!3d-15.8360827!4d-47.91323" target="_blank">Google maps</a>)</p>
        </div>
      </CrossBar>
    </Content>
  )
}