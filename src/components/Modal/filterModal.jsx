import React from 'react'
import { Modal } from 'react-bootstrap'
import { useSignUpForm } from '../Tools/FormHooks'
import { CardHeader } from '../../theme/style/typeface'
import { TwoComponentBox, AltBox } from '../../theme/style/Form'
import { Logo } from '../Picture'
import Button from '../Button'
import { CheckBox, SelectAlt } from '../Input'

const FilterModal = ({ clicked, ...props }) => {
  // using react hook {useState} to manage state for the modal
  const { inputs, handleSubmit, handleChange } = useSignUpForm()
  return (
    <Modal id='filtermodal' {...props}>
      {/* <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header> */}
      <CardHeader
        padding='8px 0 0'
      >
        {/* <div></div> */}
        <Logo src={require('../../assets/images/close-line.svg')}
          weight='16px'
          height='16px'
          margin='0 0 0 443px'
          clicked={clicked}
        />
      </CardHeader>
      <Modal.Body>
        <AltBox
          flexWrap='wrap'
        >
          <CheckBox
            type='checkbox'
            label='Name (Aa - Zz)'
          />
          <SelectAlt
            width='110px'
            height=' 32px'
            margin='0 12px'
          >
            <option hidden>Category</option>
          </SelectAlt>
          <SelectAlt
            width='110px'
            height=' 32px'
            margin='0 12px'
          >
            <option hidden>Star Rating</option>
          </SelectAlt>
          <SelectAlt
            width='110px'
            height=' 32px'
            margin='0 12px'
          >
            <option hidden>City</option>
          </SelectAlt>
          <SelectAlt
            width='110px'
            height=' 32px'
            margin='0 12px'
          >
            <option hidden>Skills</option>
          </SelectAlt>
          <SelectAlt
            width='120px'
            height=' 32px'
            margin='0 12px'
          >
            <option hidden>Jobs Completed</option>
          </SelectAlt>

        </AltBox>

      </Modal.Body>
      <Modal.Footer>
        <Button
          content='Apply'
          clicked={clicked}
          width='120px'
          height='40px'
        />
      </Modal.Footer>
    </Modal>
  )
}

export default FilterModal
