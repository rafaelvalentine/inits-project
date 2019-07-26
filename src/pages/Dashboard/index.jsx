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


/**
 * Main Dashboard Componenet
 */
export default class index extends Component {
  state = {
    deadLine:'',
    from:'',
    to:'',
    showToDatePicker: false,
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

      },
      {
        id: 2,
        figure: 0,
        info:'Transactions Performed',
        info2:'₦',
        info3:'in value',
        figure2: 0,
        img: require('../../assets/images/transactionsperformed.svg'),
        color:'#5353D0',
      },
      {
        id: 3,
        figure: 0,
        info:'Jobs posted',
        info2:'',
        info3:'jobs completed',
        figure2: 0,
        img:require('../../assets/images/jobsposted.svg'),
        color:'#2F80ED'
      },
      {

        id: 4,
        figure: 0,
        info:'Black Listed Users',
        figure2: null,
        img:require('../../assets/images/blacklist.svg'),
        color:'#FF4500'
      },
    ],
    transactions:[],
    minDate: new Date()
  }

  handleDatePickedFrom = from => {
    let dates = [...this.state.transactions]
    let filteredDates = dates.filter(data => (
      new Date(data.date).getTime() > new Date(from).getTime()
    ))
  if(from === null ){
    console.log('empty')
    console.log(this.props.Transactions);
    return this.setState({ transactions: [ ...this.props.Transactions], from, showToDatePicker: false })
  }
    this.setState({ transactions: [ ...filteredDates], from, showToDatePicker: true })
  };
  handleDatePickedTo = to => {
    let dates = [...this.state.transactions]
    let filteredDates = dates.filter(data => (
      new Date(data.date).getTime() < new Date(to).getTime()
    ))
    if(to === null ){
      this.setState({ to })
      return
    }
      this.setState({ transactions: [ ...filteredDates], to })
  };
  handleGetMinDate =()=>{
    let dates = this.state.transactions
    let sortDates = dates.sort((a,b)=>(
      new Date(a.date).getTime() - new Date(b.date).getTime()
    ))
    let minDate = sortDates[0].date
    this.setState({minDate: new Date(minDate)})
    // console.log(minDate)
  }
  componentDidMount(){
    
    this.props.handleGetAllUsers()
    .then(res=>{
      this.props.handleGetJobs()
    })
    this.props.handleGetAllTransactions()
    .then(res =>{
      this.setState({ transactions: [ ...this.state.transactions,...this.props.Transactions] }, () => this.handleGetMinDate())
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
          },
          {
            id: 3,
            figure: nextProps.Analytics.jobsPosted || 0,
            info:'Jobs posted',
            info2:'',
            info3:'jobs completed',
            figure2: nextProps.Analytics.jobsCompleted || 0,
            img:require('../../assets/images/jobsposted.svg'),
            color:'#2F80ED'
          },
          {
    
            id: 4,
            figure: nextProps.Analytics.blackListedUsers || 0,
            info:'Black Listed Users',
            figure2: null,
            img:require('../../assets/images/blacklist.svg'),
            color:'#FF4500'
          },
        ]})
      }
    }

  }
  render () {
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
        </Page.PickDateWrapper>
        <Dash.SubWrapper
        padding='0 60px'
        flexWrap='nowrap'
        >
           {/* List Component show analytical infomation for db*/}
          <Analytics analytics={this.state.analyticsdata}/>
        </Dash.SubWrapper>
        
        { this.state.transactions && this.state.transactions.length > 0 ? 
        <DashboardTable title='Transaction History' data={this.state.transactions} /> 
        :
        <CardHeader style={{margin:'160px auto',justifyContent:'center'}} fontSize='24px'>
          <p>No Data Found</p>
        </CardHeader>
        }
        
      </Dash.Wrapper>
    )
  }
}
