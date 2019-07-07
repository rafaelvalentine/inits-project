import CreateAdmin from '../../pages/CreateAdmin'
import { connect } from 'react-redux'
import { handleCreateAdmin } from '../../Store/Actions'


/**
 * here we handle passing redux to our component and export
 */

// const mapStateToProps = (state) => ({
// //  Admin: state.Free.freelancer.freelancerLoggedIn
// })

const mapDispatchToProps = dispatch => ({
  handleCreateAdmin (data) {
    return dispatch(handleCreateAdmin(data))
  }
})

export default connect(null, mapDispatchToProps)(CreateAdmin)