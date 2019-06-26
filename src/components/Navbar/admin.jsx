import React, { useState, useEffect, useRef } from 'react'
import * as Com from './styles'
import { Admin as AdminIMG } from '../Picture'
import { Name as AdminName } from '../Name'

/**
 * this component holds the admin profile Info and Dropdown list for more options
 */
const Admin = ({ admin, history }) => {
  /**
   * here i am using useState to toggle the dropdown
   */
  const [dropDown, setDropDown] = useState({})

  const toggleDropDown = () => {
    if (dropDown.show) {
      return setDropDown({ show: false })
    }
    return setDropDown({ show: true })
  }
  let dropdown
  if (dropDown.show) {
    dropdown = <DropDown history={history} />
  }
  /**
 * Hook that alerts clicks outside of the passed ref
 */
  function useOutsideAlerter (ref) {
  /**
   * Alert if clicked on outside of element
   */
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        return setDropDown({ show: false })
      }
    }

    useEffect(() => {
    // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
      // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    })
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (
    <Com.AdminWrapper ref={wrapperRef}>
      <AdminIMG
        src={null || require('../../assets/images/admin-profile.png')}
      />
      <AdminName name='' icon={require('../../assets/images/arrow-dropdown.svg')} clicked={toggleDropDown}>
        { dropdown }
      </AdminName>
    </Com.AdminWrapper>
  )
}

const DropDown = props => {
  return (
    <Com.Dropdown>
      <Com.Options onClick={()=> props.history.push('/dashboard/createadmin')}>
        <img src={require('../../assets/images/createadmin.svg')} alt='Create new admin user' />
        <span> Create new admin user </span>
      </Com.Options>
      <Com.Options onClick={()=> props.history.push('/dashboard/adminsettings')}>
        <img src={require('../../assets/images/settings.svg')} alt='settings' />
        <span> Settings </span>
      </Com.Options>
      <Com.Options onClick={()=> props.history.push('/')}>
        <img src={require('../../assets/images/logout.svg')} alt='logout' />
        <span> Logout </span>
      </Com.Options>
    </Com.Dropdown>
  )
}
export default Admin
