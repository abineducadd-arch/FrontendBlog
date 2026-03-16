import React, { useEffect, useState } from 'react'
import './HighLights.css'
import API from '../../data/axios'

const HighLights = () => {
  
 
  return (
    <div className="highlight-section">

        <h2>Browse by Categories</h2>
        <hr />

        <div className="highlight-buttons">
            <button >Technology</button>
            <button>Design</button>
            <button>Programming</button>
            <button>Lifestyle</button>
        </div>

    </div>
  )
}

export default HighLights