import styled from 'styled-components';

const Content = styled.div`
  background: linear-gradient(180deg, rgba(252,170,246,0.25) 24%, rgba(170,209,252,0.81) 100%), url('/images/diamond.png');
  height: 600px;
  width: 100%;
  `

const Title = styled.h2`
  padding-top: 60px;
  text-align:center;
  color: rgba(193,85,193,1);
  margin-bottom: 30px;
`

const MessageCard = styled.div`
  background-color: #fff;
  color: #2e669e;
  width: 20em;
  height: 11em;
  border-radius: 10px;
  margin: 15px 40px;
  box-shadow: 1px 1px rgba(193,85,193,0.15);
  h5{
    font-size: 18px;
  }
  p{
    text-align: right;
    opacity: 0.70;
    font-family: 'Dancing Script', cursive;
    margin-bottom: 0px;
  }
`

const MessageBox = ({name, message}) => {
  return (<MessageCard className='card'>
      <div className='card-body d-flex flex-column'>
          <h5 className="card-text flex-grow-1">{message}</h5>
         <p>{name}</p>        
      </div>
    </MessageCard>
  )
}

export default function Comments({ comments }) {
  return (<Content>
    <Title>Olha o carinho das minhas pacientes</Title>
    <div className="d-flex flex-md-wrap justify-content-around">
      {comments.slice(0,5).map((comment) =>{
        return (<MessageBox name={comment.name} message={comment.message}/>)
        })
      }
    </div>
    </Content>)
}