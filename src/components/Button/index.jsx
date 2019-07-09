import React from 'react'
import { Logo } from '../Picture'
import Spinner from '../Tools/Spinner'
import * as ButtonStyle from './styles'

const PrimaryButton = ({ primaryContent, primaryClicked, loading, ...props }) => {
  return (
    <ButtonStyle.GreenButtonAlt disabled={loading} onClick={primaryClicked} {...props}>
      { loading ? <Spinner /> : primaryContent}
    </ButtonStyle.GreenButtonAlt>
  )
}

const SecondaryButton = ({ secondaryContent, secondaryClicked, ...props }) => {
  return (
    <ButtonStyle.RedButtonAlt onClick={secondaryClicked} {...props}>
      {secondaryContent}
    </ButtonStyle.RedButtonAlt>
  )
}
const Button = ({ content, clicked, loading, ...props }) => {
  return (
    <ButtonStyle.Container disabled={loading} onClick={clicked} {...props}>
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
export const CloseSearchButton = ({ content, clicked, loading, ...props }) => {
  return (
    <ButtonStyle.CloseSearchButton onClick={clicked} {...props}>
      {content}
    </ButtonStyle.CloseSearchButton>
  )
}
export const SelectBtn = ({ chosen, content, ...props }) => {
  return (
    <ButtonStyle.AltContainer chosen={chosen} {...props}>
      {content}
    </ButtonStyle.AltContainer>
  )
}

export const DuoButton = ({ loading, primaryAlt, secondAlt, primaryContent, secondaryContent, primaryClicked, secondaryClicked, DuoButtonMargin, ...props }) => {
  return (
    <ButtonStyle.DuoButtonWrapper margin={DuoButtonMargin}>
      <SecondaryButton
        alt={secondAlt}
        secondaryContent={secondaryContent}
        secondaryClicked={secondaryClicked}
        {...props}
      />
      <PrimaryButton
        loading={loading}
        alt={primaryAlt}
        primaryContent={primaryContent}
        primaryClicked={primaryClicked}
        {...props}
      />
    </ButtonStyle.DuoButtonWrapper>
  )
}

export default Button
