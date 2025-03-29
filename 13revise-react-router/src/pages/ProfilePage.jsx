import React from 'react'
import { useLocation } from 'react-router-dom'

function ProfilePage() {
  const location = useLocation();
  const {username} = location.state || {};

  return (
    <div>
      <h1 className='text-center text-green-700 text-5xl'>Profile Page for {username}</h1>

    </div>
  )
}

export default ProfilePage