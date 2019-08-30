import type from '../Type'
import axios from 'axios'

const { CREATE_ADMIN, LOGIN_USER} = type
const CreateAdmin = payload => ({
  type: CREATE_ADMIN,
  payload
})
const handleLogin = (payload) => ({
  type: LOGIN_USER,
  payload
})
export const handleCreateAdmin = data => dispatch => {
 
}
export const handleUpdateAdmin = data => dispatch => {
  let userId = localStorage.getItem('userId')

}
export const handleGetAdminDetailOnRefresh = () => dispatch => {
  let token = localStorage.getItem('token')
  let headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
    // 'Authorization': `bearer ${token}`
  }
  
}
export const handleEditAdminDetails = () => dispatch => {
  let token = localStorage.getItem('token')
  let headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
    // 'Authorization': `bearer ${token}`
  }

}