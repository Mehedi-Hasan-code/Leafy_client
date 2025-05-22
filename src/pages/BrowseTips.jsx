import React from 'react'
import { useLoaderData } from 'react-router-dom'
import TipRow from '../components/Tip/TipRow'

const BrowseTips = () => {
  const tips = useLoaderData()
  return (
    <div className='w-11/12 mx-auto grow'>
      <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Category</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {
        tips.map(tip => (<TipRow tip = {tip} key={tip._id} />))
      }
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default BrowseTips