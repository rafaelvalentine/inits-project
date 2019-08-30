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
  
}
export const handleLogoutUser = () => dispatch => {
  let userId = localStorage.getItem('userId')
 }