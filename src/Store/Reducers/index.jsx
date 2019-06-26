import Auth from './AuthReducers'
import Admin from './AdminReducers'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  Auth,
  Admin
})

export default rootReducers
