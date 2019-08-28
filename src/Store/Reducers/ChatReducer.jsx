import initialState from '../ChatStore'

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHAT_HISTORY':
      return {
        ...state,
        contacts: [ ...action.payload.data ]
      }
    case 'SET_CURRENT_CHAT':
      return {
        ...state,
        currentChat: [...action.payload.chat]
      }
    case 'SET_CURRENT_USER':
      return {
        ...state,
        selectedUser: {
          ...action.payload.user
        }
      }
    case 'UPDATE_CURRENT_CHAT':
      return {
        ...state,
        currentChat: [...action.payload.chat]
      }
    case 'STORE_CHAT_IDS':
      return {
        ...state,
        ChatIds: [...action.payload]
      }
    default:
      return state
  }
}
