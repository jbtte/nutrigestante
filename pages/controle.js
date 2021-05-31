import { useState, useEffect } from 'react'
import { ImageDiv } from '../components/styled/CommentsPageStyled'
import Content from '../components/styled/ControlePageStyled'
import Bar from '../components/styled/Bar'
import Theme from "../theme/main";
import Image from 'next/image'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBarDiv from '../components/styled/SideBarDiv'
import { ProSidebar, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Pagination from 'react-bootstrap/Pagination'
import Switch from "react-switch";

export default  function Controle () {
const [comments, setComments] = useState([])
const [ active, setActive ] = useState(1)
let items = [];

useEffect(() => {
  try {
     fetch ('/api/comments')
     .then(data => data.json())
     .then(comments => {
      comments.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
       setComments(comments)})
  } catch(e) {console.error(e)}
}, [])


for (let number = 1; number <= (comments.length/5+1); number++) {
  items.push(
    <Pagination.Item key={number} active={number === active} onClick={()=>setActive(number)}>
      {number}
    </Pagination.Item>,
  );
}

const handleAprovedChange = (id, index) => {
  try {
    fetch (`/api/comments?id=${id}`, {method: 'PATCH'})
    comments[index].approved = !comments[index].approved
 } catch(e) {console.error(e)}
  setComments([...comments])
  console.log("All the way")
}

const messageBoard = () => {
  const currentMessage = (active - 1) * 5
  console.log(currentMessage)
  const commentsShow =  comments.slice(currentMessage, (currentMessage+5))
  return ( commentsShow.map((comment, index) => {
    return(
      <tr key={comment._id}>
        <td>{comment.name}</td> 
        <td>{comment.message}</td>
        <td>
          <Switch  
              checked={comment.approved}
              onChange={()=>handleAprovedChange(comment._id, (currentMessage+index))}
              height={20}
              width={50}
              handleDiameter={16}
              offColor = {'#FF7F7F'}
               />
          </td>
      </tr>
    )
  }))
}


  return (<>  
  <Theme>
    <Content className="d-flex justify-content-between flex-column">
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
      <div>
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
                {messageBoard()}
                </tbody>
              </Table>
          </div>
        </Content>
        <div className="d-flex justify-content-around">
            <Pagination size="sm">{items}</Pagination>
          </div>
        </div>
      </div>
      <Bar sticky>
      </Bar>
    </Content>
 </Theme> 
</> )
}