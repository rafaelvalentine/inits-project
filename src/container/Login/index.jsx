import Login from '../../pages/Login'
import { connect } from 'react-redux'
import { handledLogin } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
// const mapStateToProps = (state) => ({
// //  Admin: state.Free.freelancer.freelancerLoggedIn
// })

const mapDispatchToProps = dispatch => ({
  handleLogin (data) {
    return dispatch(handledLogin(data))
  }
})

export default connect(null, mapDispatchToProps)(Login)
