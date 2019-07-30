import React, { Component } from 'react'
import Navbar from '../../container/Navbar'
import TabHeader from '../../components/TabHead'
import { JobsTable, CategoryTable } from '../../components/Table'
import * as Page from '../../theme/style/styles'
import { CreateCategoryModal, EditCategoryModal, DeleteCategoryModal } from '../../components/Modal'
import validator from 'validator'
import swal from 'sweetalert'
import GoldSpinner from '../../components/Tools/GoldSpinner'
import { Helmet } from 'react-helmet'

export default class index extends Component {
  state ={ 
    selected:true,
    loading:false,
    spinner:true,
    data:[],
    categoryData:[],
    firstPage: 1,
    currentPage: 1,
    usersPerPage: 9,
    pageLimit: 5,
    upperPageBound: 5,
    lowerPageBound: 0,
    category:'web dev',
    categoryId:'',
    showCreateCategory: false,
    showEditCategory: false,
    showDeleteCategory:false,
    cancelFilter: false
  }

  scrollToTop =()=> window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  handleSelect = ()=> {
    let selected = !this.state.selected
    this.setState({selected})
  }
  handlePagnationUp = (e) => {
    e.target.blur()
    if (this.state.currentPage >= this.state.firstPage) {
       this.setState((prevState, props) => {
        return {currentPage: prevState.currentPage + 1};
      }, ()=> this.scrollToTop())
    }
    if (this.state.currentPage === this.state.upperPageBound) {
      let upperPageBound = this.state.upperPageBound + this.state.pageLimit
      let lowerPageBound = this.state.lowerPageBound + this.state.pageLimit
      this.setState((prevState, props) => {
       return { upperPageBound, lowerPageBound }
     })
   }
  }
 handlePagnationDown = (e) => {
    e.target.blur()
    if (this.state.currentPage === this.state.lowerPageBound + 1) {
      let upperPageBound = this.state.upperPageBound - this.state.pageLimit
      let lowerPageBound = this.state.lowerPageBound - this.state.pageLimit
      this.setState((prevState, props) => {
       return { upperPageBound, lowerPageBound }
     })
   }
   if (this.state.currentPage !== this.state.firstPage) { 
     this.setState((prevState, props) => {
      return {currentPage: prevState.currentPage - 1};
    }, ()=> this.scrollToTop())
  }
  }
    handleDataRange = e => {
    e.target.blur()
    const callback = () => {
      this.renderPageNumbers()
      this.scrollToTop()
    }
    
    let numberToShow = Number(e.target.value)
    return this.setState({ usersPerPage: numberToShow, currentPage: 1 }, ()=>setTimeout(() => {
      
      callback() }, 100))
  }

