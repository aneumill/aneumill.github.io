import React from 'react'
import picture from '../assets/profilepic.jpg'
import '../App.css'

function Profile() {
  return (
    <div >
        <h1 className='text-sky-500 font-quicksand'> Big Boy</h1>
        <img src={picture} alt='Good Lookin Son of a Gun'/>
    </div>
  )
}

export default Profile