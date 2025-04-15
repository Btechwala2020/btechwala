import React from 'react'
import './Pyq_link.css'  // Add this if you have CSS for styling

function Pyq_link({ data }) {
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index} id="first">
            <a id="a" href={item.link}>{item.title}</a>
            <i
              className="fa-solid fa-angles-right fa-fade"
              style={{color: "#005eff"}}
            ></i>
            <hr id='hr' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pyq_link