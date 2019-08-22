import React from 'react'
import styled from 'styled-components'
import * as Type from '../../theme/style/typeface'
import * as Form from '../../theme/style/Form'
import DatePicker from 'react-datepicker'
import { DatePickerImage, Logo } from '../Picture'
import 'react-datepicker/dist/react-datepicker.css'

const Pair = styled.div`
    display: flex;
    margin-top: .5rem;
`
const IMG = styled.img`
    margin-right: 1rem;
`
/**
 *
 */
const Input = ({ name, label, icon, alt, marginBot, ...props }) => {
  const Label = marginBot ? Form.NoMLabel : Form.Label
  return (
    <Label>
      <Type.Label> { label } </Type.Label> <br />
      <Pair>
        <IMG src={icon} alt={alt} />
        <Form.Input name={name} {...props} />
      </Pair >
    </Label>
  )
}

export const Main = ({ name, label, placeholder, type, value, changed, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      <Form.MainLabel >
        <Type.BoldLabel > { label } </Type.BoldLabel> <br />
      </Form.MainLabel>
      <Form.MainInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changed}
        {...props} />
    </Form.MainLabelContainer >
  )
}
export const MainAlt = ({
  name,
  label,
  changeLabel,
  placeholder,
  type,
  value,
  changed,
  toggle,
  ...props }) => {
  return (
    <Form.MainLabelContainerAlt {...props}>
      <Form.TwoComponentBox>
        <Form.MainLabel >
          <Type.BoldLabel > { label } </Type.BoldLabel> <br />
        </Form.MainLabel>
        <Form.MainLabel >
          <Type.GreenLabel onClick={toggle} {...props}> { changeLabel } </Type.GreenLabel> <br />
        </Form.MainLabel>
      </Form.TwoComponentBox>

      <Form.MainInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changed}
        {...props} />
    </Form.MainLabelContainerAlt>
  )
}
export const MainDuo = ({
  nameOne,
  nameTwo,
  valueOne,
  valueTwo,
  placeholderOne,
  placeholderTwo,
  labelOne,
  labelTwo,
  changed,
  ...props }) => {
  return (

    <Form.TwoComponentBox>
      <Main
        name={nameOne}
        label={labelOne}
        placeholder={placeholderOne}
        value={valueOne}
        changed={changed}
        {...props}
      />
      <Main
        name={nameTwo}
        label={labelTwo}
        placeholder={placeholderTwo}
        value={valueTwo}
        changed={changed}
        {...props} />
    </Form.TwoComponentBox>

  )
}

export const MainDuoAlt = ({
  password,
  confirmPassword,
  changed,
  changepassword,
  handleChangePassword,
  toggle,
  ...props }) => {
  let changeHolder
  let label
  let placeholder
  let show
  !changepassword ? changeHolder = 'Change' : changeHolder = 'Cancel'
  !changepassword ? label = 'Password' : label = 'New Password'
  !changepassword ? placeholder = '****************' : placeholder = 'Enter new password'
  !changepassword ? show = null : show = (<Main
    name='confirmPassword'
    label='Confirm Password'
    placeholder='Confirm Password'
    value={confirmPassword}
    changed={changed}
    {...props} />)
  return (

    <Form.AltBoxStacked>
      <MainAlt
        name='password'
        label={label}
        placeholder={placeholder}
        value={password}
        changeLabel={changeHolder}
        changed={changed}
        toggle={toggle}
        altColor={!changepassword}
        disabled={!changepassword}
        {...props}
      />
      { show }
    </Form.AltBoxStacked>
  )
}

