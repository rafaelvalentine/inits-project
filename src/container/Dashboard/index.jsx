import Dashboard from '../../pages/Dashboard'
import { connect } from 'react-redux'
import { handleGetAllUsers, handleGetJobs, handleGetAllTransactions } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

const mapStateToProps = state => ({
  Analytics: state.Admin.Admin.analytics,
  Transactions: state.Admin.Admin.transactions
})

const mapDispatchToProps = dispatch => ({
  handleGetAllUsers () {
    return dispatch(handleGetAllUsers())
  },
  handleGetJobs () {
    dispatch(handleGetJobs())
  },
  handleGetAllTransactions () {
   return dispatch(handleGetAllTransactions())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
