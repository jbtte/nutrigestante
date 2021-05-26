import styled from 'styled-components'

const Container = styled.div`
  height: 150px;

  a{
    font-size: 30px;
    color: ${props => props.theme.colors.blueDark};
    margin: auto 30px;
    padding: 30px;
    &:hover{
      color: ${props => props.theme.colors.pinkPrimary};
    }
    @media (max-width: 768px) {
      margin: auto 15px;
      padding: 5px;
    }
  }
`

export { Container }