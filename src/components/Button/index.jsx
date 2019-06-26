import React from 'react'
import { Logo } from '../Picture'
import Spinner from '../Tools/Spinner'
import * as ButtonStyle from './styles'

const Button = ({ content, clicked, loading, ...props }) => {
  return (
    <ButtonStyle.Container onClick={clicked} {...props}>
      { loading ? <Spinner /> : content}
    </ButtonStyle.Container>
  )
}

export const SearchButton = ({ content, clicked, loading, ...props }) => {
  return (
    <ButtonStyle.SearchButton onClick={clicked} {...props}>
      { loading ? <Spinner /> : content}
    </ButtonStyle.SearchButton>
  )
}
export const FilterButton = ({ content, clicked, loading, ...props }) => {
  return (
    <ButtonStyle.FilterButton onClick={clicked} {...props}>
      <Logo
        src={require('../../assets/images/filterslider.svg')}
        width='12px' height='12px' margin='0 10px' />
      {content}
    </ButtonStyle.FilterButton>
  )
}

export const CreateUserButton = ({ content, clicked, loading, ...props }) => {
  return (
    <ButtonStyle.CreateUserButton onClick={clicked} {...props}>
      {content}
    </ButtonStyle.CreateUserButton>
  )
}
export const SelectBtn = ({ chosen, content, ...props }) => {
  return (
    <ButtonStyle.AltContainer chosen={chosen} {...props}>
      {content}
    </ButtonStyle.AltContainer>
  )
}

export default Button
