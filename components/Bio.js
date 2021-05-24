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
`

const Photo = styled.div`
  padding-top: 40px;
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

  return (<Container className="d-md-flex justify-content-around">
  
  <Photo className="col-md-3 col-sm-12">
    <Image
      src='/images/meninos-2.png'
      alt="Foto Fabiola e Filhos"
      width={0.7}
      height={0.8}
      layout="responsive"
      quality={100}
      
    />
  </Photo>

    <Card className="col-md-5 col-sm-12">
      {mobile ? <MobileBio /> : <p >{bioText}</p>}
    </Card>
  </Container>)
}

