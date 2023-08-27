import React from 'react'
import logo from "../../../assets/images/logo.png";
import moment from 'moment/moment';
const Header = () => {
  return (
    <div className='text-center mt-5'>
        <img src={logo} alt="" />
        <p className='mt-3'>Journalism Without Fear or Favour</p>
        <p><b>{moment().format(`dddd, `)}</b>{moment().format(`MMMM DD, YYYY`)}</p>
    </div>
  )
}

export default Header