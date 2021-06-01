import Bar from '../styled/Bar'
import { Content, ImageDiv} from '../styled/CommentsPageStyled'


import 'bootstrap/dist/css/bootstrap.min.css';
import Theme from "../../theme/main";
import Image from 'next/image'


export default function Comments() {

    return (
    <Theme>
      <Content>

        <Bar>
          <ImageDiv>
            <Image
              src='/images/logo.png'
              alt="Logo Nutrigestante - Mulher Grávida"
              width={220}
              height={110}
              quality={65}
              layout="responsive"
              className="mb-2"
            />
          </ImageDiv>
        </Bar>
        <div className="d-flex justify-content-around mt-5">
          <div className="text-center">
            <h1>Acesso Não Autorizado</h1>
            <a href="/api/auth/logout"> Logout</a>
          </div>
        </div>
        
      </Content>
    </Theme>)
  }