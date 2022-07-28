import React from 'react'
import Profile from './footer/Profile/Profile'
import Footer  from './footer/footer'
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
    <Profile/>
    <Footer/>
    </div>
  )
}
