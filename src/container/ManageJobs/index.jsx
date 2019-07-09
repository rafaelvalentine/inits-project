import Jobs from '../../pages/ManageJobs'
import { connect } from 'react-redux'
import { handleGetAllCategories, handleCreateCategory, handleEditCategory, handleDeleteCategory } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */

const mapStateToProps = state => ({
  Categories: state.Admin.Admin.categories
})

const mapDispatchToProps = dispatch => ({
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
