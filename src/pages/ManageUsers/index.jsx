import React, { Component } from 'react'
import swal from 'sweetalert'
import validator from 'validator'
import Navbar from '../../container/Navbar'
import Search from '../../components/SearchBar'
import { Profile } from '../../components/Card/Cards'
import { CreateUserButton } from '../../components/Button'
import * as Page from '../../theme/style/styles'
// import { SubMainNav } from '../../theme/style/typeface'

export default class index extends Component {
  state ={

  }
  render () {
    return (
      <Page.Wrapper>
        <Navbar />
        <Page.SubWrapperAlt
          padding='50px 80px 40px'
        >
          <Page.SubWrapper
          padding='0'
        >
          <Search inputs={this.state} />
            <CreateUserButton
            content='create new user'
            />
        </Page.SubWrapper>
        <Page.SubWrapper>
          <Profile/>
        </Page.SubWrapper>
        </Page.SubWrapperAlt>
      </Page.Wrapper>

    )
  }
}
