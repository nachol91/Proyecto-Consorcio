import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRouteInquilino({children, authInquilinos}) {
  
  if(authInquilinos){
    return children
  }else{
    return(
      <Navigate to = '/'/>
    )
  }
  
  return (
    <div>ProtectedRouteInquilino</div>
  )
}
  
  
  
  
