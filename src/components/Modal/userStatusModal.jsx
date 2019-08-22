import React from 'react'
import { Modal } from 'react-bootstrap'
import { DisableUser, ConfirmDisableUser, EnableUser, ConfirmEnableUser, DisableUserMessage } from '../Card'

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
export const DisableUserMessageModal = ({ inputs, history, loading, clicked, handleDisableInput, ...props }) => {
  return (
    <Modal id='centeredmodal' centered {...props}>
      <DisableUserMessage
        inputs={inputs}
        loading={loading}
        history={history}
        close={props.onHide}
        handleDisableInput={handleDisableInput}
        clicked={clicked}
      />
    </Modal>
  )
}
export const EnableUserModal = ({ open, inputs, history, loading, ...props }) => {
  return (
    <Modal id='centeredmodal' centered {...props}>
      <EnableUser
        inputs={inputs}
        openConfirm={open}
        loading={loading}
        close={props.onHide}
      />
    </Modal>
  )
}

export const ConfirmEnableUserModal = ({ inputs, history, loading, ...props }) => {
  return (
    <Modal id='centeredmodal' centered {...props}>
      <ConfirmEnableUser
        inputs={inputs}
        loading={loading}
        history={history}
        close={props.onHide}
      />
    </Modal>
  )
}


export default DisableUserModal
