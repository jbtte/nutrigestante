import styled from 'styled-components'

const Container = styled.div`
  padding: 120px 0;
  margin: auto;
  color: #2e669e;
  @media (max-width: 768px) {
    padding: 60px 0;
    h1 {
      font-size: 1.5em;
      margin-left: 20px;
      margin-right: 20px;
    }
  }

`

const Button = styled.button`
width: 500px;
  font-size: 1.5em;
  margin: 1.5em auto;
  padding: 0.5em 1.5em;
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
`;

export default function Booking ({message}) {
  return (<Container className="d-flex flex-column justify-content-center text-center">
    <h1>{message}</h1>
    <Button>
      <a href="https://api.whatsapp.com/send?phone=5561981149601">
      Marque sua consulta
      </a>
      </Button>
  </Container>)
}