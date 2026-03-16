import React from 'react'
import PostCard from '../Card/Posts/PostCard'
import AsideSearch from '../AsideSearch/AsideSearch'
import './FeatureSection.css'
const FeatureSection = () => {
  return (
    <div className='feature-section'>
        <PostCard/>
        <AsideSearch/>
    </div>
  )
}

export default FeatureSection
