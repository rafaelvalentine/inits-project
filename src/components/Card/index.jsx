import React from 'react'
import { AnalyticsCard } from './Cards'
import { CreateAdminForm, ConfirmAdmin, EditAdmin } from './AdminCards'


export const ListAnalyticsCards = ({ analytics }) => analytics.map(analytic => (
  <AnalyticsCard key={analytic.id} {...analytic} />
))
  
 export { CreateAdminForm, ConfirmAdmin, EditAdmin }



