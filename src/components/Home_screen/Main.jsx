import React from 'react'
import Page1 from './intro/Page1'
import Info from './Info/Info'
import Heading from './Heading/Heading'
import Nav from '../../Navbar/Nav'
import Heading2 from './Heading/Heading2'
import '../../Style.css'
import Footer from '../../Footer/Footer'
import StudyMaterialPage from '../Study_material/StudyMaterialPage'
import Card_year from './Choose_year/Card_year'
import Back_anim from '../../Back_Animation/Back_anim'

function Home_screen() {
  return (
    <div>
      <Nav/>
      <Back_anim/>
      <Page1 />
      <Info />
      <Heading />
      <Card_year />
      <Heading2 />
      <StudyMaterialPage/>
      <Footer/>
    </div>
  )
}

export default Home_screen