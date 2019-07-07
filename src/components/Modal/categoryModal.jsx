import React from 'react'
import { Modal } from 'react-bootstrap'
import { CreateCategory, EditCategory, DeleteCategory } from '../Card'


const CreateCategoryModal = ({ clicked, inputs, history, changed, create, loading, ...props }) => {
  // using react hook {useState} to manage state for the modal
  return (
    <Modal id='centeredmodal' centered {...props}>
      <CreateCategory
        changed={changed}
        create={create}
        inputs={inputs}
        history={history}
        loading={loading}
        close={clicked}
      />
    </Modal>
  )
}
export const EditCategoryModal = ({ clicked, inputs, history, changed, create, loading, ...props }) => {
  // using react hook {useState} to manage state for the modal
  return (
    <Modal id='centeredmodal' centered {...props}>
      <EditCategory
        changed={changed}
        create={create}
        inputs={inputs}
        history={history}
        loading={loading}
        close={clicked}
      />
    </Modal>
  )
}

export const DeleteCategoryModal = ({ clicked, inputs, history, changed, create, loading, ...props }) => {
  // using react hook {useState} to manage state for the modal
  return (
    <Modal id='centeredmodal' centered {...props}>
      <DeleteCategory
        changed={changed}
        create={create}
        inputs={inputs}
        history={history}
        loading={loading}
        close={clicked}
      />
    </Modal>
  )
}
export default CreateCategoryModal
