import Transactions from '../../pages/Transactions'
import { connect } from 'react-redux'
import { handleGetAllTransactions } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

const mapStateToProps = (state) => ({
  Transactions: state.Admin.Admin.transactions
})

const mapDispatchToProps = dispatch => ({
  handleGetAllTransactions () {
    return dispatch(handleGetAllTransactions())
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)