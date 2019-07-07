import React from 'react'
import { AnalyticsCard, CreateCategory, EditCategory, DeleteCategory } from './Cards'
import { CreateAdminForm, ConfirmAdmin, EditAdmin, CreateUserForm, ConfirmUser, DisableUser, ConfirmDisableUser, EnableUser, ConfirmEnableUser } from './AdminCards'

export const ListAnalyticsCards = ({ analytics }) => analytics.map(analytic => (
  <AnalyticsCard key={analytic.id} {...analytic} />
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
  DeleteCategory }
