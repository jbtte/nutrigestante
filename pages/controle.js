import { useState, useEffect } from 'react'
import { ImageDiv } from '../components/styled/CommentsPageStyled'
import Content from '../components/styled/ControlePageStyled'
import Bar from '../components/styled/Bar'
import Theme from "../theme/main";
import Image from 'next/image'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { ProSidebar, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


const SideBarDiv = styled.div`
padding: 5px 5px;
  .pro-sidebar-layout {
  background-color: #2e669e !important;
  padding: 10px; 
  font-size: 30px;
}

.pro-item-content {
  font-size: 20px; 
}
`

export default  function Controle () {
const [comments, setComments] = useState([])
const [sidebarOpen, setSidebarOpen] = useState(true)
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


    <div className="d-flex">
    <SideBarDiv>
      <ProSidebar>
      <SidebarHeader> Menu </SidebarHeader>
        <Menu iconShape="square">
          <MenuItem>Comentários</MenuItem>
        </Menu>
      </ProSidebar>
    </SideBarDiv>
      
      
      
      <Content> 
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Mensagem</th>
                <th>Aprovada</th>
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
    </div>
    <Bar>
    </Bar>
 </Theme> 
 )
}