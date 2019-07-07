import React, { Component } from 'react'
import Navbar from '../../container/Navbar'
import { TransactionTable } from '../../components/Table'
import * as Page from '../../theme/style/styles'


export default class index extends Component {
  state ={ 
    loading:false,
    data:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
    data2:[{category:'web development'},{category:'mobile app development'},{category:'content creation'}],
    firstPage: 1,
    currentPage: 1,
    usersPerPage: 9,
    pageLimit: 5,
    upperPageBound: 5,
    lowerPageBound: 0
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
        <Page.SubWrapper>
          <TransactionTable 
          title='Transactions'
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
          setPagination={true}
          /> 
        </Page.SubWrapper>
      </Page.Wrapper>
    )
  }
}
