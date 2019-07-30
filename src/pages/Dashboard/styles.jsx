import styled from 'styled-components'
import { device } from '../../components/device'


export const PickDateWrapper = styled.div`
width: 100%;
padding: 50px 80px;
display:flex;
justify-content:flex-start;
align-items:center;
.label{
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
text-transform: capitalize;
color: #FD8A25;
margin-right: 24px;
}
.datePicker{
width: 158px;
height: 40px;
padding: 16px 12px;
background: ${props => props.theme.transparent};
border-radius: 4px;
border: 1px solid ${props => props.theme.transparent};
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
text-transform: capitalize;
color: ${props => props.theme.header};
}
.datePicker::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  // line-height: 16px;
  text-transform: capitalize;
  color: ${props => props.theme.title}
}

.datePicker:-ms-input-placeholder { /* Internet Explorer 10-11 */
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
text-transform: capitalize;
color: ${props => props.theme.title}
}
.datePicker:-ms-input-placeholder { /* Microsoft Edge */
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
text-transform: capitalize;
color: ${props => props.theme.title}
}
`