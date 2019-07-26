import type from '../Type'
import axios from 'axios'
import { handleError } from '../../lib'

const { SET_CATEOGORIES, ADD_CATEGORY,  ADD_JOBS} = type

const setGetAllCategories = payload => ({
  type: SET_CATEOGORIES,
  payload
})
const setCreateCategory = payload => ({
  type: ADD_CATEGORY,
  payload
})
const setAllJobs = payload => ({
  type: ADD_JOBS,
  payload
})

/**
 * Get all Jobs for Manage Jobs History Component
 */
export const handleGetAllJobs = () => dispatch => {
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/job/history`,
    method: 'GET'
  }).then(res => {
    let result = res.data
    dispatch(setAllJobs(result))
    return result
  }).catch(err => {
    handleError(err)
    console.log(err)
  })
}
/**
 * Get all Categories for Manage Categories Component
 */
export const handleGetAllCategories = () => dispatch => {
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/category/all`,
    method: 'GET'
  }).then(res => {
    let result = res.data
    // console.log(blackList.length)
    dispatch(setGetAllCategories(result))
    return result
  }).catch(err => {
    // dispatch(quoteLoading(false))
    handleError(err)
    console.log(err)
  })
}
/**
 * Create new Categories for Manage Categories Component
 */
export const handleCreateCategory = data => dispatch => {
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/category/create`,
    method: 'POST',
    data
  }).then(res => {
    let result = res.data
    // console.log(result)
    // dispatch(setCreateCategory(result))
    return result
  }).catch(err => {
    // dispatch(quoteLoading(false))
    handleError(err)
    console.log(err)
  })
}
/**
 * Edit Categories for Manage Categories Component
 */
export const handleEditCategory = (data, categoryId) => dispatch => {
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/category/update/${categoryId}`,
    method: 'PUT',
    data
  }).then(res => {
    let result = res.data
    // console.log(result)
    // dispatch(setCreateCategory(result))
    return result
  }).catch(err => {
    // dispatch(quoteLoading(false))
    handleError(err)
    console.log(err)
  })
}



export const handleDeleteCategory = ( categoryId) => dispatch => {
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/category/delete/${categoryId}`,
    method: 'DELETE'
  }).then(res => {
    let result = res.data
    // console.log(result)
    // dispatch(setCreateCategory(result))
    return result
  }).catch(err => {
    // dispatch(quoteLoading(false))
    handleError(err)
    console.log(err)
  })
}