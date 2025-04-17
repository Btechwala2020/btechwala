import React from 'react'
import Page1 from './intro/Page1'
import Info from './Info/Info'
import Heading from './Heading/Heading'

import Heading2 from './Heading/Heading2'
import '../../Style.css'


import Card_year from './Choose_year/Card_year'
import StudyMaterialPage from './Study_material_home/StudyMaterialPage'


function Home_screen() {
  return (
    <div>
      
      <Page1 />
      <Info />
      <Heading />
      <Card_year />
      <Heading2 />
      <StudyMaterialPage/>
      
      
      
    </div>
  )
}

export default Home_screen