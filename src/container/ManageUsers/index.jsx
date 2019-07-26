import Users from '../../pages/ManageUsers'
import { connect } from 'react-redux'
import { handleGetAllUsersCardInfo, handleEnableUser, handleDisableUser, postSearchQuery, cancelSearch, handleGetAllCategories } from '../../Store/Actions'

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
  handleDisableUser (userId) {
    return dispatch(handleDisableUser(userId))
  },
  postSearchQuery (query) {
    return dispatch(postSearchQuery(query))
  },
  cancelSearch (value) {
    dispatch(cancelSearch(value))
  },
  handleGetAllCategories () {
    return dispatch(handleGetAllCategories())
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
