import React, { Component } from 'react'
import Navbar from '../../container/Navbar'
import { CreateAdminForm } from '../../components/Card'
import * as Page from '../../theme/style/styles'
import swal from 'sweetalert'
import validator from 'validator'
import { Helmet } from 'react-helmet'

/**
 * this is the component to create a new Admin 
 */
export default class index extends Component {
  state = {
    loading: false,
    admin:{ 
      fullname:'',
      email:'',
      town:'',
      password:'123456789',
      state:'',
      lga:''
    }
  }

  handleChange = e =>{
    this.setState({admin:{...this.state.admin, [e.target.name]: e.target.value}})
  }
  handleSubmit = e => {
    let admin = this.state.admin
    if (admin.fullname === undefined || validator.isEmpty(admin.fullname)) {
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

    this.setState({loading: true})
    /**
   * Uploading new admin details 
   */

    e.target.blur()
    console.log(admin)
    this.props.handleCreateAdmin(admin)
    .then( result => {
      this.setState({loading: false}, ()=> this.props.history.push('/dashboard/confirmadmin', {email: admin.email, name: admin.fullname }))
    })
    
   
  }
  render () {
    return (
      <Page.Wrapper>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Create Admin || Primework Admin</title>
          <link rel='shortcut icon' href={require('../../assets/images/primeworkfavicon.jpeg')} type='image/x-icon' />
        </Helmet>
        <Navbar />
        <Page.SubWrapper>
          <CreateAdminForm 
          inputs={this.state.admin}
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
