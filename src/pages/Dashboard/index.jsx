import React, { Component } from 'react'
import Navbar from '../../container/Navbar'
import {  DuoPickDate } from '../../components/Input'
import { ListAnalyticsCards as Analytics} from '../../components/Card'
import { formatAmount } from '../../components/Tools/Formatter'
import { DashboardTable } from '../../components/Table'
import * as Page from './styles'
import * as Dash from '../../theme/style/styles'
import { CardHeader } from '../../theme/style/typeface'
import { Helmet } from 'react-helmet'
import Button from '../../components/Button' 
import swal from 'sweetalert'


/**
 * Main Dashboard Componenet
 */
export default class index extends Component {
  state = {
    deadLine:'',
    from:null,
    to:null,
    showToDatePicker: false,
    firstPage: 1,
    currentPage: 1,
    usersPerPage: 9,
    pageLimit: 5,
    upperPageBound: 5,
    lowerPageBound: 0,
    analyticsdata:[
      {
        id: 1,
        figure: 0,
        info:' Registered Users',
        info2:'',
        info3:'active users',
        figure2: 0,
        img:require('../../assets/images/registeredusers.svg'),
        color:'#27AE60',
        location:''

      },
      {
        id: 2,
        figure: 0,
        info:'Payments Made',
        info2:'₦',
        info3:'in value',
        figure2: 0,
        img: require('../../assets/images/transactionsperformed.svg'),
        color:'#5353D0',
        location:''
      },
      {
        id: 3,
        figure: 0,
        info:'Jobs posted',
        info2:'',
        info3:'jobs completed',
        figure2: 0,
        img:require('../../assets/images/jobsposted.svg'),
        color:'#2F80ED',
        location:''
      },
      {

        id: 4,
        figure: 0,
        info:'Black Listed Users',
        figure2: null,
        img:require('../../assets/images/blacklist.svg'),
        color:'#FF4500',
        location:''
      },
    ],
    data:[],
    minDate: new Date()
  }

  handleDatePickedFrom = from => {
  if(from === null ){
    return this.setState({ data: [ ...this.props.Transactions], from, showToDatePicker: false })
  }
    this.setState({ from, showToDatePicker: true })
  };
  handleDatePickedTo = to => {
    if(to === null ){
      this.setState({ to })
      return
    }
      this.setState({ to })
  };

  handleSortDate =()=>{
    let from = this.state.from
    let to = this.state.to
    let dates = [...this.props.Transactions]
    if(from === null){
      swal('Empty Fields', 'please select date to filter', 'warning')
      return 
    }
    let fromDates = dates.filter(data => (
          new Date(data.date).getTime() > new Date(from).getTime()
        ))
    let toDates = fromDates.filter(data => (
      new Date(data.date).getTime() < new Date(to).getTime()
    ))
    if(to !== null){
      return this.setState({data: [...toDates]})
    }
        console.log('[fromDate]', fromDates)
        return this.setState({data: [...fromDates]})
  }
  handleGetMinDate =()=>{
    let dates = this.state.data
    let sortDates = dates.sort((a,b)=>(
      new Date(a.date).getTime() - new Date(b.date).getTime()
    ))
    let minDate = sortDates[0].date
    this.setState({minDate: new Date(minDate)})
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
    this.setState({analyticsdata:[
      {
        id: 1,
        figure:this.props.Analytics.registeredUsers || 0,
        info:' Registered Users',
        info2:'',
        info3:'active users',
        figure2: formatAmount(this.props.Analytics.activeUsers || 0 ),
        img:require('../../assets/images/registeredusers.svg'),
        color:'#27AE60',
        location:'manage-users'
      },
      {
        id: 2,
        figure:this.props.Analytics.transactionsPerformed,
        info:'Transactions Performed',
        info2:'₦',
        info3:'in value',
        figure2: formatAmount(this.props.Analytics.transactionsValue|| 0 ),
        img: require('../../assets/images/transactionsperformed.svg'),
        color:'#5353D0',
        location:'transactions'
      },
      {
        id: 3,
        figure: this.props.Analytics.jobsPosted || 0,
        info:'Jobs posted',
        info2:'',
        info3:'jobs completed',
        figure2: this.props.Analytics.jobsCompleted || 0,
        img:require('../../assets/images/jobsposted.svg'),
        color:'#2F80ED',
        location:'manage-jobs'
      },
      {

        id: 4,
        figure: this.props.Analytics.blackListedUsers || 0,
        info:'Black Listed Users',
        figure2: null,
        img:require('../../assets/images/blacklist.svg'),
        color:'#FF4500',
        location:'manage-users'
      },
    ]})
    this.props.handleGetAllUsers()
    .then(res=>{
      this.props.handleGetJobs()
    })
    this.props.handleGetAllTransactions()
    .then(res =>{
      this.setState({ data: [ ...this.state.data, ...this.props.Transactions] }, () => this.handleGetMinDate())
    })
    
  }

