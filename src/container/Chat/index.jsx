import Chat from '../../pages/Chat'
import { connect } from 'react-redux'
import { handleFetchUserChatHistory,
  handleSetChatInfo,
  handlePostNewChatMessage,
  handleStartNewChat,
  handleSearchResult } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

const mapStateToProps = state => ({
  Contacts: state.Chat.contacts,
  Chat: state.Chat.currentChat,
  SelectedUser: state.Chat.selectedUser,
  AllUsers: state.Admin.Admin.allUsers
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
  handleSearchResult (results) {
    return dispatch(handleSearchResult(results))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
