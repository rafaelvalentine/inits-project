import styled from 'styled-components'

export const Wrapper = styled.section`
padding: 50px 80px;
width: 100%;
height: 100%;
`
export const Container = styled.div`
background: ${props => props.theme.white} !important;
`
export const Thead = styled.thead`
background: ${props => props.theme.faintBlue};
tr th{
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.title};
  padding: 20px 83px;
  border: none;
}
`
export const Tbody = styled.tr`
  td{
  border: none;
  border-bottom: 1px solid #eeeeee !important;
  padding: 16px 0;
  padding-left: 83px;
  padding-right: 50px;
}
`

export const Text = styled.p`
font-size: 12px;
line-height: 16px;
text-transform: capitalize
color: ${props => props.altText ? props.theme.green : props.theme.text};
margin:0;
`

export const SubText = styled(Text)`
font-size: 10px;
line-height: 14px;
color: ${props => props.altSubText ? props.theme.blue : props.theme.text};
`

export const SideBy = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
padding:0;
margin:0;
`
export const Stacked = styled(SideBy)`
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-left: 5px;
`