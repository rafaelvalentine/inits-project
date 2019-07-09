import initState from '../SearchState'
import type from '../Type'

const {
  SEARCH_QUERY,
  SEARCH_ERROR,
  SEARCH_RESULT,
  SEARCH_FREELANCE,
  SEARCH_JOBS,
  SEARCH_START,
  SEARCH_END
} = type

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.query
      }
    case SEARCH_RESULT:
      return {
        ...state,
        result: { ...action.result }
      }
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: action.err
      }
    case SEARCH_FREELANCE:
      return {
        ...state,
        searchType: 'freelance'
      }
    case SEARCH_JOBS:
      return {
        ...state,
        searchType: 'jobs'
      }
    case SEARCH_START:
      return {
        ...state,
        loading: true
      }
    case SEARCH_END:
      return {
        ...state,
        loading: false
      }
    case 'SEARCH_CANCEL':
      return {
        ...state,
        searchCancel: action.payload
      }
    default:
      return state
  }
}
export default searchReducer
