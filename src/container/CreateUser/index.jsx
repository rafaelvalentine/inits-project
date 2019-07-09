import CreateUser from '../../pages/CreateUser'
import { connect } from 'react-redux'
import { handleCreateFreelancer } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

// const mapStateToProps = (state) => ({
// //  Admin: state.Free.freelancer.freelancerLoggedIn
// })

const mapDispatchToProps = dispatch => ({
  handleCreateFreelancer (data) {
    return dispatch(handleCreateFreelancer(data))
  }
})

export default connect(null, mapDispatchToProps)(CreateUser)
