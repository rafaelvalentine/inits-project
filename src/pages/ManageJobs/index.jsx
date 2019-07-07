import React, { Component } from 'react'
import Navbar from '../../container/Navbar'
import TabHeader from '../../components/TabHead'
import { JobsTable, CategoryTable } from '../../components/Table'
import * as Page from '../../theme/style/styles'
import { CreateCategoryModal, EditCategoryModal, DeleteCategoryModal } from '../../components/Modal'


export default class index extends Component {
  state ={ 
    selected:true,
    loading:false,
    data:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
    data2:[{category:'web development'},{category:'mobile app development'},{category:'content creation'}],
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
    showDeleteCategory:false
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
  this.setState({[e.target.name]:e.target.value}, ()=>console.log(this.state.category))
}
handleShowCreateCategory= () =>{
  let showCreateCategory = !this.state.showCreateCategory
  this.setState({ showCreateCategory, category:'', categoryId:'' })
}
handleShowEditCategory = () =>{
  let showEditCategory = !this.state.showEditCategory
  this.setState({ showEditCategory, category:'', categoryId:'' })
}
handleShowDeleteCategory = () =>{
  let showDeleteCategory = !this.state.showDeleteCategory
  this.setState({ showDeleteCategory, category:'', categoryId:'' })
}
handleCreateCategory= () =>{
  this.setState({ loading:true, },()=>setTimeout(() => {
   this.setState({showCreateCategory: false}) 
  }, 3000))
}
handleEditCategory= (id) =>{
  let selectedCategory
  this.setState({ loading:true, },()=>setTimeout(() => {
   this.setState({showCreateCategory: false}) 
  }, 3000))
}
componentDidMount(){
  this.renderPageNumbers()
}
  render () {
    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage
    const currentUsers = this.state.data.slice(indexOfFirstUser, indexOfLastUser)
    const allUsers = this.state.data.length
    let newindexOfFirstUser = indexOfFirstUser + 1
    let pageUsers = currentUsers.length + indexOfFirstUser
    return (
      <Page.Wrapper>
        <Navbar />
        <Page.SubWrapperAlt
          padding='56px 70px'>
{/* this ths tab header component used toggle tabs */}
          <TabHeader 
          selected={this.state.selected} 
          clickedJob={this.handleSelect}
          clickedCategory={this.handleShowCreateCategory}
          />
         { this.state.selected ? <JobsTable 
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
         setPagination={true}/> :
         <CategoryTable data={this.state.data2}
         handleShowEditCategory={this.handleShowEditCategory}
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
