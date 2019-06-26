import type from '../Type'
import axios from 'axios'
import swal from 'sweetalert';
import { handleError } from '../../../lib'
// import toastr from 'toastr'
// import { withRouter } from 'react-router-dom'

const { LOGIN_USER, LOADING_STATUS } = type

const handleLogin = (payload) => ({
  type: LOGIN_USER,
  payload
})
const failedLogin = (payload) => ({
  type: LOADING_STATUS,
  payload
})
export const handleLoading = (value) => dispatch => {
  dispatch(failedLogin(value))
}
export const handledLogin = (userDetails, history) => dispatch => {
  axios({
    url: `https://primework-staging.herokuapp.com/api/v1/user/login`,
    method: 'POST',
    data: userDetails
  }).then(res => {
    let result = res.data
    // call dispatch here
    localStorage.setItem('token', result.token)
    localStorage.setItem('userId', result.data._id)
    localStorage.setItem('type', result.data.type)
    dispatch(handleLogin(result))
    // dispatch(failedLogin(false))
    // console.log(result.data)
    switch (result.data.type) {
      case 'organization':
        return history.push('/organization')
      case 'freelancer':
        return history.push('/individual')
      default:
        return null
    }
    // history.push('/dashboard')
    // window.location.assign('/dashboard')
  }).catch(err => {
    // let result = err.data
    handleError(err);

    dispatch(failedLogin(false))
    console.log(err)
  })
}
