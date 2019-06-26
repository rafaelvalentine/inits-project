import React, { Component } from 'react'
import Login from '../../components/Login'

export default class index extends Component {

  state = {
    loading: false
  }
  handleLogin = user =>{
    this.setState({loading:true}, ()=>{
      setTimeout(() => {
        this.setState({loading:false}, ()=>this.props.history.push('./dashboard'))
      }, 2000);
      
    })
   
  }
  render() {
    return (
       <Login handleLogin={this.handleLogin} loading={this.state.loading}/>
    )
  }
}
