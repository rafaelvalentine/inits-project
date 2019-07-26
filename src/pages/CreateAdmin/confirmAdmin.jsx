import React from 'react'
import Navbar from '../../container/Navbar'
import { ConfirmAdmin } from '../../components/Card'
import * as Page from '../../theme/style/styles'
import { Helmet } from 'react-helmet'
/**
 * this component confirms a new Admin as been created
 */
const index = props => {
  return (
    <Page.Wrapper>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Confirm Admin || Primework Admin</title>
          <link rel='shortcut icon' href={require('../../assets/images/primeworkfavicon.jpeg')} type='image/x-icon' />
        </Helmet>
      <Navbar />
      <Page.SubWrapper>
        <ConfirmAdmin history={props.history} location={props.location} />
      </Page.SubWrapper>
    </Page.Wrapper>
  )
}
export default index
