import React, { Component } from 'react'
import Navbar from '../../container/Navbar'
import Search from '../../components/SearchBar'
import { Profile } from '../../components/Card/Cards'
import { CreateUserButton, CloseSearchButton  } from '../../components/Button'
import Pagination from '../../components/Tools/Pagination'
import GoldSpinner from '../../components/Tools/GoldSpinner'
import * as Page from '../../theme/style/styles'
import { FilterModal, DisableUserModal, ConfirmDisableUserModal, EnableUserModal, ConfirmEnableUserModal  } from '../../components/Modal'
import swal from 'sweetalert'
import validator from 'validator'
import { Helmet } from 'react-helmet'

export default class index extends Component {
  state ={
    loading:false,
    filterLoading: false,
    firstPage: 1,
    currentPage: 1,
    usersPerPage: 9,
    pageLimit: 5,
    upperPageBound: 5,
    lowerPageBound: 0,
    showFilter: false,
    showDisableModal:false,
    showConfirmDisableModal: false,
    showEnableModal:false,
    showConfirmEnableModal: false,
    clickedUser:{
      id:'',
      name:''
    },
    data:[],
    query:'',
    categories:[],
    spinner:true
  }

  scrollToTop =()=> window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
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

handleShowFilterSearch = e =>{
  // e.target.blur()
  let filter = this.state.showFilter
  this.setState({showFilter: !filter })
}

handleCloseEnableUser =(name, id)=>{
  let enable = this.state.showEnableModal
   this.setState({showEnableModal: !enable})
}
handleCloseDisableUser = (name, id) =>{
  // e.target.blur()
  let disable = this.state.showDisableModal
   this.setState({showDisableModal: !disable})
}
handleEnableUser =(name, id)=>{
  let enable = this.state.showEnableModal
  this.setState({clickedUser:{ name, id} }, ()=> this.setState({showEnableModal: !enable}))
}
handleDisableUser = (name, id) =>{
  // e.target.blur()
  let disable = this.state.showDisableModal
  this.setState({clickedUser:{ name, id} }, ()=> this.setState({showDisableModal: !disable}))
}
handleOpenConfirmDisable = e =>{
  let confirmDisable = this.state.showConfirmDisableModal
  this.setState({loading: true})
  this.props.handleDisableUser(this.state.clickedUser.id)
  .then(res =>{
    this.setState({ showConfirmDisableModal: !confirmDisable, showDisableModal:false })
  })
}
handleOpenConfirmEnable = e =>{
  this.setState({loading: true})
  let confirmEnable = this.state.showConfirmEnableModal
  this.props.handleEnableUser(this.state.clickedUser.id)
  .then(res =>{
    this.setState({ showConfirmEnableModal: !confirmEnable, showEnableModal:false })
  })
}
handleConfirmDisable = e =>{
  let confirmDisable = this.state.showConfirmDisableModal
  this.setState({showConfirmDisableModal: !confirmDisable, loading: false, clickedUser:{ name:'', id:''} })
  this.props.handleGetAllUsersCardInfo()
  .then( res=>{
    this.setState({data: this.props.Users})
  })
}
handleConfirmEnable = e =>{
  let confirmEnable = this.state.showConfirmEnableModal
  this.setState({showConfirmEnableModal: !confirmEnable, loading: false, clickedUser:{ name:'', id:''} })
  this.props.handleGetAllUsersCardInfo()
  .then( res=>{
    this.setState({data: this.props.Users})
  })
}
handleSearchInput = e =>{
  this.setState({query: e.target.value})
}
handleFilterSearchInput = inputs =>{
  this.setState({filterQuery: inputs},()=> this.handleFilterSearchQuery())
}
handleSearchQuery = e => {
  e.target.blur()
if(validator.isEmpty(this.state.query)){
  swal('Empty Field', 'Enter search value', 'warning')
  return
}
  this.setState({loading: true})
this.props.postSearchQuery(this.state.query)
.then(res=>{
  this.setState({loading: false, data: this.props.Search.result.users})
})
}
handleFilterSearchQuery = () => {
this.setState({filterLoading: true})

this.props.postSearchQuery(this.state.filterQuery)
.then(res=>{
  this.setState({filterLoading: false, data: this.props.Search.result.users, showFilter: false})
})
}
handleCancelSearch = () => {
  this.setState({data: this.props.Users, query:''}, ()=> this.props.cancelSearch(false))
}

componentDidMount(){
  this.renderPageNumbers()
  this.props.handleGetAllUsersCardInfo()
  .then( res=>{
    this.setState({data: this.props.Users})
  })
  this.props.handleGetAllCategories()
  .then(res=>{
    this.setState({categories: this.props.Categories})
  })
 setTimeout(() => {
   this.setState({spinner:false})
 }, 15000);
}

