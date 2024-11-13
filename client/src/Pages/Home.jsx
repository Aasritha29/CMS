import React from 'react'
import Navbar from '../Components/Navbar'
import '../assets/css/home.css'


const Home = () => {
  return (
    <div>

    {/*Importing NavBar Component in Home Component*/}
    <Navbar/>
    
    <div className='home'>
      <h1 className='home-title'>
          CONTACT MANAGEMENT SYSTEM
      </h1>
      <p className='home-description'>
        Start collecting your contacts in very smarter way.
      </p>
    </div>
    </div>
  )
}

export default Home
