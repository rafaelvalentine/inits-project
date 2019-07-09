
import axios from 'axios'
import type from '../Type'
import { handleError } from '../../lib'

const {
  SEARCH_QUERY,
  SEARCH_ERROR,
  SEARCH_RESULT,
  SEARCH_START,
  SEARCH_END,
  SEARCH_FREELANCE,
  SEARCH_JOBS,
  SEARCH_CANCEL
} = type

export const searchQuery = query => ({
  type: SEARCH_QUERY,
  query
})

export const searchError = err => ({
  type: SEARCH_ERROR,
  err
})

export const searchResult = result => ({
  type: SEARCH_RESULT,
  result
})
export const searchFreelance = () => ({
  type: SEARCH_FREELANCE
})
export const searchJobs = () => ({
  type: SEARCH_JOBS
})
export const searchStart = () => ({
  type: SEARCH_START
})
export const searchEnd = () => ({
  type: SEARCH_END
})
export const searchCancel = payload => ({
  type: SEARCH_CANCEL,
  payload
})
export const postSearchQuery = query => dispatch => {
  const searchObj = { searchPhrase: query }
  // console.log('search query object')
  // console.log(searchObj)
  return axios
    .post('/job/search', searchObj)
    .then(res => {
      dispatch(searchQuery(query))
      dispatch(searchResult(res.data.data))
      dispatch(searchEnd())
      dispatch(searchCancel(true))
      return res
    })
    .catch(err => {
      console.log(err)
      handleError(err)
      return err
    })
}
export const cancelSearch = value => dispatch => {
  dispatch(searchCancel(value))
}
