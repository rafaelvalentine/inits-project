import React, { Component } from 'react'
import Navbar from '../../container/Navbar'
import {  DuoPickDate } from '../../components/Input'
import { ListAnalyticsCards as Analytics} from '../../components/Card'
import { formatAmount } from '../../components/Tools/Formatter'
import { DashboardTable } from '../../components/Table'
import * as Page from './styles'
import * as Dash from '../../theme/style/styles'
// import "react-datepicker/dist/react-datepicker.css";


/**
 * Main Dashboard Componenet
 */
export default class index extends Component {
  state = {
    deadLine:'',
    from:'',
    to:'',
    analyticsdata:[
      {
        id: 1,
        figure: 0,
        info:'Registered Users',
        figure2:`0 active users`,
        img:require('../../assets/images/registeredusers.svg'),
        color:'#27AE60',

      },
      {
        id: 2,
        figure: 0,
        info:'Transactions Performed',
        figure2: `‎₦ ${formatAmount('80000000000')} in value`,
        img: require('../../assets/images/transactionsperformed.svg'),
        color:'#5353D0',
      },
      {
        id: 3,
        figure: 0,
        info:'Jobs posted',
        figure2:`${formatAmount('300')} jobs completed`,
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
    transaction:[
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ]
  }

  handleDatePickedFrom = from => {
    this.setState({ from }, ()=>console.log(this.state));
  };
  handleDatePickedTo = to => {
    this.setState({ to }, ()=>console.log(this.state));
  };
  componentDidMount(){
    this.props.handleGetAllUsers()
    this.props.handleGetJobs()
  }
  componentWillReceiveProps(nextProps) {
    // Typical usage (don't forget to compare props):
    if (nextProps.Analytics !== this.props.Analytics) {
      // console.log(nextProps.Analytics);
      if (nextProps.Analytics && nextProps.Analytics.registeredUsers) {
        this.setState({analyticsdata:[
          {
            id: 1,
            figure:nextProps.Analytics.registeredUsers || 0,
            info:' Registered Users',
            figure2:`${formatAmount(nextProps.Analytics.activeUsers || 0 )} active users`,
            img:require('../../assets/images/registeredusers.svg'),
            color:'#27AE60',
    
          },
          {
            id: 2,
            figure:0,
            info:'Transactions Performed',
            figure2: `‎₦ ${formatAmount('0')} in value`,
            img: require('../../assets/images/transactionsperformed.svg'),
            color:'#5353D0',
          },
          {
            id: 3,
            figure: nextProps.Analytics.jobsPosted || 0,
            info:'Jobs posted',
            figure2:`${formatAmount( nextProps.Analytics.jobsCompleted || 0)} jobs completed`,
            img:require('../../assets/images/jobsposted.svg'),
            color:'#2F80ED'
          },
          {
    
            id: 4,
            figure: nextProps.Analytics.blackedListedUsers || 0,
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
          />
        </Page.PickDateWrapper>
        <Dash.SubWrapper
        padding='0 60px'
        flexWrap='nowrap'
        >
           {/* List Component show analytical infomation for db*/}
          <Analytics analytics={this.state.analyticsdata}/>
        </Dash.SubWrapper>
        <DashboardTable title='Transaction History' data={this.state.transaction} />
      </Dash.Wrapper>
    )
  }
}
