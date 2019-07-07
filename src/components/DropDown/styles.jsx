import styled from 'styled-components'

export const NavDropDown = styled.div`
width: 160px;
min-height:80px
padding: 16px 8px;
position: absolute;
top: 55px;
right:80px;
background: ${props => props.theme.white};
box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
border-radius: 2px;
z-index: 5;
`
export const NavOptions = styled.article`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 8px;
margin: 8px 0;
cursor: pointer;
transition: .3s;
:hover{
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
}
img{
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
span{
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: ${props => props.theme.title}
}
`
export const SortDropDown = styled(NavDropDown)`
width: 188px;
min-height:0;
max-height: 190px;
padding:0;
top: 48px;
right:-55px;
border-radius: 4px;
`
export const SortOptions = styled(NavOptions)`
padding: 12px 20px;
border-top: 1px solid #F1F2F7;
border-bottom: 1px solid #F1F2F7;
margin:0;
span{
color: ${props => props.theme.cardName};
}
`