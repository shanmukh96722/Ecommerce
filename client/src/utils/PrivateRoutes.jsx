import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const PrivateRoutes = () => {
  const auth = window.localStorage.getItem("isLoggedin")

  return (
    auth ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes
