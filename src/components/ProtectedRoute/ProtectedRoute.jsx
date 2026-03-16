import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const IsLoggedIn = !!localStorage.getItem("access")
     if(!IsLoggedIn){
        return <Navigate to={'/login'} replace/>
     }
  return children
}

export default ProtectedRoute