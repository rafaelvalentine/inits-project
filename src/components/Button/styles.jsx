import styled from 'styled-components'

export const Container = styled.button`
    margin:${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 2px;
    border: 1px solid ${props => props.theme.transparent};
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 21px;
    cursor: pointer;
    color: ${props => props.alt ? props.theme.paleGreen : props.theme.white};
    background-color: ${props => props.alt ? props.theme.lightGreen : props.theme.green};
    transition: .3s;
`
Container.defaultProps = {
  width: '320px',
  margin: '24px auto',
  height: '50px'
}

export const AltContainer = styled(Container)`
    background-color: ${props =>
    props.chosen ? props.theme.seaBlue : 'transparent'};
    border: ${props => props.chosen ? null : `0.5px solid ${props.theme.seaBlue}`};
    color: ${props => (props.chosen ? '#fff' : props.theme.seaBlue)};
    width:${props => props.width};
    height:${props => props.height};
`

export const SearchButton = styled(Container)`
position: absolute;
top:0;
right:150px;
margin:${props => props.margin};
width: ${props => props.width};
height: ${props => props.height};
border-radius: 0 2px 2px 0;
text-transform: uppercase;
`
SearchButton.defaultProps = {
  width: '134px',
  margin: '0',
  height: '40px'
}
export const FilterButton = styled(SearchButton)`
font-weight: bold;
color: ${props => props.theme.green};
background-color: ${props => props.theme.white};
border: 1px solid ${props => props.theme.transparent};
border-radius: 2px;
right:0;
`

export const CreateUserButton = styled(Container)`
margin:${props => props.margin};
width: ${props => props.width};
height: ${props => props.height};
color: ${props => props.theme.green};
background-color: ${props => props.theme.transparent};
border: 1px solid ${props => props.theme.green};
align-self: flex-end;
border-radius: 4px;
`
CreateUserButton.defaultProps = {
  width: '134px',
  margin: '0',
  height: '40px'
}

export const GreenButtonAlt = styled(Container)`
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.theme.white};
    background-color: ${props => props.alt ? props.theme.lightGreen : props.theme.green};
`
GreenButtonAlt.defaultProps = {
  width: '90px',
  height: '32px',
  margin: '0 auto'
}
export const RedButtonAlt = styled(GreenButtonAlt)`
width: ${props => props.width};
height: ${props => props.height};
color: ${props => props.alt ? props.theme.paleOrange : props.theme.paleGreen};
background-color: ${props => props.alt ? props.theme.lightOrange : props.theme.PaleGreen};
`
// RedButtonAlt.defaultProps = {
//   width: '90px',
//   height: '32px',
//   margin: '24px auto'
// }
// GreenButtonAlt.defaultProps = {
//   width: '90px',
//   height: '32px',
//   margin: '24px auto'
// }
export const DuoButtonWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
padding:${props => props.padding};
margin:${props => props.margin};
`

DuoButtonWrapper.defaultProps = {
  padding: '0 8px',
  margin: '0'
}
