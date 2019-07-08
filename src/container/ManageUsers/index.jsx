import Users from '../../pages/ManageUsers'
import { connect } from 'react-redux'
import { handleGetAllUsersCardInfo, handleDisableUser } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

const mapStateToProps = (state) => ({
  Users: state.Admin.Admin.allUsers
})

const mapDispatchToProps = dispatch => ({
  handleGetAllUsersCardInfo () {
    return dispatch(handleGetAllUsersCardInfo())
  },
  handleDisableUser (userId) {
    return dispatch(handleDisableUser(userId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
