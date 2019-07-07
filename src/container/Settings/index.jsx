import Setting from '../../pages/Settings'
import { connect } from 'react-redux'
import { handleGetAdminDetailOnRefresh } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

// const mapStateToProps = (state) => ({
// //  Admin: state.Free.freelancer.freelancerLoggedIn
// })

const mapDispatchToProps = dispatch => ({
  handleGetAdminDetailOnRefresh () {
   return dispatch(handleGetAdminDetailOnRefresh())
  }
})

export default connect(null, mapDispatchToProps)(Setting)
