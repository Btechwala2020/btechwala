import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Card_year.css'

import oneIcon from '../../../assets/images/cardbox icon/one.png';
import twoIcon from '../../../assets/images/cardbox icon/two.png';
import threeIcon from '../../../assets/images/cardbox icon/three.png';
import fourIcon from '../../../assets/images/cardbox icon/four.png';


function Card_year() {
  const navigate = useNavigate()
  
  const yearData = [
    {
      icon: oneIcon,
      title: 'Btech',
      description: 'First year',
      link: '/Study_material/FirstYearStudyMaterialPage'
    },
    {
      icon: twoIcon,
      title: 'Btech',
      description: 'Second year',
      link: '/Study_material/SecondYearStudyMaterialPage'
    },
    {
      icon: threeIcon,
      title: 'Btech',
      description: 'Third year',
      link: '/Study_material/ThirdYearStudyMaterialPage'
    },
    {
      icon: fourIcon,
      title: 'Btech',
      description: 'Fourth year',
      link: '/Study_material/FinalYearStudyMaterialPage'
    }
  ]

  return (
    <>
      <div className='year-container'>
        <div id="text-div">
          <h1>What year do you in <span>study?</span> </h1>
          <h1>Choose and start learning!</h1>
        </div>
        <div className="card_box">
          {yearData.map((item, index) => (
            <Link 
              to={item.link} 
              key={index} 
              className="block-1"
              style={{ textDecoration: 'none', color: 'inherit', cursor: item.link ? 'pointer' : 'default' }}
              onClick={() => item.link && console.log(`Navigating to ${item.link}`)}
            >
              <div className="icon">
                <img src={item.icon} alt={`${item.title} icon`} className="icon-1" />
              </div>
              <h1>{item.title}</h1>
              <p className="year1">{item.description}</p>
              <p className="paper1">Previous Year Paper</p>
              <p className="quantum1">Latest Quantum</p>
              <span className="button">VISIT</span>
            </Link>
          ))}
        </div>
        <div id="back-image">
          <img src="/src/assets/images/cardbox icon/bimg.jpg" alt="back-image" />
        </div>
      </div>
    </>
  )
}

export default Card_year