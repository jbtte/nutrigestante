import Image from 'next/image'
import styled from 'styled-components';

import bioText from '../static/bio-text.js'

const Container = styled.div`
  margin: 40px;
  color: #2e669e;
`

const Card = styled.div`
  margin-right: 50px;
  margin-top: 60px;
  text-align: center;
`

const Photo = styled.div`
  height: 400px;
  width: 267px;
  padding-top: 40px;
`


export default function Bio () {
  return (<Container className="d-flex justify-content-around">
  
  <Photo className="col-3">
    <Image
      src='/images/meninos-2.png'
      alt="Foto Fabiola e Filhos"
      width={66}
      height={100}
      layout="responsive"
      quality={65}
      
    />
  </Photo>

    <Card className="col-5">
      <p >{bioText}</p>
    </Card>
  </Container>)
}