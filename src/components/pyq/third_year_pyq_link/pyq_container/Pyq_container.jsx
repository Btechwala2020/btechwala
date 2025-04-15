import React from 'react'

import Pyq_link from './Pyq_link'
import './Pyq_container.css' // Add this if you have CSS for styling

function Pyq_container({ title, data }) {
  return (
    <div id='container'>
      
      <h1>{title}</h1>
      <Pyq_link data={data} />
    </div>
  )
}

export default Pyq_container