import Navbar from '../../components/Navbar'
import { connect } from 'react-redux'


/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = (state) => ({
 Admin: state.Admin.Admin
})

// const mapDispatchToProps = dispatch => ({
//   // handleFreelancerPageRefresh () {
//   //   dispatch(action.handlefreelancerPageRefresh())
//   // }
// })

export default connect(mapStateToProps, null)(Navbar)