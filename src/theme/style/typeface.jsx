import styled from 'styled-components'

export const Header = styled.h1`
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    color: ${props => props.theme.header};
    text-transform: capitalize;
    margin:${props => props.margin}
`
Header.defaultProps = {
  margin: '0 0 16px'
}
export const SubHeader = styled.h3`
    font-size: 15px;
    line-height: 22px;
    color: ${props => props.theme.subHeader};
    margin:${props => props.margin}
`
SubHeader.defaultProps = {
  margin: '0 0 16px'
}

export const Title = styled(SubHeader)`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
    color: ${props => props.theme.title};
    margin:${props => props.margin}
`
Title.defaultProps = {
  margin: '0 0 16px'
}
export const UpperNav = styled.h4`
    font-size: 1.4rem;
    color: ${props => props.theme.lightGray};
`
export const MainNav = styled(SubHeader)`
    margin: 0;
    :hover {
        color: ${props => props.theme.blue};
    }
`
export const SubMainNav = styled(Title)`
    text-transform: capitalize;
    color: ${props => props.theme.orange};
    margin:${props => props.margin};
    align-self: flex-start;
`

export const Under = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    color: ${props => props.theme.black};

    a {
        color: ${props => props.theme.purple};
    }
`
export const Button = styled.span`
    text-transform: ${props => (props.main ? 'uppercase' : null)};
    font-weight: bold;
    font-size: 18px;
    color: ${props => props.theme.white};
`
export const Label = styled.span`
    font-weight: 300;
    font-style: normal;
    font-size: 10px;
    line-height: 14px;
    color: ${props => props.theme.black};
`
export const IncrementLabel = styled(Label)`
    text-transform: uppercase;
    font-size: 1rem;
`
export const BoldLabel = styled(Label)`
    // margin-bottom: 0.2rem;
    text-align: ${props => props.textAlign} !important;
    color: ${props => props.alt ? props.theme.textBlack : props.theme.label};
`
export const GreenLabel = styled(Label)`
    font-weight: bold;
    text-align: ${props => props.textAlign} !important;
    color: ${props => !props.altColor ? props.theme.red : props.theme.green};
    cursor: pointer;
`
export const PaymentLabel = styled.div`
    padding-left: 1rem;
    color: ${props => props.theme.darkGray};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`
export const PaymentTitle = styled(PaymentLabel)`
    font-size: 1.8rem;
`
export const Warning = styled.span`
    color: ${props => props.theme.caution};
    font-weight: bold;
    font-size: 12px;
`
export const Value = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: ${props => props.theme.black};
    opacity: 0.5;
`
export const CheckBoxLabel = styled(Label)`
    display: inline-block;
    vertical-align: top;

    ::after {
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        transition: all 0.2s ease-in-out;
        border: 1px solid #7b7c7f;
        border-radius: 2px;
        background: #fff;
        color: #fff;
        font: 10px/13px icomoon !important;
        font-variant: normal;
        text-align: center;
        text-transform: none;
        content: "";
    }
`

export const Number = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
`
export const CardHeader = styled.div`
width: 100%;
height: 56px;
border-radius: 4px;
padding: 20px 56px;
font-style: normal;
font-weight: bold;
font-size: ${props => props.fontSize ? props.fontSize : '12px'};
line-height: 16px;
color: ${props => props.theme.orange};
background-color: ${props => props.altBackground ? props.theme.faintBlue : props.theme.transparent};
`
export const UserHandle = styled(Header)`
font-size: 12px;
line-height: 16px;
color: ${props => props.theme.handleText};
`
export const SubHandle = styled(UserHandle)`
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color:  ${props => props.theme.SubhandleText};
`