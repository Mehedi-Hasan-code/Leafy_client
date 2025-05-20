import React from 'react'
import Hero from '../components/home/Hero'
import FeaturedGardeners from '../components/home/FeaturedGardeners'
import { useLoaderData } from 'react-router-dom'
import GetInTouch from '../components/home/GetInTouch'

const Home = () => {
  const activeGardeners = useLoaderData()
  
  return (
    <div>
      <Hero />
      <FeaturedGardeners activeGardeners = {activeGardeners} />
      <GetInTouch />
    </div>
  )
}

export default Home