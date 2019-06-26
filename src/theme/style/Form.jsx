import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap:  ${props => props.flexWrap ? props.flexWrap : 'wrap'};
    flex-direction: ${props => props.direction ? props.direction : 'column'};
    justify-content:${props => props.justify};
    align-items:${props => props.align};
    align-content:${props => props.content};
    margin: ${props => props.margin};
`
export const Input = styled.input`
    width: ${props => props.width};
    border: none;
    height: 40px;
    background: transparent;
    padding-left: 10px;
    margin-bottom: 5px;

    font-weight: 300;
    font-size: 1.2rem;
    color: ${props => props.theme.black};

    &:focus {
        outline: none;
    }
`
Input.defaultProps = {
  width: '100%'
}

export const Label = styled.label`
    border-bottom: 0.25px solid ${props => props.theme.lightGray};
    width: 100%;
    margin: 1rem 1rem 4rem;
`
export const NoMLabel = styled(Label)`
    margin: 1rem 1rem;
`
export const CheckBoxLabel = styled.label`
    margin: 0;
    cursor: pointer;
    vertical-align: top;
    display: inline-block;
    position: relative;
    padding-left: 24px;
    z-index: 2;
`
export const CheckBox = styled.input`
    color: ${props => props.theme.purple};
    margin-right: 10px;
    position: absolute;
    top: 2px;
    left: 0;
    opacity: 0;

    :checked ~ .checkbox__label:after{
        border-color: #2948ff;
        color: #2948ff;
        content: "\\2713";
    }
`

export const TwoComponentBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
    padding:0 5px;
`
export const AltBox = styled(TwoComponentBox)`
    justify-content:flex-start;
    margin: 0;
`
export const AltBoxStacked = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding:0;
    flex-direction:column;
`
export const Box = styled.div`
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border-top: ${props => props.border};
    width: ${props => props.width};
`
Box.defaultProps = {
  margin: '1rem',
  padding: '1rem'
}
export const NoSpaceBox = styled.div`
    display: flex;
`
export const UnderLinedBox = styled.div`
    border-bottom: 1px solid #E0E7FF;
    display: flex;
    width:100%;
    padding-bottom: 64px;
`
/**
     * Main forms
     */
export const MainInput = styled.input`
    width: ${props => props.width};
    border: 1px solid #E0E7FF;
    border-radius: 2px;
    height: 40px;
    background: rgba(224, 231, 255, 0.2);
    padding: 12px 18px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.header};
    cursor: pointer;
    ::placeholder {
        font-size: 12px;
        color: ${props => props.theme.title};
    }

    &:focus {
        transition: .3s;
        outline: 0.5px solid #54c4cf;
    }
`
MainInput.defaultProps = {
  width: '320px'
}

export const SearchInput = styled(MainInput)`
width: 200px;
height: 40px;
background: ${props => props.theme.transparent};
border: 1px solid ${props => props.theme.transparent};
border-radius: 0;
&:focus {
    outline: none;
}
`
export const NoLabelInput = styled(MainInput)`
    margin: ${props => props.margin};
`
NoLabelInput.defaultProps = {
  margin: '1rem',
  width: '100%'
}
export const MainLabelContainer = styled.label`
    display: block;
    margin-top ${ props => props.marTop ? props.marTop : '24px'};
`
export const MainLabelContainerAlt = styled.div`
    margin-top ${ props => props.marTop ? props.marTop : '16px'};
`
export const UsedCard = styled.div`
    display: flex;
    border-radius: 0.2rem;
    border: 0.1rem solid ${props => props.theme.formBorder};
    padding: 0.8rem 2rem 0.5rem;
    color: ${props => props.theme.gray};
    font-size: 1.4rem;
    font-weight: bold;
    margin: 1rem;
`
export const MainLabel = styled.div`
    margin-bottom: 8px;
`
export const PaymentLabelPair = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
`
export const Select = styled.select`
    width: 100%;
    border: 0.5px solid #54c4cf;    
    border-radius: 2px !important; 
    height: 40px;
    background: transparent;
    padding-left: 10px;
    margin-bottom: 5px;
    font-weight: 300;
    font-size: 0.8rem;
    color: ${props => props.theme.black};
    :focus{
        outline: none;
    }
`
export const TxtArea = styled.textarea`
    border: 0.5px solid #54c4cf;    
    border-radius: 2px !important;
    // resize: none;
    width: 100%;
    height: 139px;
    padding: 10px;
`
export const NoLabelSelect = styled(Select)`
    margin: ${props => props.margin};
`
NoLabelSelect.defaultProps = {
  margin: '1rem'
}
export const FormContainer = styled.div`
    width: ${props => props.width};
`
export const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 4rem;
`
export const TableHead = styled.div`
    width: 80rem;
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    padding: 1rem;
    margin-bottom: 1rem;
`
export const Total = styled(TableHead)`
    color: ${props => props.theme.blue};
    font-weight: bold;
    font-size: 1.8rem;
    line-height: normal;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`
export const TableList = styled(TableHead)`
    border: 0.1rem solid ${props => props.theme.formBorder};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    /* font */
    color: ${props => props.theme.darkGray};
    font-weight: bold;
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`

export const DatePickerContainer = styled.div`
padding: 0 8px;
background: ${props => props.theme.white};
border-radius: 4px;
`
export const SearchInputContainer = styled(DatePickerContainer)`
padding: 0 30px;
`
/**
 *
 * .checkbox__input {
    position: absolute;
    top: 2px;
    left: 0;
    opacity: 0;
}

[type=checkbox], [type=radio] {
    box-sizing: border-box;
    padding: 0;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
 *
 *
 * .checkbox__label:after {
    position: absolute;
    top: 3px;
    left: 0;
    width: 14px;
    height: 14px;
    transition: all .2s ease-in-out;
    border: 1px solid #7b7c7f;
    border-radius: 2px;
    background: #fff;
    color: #fff;
    font: 10px/13px icomoon!important;
    font-variant: normal;
    text-align: center;
    text-transform: none;
    content: "";

    .checkbox__input:checked~.checkbox__label:after {
    border-color: #2948ff;
    color: #2948ff;
    content: "\EA10";

 */
