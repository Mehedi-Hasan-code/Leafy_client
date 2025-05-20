import React from 'react'
import GoogleMap from '../../components/home/GoogleMap'
const GetInTouch = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <h1>Get In Touch With Us</h1>
      {/* grid container */}
      <div>
        <GoogleMap />
      </div>
    </div>
  )
}

export default GetInTouch