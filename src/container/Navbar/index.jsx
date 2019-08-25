import Navbar from '../../components/Navbar'
import { connect } from 'react-redux'
import { handleLogoutUser } from '../../Store/Actions'


/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = (state) => ({
 Admin: state.Admin.Admin
})

const mapDispatchToProps = dispatch => ({
  handleLogoutUser: () => dispatch(handleLogoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)