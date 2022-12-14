import React from 'react'
import { Navigate } from 'react-router-dom'

const ForceRedirect = ({ user, children }) => {

  if (user.isConnected) {
    return <Navigate to="/" replace />
    // ForceRedirect si coneccted yhezek lel profile sinon tarja3 l login (si vous étes connecter vous n'etes pas besoin bch todhherlek page register w login mara o5ra)
  }
  return children
}

export default ForceRedirect
