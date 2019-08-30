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
 
}
/**
 * Get all Categories for Manage Categories Component
 */
export const handleGetAllCategories = () => dispatch => {

}
/**
 * Create new Categories for Manage Categories Component
 */
export const handleCreateCategory = data => dispatch => {
 
}
/**
 * Edit Categories for Manage Categories Component
 */
export const handleEditCategory = (data, categoryId) => dispatch => {
 
}



export const handleDeleteCategory = ( categoryId) => dispatch => {
 
}