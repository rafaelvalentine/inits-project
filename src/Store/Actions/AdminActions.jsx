import type from '../Type'
import axios from 'axios'

const { GET_SELECTED_JOB, SET_QUOTE_SPINNER,
  FETCH_FREELANCER_INFO_ON_PAGE_REFRESH, LOADING_STATUS } = type
 const handleGetSelectedJob = (payload) => ({
  type: GET_SELECTED_JOB,
  payload
})
const failedLogin = (payload) => ({
  type: LOADING_STATUS,
  payload
})
const quoteLoading = (payload) => ({
  type: SET_QUOTE_SPINNER,
  payload
})
const freelancerPageRefresh = (payload) => ({
  type: FETCH_FREELANCER_INFO_ON_PAGE_REFRESH,
  payload
})

export const getSelectedJob = (value, history) => dispatch => {
  // let organzationID = localStorage.getItem('userId')
  axios({
    url: `https://primework-staging.herokuapp.com/api/v1/job/${value}`,
    method: 'GET'
  }).then(res => {
    let result = res.data
    console.log('From line 29 shows: job id', result.data);
    localStorage.setItem('jobId', result.data._id)
    // call dispatch here

    dispatch(handleGetSelectedJob(result))
    dispatch(failedLogin(false))
    history.push('/individual/makequote')

  }).catch(err => {
    // dispatch(loadingStatus(false))
    dispatch(failedLogin(false))
    console.log(err)
  })
}

export const handleQuoteLoading = (payload) => dispatch =>{
 dispatch(quoteLoading(payload))
}

export const makeJobQuote = (quote, history) => dispatch => {
  let userId = localStorage.getItem('userId')
  let _quote = { ...quote, userId }
  let files = quote.portfolioDocs
  let formData = new FormData()
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    // console.log(file);
    formData.append('portfolioDocs', file)
  }
  Object.keys(_quote).map(k => {
    if (k !== 'portfolioDocs') {
      formData.append(k, _quote[k])
  }
  })
  // console.log(userDetails)
  for (var key of formData.entries()) {
    console.log(key[0] + ', ' + key[1])
  }
  // console.log(_quote);
  axios({
    url: `https://primework-staging.herokuapp.com/api/v1/job/application`,
    method: 'POST',
    data: formData
  }).then(res => {
    let result = res.data
    console.log(result)
    // localStorage.setItem('userID', result.data._id)
    // call dispatch here
    dispatch(handleGetSelectedJob(result))
    history.push('/individual');
  }).catch(err => {
    dispatch(quoteLoading(false))
    console.log(err)
  })
}
export const handlefreelancerPageRefresh = () => dispatch => {
  let userId = localStorage.getItem('userId')
  axios({
    url: `https://primework-staging.herokuapp.com/api/v1/user/get/${userId}`,
    method: 'GET'
  }).then(res => {
    let result = res.data
    dispatch(freelancerPageRefresh(result))
  }).catch(err => {
    // dispatch(quoteLoading(false))
    console.log(err)
  })
}