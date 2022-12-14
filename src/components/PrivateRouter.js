import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({ user, children }) => {
  if (!user.isConnected) {
    return <Navigate to="/login" replace />
    // si user not connect yemchi l login sinon yemchi lel profil
  }
  return children
}


export default PrivateRouter
