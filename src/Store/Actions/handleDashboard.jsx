import type from '../Type'
import axios from 'axios'
import { handleError } from '../../lib'

const { SET_USERS, SET_JOBS, SET_TRANSACTIONS } = type

const setUsersInfo = payload => ({
  type: SET_USERS,
  payload
})
const setJobsInfo = payload => ({
  type: SET_JOBS,
  payload
})
const setTransactionInfo = payload => ({
  type: SET_TRANSACTIONS,
  payload
})
/**
 * Get all users for dashboard analytics card
 */
export const handleGetAllUsers = () => dispatch => {
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/user/freelancer/all`,
    method: 'GET'
  }).then(res => {
    let result = res.data
    let usersArray = result.data
    let activeUsers = []
    let active = 0
    let black = 0
    let blackList = []
    for (let index = 0; index < usersArray.length; index++) {
      if (!usersArray[index].disabled) {
        activeUsers.push(active++)
      }
      if (usersArray[index].disabled) {
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
    return result
  }).catch(err => {
    console.log(err)
    handleError(err)
  })
}

/**
 * Get all Jobs for dashboard analytics card
 */
export const handleGetJobs = () => dispatch => {
  return axios({
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
    // console.log(jobsData)
    dispatch(setJobsInfo(jobsData))
    return result
  }).catch(err => {
    // dispatch(quoteLoading(false))
    console.log(err)
    handleError(err)
  })
}
export const handleGetAllTransactions = () => dispatch => {
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/transaction/history`,
    method: 'GET'
  }).then(res => {
    let result = res.data
    let transactionArray = result.data
    let sum = 0
    let transactionsValue
    transactionArray.map(transaction => {
      if (transaction.amount) {
        transactionsValue = sum + transaction.amount
      }
    })
    let transactionData = {
      transactionsPerformed: transactionArray.length,
      transactionsValue,
      transactions: transactionArray
    }
    dispatch(setTransactionInfo(transactionData))
    return result
  }).catch(err => {
    console.log(err)
    handleError(err)
  })
}
