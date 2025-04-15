import React from 'react'
import SmCard from './Study_material/SmCard'
import Page1 from './Page1'
import './Home_screen.css'

function Home_screen() {
  return (
    <div className="home-screen">
      <Page1 />
      <SmCard />
    </div>
  )
}

export default Home_screen 