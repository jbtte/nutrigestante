import styled from 'styled-components';

const Content = styled.div`
  background: linear-gradient(180deg, rgba(252,170,246,0.25) 24%, rgba(170,209,252,0.81) 100%), url('/images/diamond.png');
  height: 100vh;
  width: 100%;
  background-attachment: fixed;
  `

  export default function Comments() {

    return (<Content>
      <h1>Nome</h1>
      </Content>)
  }