import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Login from '../container/Login'
import Dashboard from '../container/Dashboard'
import CreateAdmin from '../container/CreateAdmin'
import ConfirmAdmin from '../pages/CreateAdmin/confirmAdmin'
import AdminSettings from '../container/Settings'
import Users from '../container/ManageUsers'
import Transactions from '../container/Transactions'
import CreateUser from './CreateUser'
import Jobs from './ManageJobs';
import { Helmet } from 'react-helmet'
import ScrollToTop from '../components/Tools/ScrollToTop'
import swal from 'sweetalert';
import Chat from '../pages/chat';


function PrivateRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('userId')) {
          return <Component {...props} />
        }
        swal('Your have to login to view this page', '', 'error')
        return <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      }
      }
    />
  )
}
function SignedInRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('userId')) {
          swal('You are already Logged in', 'Please logout to Continue', 'warning')
          return (<Redirect
            to={{
              pathname: '/dashboard',
              state: { from: props.location }
            }}
          />)
        }
        return <Component {...props} />
      }
      }
    />
  )
}
// function FreelancerRoute ({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (localStorage.getItem('userId')) {
//           if (localStorage.getItem('type') !== 'freelancer') {
//             return <Redirect
//               to={{
//                 pathname: '/organization',
//                 state: { from: props.location }
//               }}
//             />
//           }
//           return <Component {...props} />
//         }
//         return <Redirect
//           to={{
//             pathname: '/sign-in',
//             state: { from: props.location }
//           }}
//         />
//       }
//       }
//     />
//   )
// }
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
          <SignedInRoute path='/' exact component={Login} />
          <PrivateRoute path='/dashboard' exact component={Dashboard} />
          <PrivateRoute path='/dashboard/createadmin' exact component={CreateAdmin} />
          <PrivateRoute path='/dashboard/confirmadmin' exact component={ConfirmAdmin} />
          <PrivateRoute path='/dashboard/adminsettings' exact component={AdminSettings} />
          <PrivateRoute path='/manage-users' exact component={Users} />
          <PrivateRoute path='/manage-users/createuser' exact component={CreateUser} />
          <PrivateRoute path='/manage-jobs' exact component={Jobs} />
          <Route path='/chat' exact component={Chat} />
          <PrivateRoute path='/transactions' exact component={Transactions} />
          
          {/* <SignedInRoute path='/sign-up' exact component={SignUp} />
        <SignedInRoute path='/sign-up/freelancer/step-one' exact component={FreeFormOne} />
        <Route path='/sign-up/freelancer/step-two' exact component={ConfirmFreelancer} />
        <Route path='/sign-up/freelancer/step-three' exact component={FreeFormTwo} />
        <Route path='/sign-up/freelancer/step-four' exact component={FreeFormThree} />
        <SignedInRoute path='/sign-up/organization/step-one' exact component={OrgFormOne} />
        <Route path='/sign-up/organization/step-two' exact component={ConfirmOrg} />
        <Route path='/sign-up/organization/step-three' exact component={OrgFormTwo} />
        <SignedInRoute path='/sign-in' exact component={SignIn} />
        <SignedInRoute path='/search' exact component={Search} />
        <PrivateRoute path='/organization' exact component={Organization} />
        <PrivateRoute path='/organization/newjob' exact component={NewJob} />
        <PrivateRoute path='/organization/newjob/template' exact component={Template} />
        <FreelancerRoute path='/individual' exact component={Individual} />
        <FreelancerRoute path='/individual/makequote' exact component={MakeQuote} />
        <PrivateRoute path='/organization/viewfreelancer' exact component={ViewFreelancer} />
        <Route path='/organization/viewfreelancerprofile' exact component={ViewFreelancerProfile} />
        <PrivateRoute path='/organization/makepayment' exact component={MakePayment} />
        <PrivateRoute path='/organization/search' exact component={OrganizationSearch} />
        <FreelancerRoute path='/individual/search' exact component={FreelancerSearch} /> */}
        </Switch>
      </ScrollToTop>
    </Fragment>
  </Router>
)

export default App
