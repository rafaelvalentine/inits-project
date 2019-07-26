import Jobs from '../../pages/ManageJobs'
import { connect } from 'react-redux'
import { handleGetAllJobs, handleGetAllCategories, handleCreateCategory, handleEditCategory, handleDeleteCategory } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

const mapStateToProps = state => ({
  Categories: state.Admin.Admin.categories,
  Jobs: state.Admin.Admin.jobs

})

const mapDispatchToProps = dispatch => ({
  handleGetAllJobs () {
    return dispatch(handleGetAllJobs())
  },
  handleGetAllCategories () {
    return dispatch(handleGetAllCategories())
  },
  handleCreateCategory (data) {
    return dispatch(handleCreateCategory(data))
  },
  handleEditCategory (data, id) {
    return dispatch(handleEditCategory(data, id))
  },
  handleDeleteCategory (id) {
    return dispatch(handleDeleteCategory(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