  render () {
    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage
    const currentUsers = this.state.data.slice(indexOfFirstUser, indexOfLastUser)
    const allUsers = this.state.data.length
    let newindexOfFirstUser = indexOfFirstUser + 1
    let pageUsers = currentUsers.length + indexOfFirstUser
    let spinner = this.state.spinner ? <GoldSpinner/> : null
    return (
      <Page.Wrapper>
        <Helmet>
          <meta charSet='utf-8' />
          <title> Manage Users || Primework Admin</title>
          <link rel='shortcut icon' href={require('../../assets/images/primeworkfavicon.jpeg')} type='image/x-icon' />
        </Helmet>
        {/* This is the Navbar Component */}
        <Navbar />
        <Page.SubWrapperAlt
          padding='50px 40px 40px'
        >
          <Page.SubWrapper
          padding='0'
          justifyContent='center'
        >
          {/* This is the search Component */}
          <Search 
          filterClicked={this.handleShowFilterSearch}
          inputs={this.state}
          changed={this.handleSearchInput}
          clicked={this.handleSearchQuery}
          loading={this.state.loading}
           />
           {/* This is the create new user Component */}
           {this.props.Search.searchCancel ? 
            // This is the cancel search user Component 
           <CloseSearchButton 
            clicked={this.handleCancelSearch}
            content='Cancel'
            /> 
            :
            //  This is the create new user Component 
            <CreateUserButton
            clicked={()=> this.props.history.push('manage-users/createuser')}
            content='create new user'
            />
           }
        </Page.SubWrapper>
        <Page.SubWrapper
          className='usersCard'
         padding='80px 0'
        justifyContent='flex-start'
        style={{padding:'0 auto'}}
        >
          {/* This is the map Component  to display all available users */}
          {currentUsers && currentUsers.length > 0 ?  currentUsers.map(user =>{
            let name = `${user.freelancer.firstName || 'Jon'} ${user.freelancer.lastName || 'Snow'}`
          return  <Profile 
          key={user._id}
          {...user}
          {...user.freelancer}
          handleEnableUser={()=>this.handleEnableUser(name, user._id)}
          handleDisableUser={()=>this.handleDisableUser(name, user._id)}
          name={name }
          jobsCompleted={ user.jobsCompleted.length || '0'}
          isDisabled={user.disabled}
            
            
          />
          }) :  <Page.SubWrapperAlt
          padding='50px 80px 500px'
        >  No Users Found
        {spinner}
        </Page.SubWrapperAlt>}
        </Page.SubWrapper>
        {/* This is the Pagination  Component */}
        {currentUsers && currentUsers.length > 0 ? <Pagination
        className='userPagination' 
        data={this.state}
        allUsers={allUsers}
        pageUsers={pageUsers}
        newindexOfFirstUser={newindexOfFirstUser}
        handlePagnationUp={this.handlePagnationUp}
        handlePagnationDown={this.handlePagnationDown}
        handleDataRange={this.handleDataRange}
        pageNumbers={this.renderPageNumbers}
        selectedPage={this.selectedPage}
        pageLimit={this.state.pageLimit}
        upperPageBound={this.state.upperPageBound}
        lowerPageBound={this.state.lowerPageBound}
        /> : null }
        </Page.SubWrapperAlt>
        {/* 
        This is the filter search modal Component 
        Note:  that all Modal CSS is handled by index.css
        */}
        <FilterModal 
        show={this.state.showFilter}
        onHide={this.handleShowFilterSearch}
        clicked={this.handleShowFilterSearch}
        categories={this.state.categories}
        loading={this.state.filterLoading}
        handleFilterSearchInput={this.handleFilterSearchInput}
        />
        {/* 
        This is the disable user modal Component 
        Note:  that all Modal CSS is handled by index.css
        */}
        <DisableUserModal
        show={this.state.showDisableModal}
        loading={this.state.loading}
        onHide={this.handleCloseDisableUser}
        inputs={this.state.clickedUser}
        open={this.handleOpenConfirmDisable}
        />
        {/* 
        This is the confirm disabled user modal Component 
        Note:  that all Modal CSS is handled by index.css
        */}
        <ConfirmDisableUserModal
        show={this.state.showConfirmDisableModal}
        onHide={this.handleConfirmDisable}
        history={this.props.history}
        inputs={this.state.clickedUser}
        close={this.handleConfirmDisable}
        />
          {/* 
        This is the enable user modal Component 
        Note:  that all Modal CSS is handled by index.css
        */}
        <EnableUserModal
        show={this.state.showEnableModal}
        loading={this.state.loading}
        onHide={this.handleCloseEnableUser}
        inputs={this.state.clickedUser}
        open={this.handleOpenConfirmEnable}
        />
        {/* 
        This is the confirm enabled user modal Component 
        Note:  that all Modal CSS is handled by index.css
        */}
        <ConfirmEnableUserModal
        show={this.state.showConfirmEnableModal}
        onHide={this.handleConfirmEnable}
        history={this.props.history}
        inputs={this.state.clickedUser}
        close={this.handleConfirmEnable}
        />
      </Page.Wrapper>

    )
  }
}
