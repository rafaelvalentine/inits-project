import type from '../Type'
import axios from 'axios'

const { SET_USERS, SET_JOBS } = type


const setUsersInfo = payload => ({
  type: SET_USERS,
  payload
})
const setJobsInfo = payload => ({
  type: SET_JOBS,
  payload
})
/**
 * Get all users for dashboard analytics card
 */
export const handleGetAllUsers = () => dispatch => {
  axios({
    url: `https://primework-staging.herokuapp.com/api/v1/job/all`,
    method: 'GET'
  }).then(res => {
    let result = res.data
    let usersArray = result.data
    let activeUsers = []
    let active = 0
    let black = 0
    let blackList = []
    for (let index = 0; index < usersArray.length; index++) {
      if (!usersArray[index].disable) {
        activeUsers.push(active++)
      }
      if (usersArray[index].disable) {
        blackList.push(black++)
      }
    }
    let usersData = {
      activeUsers: activeUsers.length,
      blackListedUsers: blackList.length,
      registeredUsers: usersArray.length
    }
    // console.log(blackList.length)
    dispatch(setUsersInfo(usersData))
  }).catch(err => {
    // dispatch(quoteLoading(false))
    console.log(err)
  })
}


/**
 * Get all Jobs for dashboard analytics card
 */
export const handleGetJobs = () => dispatch => {
  axios({
    url: `https://primework-staging.herokuapp.com/api/v1/job/all`,
    method: 'GET'
  }).then(res => {
    let result = res.data
    let jobsArray = result.data
    let completedJob = []
    let completed = 0
    for (let index = 0; index < jobsArray.length; index++) {
      if (jobsArray[index].completed) {
        completedJob.push(completed++)
      }
    }
    let jobsData = {
      jobsPosted: jobsArray.length,
      jobsCompleted: completedJob.length
    }
    // console.log(blackList.length)
    dispatch(setJobsInfo(jobsData))
  }).catch(err => {
    // dispatch(quoteLoading(false))
    console.log(err)
  })
}
