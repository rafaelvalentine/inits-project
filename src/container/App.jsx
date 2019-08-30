import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../container/Login'
import CreateAdmin from '../container/CreateAdmin'
import ConfirmAdmin from '../pages/CreateAdmin/confirmAdmin'
import AdminSettings from '../container/Settings'
import Users from '../container/ManageUsers'
import CreateUser from './CreateUser'
import Jobs from './ManageJobs'
import { Helmet } from 'react-helmet'
import ScrollToTop from '../components/Tools/ScrollToTop'
import swal from 'sweetalert'

export const App = ({ history }) => (
  <Router >
    {/* React Helmet Component for Head tag */}
    <Helmet>
      <meta charSet='utf-8' />
      <link rel='shortcut icon' href={require('../assets/images/primeworkfavicon.jpeg')} type='image/x-icon' />
    </Helmet>
    <Fragment >
      <ScrollToTop>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/dashboard/createadmin' exact component={CreateAdmin} />
          <Route path='/dashboard/confirmadmin' exact component={ConfirmAdmin} />
          <Route path='/dashboard/adminsettings' exact component={AdminSettings} />
          <Route path='/manage-users' exact component={Users} />
          <Route path='/manage-users/createuser' exact component={CreateUser} />
          <Route path='/manage-jobs' exact component={Jobs} />
        </Switch>
      </ScrollToTop>
    </Fragment>
  </Router>
)

export default App
