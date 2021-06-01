import {  useEffect } from 'react'
import Switch from "react-switch";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from '../styled/ControlePageStyled'




export default function CommentsView ({comments, setComments, active}) {
  
  useEffect(() => {
    try {
       fetch ('/api/comments')
       .then(data => data.json())
       .then(comments => {
        comments.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
         setComments(comments)})
    } catch(e) {console.error(e)}
  }, [])

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

  return (<Content>
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
    )
  
}