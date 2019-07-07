import React, { useState, useEffect, useRef } from 'react'
import { Table } from 'react-bootstrap'
import * as PageTable from './styles'
import { TableHead } from './TableParts'
import { TransactionList, JobList, CategoryList } from './TableList'
import { CardHeader as Header } from '../../theme/style/typeface'
import Pagination from '../Tools/Pagination'
import { SortInput } from '../Input'
import { TransactionDropDown } from '../DropDown'

export const DashboardTable = ({ title, setPagination, data }) => {
  let header
  if (title) {
    header = (
      <Header>
        <p>{title}</p>
      </Header>
    )
  }
  const newData = data.slice(0, 10)
  return (
    <PageTable.Wrapper>
      <PageTable.Container>
        {header}
        <Table id='myTable'>
          <TableHead>
            <th>date</th>
            <th>job info</th>
            <th>paid by</th>
            <th>amount</th>
            <th>paid to</th>
          </TableHead>
          <tbody>
            <TransactionList data={newData} />
          </tbody>

        </Table>
        { setPagination ? <Pagination /> : null }
      </PageTable.Container>
    </PageTable.Wrapper>
  )
}

export const TransactionTable = ({
  title,
  data,
  pageInfo,
  setPagination,
  allUsers,
  pageUsers,
  newindexOfFirstUser,
  handlePagnationUp,
  handlePagnationDown,
  handleDataRange,
  pageNumbers,
  selectedPage
}) => {
  /**
   * here i am using useState to toggle the dropdown
   */
  const [dropDown, setDropDown] = useState({})

  const toggleDropDown = () => {
    if (dropDown.show) {
      return setDropDown({ show: false })
    }
    return setDropDown({ show: true })
  }
  let dropdown
  if (dropDown.show) {
    dropdown = <TransactionDropDown />
  }
  /**
 * Hook that alerts clicks outside of the passed ref
 */
  function useOutsideAlerter (ref) {
  /**
   * Alert if clicked on outside of element
   */
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        return setDropDown({ show: false })
      }
    }

    useEffect(() => {
    // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
      // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    })
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  let header
  if (title) {
    header = (
      <Header>
        <p>{title}</p>
        <div style={{ marginLeft: 'auto', marginRight: '87px' }} ref={wrapperRef}>
          <SortInput
            placeholder='Sort By'
            value={pageInfo.sortByValue}
            clicked={toggleDropDown}
          >
            { dropdown }
          </SortInput>
        </div>
      </Header>
    )
  }
  return (
    <PageTable.Wrapper>
      <PageTable.Container>
        {header}
        <Table id='myTable'>
          <TableHead>
            <th>date</th>
            <th>job info</th>
            <th>paid by</th>
            <th>amount</th>
            <th>paid to</th>
          </TableHead>
          <tbody>
            <TransactionList data={data} />
          </tbody>

        </Table>
        { setPagination ? <Pagination
          data={pageInfo}
          allUsers={allUsers}
          pageUsers={pageUsers}
          newindexOfFirstUser={newindexOfFirstUser}
          handlePagnationUp={handlePagnationUp}
          handlePagnationDown={handlePagnationDown}
          handleDataRange={handleDataRange}
          pageNumbers={pageNumbers}
          selectedPage={selectedPage}
          pageLimit={pageInfo.pageLimit}
          upperPageBound={pageInfo.upperPageBound}
          lowerPageBound={pageInfo.lowerPageBound}
        /> : null }
      </PageTable.Container>
    </PageTable.Wrapper>
  )
}

export const JobsTable = ({
  data,
  pageInfo,
  setPagination,
  allUsers,
  pageUsers,
  newindexOfFirstUser,
  handlePagnationUp,
  handlePagnationDown,
  handleDataRange,
  pageNumbers,
  selectedPage

}) => {
  return (
    <PageTable.Wrapper
      padding='0'>
      <PageTable.Container>
        <Table id='myTable'>
          <TableHead >
            <th>creator</th>
            <th>job info</th>
            <th>deadline</th>
            <th>milestones</th>
            <th>status</th>
            <th>freelancer</th>
            <th>amount</th>
          </TableHead>
          <tbody>
            <JobList data={data} />
          </tbody>

        </Table>
        { setPagination
          ? <Pagination
            data={pageInfo}
            allUsers={allUsers}
            pageUsers={pageUsers}
            newindexOfFirstUser={newindexOfFirstUser}
            handlePagnationUp={handlePagnationUp}
            handlePagnationDown={handlePagnationDown}
            handleDataRange={handleDataRange}
            pageNumbers={pageNumbers}
            selectedPage={selectedPage}
            pageLimit={pageInfo.pageLimit}
            upperPageBound={pageInfo.upperPageBound}
            lowerPageBound={pageInfo.lowerPageBound}
          />
          : null }
      </PageTable.Container>
    </PageTable.Wrapper>
  )
}
export const CategoryTable = ({ title, setPagination, data, handleShowEditCategory, handleShowDeleteCategory }) => {
  let header
  if (title) {
    header = (
      <Header>
        <p>{title}</p>
      </Header>
    )
  }

  return (
    <PageTable.Wrapper
      padding='0'>
      <PageTable.Container>
        {header}
        <Table id='myTable'>
          <TableHead >
            <th>Job Category</th>
            <th>Actions</th>
          </TableHead>
          <tbody>
            <CategoryList data={data}
              handleShowEditCategory={handleShowEditCategory}
              handleShowDeleteCategory={handleShowDeleteCategory}
            />
          </tbody>

        </Table>
        { setPagination ? <Pagination /> : null }
      </PageTable.Container>
    </PageTable.Wrapper>
  )
}
export default Table
