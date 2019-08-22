import React from 'react'
import { AnalyticsCard, CreateCategory, EditCategory, DeleteCategory } from './Cards'
import { CreateAdminForm, ConfirmAdmin, EditAdmin, CreateUserForm, ConfirmUser, DisableUser, ConfirmDisableUser, EnableUser, ConfirmEnableUser, DisableUserMessage } from './AdminCards'

export const ListAnalyticsCards = ({ analytics, history }) => analytics.map(analytic => (
  <AnalyticsCard onClick={()=> history.push(`/${analytic.location}`)} key={analytic.id} {...analytic} />
))

export { CreateAdminForm,
  ConfirmAdmin,
  EditAdmin,
  CreateUserForm,
  ConfirmUser,
  DisableUser,
  ConfirmDisableUser,
  EnableUser,
  ConfirmEnableUser,
  CreateCategory,
  EditCategory,
  DeleteCategory,
  DisableUserMessage }
