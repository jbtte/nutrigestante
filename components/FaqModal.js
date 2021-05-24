import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export default function FaqModal({element, close, show}) {
const {question, text} = element

return (
  <Modal show={show} onHide={close} centered>
    <Modal.Header>
      <Modal.Title>{question}</Modal.Title>
    </Modal.Header>
      <Modal.Body>
        {text}
      </Modal.Body>
    <Modal.Footer>
      <Button className="custom-btn" onClick={close}>
        Voltar
      </Button>
    </Modal.Footer>
  </Modal>
  )
}