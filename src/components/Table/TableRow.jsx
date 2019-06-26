import React from 'react'
import { TableBody, Text, DuoText, ProfileAndText } from './TableParts'

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

