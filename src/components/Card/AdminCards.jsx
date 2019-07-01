import React from 'react'
import CardBox from './Cards'
import * as Card from './styles'
import { CardHeader, Title } from '../../theme/style/typeface'
import { Logo } from '../Picture'
import { Main, MainDuo, MainTrios, MainTriosAlt } from '../Input'
import Button from '../Button'

export const CreateAdminForm = ({ history, changed, inputs, loading, submit }) => {
  return (
    <CardBox
      width='800px'
      height='600px'
      justify='flex-start'
    >
      <CardHeader
        altBackground='true'
        fontSize='18px'
        onClick={() => history.push('/dashboard')}>
        <div>
          <Logo
            src={require('../../assets/images/arrow-left.svg')}
            height='24px'
            width='24px'
            margin='0 8px'
          />   Create New Admin
        </div>
      </CardHeader>

      <Card.Container
        width='300px'
        height='90%'
        backgroundColor='transparent'
        boxShadow='none'
        borderRadius='0'
        margin='0 auto'
        justify='flex-start'
        align='center'
      >
        <Main
          label='Full name'
          placeholder='John Doe'
          width='290px'
          marTop='24px'
          name='name'
          value={inputs.name}
          changed={changed}
        />
        <MainDuo
          labelOne='State'
          labelTwo='Town'
          placeholderOne='Lagos'
          placeholderTwo='Ikeja'
          width='137px'
          marTop='24px'
          nameOne='state'
          nameTwo='town'
          valueOne={inputs.state}
          valueTwo={inputs.town}
          changed={changed}
        />
        <Main
          label='Email address'
          placeholder='john_doe@outlook.com'
          type='email'
          width='290px'
          marTop='24px'
          name='email'
          value={inputs.email}
          changed={changed}
        />
        <Main
          label='Password'
          placeholder='****************'
          type='password'
          width='290px'
          marTop='24px'
          name='password'
          value={inputs.password}
          changed={changed}
        />

        <Button
          content='Continue'
          width='290px'
          loading={loading}
          clicked={submit}
        />
      </Card.Container>
    </CardBox>
  )
}
export const ConfirmAdmin = ({ history, location }) => {
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
          New Admin Created
      </CardHeader>

      <Card.Container
        width='350px'
        height='250px'
        backgroundColor='transparent'
        boxShadow='none'
        borderRadius='0'
        margin='40px auto 0'
        justify='center'
        align='center'
      >
        <Logo
          src={require('../../assets/images/admincreated.svg')}
          height='64px'
          width='64px'
          margin='0 0 24px'
        />
        <Card.Info>
        An account has been created for { location.state.name || 'John Doe'} and
        a profile log in link has been sent to { location.state.email || 'john_doe@outlook.com'}
        </Card.Info>
        <Button
          content='Ok'
          width='290px'
          clicked={() => history.push('/dashboard')}
        />
      </Card.Container>
    </CardBox>
  )
}

export const EditAdmin = ({ history, inputs, changed, toggle, loading, submit }) => {
  return (
    <CardBox
      width='100%'
      height='100%'
      justify='flex-start'
      align='flex-start'
      padding='24px 40px'

    >
      <Card.Container
        width='90%'
        height='50%'
        backgroundColor='transparent'
        boxShadow='none'
        borderRadius='0'
        justify='flex-start'
        align='flex-start'
        margin='32px 0 32px'
      >
        <Title>
          PERSONAL INFORMATION
        </Title>
        <MainTriosAlt
          nameOne='fullName'
          nameTwo='email'
          valueOne={inputs.fullName}
          valueTwo={inputs.email}
          password={inputs.password}
          confirmPassword={inputs.confirmPassword}
          changepassword={inputs.changepassword}
          placeholderOne={inputs.fullName}
          placeholderTwo={inputs.email}
          labelOne='Full name'
          labelTwo='Email address'
          changed={changed}
          toggle={toggle}
          width='300px'
        />

      </Card.Container>
      <Card.Container
        width='90%'
        height='50%'
        backgroundColor='transparent'
        boxShadow='none'
        borderRadius='0'
        justify='flex-start'
        align='flex-start'
        margin='32px 0 32px'
      >
        <Title>
          ADDRESS
        </Title>
        <MainTrios
          nameOne='state'
          nameTwo='lga'
          nameThree='homeAddress'
          valueOne={inputs.state}
          valueTwo={inputs.lga}
          valueThree={inputs.homeAddress}
          placeholderOne='Lagos'
          placeholderTwo='Alimosho'
          placeholderThree='Alimosho'
          labelOne='State'
          labelTwo='Local Government Area'
          labelThree='Home Address'
          changed={changed}
          width='300px'
        />

      </Card.Container>
      <Button
        alt='true'
        content='Save Changes'
        width='175px'
        margin='40px 0'
        loading={loading}
        clicked={submit}
      />
    </CardBox>
  )
}
