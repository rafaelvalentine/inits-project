import styled from 'styled-components'
import { device } from '../device'

export const Container = styled.div`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.white};
    box-shadow: ${props => props.boxShadow};
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.color ? props.color : props.theme.white};
    border-radius:${props => props.borderRadius ? props.borderRadius : '4px'};
    display: flex;
    flex-wrap:  ${props => props.flexWrap ? props.flexWrap : 'wrap'};
    flex-direction: ${props => props.direction ? props.direction : 'column'};
    justify-content:${props => props.justify};
    align-items:${props => props.align};
    align-content:${props => props.content};
    margin: ${props => props.margin};
    padding:${props => props.padding};
    &.bottom{
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      padding: 5px 0;
    }
    @media ${device.laptop}{
      &.profileCard{
        margin:25px auto 25px 20px;
      }
    }
    @media ${device.desktop}{
      &.profileCard{
        margin:25px 15px;
      }
    }
   
`
Container.defaultProps ={
  width: '300px',
  height: '150px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)'
}

export const FixContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items:center;
background:${props => props.theme.transparent};
width: 100%;
height: 100%;
flex-wrap: wrap;
overflow-y: scroll;
`

export const FixContainerAlt = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:flex-start;
background:${props => props.theme.transparent};
width: 100%;
padding: 8px 10px;
max-height:120px;
flex-wrap: nowrap;
border:none;

`
export const MainWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
`
export const JobsCompleted = styled.div`
display: flex;
justify-content: flex-start;
align-items:center;
border-top: 1px solid ${props => props.theme.faintBorder};
border-bottom: 1px solid ${props => props.theme.faintBorder};
padding:8px 2px;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color:${props => props.theme.blue};
`
export const Wrapper = styled(MainWrapper)`
`
export const Details = styled.p`
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
text-align: left;
margin: 4px 0 0;
color:${props => props.color}
`
export const Info = styled(Details)`
font-size: 14px;
color:${props => props.theme.text};
text-align: center;
`
export const Message = styled(Details)`
font-size: 14px;
font-weight: normal;
color:${props => props.theme.cardName};
text-align: center;
`
export const Email = styled(Details)`
ont-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 14px;
/* identical to box height */
color: #515151;
margin: 0;
`
