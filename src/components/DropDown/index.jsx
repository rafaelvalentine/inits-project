import React from 'react'
import * as DropDown from './styles'

export const TransactionDropDown = () => {
  return (
    <DropDown.SortDropDown>
      <DropDown.SortOptions onClick={()=> {console.log('clicked option')}}>
        <span>Date ( oldest to newest)</span> 
      </DropDown.SortOptions>
      <DropDown.SortOptions onClick={()=> {}}>
        <span>Date ( newest to oldest)</span>
      </DropDown.SortOptions>
      <DropDown.SortOptions onClick={()=> {}}>
        <span>Amount (lowest to higest)</span>
      </DropDown.SortOptions>
      <DropDown.SortOptions onClick={()=> {}}>
        <span>Amount (higest to lowest)</span>
      </DropDown.SortOptions>
    </DropDown.SortDropDown>
  )
}

export const NavDropDown = props => {
  return (
    <DropDown.NavDropDown>
      <DropDown.NavOptions onClick={()=> props.history.push('/dashboard/createadmin')}>
        <img src={require('../../assets/images/createadmin.svg')} alt='Create new admin user' />
        <span> Create new admin user </span>
      </DropDown.NavOptions>
      <DropDown.NavOptions onClick={()=> props.history.push('/dashboard/adminsettings')}>
        <img src={require('../../assets/images/settings.svg')} alt='settings' />
        <span> Settings </span>
      </DropDown.NavOptions>
      <DropDown.NavOptions onClick={()=> {
        localStorage.clear()
        return props.history.push('/')}}>
        <img src={require('../../assets/images/logout.svg')} alt='logout' />
        <span> Logout </span>
      </DropDown.NavOptions>
    </DropDown.NavDropDown>
  )
}

export const JobsDropDown = props => {
  return (
    <DropDown.SortDropDown>
      <DropDown.SortOptions onClick={()=> {console.log('clicked option')}}>
        <span>Created Jobs</span> 
      </DropDown.SortOptions>
      <DropDown.SortOptions onClick={()=> {}}>
        <span>Accepted Jobs</span>
      </DropDown.SortOptions>
      <DropDown.SortOptions onClick={()=> {}}>
        <span>Unaccepted Jobs</span>
      </DropDown.SortOptions>
    </DropDown.SortDropDown>
  )
}

// export default index
