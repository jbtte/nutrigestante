import Switch from "react-switch";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function CommentsView ({comments, active}) {
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

  return ( 
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
    </Table>)
}