import React from 'react'
import { Button } from 'react-bootstrap'
import bageBgImg from "../assets/images/bg.png";
const Badge = () => {
  return (
    <div className='text-center mt-4' style={{backgroundImage:`url(${bageBgImg})`, color:'white', padding:'40px 15px'}}>
        <h2>Create an Amazing Newspaper</h2>
        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <Button style={{background:"#D72050", border:"none", padding:'8px 30px', fontSize:'20px', fontWeight:'600'}}>Learn More</Button>
    </div>
  )
}

export default Badge