import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        fetch('https://express-server-billalbelal621-gmailcom.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log('Error occured ====> ', error.message))
    }, [])
  return (
    <div>
        {
            categories.map(category => <p  key={category.id}><NavLink to={`category/${category.id}`}>{category.name}</NavLink></p>)
        }
    </div>
  )
}

export default Categories