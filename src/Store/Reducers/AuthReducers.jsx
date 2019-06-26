import authState from '../AuthState'
const authReducer = (state = authState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
    // console.log(action.payload.data._id)
      return {
        ...state,
        LoginData: action.payload.token,
        loading: false,
        userId: action.payload.data._id
      }
    default:
      return state
  }
}
export default authReducer
