import React from 'react'
import { Button } from 'react-bootstrap'
import {FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import QZones from '../../QZones'
import Badge from '../../Badge'
import { useContext } from 'react'
import { userContext } from '../../../providers/AuthProvider'
const RightNavBar = () => {
  const {user, signInWithGoogle, signInWithGithub} = useContext(userContext)
  const handleLoginWithGoogle = ()=>{
    signInWithGoogle()
    .then(loggedUser =>{
      const user = loggedUser.user;
      console.log("Successfully signed in by google ======> ",user)
    })
    .catch(error =>{
      console.log("Error occured with sign in with google ======> ", error.message)
    })
  }

  const handleLoginWithGithub = ()=>{
    signInWithGithub()
    .then(currentUser => {
      const user = currentUser.user;
      console.log("Successfully loged in by github ==> ", user)
    })
    .catch(error => console.log("Log in with github failed ==> ", error.message))
  }
  return (
    <div>
        {!user && <div>
        <h5>Login With</h5>
        <Button onClick={handleLoginWithGoogle} style={{background:'white', color:'dodgerblue', marginBottom:'5px'}}> <FaGoogle></FaGoogle> Login with Google</Button>
        <Button onClick={handleLoginWithGithub} style={{background:'white', color:'black'}}> <FaGithub></FaGithub> Login with Github</Button>
        </div>}
        <h5 className='mt-5'>Find Us On</h5>
        <div>
            <p> <FaFacebookF></FaFacebookF> Facebook</p>
            <p> <FaTwitter></FaTwitter> Twitter</p>
            <p> <FaInstagram></FaInstagram> Instagram</p>
        </div>
        <QZones></QZones>
        <Badge></Badge>
    </div>
  )
}

export default RightNavBar