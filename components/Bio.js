import { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import Collapse from 'react-bootstrap/Collapse'

import bioText from '../static/bio-text.js'

const Container = styled.div`
  margin: 40px;
  color: ${props => props.theme.colors.blueDark};
  @media (max-width: 768px) {
    margin: 10px;
  }
`

const Card = styled.div`
  margin-right: 50px;
  margin-top: 60px;
  text-align: center;
  p{
    font-size: 14px;
  }
`

const Photo = styled.div`
  padding-top: 40px;
  img{

    height: 200px;
    width: 800px;
  }
`


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

  return (<Container className="d-md-flex justify-content-center">
  
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

