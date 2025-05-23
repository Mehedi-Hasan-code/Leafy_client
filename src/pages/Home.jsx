import React from 'react'
import Hero from '../components/home/Hero'
import FeaturedGardeners from '../components/home/FeaturedGardeners'
import { useLoaderData } from 'react-router-dom'
import GetInTouch from '../components/home/GetInTouch'
import Tips from '../components/home/Tips'

const Home = () => {
  const activeGardeners = useLoaderData()
  
  return (
    <div className='my-10'>
      <Hero />
      <FeaturedGardeners activeGardeners = {activeGardeners} />
      <GetInTouch />
      <Tips />
    </div>
  )
}

export default Home