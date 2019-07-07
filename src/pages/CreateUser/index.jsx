import React, { Component } from 'react'
import Navbar from '../../container/Navbar'
import { CreateUserForm } from '../../components/Card'
import ConfirmUserModal from '../../components/Modal/confirmUserModal'
import * as Page from '../../theme/style/styles'
import swal from 'sweetalert'
import validator from 'validator'

/**
 * this is the component to create a new user 
 */
export default class index extends Component {
  state = {
    loading: false,
    openConfirm: false
  }

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value}, ()=>console.log(this.state))
  }
  handleSubmit = e => {
    let user = this.state
    if (user.name === undefined || validator.isEmpty(user.name)) {
      swal('Name is required!')
      return
    }
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
   * Uploading new user details 
   */
    e.target.blur()
    this.setState({loading: true}, ()=> setTimeout(() => {
      this.setState({loading: false, openConfirm: true })
    }, 3000))
   
  }

  handleConfirmedUser = e =>{
    let show = this.state.openConfirm
    this.setState({openConfirm: !show})
  }
  render () {
    return (
      <Page.Wrapper>
        <Navbar />
        <Page.SubWrapper>
          <CreateUserForm 
          inputs={this.state}
          history={this.props.history}
          loading={this.state.loading}
          changed={this.handleChange}
          submit={this.handleSubmit}
           />
        </Page.SubWrapper>
        <ConfirmUserModal
        show={this.state.openConfirm}
        onHide={this.handleConfirmedUser}
        inputs={this.state}
        history={this.props.history}
        clicked={this.handleConfirmedUser}
        />
      </Page.Wrapper>
    )
  }
}