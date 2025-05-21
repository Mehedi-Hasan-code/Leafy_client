import React, { useEffect, useState } from 'react'
import TipCard from './TipCard'

const Tips = () => {
  const [homeTips, setHomeTips] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/home-tips')
      .then(res => res.json())
      .then(data => setHomeTips(data))
  }, [])
  return (
    <div className='w-11/12 mx-auto'>
      <h1>Tips, Trends & Inspiration</h1>
      <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
      {
        homeTips.map(tip => <TipCard tip = {tip} key={tip._id} /> )
      }
      </div>
    </div>
  )
}

export default Tips