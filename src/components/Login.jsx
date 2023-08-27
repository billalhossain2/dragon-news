import React, { useRef } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../providers/AuthProvider'
import { useState } from 'react'
const Login = () => {
  const {user, setUser, signUserWithPwd, resetUserPassword, verified, setVerified} = useContext(userContext)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const from = useLocation()?.state?.from;
  const navigate = useNavigate()
  console.log("From inside login page ========> ", from)

  const handleLowinWithPwdAndEmail = (ev)=>{
    ev.preventDefault()
    const form = ev.target;
    const email = form.email.value;
    const password = form.password.value;

    //validate empty fields
    if(!email || !password){
      return setError("Please provide both email and password")
    }

    //sign in
    signUserWithPwd(email, password)
    .then(()=>{
      console.log('Successfully logged in');
      if(from){
        navigate(from)
      }else{
        navigate("/")
      }
      setSuccess("Login successful")
    })
    .catch(error => {
      console.log("Error occured with pwd and email login ", error.message);
      setError(error.message)
    })
  }

//pwd=====> billalHossain76
  const emailRef = useRef();
  const pwdRef = useRef();
  const handleForgotPassword = ()=>{
    const email = emailRef.current.value;
    const pwd = pwdRef.current.value;
    if(!email || !pwd){
      return setError("Please give both email and password.")
    }
    resetUserPassword(email)
    .then(()=>alert('Password reset email sent. Please check your email.'))
    .catch(error => console.log('Sending reset email failed==> ', error.message))
  }
  return (
    <div style={{background:'#F3F3F3', width:'30%', margin:'auto', padding:'20px 50px'}}>
      <h3 className='text-center mt-5 mb-5'>Login your account</h3>
      <Form style={{width:'100%'}} onSubmit={handleLowinWithPwdAndEmail}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" name="email" ref={emailRef}/>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" name="password" ref={pwdRef}/>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
          <Form.Label> Forgot password ? <Link onClick={handleForgotPassword} style={{color:'#F75B5F'}}>Reset</Link> </Form.Label>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Form.Check label="Remember me" />
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
          <Button style={{background:"#403F3F", color:"#fff", border:"none", width:"100%"}} type="submit">Sign in</Button>
      </Form.Group>
      <div style={{color:'red'}}>
        <b>{error}</b>
      </div>
      <div style={{color:'green'}}>
        <b>{success}</b>
      </div>
      <label>Dont’t Have An Account ? <Link to="/register" style={{color:'#F75B5F'}}>Register</Link> </label>
    </Form>
    </div>
  )
}

export default Login