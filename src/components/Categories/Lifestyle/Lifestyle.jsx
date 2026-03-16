import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../../data/axios'
import './Lifestyle.css'

const Lifestyle = () => {

  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    API.get(`api/v1/lifestyle/${id}/`)
      .then(res => setPost(res.data))
      .catch(err => console.log(err))
  }, [id])

  if (!post) return <h2 className="loading">Loading...</h2>

  return (
    <div className="post-container">
      <h1 className="post-title">{post.caption}</h1>

      <img 
        className="post-image"
        src={post.img} 
        alt={post.caption}
      />

      <p className="post-description">{post.des}</p>
    </div>
  )
}

export default Lifestyle