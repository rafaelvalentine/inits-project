import type from '../Type'
import axios from 'axios'
import swal from 'sweetalert';
import { handleError } from '../../lib'
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
   return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/admin/login`,
    method: 'POST',
    data: userDetails
  }).then(res => {
    let result = res.data
    // call dispatch here
    localStorage.setItem('token', result.token)
    localStorage.setItem('userId', result.data._id)
    dispatch(handleLogin(result))
    
    return result.data
  }).catch(err => {
    handleError(err);
    // dispatch(failedLogin(false))
    console.log(err)
  })
}
