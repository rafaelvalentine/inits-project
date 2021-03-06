import React from 'react'
import { TransactionRow, JobRow, CategoryRow } from './TableRow'

export const TransactionList = ({ data }) => data.map(data => (
  <TransactionRow key={data.jobInfo._id || Math.random()} {...data} />
))

export const JobList = ({ data }) => data.map(data => (
  <JobRow key={`${data.jobInfo._id}${Math.random()}` || Math.random()} {...data} />
))

export const CategoryList = ({ data, handleShowEditCategory, handleShowDeleteCategory }) => data.map(data => (
  <CategoryRow key={data._id}
    handleShowEditCategory={() => handleShowEditCategory(data._id, data.category)} handleShowDeleteCategory={() => handleShowDeleteCategory(data._id, data.category)} {...data} />
))
