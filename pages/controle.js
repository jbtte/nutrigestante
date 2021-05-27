import { useState, useEffect } from 'react'
import { ImageDiv } from '../components/styled/CommentsPageStyled'
import Content from '../components/styled/ControlePageStyled'
import Bar from '../components/styled/Bar'
import Theme from "../theme/main";
import Image from 'next/image'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';


export default  function Controle () {
const [comments, setComments] = useState([])
let active=4;

useEffect(() => {
  try {
     fetch ('/api/comments')
     .then(data => data.json())
     .then(comments => setComments(comments))
  } catch(e) {console.error(e)}
}, [])




  return (<Theme>
    <Bar>
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
    </Bar>
      <Content> 
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Mensagem</th>
                <th>Aprovado</th>
              </tr>
            </thead>
              <tbody>
                {comments.map((comment, index) => {
                  return(
                    <tr key={index}>
                      <td>{comment.name}</td>
                      <td>{comment.message}</td>
                      <td>{comment.approved ? "aprovada" : "não aprovada"}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
        </div>
      </Content>
    <Bar>
    </Bar>
 </Theme> 
 )
}