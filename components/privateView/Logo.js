import Image from 'next/image'
import { ImageDiv } from '../styled/CommentsPageStyled'

export default function Logo() {
  return (
    <ImageDiv>
      <Image
        src='/images/logo.png'
        alt="Logo Nutrigestante - Mulher Grávida"
        width={220}
        height={110}
        quality={65}
        layout="responsive"
      />
    </ImageDiv>
  )
}