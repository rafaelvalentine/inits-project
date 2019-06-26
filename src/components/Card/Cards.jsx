import React from 'react'
import * as Card from './styles'
import { Header } from '../../theme/style/typeface'
import { Logo } from '../Picture'
import { UserDetails } from './cardParts'
// import Button from '../Button'

const CardBox = ({ children, ...props }) => {
  return (
    <Card.Container {...props}>
      {children}
    </Card.Container>
  )
}

export const AnalyticsCard = ({ figure, figure2, info, img, color }) => {
  let bottom
  let newFigure
  if (figure < 1000) {
    newFigure = figure
  }
  if (figure > 1000) {
    newFigure = `${Math.round(figure / 1000)}k`
  }
  if (figure > 1000000) {
    newFigure = `${Math.round(figure / 1000000)}m`
  }
  if (figure2 !== null && figure2 !== '' && figure2 !== undefined) {
    bottom = (
      <Card.Container
        className='bottom'
        width='200px'
        height='24px'
        alignSelf='center'
        backgroundColor={color}
        boxShadow='none'
        textAlign='center'
        borderRadius='0'
        margin='42px auto 0'
      >
        { figure2 || 'No Info'}
      </Card.Container>
    )
  }
  return (
    <Card.Container
      padding='24px 24px 0' margin='20px'
    >
      <Card.Wrapper>
        <Header margin='0'>
          { newFigure || '0'}
        </Header>
        <Logo
          height='40px'
          width='40px'
          src={img} />
      </Card.Wrapper>
      <Card.Details color={color}>{ info || 'No info'}</Card.Details>
      {bottom}
    </Card.Container>
  )
}

export const Profile = ({ image }) => {
  return (
    <CardBox
      width='220px'
      height='330px' >
      <UserDetails
        image={image}
      />
    </CardBox>
  )
}
export default CardBox
