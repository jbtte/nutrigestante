import styled from 'styled-components';

const Content = styled.div`
background-image: linear-gradient(180deg, rgba(170,209,252,0.3958771008403361) 0%, rgba(237,241,251,0.4042804621848739) 35%, rgba(237,241,251,0) 100%),  url('/images/working.jpeg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;
img {
  filter: grayscale(100%);
}
height: 600px;
width: 100%;
color: rgba(193,85,193,1);

@media (max-width: 768px) {
  
}
`

export default function ProfessionalAreas () {
  return (
    <Content className="d-flex justify-content-around">
      <h1 className="p-5">Áreas de Atuação</h1>
    </Content>
  )
}