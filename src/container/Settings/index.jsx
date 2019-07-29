import Setting from '../../pages/Settings'
import { connect } from 'react-redux'
import { handleGetAdminDetailOnRefresh, handleUpdateAdmin } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

// const mapStateToProps = (state) => ({
// //  Admin: state.Free.freelancer.freelancerLoggedIn
// })

const mapDispatchToProps = dispatch => ({
  handleGetAdminDetailOnRefresh () {
    return dispatch(handleGetAdminDetailOnRefresh())
  },
  handleUpdateAdmin (info) {
    return dispatch(handleUpdateAdmin(info))
  }
})

export default connect(null, mapDispatchToProps)(Setting)
