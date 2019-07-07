import React from 'react'
import { TableBody, Text, DuoText, DuoTextAlt, ProfileAndText, Status, EditText, DeleteText } from './TableParts'

export const TransactionRow = () => (
  <TableBody>
    <td>
      <Text
        text='10/04/2019'
      />
    </td>
    <td>
      <DuoText
        text='Job Title Goes Here'
        subtext='Job Category Goes Here'
      />
    </td>
    <td>
      <ProfileAndText
        text='Damilola Sasha'
        subtext='Frontend Developer'
        img={require('../../assets/images/profile-withface.png')}
      />
    </td>
    <td>
      <DuoText
        altText='true'
        text='200000'
        subtext='Milestone Payment'
      />
    </td>
    <td>
      <ProfileAndText
        text='Damilola Sasha'
        subtext='Frontend Developer'
        img={require('../../assets/images/profile-withface.png')}
      />
    </td>
  </TableBody>
)

export const JobRow = () => (
  <TableBody>
    <td>
      <ProfileAndText
        text='Damilola Sasha'
        subtext='Frontend Developer'
        img={require('../../assets/images/profile-withface.png')}
      />
      {/* <Text
        text='10/04/2019'
      /> */}
    </td>
    <td>
      <DuoText
        text='Job Title Goes Here'
        subtext='Job Category Goes Here'
      />
    </td>
    <td>
      <DuoText
        text='10-06-2019'
        subtext='In 6 Days'
      />
    </td>
    <td>
      <DuoTextAlt
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
      />
    </td>
    <td>
      <Status
        accepted
        unaccepted={false}
      />
    </td>
    <td>
      <ProfileAndText
        text='Damilola Sasha'
        subtext='Frontend Developer'
        img={require('../../assets/images/profile-withface.png')}
      />
    </td>
    <td>
      <DuoText
        altText='true'
        altSubText
        text='200000'
        subtext='in Progress'
      />
    </td>
  </TableBody>
)
export const CategoryRow = ({ category, handleShowEditCategory, handleShowDeleteCategory }) => (
  <TableBody>
    <td>
      <Text
        text={category}
      />
    </td>
    <td
      onClick={handleShowEditCategory}
    >
      <EditText
        text='Job Title Goes Here'
      />
    </td>
    <td onClick={handleShowDeleteCategory}>
      <DeleteText
        text='10-06-2019'
      />
    </td>
  </TableBody>
)
