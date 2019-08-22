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
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/user/freelancer/all`,
    method: 'GET'
  }).then(res => {
    let result = res.data
    // console.log(blackList.length)
    dispatch(setGetAllUsersCardInfo(result))
    return result
  }).catch(err => {
    // dispatch(quoteLoading(false))
    console.log(err)
    handleError(err)
  })
}
/**
 * Disable Clicked User
 */
export const handleDisableUser = (userId, data) => dispatch => {
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/user/block/${userId}`,
    method: 'PUT',
    data
  }).then(res => {
    let result = res.data
    return result
  }).catch(err => {
    // dispatch(quoteLoading(false))
    console.log(err)
    handleError(err)
  })
}
export const handleEnableUser = userId => dispatch => {
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/user/unblock/${userId}`,
    method: 'PUT'
  }).then(res => {
    let result = res.data
    return result
  }).catch(err => {
    // dispatch(quoteLoading(false))
    console.log(err)
    handleError(err)
  })
}
/**
 * Get all Jobs for dashboard analytics card
 */
// export const handleGetJobs = () => dispatch => {
//   axios({
//     url: `https://primework-staging.herokuapp.com/api/v1/job/all`,
//     method: 'GET'
//   }).then(res => {
//     let result = res.data
//     let jobsArray = result.data
//     let completedJob = []
//     let completed = 0
//     for (let index = 0; index < jobsArray.length; index++) {
//       if (jobsArray[index].completed) {
//         completedJob.push(completed++)
//       }
//     }
//     let jobsData = {
//       jobsPosted: jobsArray.length,
//       jobsCompleted: completedJob.length
//     }
//     // console.log(blackList.length)
//     dispatch(setGetAllUsersCardInfo(jobsData))
//   }).catch(err => {
//     // dispatch(quoteLoading(false))
//     console.log(err)
//   })
// }
export const handleCreateFreelancer = data => dispatch => {
  // console.log(data)
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/user/register`,
    method: 'POST',
    data
  }).then(res => {
    let result = res.data
    return result
  }).catch(err => {
    // dispatch(loadingStatus(false))
    handleError(err)
  })
}
