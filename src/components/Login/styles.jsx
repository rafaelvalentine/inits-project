import styled from 'styled-components'
// import { device } from '../device'

export const Wrapper = styled.section`
display:flex;
justify-content:center;
align-items: center;
width: 100vw;
height:100vh;
`

export const Left = styled.div`
width: 675px;
height:100%;
background:${props => props.theme.white}
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items:center;
align-content: flex-start;
padding-top: 80px;
`
export const Right = styled.div`
width: calc(100% - 675px);
height:100%;
background:  
url(${require('../../assets/images/loginJumbotroncopy.jpg')});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: scroll;
`

export const Header = styled.div``