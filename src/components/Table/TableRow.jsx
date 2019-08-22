import React from 'react'
import { TableBody, Text, DuoText, DuoTextAlt, ProfileAndText, Status, EditText, DeleteText, MileStoneList } from './TableParts'
import moment from 'moment'

export const TransactionRow = ({ date, jobInfo, paidBy, paidTo, amount }) => {
  let paidByName
  if (paidBy.freelancer.firstName && paidBy.freelancer.lastName) {
    paidByName = `${paidBy.freelancer.firstName} ${paidBy.freelancer.lastName}`
  }
  if (paidBy.organization.organizationName) {
    paidByName = paidBy.organization.organizationName
  }
  return (
    <TableBody>
      <td>
        <Text
          text={moment(date).format('DD/MM/YYYY')}
        />
      </td>
      <td>
        <DuoText
          text={jobInfo.jobTitle}
          subtext={jobInfo.jobCategory}
        />
      </td>
      <td>
        <ProfileAndText
          text={paidByName}
          subtext={paidBy.type}
          img={paidBy.organization.organizationLogoUrl || require('../../assets/images/primework_purple.png')}
        />
      </td>
      <td>
        <DuoText
          altText='true'
          text={amount}
          subtext='Milestone Payment'
        />
      </td>
      <td>
        <ProfileAndText
          text={`${paidTo.freelancer.firstName} ${paidTo.freelancer.lastName}`}
          subtext={paidTo.type}
          img={paidTo.freelancer.profileImageUrl}
        />
      </td>
    </TableBody>
  )
}

export const JobRow = ({ jobInfo, creator, freelancer, milestones, assigned, completed, budget, ...props }) => (
  <TableBody>
    <td>
      <ProfileAndText
        text={creator.organization.organizationName || 'Damilola Sasha'}
        subtext={creator.type || 'Frontend Developer'}
        img={creator.organization.organizationLogoUrl || require('../../assets/images/primework_purple.png')}
      />
    </td>
    <td>
      <DuoText
        text={jobInfo.jobTitle || 'Job Title Goes Here'}
        subtext={jobInfo.jobCategory || 'Job Category Goes Here'}
      />
    </td>
    <td>
      <DuoText
        text={moment(new Date(jobInfo.deadLine)).format('DD/MM/YYYY') || '10-06-2019'}
        subtext={moment(new Date(jobInfo.deadLine), 'MMDDYYYY').fromNow() || 'In 6 Days'}
      />
    </td>
    <td>
      <MileStoneList milestones={milestones} />
      {/* <DuoTextAlt
        text={milestones[0].milestone || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '}
      /> */}
    </td>
    <td>
      <Status
        compeleted={completed}
        accepted={assigned}
      />
    </td>
    <td>
      <ProfileAndText
        text={`${freelancer.freelancer.firstName || 'jon'} ${freelancer.freelancer.lastName || 'snow'}` || 'Damilola Sasha'}
        subtext={freelancer.type || 'Frontend Developer'}
        img={freelancer.freelancer.profileImageUrl}
      />
    </td>
    <td>
      <DuoText
        altText='true'
        altSubText
        text={budget || '0'}
        subtext={completed ? 'Complete' : 'In Progress'}
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
