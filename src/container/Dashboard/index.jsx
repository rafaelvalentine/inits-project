import Dashboard from '../../pages/Dashboard'
import { connect } from 'react-redux'
import * as action from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

const mapStateToProps = (state) => ({
  Analytics: state.Admin.Admin.analytics
})

const mapDispatchToProps = dispatch => ({
  handleGetAllUsers () {
    dispatch(action.handleGetAllUsers())
  },
  handleGetJobs () {
    dispatch(action.handleGetJobs())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
