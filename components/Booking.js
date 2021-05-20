import styled from 'styled-components'

const Container = styled.div`
  padding: 120px 0;
  margin: auto;
  color: #2e669e;
  @media (max-width: 768px) {
    padding: 60px 0;
    h1 {
      font-size: 1.5em;
    }
  }

`

const Button = styled.button`
  font-size: 1.5em;
  margin: 1em 1.5em;
  padding: 0.5em 1.5em;
  border-radius: 3px;
  background: rgba(247,158,247,1);
  color: white;
  border: 2px solid rgba(247,158,247,1);
  border-radius: 25px;
  &:hover {
    background: white;
    color: rgba(247,158,247,1);
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export default function Booking () {
  return (<Container className="d-flex flex-column justify-content-center">
    <h1>Vamos começar a sua dieta!</h1>
    <Button>Agende o nosso encontro</Button>
  </Container>)
}