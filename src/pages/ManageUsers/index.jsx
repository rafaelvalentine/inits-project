import React, { Component } from 'react'
import Navbar from '../../container/Navbar'
import Search from '../../components/SearchBar'
import { Profile } from '../../components/Card/Cards'
import { CreateUserButton } from '../../components/Button'
import Pagination from '../../components/Tools/Pagination'
import * as Page from '../../theme/style/styles'
import { FilterModal, DisableUserModal, ConfirmDisableUserModal } from '../../components/Modal'

export default class index extends Component {
  state ={
    firstPage: 1,
    currentPage: 1,
    usersPerPage: 9,
    pageLimit: 5,
    upperPageBound: 5,
    lowerPageBound: 0,
    data:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},],
    skills: ['html5', 'css3', 'bootstrap 4', 'java', 'Reactjs'],
    showFilter: false,
    showDisableModal:false,
    showConfirmDisable: false,
    user:{
      id: Math.random(),
      name:'ezike ozichukwu',
      image: require('../../assets/images/admin-profile.png'),
      rating:'4.7',
      type:'react dev',
      jobsCompleted:21,
      skills: ['html5', 'css3', 'bootstrap 4', 'java', 'Reactjs'],
      isDisabled: false
    },
    user2:{
      id: Math.random(),
      name:'temi adeleke',
      image: require('../../assets/images/profile-withface.png'),
      rating:'3.3',
      type:'HRM',
      jobsCompleted: 7,
      skills: ['html5', 'css3', 'bootstrap 4', 'java', 'Reactjs'],
      isDisabled: true
    }
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
  e.target.blur()
  let filter = this.state.showFilter
  this.setState({showFilter: !filter })
}

handleDisable = (name, id) =>{
  // e.target.blur()
  let disable = this.state.showDisableModal
  this.setState({clickedName: name, clickedId: id }, ()=> this.setState({showDisableModal: !disable}))
}
handleOpenConfirmDisable = e =>{
  let confirmDisable = this.state.showConfirmDisable
  this.setState({loading: true}, ()=> setTimeout(() => {
    this.setState({showConfirmDisable: !confirmDisable, showDisableModal:false })
  }, 3000))
  
}

handleConfirmDisable = e =>{
  let confirmDisable = this.state.showConfirmDisable
  this.setState({showConfirmDisable: !confirmDisable })
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
        {/* This is the Navbar Component */}
        <Navbar />
        <Page.SubWrapperAlt
          padding='50px 80px 40px'
        >
          <Page.SubWrapper
          padding='0'
        >
          {/* This is the search Component */}
          <Search 
          filterClicked={this.handleShowFilterSearch}
          inputs={this.state}
           />
           {/* This is the create new user Component */}
            <CreateUserButton
            clicked={()=> this.props.history.push('manage-users/createuser')}
            content='create new user'
            />
        </Page.SubWrapper>
        <Page.SubWrapper
         padding='80px 40px'
        justifyContent='flex-start'>
          {/* This is the map Component  to display all available users*/}
          <Profile 
          key={Math.random()}
          handleEnable={()=>console.log('handleEnable was just clicked')}
          handleDisable={()=>this.handleDisable(this.state.user.name, this.state.user.id)}
          {...this.state.user}
          />
           <Profile 
          key={Math.random()}
          handleEnable={()=>console.log('handleEnable was just clicked')}
          handleDisable={()=>this.handleDisable(this.state.user2.name, this.state.user2.id)}
          {...this.state.user2}
          />
          {/* {currentUsers && currentUsers.length > 0 ?  currentUsers.map(user =>(
            <Profile 
          key={Math.random()}
          skills={this.state.skills}
          />
          )) : 'No Users Found'} */}
        </Page.SubWrapper>
        {/* This is the Pagination  Component */}
        <Pagination 
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
        />
        </Page.SubWrapperAlt>
        {/* 
        This is the filter search modal Component 
        Note:  that all Modal CSS is handled by index.css
        */}
        <FilterModal 
        show={this.state.showFilter}
        onHide={this.handleShowFilterSearch}
        clicked={this.handleShowFilterSearch}
        />
        {/* 
        This is the disable user modal Component 
        Note:  that all Modal CSS is handled by index.css
        */}
        <DisableUserModal
        show={this.state.showDisableModal}
        loading={this.state.loading}
        onHide={this.handleDisable}
        inputs={this.state.user}
        open={this.handleOpenConfirmDisable}
        />
        {/* 
        This is the filter search modal Component 
        Note:  that all Modal CSS is handled by index.css
        */}
        <ConfirmDisableUserModal
        show={this.state.showConfirmDisable}
        onHide={this.handleConfirmDisable}
        history={this.props.history}
        inputs={this.state.user}
        close={this.handleConfirmDisable}
        />
      </Page.Wrapper>

    )
  }
}
