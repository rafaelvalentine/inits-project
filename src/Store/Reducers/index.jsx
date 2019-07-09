import Auth from './AuthReducers'
import Admin from './AdminReducers'
import Search from './SearchReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  Auth,
  Admin,
  Search
})

export default rootReducers