  renderPageNumbers = () =>{ 
    let pageList = []
    let length = Math.ceil( this.state.data.length / this.state.usersPerPage)
    for(let index = 1; index <= length; index++) {
    const element = {
      id: index,
      page: index
    };
    pageList.push(element)
  }
 return pageList
}
selectedPage = page =>{
  this.scrollToTop()
  this.setState({currentPage: page})
}
handleCategoryChange= e =>{
  this.setState({[e.target.name]:e.target.value})
}
handleShowCreateCategory= () =>{
  let showCreateCategory = !this.state.showCreateCategory
  this.setState({ showCreateCategory, category:'', categoryId:'' })
}
handleShowEditCategory = (id, category) =>{
  let showEditCategory = !this.state.showEditCategory
  this.setState({ showEditCategory, categoryId:id, category:category }, ()=> this.handleEditCategory)
}
handleShowDeleteCategory = (id, category) =>{
  let showDeleteCategory = !this.state.showDeleteCategory
  this.setState({ showDeleteCategory, categoryId:id, category:category },  ()=> this.handleDeleteCategory)
}
handleCreateCategory= () =>{
 /**
   * Validating form input
   */
  if (this.state.category === undefined || validator.isEmpty(this.state.category)) {
    swal('category is required!')
    return
  }
  let data ={
    category: this.state.category
  }
  this.setState({ loading:true, })
  this.props.handleCreateCategory(data)
  .then(res =>{
    this.setState({loading: false, showCreateCategory: false, categoryData:[...this.state.categoryData, res.data]}) 
  })
}
handleEditCategory= () =>{
  let categoryId = this.state.categoryId
  
  /**
   * Validating form input
   */
  if (this.state.category === undefined || validator.isEmpty(this.state.category)) {
    swal('category is required!')
    return
  }
  let category ={
    category: this.state.category
  }
  this.setState({ loading:true, })
  this.props.handleEditCategory(category, categoryId)
  .then(res=>{
    this.setState({loading:false, showEditCategory: false}) 
    this.props.handleGetAllCategories()
      .then(res=>{
        this.setState({categoryData: this.props.Categories})
      })
  })
}
handleDeleteCategory= () =>{
  let categoryId = this.state.categoryId

  this.setState({ loading:true, })
  this.props.handleDeleteCategory(categoryId) 
  .then(res =>{
    this.setState({loading:false, showDeleteCategory: false}) 
    this.props.handleGetAllCategories()
      .then(res=>{
        this.setState({categoryData: this.props.Categories})
      })
  })
}
handleFilterBy = filter =>{
let Jobs = [...this.props.Jobs]
  if (filter === 'completed'){
  let history = Jobs.filter(job=>(
      job.completed === true
    ))
   return this.setState({data: [...history], cancelFilter: true })
  }
  if (filter === 'accepted'){
    let history = Jobs.filter(job=>(
        job.assigned === true
      ))
     return this.setState({data: [...history], cancelFilter: true })
    }
    if (filter === 'unaccepted'){
      let history = Jobs.filter(job=>(
          job.assigned === false
        ))
       return this.setState({data: [...history], cancelFilter: true,  })
      }
      return null
}


handleCancel = () => (
  this.setState({data: [...this.props.Jobs], cancelFilter: false })
)


componentDidMount(){
  this.renderPageNumbers()
  this.setState({data: this.props.Jobs, categoryData: this.props.Categories})
  this.props.handleGetAllJobs()
  .then(res=>{
    this.setState({data: this.props.Jobs})
  })
  this.props.handleGetAllCategories()
  .then(res=>{
    this.setState({categoryData: this.props.Categories})
  })

 setTimeout(() => {
   this.setState({spinner:false, data: this.props.Jobs, categoryData: this.props.Categories })
 }, 15000);
}
componentWillReceiveProps(nextProps) {
  // Typical usage (don't forget to compare props):
  if(nextProps.Jobs){
    this.setState({data: this.props.Jobs})
  }
  if (nextProps.Jobs !== this.props.Jobs) {
    if (nextProps.Jobs && nextProps.Jobs > 0) {
      this.setState({data: this.props.Jobs})
    }
  }
}
  render () {
    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage
    const currentUsers = this.state.data.slice(indexOfFirstUser, indexOfLastUser)
    const allUsers = this.state.data.length
    let newindexOfFirstUser = indexOfFirstUser + 1
    let pageUsers = currentUsers.length + indexOfFirstUser
    let spinner = this.state.spinner ? <GoldSpinner/> : null
    let messages = this.state.spinner ? 'Searching...' : 'No Jobs Found'
    let table =(
      <JobsTable 
         pageInfo={this.state}
         allUsers={allUsers}
         newindexOfFirstUser={newindexOfFirstUser}
         pageUsers={pageUsers}
         pageNumbers={this.renderPageNumbers}
         selectedPage={this.selectedPage}
         handleDataRange={this.handleDataRange}
         handlePagnationUp={this.handlePagnationUp}
         handlePagnationDown={this.handlePagnationDown}
         data={currentUsers} 
         setPagination={true} />
    )
    let placerholder = (
      <Page.SubWrapperAlt
      padding='50px 80px 500px'
    > <p>{messages}</p>
    {spinner}
    </Page.SubWrapperAlt>
    )
    let display = placerholder
    if(this.state.data && this.state.data.length > 0 ){
      display = table
    }


    return (
      <Page.Wrapper>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Job History || Primework Admin</title>
          <link rel='shortcut icon' href={require('../../assets/images/primeworkfavicon.jpeg')} type='image/x-icon' />
        </Helmet>
        <Navbar />
        <Page.SubWrapperAlt
          padding='56px 70px'>
{/* this ths tab header component used toggle tabs */}
          <TabHeader 
          task='Filter By'
          handleFilterBy={this.handleFilterBy}
          showCancel={this.state.cancelFilter}
          selected={this.state.selected} 
          clickedJob={this.handleSelect}
          clickedCategory={this.handleShowCreateCategory}
          cancel={this.handleCancel}
          />
         { this.state.selected ? display :
         <CategoryTable data={this.state.categoryData}
         handleShowEditCategory={ this.handleShowEditCategory}
         handleShowDeleteCategory={this.handleShowDeleteCategory}
         />}
        </Page.SubWrapperAlt>


        {/* this the is create new category modal */}
        <CreateCategoryModal
        loading={this.state.loading}
        show={this.state.showCreateCategory}
        onHide={this.handleShowCreateCategory}
        clicked={this.handleShowCreateCategory}
        inputs={this.state}
        changed={this.handleCategoryChange}
        create={this.handleCreateCategory}
        />
        {/* this is the Edit existing category modal */}
        <EditCategoryModal
         loading={this.state.loading}
         show={this.state.showEditCategory}
         onHide={this.handleShowEditCategory}
         clicked={this.handleShowEditCategory}
         inputs={this.state}
         changed={this.handleCategoryChange}
         create={this.handleEditCategory}
        />

         {/* this is  the Delete selected category modal */}
        <DeleteCategoryModal
         loading={this.state.loading}
         show={this.state.showDeleteCategory}
         onHide={this.handleShowDeleteCategory}
         clicked={this.handleShowDeleteCategory}
         inputs={this.state}
         create={this.handleDeleteCategory}
        />
      </Page.Wrapper>
    )
  }
}
