import React from 'react'
import { User } from '../Picture'
import { Container } from './styles'

export const UserDetails = ({ image }) => {
  return (
    <Container
      align='flex-start'
      justify='flex-start'
      backgroundColor='transparent'
      width='100%'
      height='115px'
      padding='24px 16px 8px'
      // boxShadow='none'
    >

      <Container
        direction='row'
        align='center'
        justify='flex-start'
        backgroundColor='transparent'
        width='100%'
        height='50px'
        padding='0'
        color='red'
      // boxShadow='none'
      >
        <User
          image={image}
        />
        user
        rating
        stars
      </Container>
    </Container>
  )
}
