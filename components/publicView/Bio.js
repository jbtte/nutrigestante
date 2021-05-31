import { useState, useEffect } from 'react'
import Image from 'next/image'
import Collapse from 'react-bootstrap/Collapse'
import bioText from '../../static/bio-text.js'
import { Container, Card, Photo } from '../styled/BioStyled'

export default function Bio () {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile (window.innerWidth < 768)
  }, [])

  const MobileBio = () =>{
    return (<>
      <Collapse in={open}>
          <div id="bio-text">
          {bioText}
          </div>
        </Collapse>
        <p
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          style={{textDecoration: 'underline'}}>
            Ver a minha história
        </p>
    </>)
  }

  return (
  <Container className="d-md-flex justify-content-center">
    <Photo className="col-md-3 col-sm-12">
      <Image
        src='/images/fabiola-6.jpg'
        alt="Foto Fabiola e Filhos"
        width={1000}
        height={1000}
        layout="responsive"      
      />
    </Photo>

    <Card className="col-md-5 col-sm-12">
      {mobile ? <MobileBio /> : <p >{bioText}</p>}
    </Card>
  </Container>)
}

