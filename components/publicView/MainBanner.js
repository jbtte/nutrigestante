import Image from 'next/image'
import { Content, CrossBar, LogoImage} from '../styled/MainBannerStyled'

export default function MainBanner () {
  return (
    <Content>
    <LogoImage>
    <Image
      src='/images/logo-nome.png'
      alt="Logo Nutrigestante - Mulher Grávida"
      width={150}
      height={75}
      layout="responsive"
      quality={65}
    />
    </LogoImage>
      <CrossBar>
        <div className="banner-text">
          <p >cuidando do bem estar das</p>
          <h1>Futuras mamães</h1>
        </div>
      </CrossBar>
    </Content>
  )
}