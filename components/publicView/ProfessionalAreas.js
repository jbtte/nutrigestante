import Image from 'next/image'
import { Content, RoundImage} from '../styled/ProfessionalAreasStyled'

const Avatar = ({imageName, title}) => {
  return (
    <RoundImage>
      <Image  
          src={`/images/${imageName}.jpg`}
          alt={"Imagem de" + title} 
          width={200}
          height={200}/>
        <h3>{title}</h3>
    </RoundImage> 
    )
}

export default function ProfessionalAreas () {
  return (
    <Content className="d-flex flex-column justify-content-around">
      <h1 className=" text-center">Como eu posso te ajudar</h1>
      <div className="d-flex justify-content-around flex-wrap">
        <Avatar imageName={'dieta'} title={'Nutrição Pré-Natal'}/>
        <Avatar imageName={'balanca'} title={'Controle de Peso'}/>
        <Avatar imageName={'diabetes-gestacional'} title={'Diabetes Gestacional'}/>
        <Avatar imageName={'pre-eclampsia'} title={'Pré-eclampsia'}/>
      </div>
    </Content>
  )
}