import React from 'react'
import GoogleMap from '../../components/home/GoogleMap'
import PhoneEmailCard from './PhoneEmailCard'
import SendMessage from './SendMessage'
const GetInTouch = () => {
  return (
    <div className='w-11/12 mx-auto my-20' >
      <h1 className='text-4xl sm:text-6xl text-center'>Get In Touch With Us</h1>
      {/* grid container */}
      <div className='grid grid-cols-1 md:grid-cols-3 rounded-3xl overflow-hidden'>
        <GoogleMap />
        <PhoneEmailCard />
        <SendMessage />
      </div>
    </div>
  )
}

export default GetInTouch