import React from 'react'
import { TransactionRow } from './TableRow'

export const TransactionList = ({ data }) => data.map(data => (
  <TransactionRow key={Math.random()} {...data} />
))




