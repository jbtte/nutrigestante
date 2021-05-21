import styled from 'styled-components';
import Image from 'next/image'


const Content = styled.div`
background-image:linear-gradient(180deg, rgba(252,170,246,0.25) 24%, rgba(170,209,252,0.81) 100%),  url('/images/working.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;

height: 400px;
width: 100%;
color: rgba(193,85,193,1);

@media (max-width: 768px) {
  
}
`

const RoundImage = styled.div`
  img {
    border-radius: 50%;
  }
  h3 {
     font-size: 24px;
  }

`

const Avatar = ({imageName, title}) => {
  return (
    <RoundImage>
      <Image  
          src={`/images/${imageName}.png`}
          alt={"Imagem de" + title} 
          width={200}
          height={200}/>
        <h3>{title}</h3>
    </RoundImage>
    )
}

export default function ProfessionalAreas () {
  return (
    <Content className="d-flex flex-column justify-content-around ">
      <h1 className=" text-center">Como eu posso te ajudar</h1>
      <div className="d-flex justify-content-around">
        <Avatar imageName={'dieta'} title={'Nutrição Pré-Natal'}/>
        <Avatar imageName={'balanca'} title={'Controle de Peso'}/>
        <Avatar imageName={'diabetes-gestacional'} title={'Diabetes Gestacional'}/>
        <Avatar imageName={'pre-eclampsia'} title={'Pré-eclampsia'}/>
      </div>
    </Content>
  )
}