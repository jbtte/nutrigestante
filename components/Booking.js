import { Container, Button} from './styled/BookingStyled'

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