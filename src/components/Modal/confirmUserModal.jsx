import React from 'react'
import { Modal } from 'react-bootstrap'
import { ConfirmUser } from '../Card'
const ConfirmUserModal = ({ clicked, inputs, history, ...props }) => {
  // using react hook {useState} to manage state for the modal
  return (
    <Modal id='centeredmodal' centered {...props}>
      <ConfirmUser
        inputs={inputs}
        history={history}
        close={clicked}
      />
    </Modal>
  )
}

export default ConfirmUserModal
