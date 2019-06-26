import React, { Component } from 'react'
import swal from 'sweetalert'
import validator from 'validator'
import Navbar from '../../container/Navbar'
import { EditAdmin } from '../../components/Card'
import * as Page from '../../theme/style/styles'
import { SubMainNav } from '../../theme/style/typeface'

export default class index extends Component {
  state = {
    fullName: 'Jon Snow',
    email: 'JonSnow@kingslanding.com',
    password: '',
    changepassword: false,
    loading: false
  }

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value}, ()=>console.log(this.state))
  }
  handleToggle = e =>{
    let toggle = this.state.changepassword
    this.setState({changepassword: !toggle, password: '', confirmPassword:'' }, ()=>console.log(this.state.changepassword))
  }

  handleSubmit = e => {
    let admin = this.state
    if (admin.fullName === undefined || validator.isEmpty(admin.fullName)) {
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
    if (admin.password !== null && !validator.isEmpty(admin.password)) {
      // swal('Password is required!')
      // return
      if (!validator.isAlphanumeric(admin.password)) {
        swal('Password must contain only numbers and letters!')
        return
      }
      if (!validator.isLength(admin.password, { min: 8, max: 24 })) {
        swal('Password must between 8 and 24 characters!')
        return
      }
      if(!validator.equals(admin.confirmPassword, admin.password )){
        swal('Passwords do not match')
        return
      }
    }
    
    /**
   * Uploading new admin details 
   */
    let change = this.state.changepassword
    let  data ={
      fullName: admin.fullName,
      email:admin.email,
      state:admin.state,
      lga: admin.lga,
      address: admin.address,
      password: change ? admin.password : null
    }
    console.log(data)
    e.target.blur()
    this.setState({loading: true}, ()=> setTimeout(() => {
      this.props.history.push('/dashboard')
    }, 3000))
   
  }
  render () {
    return (
      <Page.Wrapper>
        <Navbar  />
        <Page.SubWrapper
          padding='100px 80px 40px'
        >
         <Page.SubWrapperAlt
         padding='0'
         >
         <SubMainNav>
            settings
          </SubMainNav>
          <EditAdmin 
          inputs={this.state}
          changed={this.handleChange}
          changepassword={this.state.changepassword}
          toggle={this.handleToggle}
          submit={this.handleSubmit}
          loading={this.state.loading}
           />
         </Page.SubWrapperAlt>
        </Page.SubWrapper>
      </Page.Wrapper>
    )
  }
}
