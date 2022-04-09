import React from 'react';
import Profile from '../components/Profile/Profile';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <div className="">
      <Navigation/>
        <Profile/>
      <Footer/>
    </div>
  )
}

export default Home