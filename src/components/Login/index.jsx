import React from 'react'
import * as Page from './styles'
import { Logo } from '../Picture'
import * as Form from '../../theme/style/Form'
import * as Type from '../../theme/style/typeface'

import * as Input from '../Input'
import Button from '../Button'
import swal from 'sweetalert'
import validator from 'validator'
import { useSignUpForm } from '../Tools/FormHooks'

/**
 * SIgn In Form Componenet
 */
const Login = ({ handleLogin, loading }) => {
  const _handleSubmit = (e, user) => {
    e.preventDefault()
    e.target.blur()
    /**
   * Validating form input
   */
    if (user.email === undefined || validator.isEmpty(user.email)) {
      swal('Email is required!')
      return
    }
    if (!validator.isEmail(user.email)) {
      swal('Please enter valid Email!')
      return
    }
    if (user.password === undefined || validator.isEmpty(user.password)) {
      swal('Password is required!')
      return
    }
    if (!validator.isAlphanumeric(user.password)) {
      swal('Password must contain only numbers and letters!')
      return
    }
    if (!validator.isLength(user.password, { min: 8, max: 24 })) {
      swal('Password must between 8 and 24 characters!')
      return
    }
    /**
   * Passing User Input to Parent
   */
    handleLogin(user)
  }
  /**
   * Calling React Hooks to capture form input
   */
  const { inputs, handleChange, handleSubmit } = useSignUpForm(_handleSubmit)
  return (
    <Page.Wrapper>
      <Page.Left>
        <Page.Header>
          <Logo  />
        </Page.Header>
        <Form.CardsContainer
          margin='100px 0 0'
          justify='center'
          align='center'>
          <Type.Header>
                Sign in to Primework Admin
          </Type.Header>
          <Type.SubHeader>
             Please enter your credentials to proceed.
          </Type.SubHeader>

          <Form.CardsContainer
            margin='25px 0 0' >
            <Input.Main
              label='EMAIL ADDRESS'
              placeholder='rock_zion@outlook.com'
              type='text'
              name='email'
              value={inputs.email}
              changed={handleChange}
            />
            <Input.Main
              label='PASSWORD'
              placeholder='********'
              type='password'
              name='password'
              value={inputs.password}
              changed={handleChange}
            />
            <Button content={'Sign in'} clicked={handleSubmit} loading={loading} />
          </Form.CardsContainer>
        </Form.CardsContainer>
      </Page.Left>
      <Page.Right />
    </Page.Wrapper>
  )
}

export default Login
