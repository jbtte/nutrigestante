import styled from 'styled-components';

const Content = styled.div`
  background: linear-gradient(180deg, rgba(252,170,246,0.25) 24%, rgba(170,209,252,0.81) 100%), url('/images/diamond.png');
  height: 500px;
  width: 100%;
  background-attachment: fixed;
  text-shadow: 1px 1px #999;
  `

export default function Faq() {
  return (
    <Content>
      <h1 className="py-5 text-center">Perguntas frequentes - TODO</h1>
    </Content>
  )
}