  componentWillReceiveProps(nextProps) {
    // Typical usage (don't forget to compare props):
    if (nextProps.Analytics !== this.props.Analytics) {
      if (nextProps.Analytics && nextProps.Analytics.registeredUsers) {
        this.setState({analyticsdata:[
          {
            id: 1,
            figure:nextProps.Analytics.registeredUsers || 0,
            info:' Registered Users',
            info2:'',
            info3:'active users',
            figure2: formatAmount(nextProps.Analytics.activeUsers || 0 ),
            img:require('../../assets/images/registeredusers.svg'),
            color:'#27AE60',
            location:'manage-users'
          },
          {
            id: 2,
            figure:nextProps.Analytics.transactionsPerformed,
            info:'Transactions Performed',
            info2:'₦',
            info3:'in value',
            figure2: formatAmount(nextProps.Analytics.transactionsValue|| 0 ),
            img: require('../../assets/images/transactionsperformed.svg'),
            color:'#5353D0',
            location:'transactions'
          },
          {
            id: 3,
            figure: nextProps.Analytics.jobsPosted || 0,
            info:'Jobs posted',
            info2:'',
            info3:'jobs completed',
            figure2: nextProps.Analytics.jobsCompleted || 0,
            img:require('../../assets/images/jobsposted.svg'),
            color:'#2F80ED',
            location:'manage-jobs'
          },
          {
    
            id: 4,
            figure: nextProps.Analytics.blackListedUsers || 0,
            info:'Black Listed Users',
            figure2: null,
            img:require('../../assets/images/blacklist.svg'),
            color:'#FF4500',
            location:'manage-users'
          },
        ]})
      }
    }

  }
  render () {
    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage
    const currentUsers = this.state.data.slice(indexOfFirstUser, indexOfLastUser).sort((a,b)=>(new Date(b.date).getTime() - new Date(a.date).getTime()))
    const allUsers = this.state.data.length
    let newindexOfFirstUser = indexOfFirstUser + 1
    let pageUsers = currentUsers.length + indexOfFirstUser
    return (
      <Dash.Wrapper>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Dashboard || Primework Admin</title>
          <link rel='shortcut icon' href={require('../../assets/images/primeworkfavicon.jpeg')} type='image/x-icon' />
        </Helmet>
        <Navbar/>
        <Page.PickDateWrapper>
  {/* Datepicker Component*/}
        <DuoPickDate 
          direction='row'
          wrap='nowrap'
          justify='flex-start'
          labelFrom='View Stats From'
          labelTo='To'
          valueFrom ={this.state.from}
          valueTo={this.state.to}
          changeFrom={this.handleDatePickedFrom} 
          changeTo={this.handleDatePickedTo}
          disableToDatePicker={!this.state.showToDatePicker}
          // minDate={this.state.minDate}
          />
          <Button content='FILTER DATE' width='134px' height='40px' margin='0 32px' borderRadius='4px' clicked={this.handleSortDate}/>
        </Page.PickDateWrapper>
        <Dash.SubWrapper
        padding='0 60px'
        flexWrap='nowrap'
        justifyContent='space-between'
        >
           {/* List Component show analytical infomation for db*/}
          <Analytics history={this.props.history} analytics={this.state.analyticsdata}/>
        </Dash.SubWrapper>
        
        { this.state.data && this.state.data.length > 0 ? 
        <DashboardTable
        title='Transaction History' 
        data={currentUsers}
        pageInfo={this.state}
        allUsers={allUsers}
        newindexOfFirstUser={newindexOfFirstUser}
        pageUsers={pageUsers}
        pageNumbers={this.renderPageNumbers}
        selectedPage={this.selectedPage}
        handleDataRange={this.handleDataRange}
        handlePagnationUp={this.handlePagnationUp}
        handlePagnationDown={this.handlePagnationDown}
        setPagination={true}/> 
        :
        <CardHeader style={{margin:'160px auto',justifyContent:'center'}} fontSize='24px'>
          <p>No Data Found</p>
        </CardHeader>
        }
        
      </Dash.Wrapper>
    )
  }
}
