import styled from 'styled-components';

const Bar = styled.div`
background: linear-gradient(180deg, rgba(252,170,246,0.25) 24%, rgba(170,209,252,0.81) 100%), url('/images/diamond.png');
height: 15%;
width: 100%;
padding: 15px 30px;
position: ${props => props.sticky ? 'sticky' : 'static'};
`
export default Bar