import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import * as PageTable from './styles'
import { TableHead } from './TableParts'
import { TransactionList } from './TableList'
import { CardHeader as Header } from '../../theme/style/typeface'
import Pagination from '../Tools/Pagination'

export const TransactionTable = ({ title, setPagination, data }) => {
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
            {/* <TableBody>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
            </TableBody> */}
          </tbody>

        </Table>
        { setPagination ? <Pagination /> : null }
      </PageTable.Container>
    </PageTable.Wrapper>
  )
}

export default Table
