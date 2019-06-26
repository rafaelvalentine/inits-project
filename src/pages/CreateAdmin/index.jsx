import React, { Component } from 'react'
import Navbar from '../../container/Navbar'
import { CreateAdminForm } from '../../components/Card'
import * as Page from '../../theme/style/styles'
import swal from 'sweetalert'
import validator from 'validator'

/**
 * this is the component to create a new Admin 
 */
export default class index extends Component {
  state = {
    loading: false
  }

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value}, ()=>console.log(this.state))
  }
  handleSubmit = e => {
    let admin = this.state
    if (admin.name === undefined || validator.isEmpty(admin.name)) {
      swal('Name is required!')
      return
    }
    if (admin.email === undefined || validator.isEmpty(admin.email)) {
      swal('Email is required!')
      return
    }
    if (!validator.isEmail(admin.email)) {
      swal('Please enter valid Email!')
      return
    }
    if (admin.password === undefined || validator.isEmpty(admin.password)) {
      swal('Password is required!')
      return
    }
    if (!validator.isAlphanumeric(admin.password)) {
      swal('Password must contain only numbers and letters!')
      return
    }
    if (!validator.isLength(admin.password, { min: 8, max: 24 })) {
      swal('Password must between 8 and 24 characters!')
      return
    }
    /**
   * Uploading new admin details 
   */
    e.target.blur()
    this.setState({loading: true}, ()=> setTimeout(() => {
      this.props.history.push('./confirmadmin', {email: admin.email, name: admin.name })
    }, 3000))
   
  }
  render () {
    return (
      <Page.Wrapper>
        <Navbar />
        <Page.SubWrapper>
          <CreateAdminForm 
          inputs={this.state}
          history={this.props.history}
          loading={this.state.loading}
          changed={this.handleChange}
          submit={this.handleSubmit}
           />
        </Page.SubWrapper>
      </Page.Wrapper>
    )
  }
}
