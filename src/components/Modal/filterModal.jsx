import React from 'react'
import { Modal } from 'react-bootstrap'
import { useSignUpForm } from '../Tools/FormHooks'
import { CardHeader } from '../../theme/style/typeface'
import { AltBox } from '../../theme/style/Form'
import { Logo } from '../Picture'
import Button from '../Button'
import { CheckBox, Select } from '../Input'
import swal from 'sweetalert'

const FilterModal = ({ categories, loading, handleFilterSearchInput, clicked, ...props }) => {
  // using react hook {useState} to manage state for the modal
  const handleFilterSumbit = (e, inputs) => {
    e.preventDefault()
    e.target.blur()
    let filterSearch = `'${inputs.category},${inputs.city},${inputs.averageRate},${inputs.skills}, ${inputs.jobsCompleted}'`
    if (inputs.category === undefined && inputs.city === undefined ) {
      return swal('You have to select Category and City', '',  'warning')
    }
    handleFilterSearchInput(filterSearch)
  }
  const { inputs, handleSubmit, handleChange } = useSignUpForm(handleFilterSumbit)

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
          <Select
            name='category'
            width='110px'
            height=' 32px'
            margin='0'
            value={inputs.category}
            changed={handleChange}
            label='Category'
            marTop='0'
            MainLabelContainerMargin='5px 10px 10px 15px'
          >
            <option hidden>Category</option>
            {categories && categories.length > 1 ? categories.map(category => (
              <option key={category._id} value={category.category}>{category.category}</option>
            )) : null}
          </Select>
          <Select
            name='averageRate'
            width='110px'
            height=' 32px'
            margin='0'
            value={inputs.averageRate}
            changed={handleChange}
            label='Star Rating'
            marTop='0'
            MainLabelContainerMargin='5px 10px 10px 15px'
          >
            <option hidden>Star Rating</option>
            <option value="">none</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </Select>
          <Select
            name='city'
            width='110px'
            height=' 32px'
            margin='0'
            value={inputs.city}
            changed={handleChange}
            label='Location'
            marTop='0'
            MainLabelContainerMargin='5px 10px 10px 15px'
          >
            <option hidden>City</option>
            <option value="">none</option>
            <option value='lagos'>Lagos, Nigeria</option>
            {/* <option value='lagos,nigeria'>Lagos, Nigeria</option> */}
          </Select>
          <Select
            name='skills'
            width='110px'
            height=' 32px'
            margin='0'
            value={inputs.skills}
            changed={handleChange}
            label='Skills'
            marTop='0'
            MainLabelContainerMargin='5px 10px 10px 15px'
          >
            <option hidden>Skills</option>
            <option value="">none</option>
            {/* <option value='html5'>HTML5</option>
            <option value='css3'>CSS3</option>
            <option value='javascript'>Javascript</option>
            <option value='bootstrap'>Bootstrap</option>
            <option value='react'>React</option> */}
          </Select>
        </AltBox>

      </Modal.Body>
      <Modal.Footer>
        <Button
          content='Apply'
          clicked={handleSubmit}
          width='120px'
          height='40px'
          loading={loading}
        />
      </Modal.Footer>
    </Modal>
  )
}

export default FilterModal
