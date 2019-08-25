import Users from '../../pages/ManageUsers'
import { connect } from 'react-redux'
import { handleGetAllUsersCardInfo, handleEnableUser, handleDisableUser, postSearchQuery, cancelSearch, handleGetAllCategories, handleStartNewChat, handleFetchUserChatHistory } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

const mapStateToProps = (state) => ({
  Users: state.Admin.Admin.allUsers,
  Categories: state.Admin.Admin.categories,
  Search: state.Search
 
})

const mapDispatchToProps = dispatch => ({
  handleGetAllUsersCardInfo () {
    return dispatch(handleGetAllUsersCardInfo())
  },
  handleEnableUser (userId) {
    return dispatch(handleEnableUser(userId))
  },
  handleDisableUser (userId, message) {
    return dispatch(handleDisableUser(userId, message))
  },
  postSearchQuery (query) {
    return dispatch(postSearchQuery(query))
  },
  cancelSearch (value) {
    dispatch(cancelSearch(value))
  },
  handleGetAllCategories () {
    return dispatch(handleGetAllCategories())
  },
  handleStartNewChat: SUserId => dispatch(handleStartNewChat(SUserId)),
  handleFetchUserChatHistory: () => dispatch(handleFetchUserChatHistory())

})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
