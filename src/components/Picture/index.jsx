import React from 'react'
import styled from 'styled-components'

const LogoIMG = styled.img.attrs(props => ({
  src: props.src || require('../../assets/images/primeworklogo.svg'),
  width: props.width || '135px',
  height: props.height || '25px',
  margin: props.margin
}))`
width: ${props => props.width};
height: ${props => props.height};
margin: ${props => props.margin};
cursor: pointer;
`
const AdminIMG = styled.img.attrs(props => ({
  src: props.src,
  width: props.width || '40px',
  height: props.height || '40px',
  margin: props.margin
}))`
width: ${props => props.width};
height: ${props => props.height};
margin: ${props => props.margin};
cursor: pointer;
align-self: flex-start;
border-radius: ${props => props.borderRadius};
`
const UserIMG = styled.img.attrs(props => ({
  src: props.src,
  width: props.width || '48px',
  height: props.height || '48px',
  margin: props.margin
}))`
width: ${props => props.width};
height: ${props => props.height};
margin: ${props => props.margin};
cursor: pointer;
align-self: flex-start;
border-radius: 4px;

`
const DatePickerIMG = styled.img.attrs(props => ({
  src: props.src || require('../../assets/images/calendar-line.svg'),
  width: props.width || '16px',
  height: props.height || '16px',
  margin: props.margin
}))`
  width: ${props => props.width};
    height: ${props => props.height}
`
export const Logo = ({ clicked, ...props }) => <LogoIMG onClick={clicked} {...props} />
export const Admin = ({ ...props }) => <AdminIMG {...props} />
export const User = ({ image, ...props }) => <UserIMG src={ image ||require('../../assets/images/default_user.jpg')}{...props} />
export const DatePickerImage = ({ ...props }) => <DatePickerIMG {...props} />
