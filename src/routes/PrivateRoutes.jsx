import React from 'react'
import { useContext } from 'react'
import { userContext } from '../providers/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(userContext);
  const location = useLocation();
  const navigate = useNavigate()
  console.log("=======> inside private route", location)

  if(loading){
    return <div className='d-flex justify-content-center mt-5'><Spinner animation="border" variant="primary" /></div>
  }


  if(!user){
    return <Navigate to="/login" state={{from:location.pathname}}></Navigate>
  }

  return children
}

export default PrivateRoutes