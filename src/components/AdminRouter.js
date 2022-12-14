import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminRouter = ({ user, children }) => {
  if (!user.isConnected) {
    return <Navigate to="/login" replace />
    // si user not connect yemchi l login sinon yemchi lel profil
  } else {
    if (user.role !== "ADMIN") {
      return <Navigate to="/noaccess" replace />

    }
  }
  return children
}


export default AdminRouter
