import React from 'react'
import { withRouter } from 'react-router-dom'
import * as Navbar from './styles'
import { Logo } from '../Picture'
import Links from './links'
import AdminInfo from './admin'

/**
 * this is the main navbar component and feeds redux state to the Admin component
 */
const index = ({ Admin, history }) => {
  return (
    <Navbar.Nav>
      <Logo />
      <Links />
      <AdminInfo
        admin={Admin}
        history={history}
      />
    </Navbar.Nav>
  )
}

export default withRouter(index)
