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
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/admin/create`,
    method: 'POST',
    data
  }).then(res => {
    let result = res.data
    dispatch(CreateAdmin(result))
    return result
  }).catch(err => {
    // dispatch(quoteLoading(false))
    console.log(err)
  })
}
export const handleUpdateAdmin = data => dispatch => {
  let userId = localStorage.getItem('userId')
return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/admin/update/${userId}`,
    method: 'POST',
    data
  }).then(res => {
    let result = res.data
    // dispatch(freelancerPageRefresh(result))
    return result
  }).catch(err => {
    // dispatch(quoteLoading(false))
    console.log(err)
  })
}
export const handleGetAdminDetailOnRefresh = () => dispatch => {
  let token = localStorage.getItem('token')
  let headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
    // 'Authorization': `bearer ${token}`
  }
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/admin/me`,
    method: 'GET',
    headers
  }).then(res => {
    let result = res.data
    // call dispatch here
    dispatch(handleLogin(result))
    return result
  }).catch(err => console.log(err))
}
export const handleEditAdminDetails = () => dispatch => {
  let token = localStorage.getItem('token')
  let headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
    // 'Authorization': `bearer ${token}`
  }
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/admin/update`,
    method: 'GET',
    headers
  }).then(res => {
    let result = res.data
    // call dispatch here
    dispatch(handleLogin(result))
    return result
  }).catch(err => console.log(err))
}