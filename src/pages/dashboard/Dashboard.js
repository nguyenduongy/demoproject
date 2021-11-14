import React, { lazy, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const WidgetsDropdown = lazy(() => import('../../views/widgets/WidgetsDropdown.js'))
const Dashboard = () => {
  const history = useHistory()

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (!token) {
      history.push('/login')
    }
  })

  return (
    <>
      <WidgetsDropdown />
    </>
  )
}

export default Dashboard
