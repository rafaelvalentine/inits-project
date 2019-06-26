import React from 'react'
import { withRouter } from 'react-router-dom'
import * as Navbar from './styles'
import { Logo } from '../Picture'
import Links from './links'
import Admin from './admin'

/**
 * this is the main navbar component and feeds redux state to the Admin component
 */
const index = ({ admin, history }) => {
  return (
    <Navbar.Nav>
      <Logo />
      <Links />
      <Admin
        admin={admin}
        history={history}
      />
    </Navbar.Nav>
  )
}

export default withRouter(index)
