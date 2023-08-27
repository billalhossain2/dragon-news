import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { useLoaderData, useParams } from 'react-router-dom'
const NewsCards = () => {

  const news = useLoaderData()
  const {id} = useParams();

  const [categories, setCategories] = useState([]);
  if(!id){
    useEffect(()=>{
      setCategories(news)
    }, [])
  }else{
    useEffect(()=>{
      fetch(`https://express-server-billalbelal621-gmailcom.vercel.app/categories/${id}`) 
     .then(res => res.json())
     .then(data => {
      setCategories(data)
     })
     .catch(error => console.log("Error occured => ", error.message))
   }, [categories])
  }

  return (
    <div>
        {
          categories.map(news => <NewsCard key={news.id} newsItem={news}></NewsCard>)
        }
    </div>
  )
}

export default NewsCards