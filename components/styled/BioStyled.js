import styled from 'styled-components';

const Container = styled.div`
  margin: 40px;
  color: ${props => props.theme.colors.blueDark};
  @media (max-width: 768px) {
    margin: 10px;
  }
`

const Card = styled.div`
  margin-right: 50px;
  margin-top: 60px;
  text-align: center;
  p{
    font-size: 14px;
  }
`

const Photo = styled.div`
  padding-top: 40px;
  img{
    height: 200px;
    width: 800px;
  }
`

export { Container, Card, Photo }