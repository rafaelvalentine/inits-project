import React, { useState, useEffect, useRef } from 'react'
import * as Card from './styles'
import { Header, CardHeader } from '../../theme/style/typeface'
import { Logo } from '../Picture'
import { Main } from '../Input'
import { UserDetails, JobCompleted, SkillList } from './cardParts'
import Button, { DuoButton } from '../Button'
import { ConnectDropDown } from '../DropDown'

const CardBox = ({ children, ...props }) => {
  return (
    <Card.Container {...props}>
      {children}
    </Card.Container>
  )
}

export const AnalyticsCard = ({ figure, figure2, info, info2, info3, img, color, ...props }) => {
  let bottom
  let newFigure
  let newFigure2
  if (figure < 1000) {
    newFigure = figure
  }
  if (figure > 1000) {
    newFigure = `${Math.round(figure / 1000)}k`
  }
  if (figure > 1000000) {
    newFigure = `${Math.round(figure / 1000000)}m`
  }
  if (figure < 1000) {
    newFigure2 = figure2
  }
  if (figure2 > 1000) {
    newFigure2 = `${Math.round(figure2 / 1000)}k`
  }
  if (figure2 > 1000000) {
    newFigure2 = `${Math.round(figure2 / 1000000)}m`
  }
  if (newFigure2 !== null && figure2 !== '' && figure2 !== undefined) {
    bottom = (
      <Card.Container
        className='bottom'
        width='200px'
        height='24px'
        alignSelf='center'
        backgroundColor={color}
        boxShadow='none'
        textAlign='center'
        borderRadius='0'
        margin='42px auto 0'
      >
        {`${info2} ${newFigure2} ${info3}` || 'No Info'}
      </Card.Container>
    )
  }
  return (
    <Card.Container
      style={{ cursor: 'pointer' }}
      padding='24px 24px 0' margin='20px'
      {...props}>
      <Card.Wrapper>
        <Header margin='0'>
          { newFigure || '0'}
        </Header>
        <Logo
          height='40px'
          width='40px'
          src={img} />
      </Card.Wrapper>
      <Card.Details color={color}>{ info || 'No info'}</Card.Details>
      {bottom}
    </Card.Container>
  )
}


export const Profile = ({ name, 
  profileImageUrl, 
  averageRate, 
  jobTitle, 
  jobsCompleted, 
  skills, 
  primaryAlt, 
  secondAlt, 
  primaryContent, 
  secondaryClicked, 
  isDisabled, 
  handleEnableUser, 
  handleDisableUser, 
  email, 
  handleStartNewChat,
  _id,
  ...props }) => {
  let secondaryContent
  let altButton
  let clicked
  !isDisabled ? secondaryContent = 'Disable' : secondaryContent = 'Enable'
  isDisabled ? altButton = true : altButton = false
  isDisabled ? clicked = handleEnableUser : clicked = handleDisableUser
  const [connect, setConnect] = useState({ show: false })
  let show = !connect.show
  const toggleDropDown = () => {
    if (connect.show) {
      return setConnect(connect => ({ ...connect, show }))
    }
    return setConnect(connect => ({ ...connect, show }))
  }
  let dropdown
  if (connect.show) {
    dropdown = <ConnectDropDown email={email} toggleDropDown={toggleDropDown} handleStartNewChat={() => handleStartNewChat(_id)} />
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
        return setConnect(connect => ({ ...connect, show: false }))
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
    <CardBox
      className='profileCard'
      width='220px'
      height='330px'
      margin='25px 15px'
      style={{ position: 'relative' }}
      {...props}
    >
      <UserDetails
        image={profileImageUrl}
        rating={averageRate}
        type={jobTitle}
        name={name}
        email={email}
      />
      <JobCompleted jobs={jobsCompleted} />
      <SkillList skills={skills} />
      <DuoButton
        DuoButtonMargin='40px 0 0'
        primaryContent='Connect'
        secondaryContent={secondaryContent}
        secondAlt={altButton}
        primaryClicked={toggleDropDown}
        secondaryClicked={clicked}
      />
      <div ref={wrapperRef}>
        {connect.show ? dropdown : null}
      </div>

      {/* <ConnectDropDown /> */}
    </CardBox>
  )
}

export const CreateCategory = ({ history, inputs, complete, changed, loading, close, create }) => {
  return (
    <CardBox
      width='600px'
      height='350px'
      justify='flex-start'
    >

      <CardHeader
        altBackground='true'
        fontSize='18px'
      >
         Create Job Category
        <Logo
          src={require('../../assets/images/close-line-alt.svg')}
          height='24px'
          width='24px'
          margin='0 8px'
          clicked={close}
        />
      </CardHeader>

      <Card.Container
        width='100%'
        height='70%'
        backgroundColor='transparent'
        boxShadow='none'
        borderRadius='0'
        margin='40px auto 0'
        justify='center'
        align='center'
      >
        <Main
          name='category'
          label='Job Category'
          placeholder='Create Category'
          changed={changed}
          value={inputs.category}
          width='290px'
          height='40px'
        />
        <Button
          content=' Create Category'
          width='290px'
          height='40px'
          loading={loading}
          clicked={create}
        />
      </Card.Container>
    </CardBox>
  )
}

export const EditCategory = ({ history, inputs, complete, changed, loading, close, create }) => {
  return (
    <CardBox
      width='600px'
      height='350px'
      justify='flex-start'
    >

      <CardHeader
        altBackground='true'
        fontSize='18px'
      >
         Edit Job Category
        <Logo
          src={require('../../assets/images/close-line-alt.svg')}
          height='24px'
          width='24px'
          margin='0 8px'
          clicked={close}
        />
      </CardHeader>

      <Card.Container
        width='100%'
        height='70%'
        backgroundColor='transparent'
        boxShadow='none'
        borderRadius='0'
        margin='40px auto 0'
        justify='center'
        align='center'
      >
        <Main
          name='category'
          label='Job Category'
          placeholder='Edit Category'
          changed={changed}
          value={inputs.category}
          width='290px'
          height='40px'
        />
        <Button
          content=' Save Category'
          width='290px'
          height='40px'
          loading={loading}
          clicked={create}
        />
      </Card.Container>
    </CardBox>
  )
}
export const DeleteCategory = ({ history, inputs, complete, changed, loading, close, create }) => {
  return (
    <CardBox
      width='600px'
      height='350px'
      justify='flex-start'
    >

      <CardHeader
        altBackground='true'
        fontSize='18px'
      >
         Edit Job Category
        <Logo
          src={require('../../assets/images/close-line-alt.svg')}
          height='24px'
          width='24px'
          margin='0 8px'
          clicked={close}
        />
      </CardHeader>

      <Card.Container
        width='100%'
        height='70%'
        backgroundColor='transparent'
        boxShadow='none'
        borderRadius='0'
        margin='40px auto 0'
        justify='center'
        align='center'
      >
        <Card.Info>
         Are you sure you want to delete { inputs.category.toUpperCase() || 'category'}
        </Card.Info>
        <Button
          content=' Delete Category'
          width='290px'
          height='40px'
          loading={loading}
          clicked={create}
        />
      </Card.Container>

    </CardBox>
  )
}

export default CardBox
