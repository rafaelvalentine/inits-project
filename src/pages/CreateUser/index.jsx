import React, { Component } from 'react'
import Navbar from '../../container/Navbar'
import { CreateUserForm } from '../../components/Card'
import ConfirmUserModal from '../../components/Modal/confirmUserModal'
import * as Page from '../../theme/style/styles'
import swal from 'sweetalert'
import validator from 'validator'
import { Helmet } from 'react-helmet'

/**
 * this is the component to create a new user 
 */
export default class index extends Component {
  state = {
    loading: false,
    openConfirm: false,
    password:'123456789'
  }

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value})
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
    let nameSplit = user.name.trim()
    this.setState({loading: true})
    const data = {
      firstName: nameSplit.split(' ')[0] ,
      lastName:nameSplit.split(' ')[1],
      email: user.email,
      password:user.password,
      type: 'freelancer'
    }
    this.props.handleCreateFreelancer(data)
    .then(res =>{
      this.setState({loading: false, openConfirm: true })
    })
    
  }

  handleConfirmedUser = e =>{
    let show = this.state.openConfirm
    this.setState({openConfirm: !show})
  }
  render () {
    return (
      <Page.Wrapper>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Create User || Primework Admin</title>
          <link rel='shortcut icon' href={require('../../assets/images/primeworkfavicon.jpeg')} type='image/x-icon' />
        </Helmet>
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
