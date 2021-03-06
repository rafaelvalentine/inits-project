import React, { Component } from 'react'
import swal from 'sweetalert'
import validator from 'validator'
import Navbar from '../../container/Navbar'
import { EditAdmin } from '../../components/Card'
import * as Page from '../../theme/style/styles'
import { SubMainNav, CardHeader } from '../../theme/style/typeface'
import { Logo } from '../../components/Picture'
import { Helmet } from 'react-helmet'

export default class index extends Component {
  state = {
    fullname: 'Jon Snow',
    email: 'JonSnow@kingslanding.com',
    password: '',
    changepassword: false,
    loading: false
  }

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value})
  }
  handleToggle = e =>{
    let toggle = this.state.changepassword
    this.setState({changepassword: !toggle, password: '', confirmPassword:'' })
  }

  handleSubmit = e => {
    let admin = this.state
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
    let  data;
    if(change){
     data={
        fullname: admin.fullname,
        town:admin.town,
        email:admin.email.toLowerCase(),
        state:admin.state,
        lga: admin.lga,
        address: admin.address,
        password:admin.password
      }
    }
    if(!change) {
      data={
      fullname: admin.fullname,
      email:admin.email,
      state:admin.state,
      lga: admin.lga,
      address: admin.address,
      town:admin.town,
    }}
    console.log(data)
    e.target.blur()
    this.setState({loading: true})
    this.props.handleUpdateAdmin(data)
    .then(res=>{
      this.setState({loading: false})
      this.props.handleGetAdminDetailOnRefresh()
      .then(res =>{
        this.setState({ ...this.state, fullname: res.data.fullname,
          email:res.data.email,
          state:res.data.state,
          lga: res.data.lga,
          town: res.data.town })
    })
  })
    // this.setState({loading: true}, ()=> setTimeout(() => {
    //   this.props.history.push('/dashboard')
    // }, 3000))
   
  }
  componentDidMount(){
    // this.props.handleGetAdminDetailOnRefresh()
    // .then(res =>{
    //   this.setState({ ...this.state, fullname: res.data.fullname,
    //     email:res.data.email,
    //     state:res.data.state,
    //     lga: res.data.lga, 
    //     town: res.data.town })
    // })
  }
  render () {
    return (
      <Page.Wrapper>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Admin Profile Settings || Primework Admin</title>
          <link rel='shortcut icon' href={require('../../assets/images/primeworkfavicon.jpeg')} type='image/x-icon' />
        </Helmet>
        <Navbar  />
        <Page.SubWrapper
          padding='64px 80px 40px'
        >
         <Page.SubWrapperAlt
         padding='0'
         >
         {/* <SubMainNav>
            settings
          </SubMainNav> */}
           <CardHeader
              altBackground='true'
              fontSize='18px'
              onClick={() => this.props.history.push('/dashboard')}>
                <div>
                    <Logo
                    src={require('../../assets/images/arrow-left.svg')}
                    height='24px'
                    width='24px'
                    margin='0 8px'/>   
                  Settings
                  </div>
           </CardHeader>
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
