import type from '../Type'
import axios from 'axios'
import { handleError } from '../../lib'

const { SET_USERS_CARD } = type

const setGetAllUsersCardInfo = payload => ({
  type: SET_USERS_CARD,
  payload
})
// const setJobsInfo = payload => ({
//   type: SET_JOBS,
//   payload
// })
/**
 * Get all users for Manage Users Components
 */
export const handleGetAllUsersCardInfo = () => dispatch => {
 
}
/**
 * Disable Clicked User
 */
export const handleDisableUser = (userId, data) => dispatch => {
 
}
export const handleEnableUser = userId => dispatch => {
 
}

export const handleCreateFreelancer = data => dispatch => {
  // console.log(data)
  
}
