import initState from '../DummyStore'
const AdminReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_QUOTE_SPINNER':
      console.log(action.payload)
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}
export default AdminReducer
