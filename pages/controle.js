import { useState, useEffect } from 'react'
import Content from '../components/styled/ControlePageStyled'
import Bar from '../components/styled/Bar'
import Theme from "../theme/main";

import CommentsView from '../components/privateView/CommentsView'
import SideBar from '../components/privateView/SideBar'
import CommentsPagination from '../components/privateView/CommentsPagination'
import Logo from '../components/privateView/Logo'


export default  function Controle () {
const [ active, setActive ] = useState(1)
const [comments, setComments] = useState([])

  useEffect(() => {
    try {
       fetch ('/api/comments')
       .then(data => data.json())
       .then(comments => {
        comments.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
         setComments(comments)})
    } catch(e) {console.error(e)}
  }, [])

  return (<>  
  <Theme>
    <Content className="d-flex justify-content-between flex-column">
      <Bar>
        <Logo />
      </Bar>
      <div className="d-flex">
        <SideBar/>
        <div>
            <Content> 
              <div>
                <CommentsView active={active} comments={comments}/>
              </div>
            </Content>
            <CommentsPagination 
              active ={active} 
              setActive={setActive} 
              numComments = {comments.length}
            />
          </div>
        </div>
      <Bar sticky>
      </Bar>
    </Content>
 </Theme> 
</> )
}