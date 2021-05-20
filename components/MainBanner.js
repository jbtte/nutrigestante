import styled from 'styled-components';
import Image from 'next/image'

const Content = styled.div`
  background: linear-gradient(180deg, rgba(252,170,246,0.25) 0%, rgba(251,237,250,0.25) 100%), url('/images/pregnant.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    background-position: right;
  }
`

const CrossBar = styled.div`
  width: 100%;
  padding: 5px 160px;
  top: 66%;
  position: relative;
  font-size: 22px;
  color: rgba(193,85,193,1);
  background: linear-gradient(90deg, rgba(170,209,252,0.3958771008403361) 0%, rgba(237,241,251,0.4042804621848739) 15%, rgba(237,241,251,0) 100%);
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px;
    h1 {
      font-size: 22px;
    }
  }
  `

export default function MainBanner () {
  return (
    <Content>

      <CrossBar>
        <p className="px-md-4">cuidando do bem estar das</p>
        <h1>Futuras mamães</h1>
      </CrossBar>
    </Content>
  )
}