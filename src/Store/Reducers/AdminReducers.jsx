import initState from '../DummyStore'
const AdminReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      // console.log(action.payload.data)
      return {
        ...state,
        Admin: {
          ...state.Admin,
          fullname: action.payload.data.fullname,
          email: action.payload.data.email
        }
      }
    case 'SET_USERS':
      // console.log(action.payload)
      return {
        ...state,
        Admin: {
          ...state.Admin,
          analytics: {
            ...state.Admin.analytics,
            ...action.payload
          }
        }
      }
    case 'SET_JOBS':
      // console.log(action.payload)
      return {
        ...state,
        Admin: {
          ...state.Admin,
          analytics: {
            ...state.Admin.analytics,
            ...action.payload
          }

        }
      }
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        Admin: {
          ...state.Admin,
          analytics: {
            ...state.Admin.analytics,
            ...action.payload
          },
          transactions: [ ...action.payload.transactions ]
        }
      }
    case 'SET_USERS_CARD':
      // console.log(action.payload.data)
      return {
        ...state,
        Admin: {
          ...state.Admin,
          allUsers: action.payload.data
        }
      }
    case 'ADD_JOBS':
      // console.log(action.payload.data)
      return {
        ...state,
        Admin: {
          ...state.Admin,
          jobs: [...action.payload.data]
        }
      }

    case 'SET_CATEOGORIES':
      // console.log(action.payload.data)
      return {
        ...state,
        Admin: {
          ...state.Admin,
          categories: [...action.payload.data]
        }
      }

    // case 'SET_QUOTE_SPINNER':
    //   return {
    //     ...state,
    //     loading: action.payload
    //   }
    default:
      return state
  }
}
export default AdminReducer
