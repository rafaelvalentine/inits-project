import Chat from '../../pages/Chats'
import { connect } from 'react-redux'
import { handleFetchUserChatHistory,
  handleSetChatInfo,
  handlePostNewChatMessage,
  handleStartNewChat,
  handleResult } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

const mapStateToProps = state => ({
  Contacts: state.Chat.contacts,
  Chat: state.Chat.currentChat,
  SelectedUser: state.Chat.selectedUser,
  AllUsers: state.Admin.Admin.allUsers,
  ChatIds: state.Chat.ChatIds
})

const mapDispatchToProps = dispatch => ({
  handleSetChatInfo (user, chat, ...props) {
    return dispatch(handleSetChatInfo(user, chat, ...props))
  },
  handlePostNewChatMessage (message) {
    return dispatch(handlePostNewChatMessage(message))
  },
  handleStartNewChat (userId) {
    return dispatch(handleStartNewChat(userId))
  },
  handleFetchUserChatHistory () {
    return dispatch(handleFetchUserChatHistory())
  },
  handleResult (results) {
    return dispatch(handleResult(results))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