export const MainTrios = ({
  nameOne,
  nameTwo,
  nameThree,
  valueOne,
  valueTwo,
  valueThree,
  placeholderOne,
  placeholderTwo,
  placeholderThree,
  labelOne,
  labelTwo,
  labelThree,
  changed,
  ...props }) => {
  return (

    <Form.TwoComponentBox>
      <Main
        name={nameOne}
        label={labelOne}
        placeholder={placeholderOne}
        value={valueOne}
        changed={changed}
        {...props}
      />
      <Main
        name={nameTwo}
        label={labelTwo}
        placeholder={placeholderTwo}
        value={valueTwo}
        changed={changed}
        {...props} />

      <Main
        name={nameThree}
        label={labelThree}
        placeholder={placeholderThree}
        value={valueThree}
        changed={changed}
        {...props} />
    </Form.TwoComponentBox>

  )
}
export const MainTriosAlt = ({
  nameOne,
  nameTwo,
  valueOne,
  valueTwo,
  password,
  confirmPassword,
  placeholderOne,
  placeholderTwo,
  labelOne,
  labelTwo,
  changepassword,
  changed,
  toggle,
  children,
  ...props }) => {
  return (
    <Form.UnderLinedBox>
      <Form.TwoComponentBox>
        <Main
          name={nameOne}
          label={labelOne}
          placeholder={placeholderOne}
          value={valueOne}
          changed={changed}
          {...props}
        />
        <Main
          name={nameTwo}
          label={labelTwo}
          placeholder={placeholderTwo}
          value={valueTwo}
          changed={changed}
          {...props} />

        <MainDuoAlt
          password={password}
          confirmPassword={confirmPassword}
          changed={changed}
          changepassword={changepassword}
          type='password'
          toggle={toggle}
          {...props}
        />
      </Form.TwoComponentBox>
      {children}
    </Form.UnderLinedBox>
  )
}
export const Select = ({ name, label, children, value, ...props }) => {
  return (
    <Form.MainLabelContainer >
      <Form.MainLabel >
        <Type.BoldLabel > { label } </Type.BoldLabel> <br />
      </Form.MainLabel>
      <Form.Select name={name} value={value} {...props}> { children } </Form.Select>
    </Form.MainLabelContainer >
  )
}
export const SelectAlt = ({ name, children, value, changed, ...props }) => {
  return (
    <Form.MainLabelContainerAlt {...props}>
      <Form.Select name={name} value={value} onChange={changed} {...props}> { children } </Form.Select>
    </Form.MainLabelContainerAlt>
  )
}

export const Text = ({ label, name, ...props }) => {
  return (
    <Form.MainLabelContainer >
      <Form.MainLabel >
        <Type.BoldLabel > { label } </Type.BoldLabel>
      </Form.MainLabel >
      <Form.TxtArea name={name} {...props} />
    </Form.MainLabelContainer >
  )
}
export const CheckBox = ({ label, name, type, ...props }) => {
  return (
    <Form.CheckBoxLabel className={props.labelClass}>
      <Form.MainLabel >
        <Type.BoldLabel > { label } </Type.BoldLabel>
      </Form.MainLabel >
      <Form.CheckBox name={name} type={type} {...props} />
      <span className='checkmark' />
    </Form.CheckBoxLabel >
  )
}

export const DuoPickDate = ({
  labelFrom,
  labelTo,
  changeFrom,
  changeTo,
  valueFrom,
  valueTo,
  direction,
  wrap,
  justify,
  disableToDatePicker,
  ...props }) => {
  return (
    <Form.CardsContainer
      direction={direction}
      flexWrap={wrap}
      width='100'
      {...props}
    >
      <Form.AltBox
        width='100'
      >
        <div className='label'> {labelFrom}</div>
        <Form.DatePickerContainer>
          <DatePickerImage />
          <DatePicker
            placeholderText='DD/MM/YYYY'
            className='datePicker'
            isClearable
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dateFormat='dd/MM/yyyy'
            maxDate={new Date()}
            selected={valueFrom}
            onChange={changeFrom}
            {...props}
          />
        </Form.DatePickerContainer>
      </Form.AltBox>
      <Form.AltBox
        width='100'
      >
        <div className='label'>{labelTo}</div>
        <Form.DatePickerContainer>
          <DatePickerImage />
          <DatePicker
            placeholderText='DD/MM/YYYY'
            className='datePicker'
            isClearable
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dateFormat='dd/MM/yyyy'
            maxDate={new Date()}
            selected={valueTo}
            onChange={changeTo}
            disabled={disableToDatePicker}
            {...props}
          />
        </Form.DatePickerContainer>
      </Form.AltBox>
    </Form.CardsContainer>

  )
}

export const SearchInput = ({ name, type, placeholder, value, changed, ...props }) => {
  return (
    <Form.AltBox>
      <Form.SearchInputContainer>
        <Logo src={require('../../assets/images/user-search.svg')}
          width='12px'
          height='12px'
        />
        <Form.SearchInput
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={changed}
          {...props}
        />
      </Form.SearchInputContainer>
    </Form.AltBox>
  )
}
export const SortInput = ({ name, type, placeholder, value, changed, cancel, showCancel, children, clicked, ...props }) => {
  return (
    <Form.AltBox >
      <Form.SortInputContainer onClick={clicked}>
        <Logo src={require('../../assets/images/filterslider.svg')}
          width='12px'
          height='12px'
        />
        <Form.SortInput
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={changed}
          {...props}
        >{placeholder}</Form.SortInput>

        <Logo src={require('../../assets/images/arrow-dropdown.svg')}
          width='16px'
          height='16px'
          margin='0 8px 0 auto'
        />

        {children}
      </Form.SortInputContainer>
      { showCancel ? <Logo src={require('../../assets/images/close-line.svg')}
        width='24px'
        height='24px'
        margin='0 8px 0 20px'
        clicked={cancel}
      /> : null }
    </Form.AltBox>

  )
}
export default Input
