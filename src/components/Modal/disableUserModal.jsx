import React from 'react'
import { Modal } from 'react-bootstrap'
import { DisableUser, ConfirmDisableUser } from '../Card'

const DisableUserModal = ({ open, inputs, history, loading, ...props }) => {
  return (
    <Modal id='centeredmodal' centered {...props}>
      <DisableUser
        inputs={inputs}
        openConfirm={open}
        loading={loading}
        close={props.onHide}
      />
    </Modal>
  )
}

export const ConfirmDisableUserModal = ({ inputs, history, loading, ...props }) => {
  return (
    <Modal id='centeredmodal' centered {...props}>
      <ConfirmDisableUser
        inputs={inputs}
        loading={loading}
        history={history}
        close={props.onHide}
      />
    </Modal>
  )
}
export default DisableUserModal
