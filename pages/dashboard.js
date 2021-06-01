import { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Bar from '../components/styled/Bar'
import Theme from "../theme/main"

import CommentsView from '../components/privateView/CommentsView'
import SideBar from '../components/privateView/SideBar'
import CommentsPagination from '../components/privateView/CommentsPagination'
import Logo from '../components/privateView/Logo'
import NotAuthorized from '../components/privateView/NotAuhtorized'

export default  function Dashboard () { 
const [ active, setActive ] = useState(1)
const [comments, setComments] = useState([])
const { user, error, isLoading } = useUser();

if (isLoading) return <div>Loading...</div>
if(error) return <div>{error.message}</div>


//if(user.sub !== process.env.REACT_APP_USER_PERMITED_1) return <NotAuthorized/>

  return (<>
    <Theme>
        <Bar> <Logo /> </Bar>
        <div className="d-flex">
          <SideBar/>
          <div>
              {user && <div>Bem vindo {user.given_name}</div>}
              <CommentsView active={active} comments={comments} setComments={setComments}/>
              <CommentsPagination active ={active} setActive={setActive} numComments = {comments.length} />
            </div>
          </div>
        <Bar> </Bar>
  </Theme> 
</> )
}

export const getServerSideProps = withPageAuthRequired();
