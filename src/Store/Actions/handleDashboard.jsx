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
  
}

/**
 * Get all Jobs for dashboard analytics card
 */
export const handleGetJobs = () => dispatch => {
 
}
export const handleGetAllTransactions = () => dispatch => {
 
}
