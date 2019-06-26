import React from 'react'
import Navbar from '../../container/Navbar'
import { ConfirmAdmin } from '../../components/Card'
import * as Page from '../../theme/style/styles'
/**
 * this component confirms a new Admin as been created
 */
const index = props => {
  return (
    <Page.Wrapper>
      <Navbar />
      <Page.SubWrapper>
        <ConfirmAdmin history={props.history} location={props.location} />
      </Page.SubWrapper>
    </Page.Wrapper>
  )
}
export default index
