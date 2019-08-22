import Auth from './AuthReducers'
import Admin from './AdminReducers'
import Search from './SearchReducer'
import Chat from "./ChatReducer";
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  Auth,
  Admin,
  Search,
  Chat
})

export default rootReducers
