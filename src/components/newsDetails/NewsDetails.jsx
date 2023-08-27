import React from 'react'
import img from "../../assets/images/child.png";
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const NewsDetails = () => {
    const id = useParams().id;
    const navigate = useNavigate()
    
    const [newsDetails, setNewsDetails] = useState({});

    useEffect(()=>{
        fetch(`https://express-server-billalbelal621-gmailcom.vercel.app/news/${id}`)
        .then(res => res.json())
        .then(news => setNewsDetails(news))
        .catch(error => console.log("Error occured=====> ", error.message))
    }, [])

    const handleNavigation = ()=>{
      return navigate(-1)
    }
  return (
    <div className='mb-5'>
        <h3>Drgon News</h3>
        <img className='my-3 w-100' src={newsDetails.image_url} alt="Child" />
        <h5>{newsDetails.title}</h5>
        <p>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2. Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.</p>
        <Button onClick={handleNavigation} style={{background:'#D72050', color:'white', border:'none'}}> <FaArrowLeft></FaArrowLeft> All news in this category</Button>
    </div>
  )
}

export default NewsDetails