import React from 'react'
import { Link } from 'react-router-dom'
import '../pyq/year_selection_pyq/Year_selection_pyq.css'
import oneIcon from '../../assets/images/cardbox icon/one.png';
import twoIcon from '../../assets/images/cardbox icon/two.png';
import threeIcon from '../../assets/images/cardbox icon/three.png';
import fourIcon from '../../assets/images/cardbox icon/four.png';

import Nav from '../../Navbar/Nav'
import Footer from '../../Footer/Footer';
import Back_anim from '../../Back_Animation/Back_anim';


function Quantum_year_selection() {

  const yearData = [
    {
      icon: oneIcon,
      title: 'Btech',
      description: 'First year',
      link: '/FirstYearQuantum'
    },
    {
      icon: twoIcon,
      title: 'Btech',
      description: 'Second year',
      link: "/SecondYearQuantum"
    },
    {
      icon: threeIcon,
      title: 'Btech',
      description: 'Third year',
      link: "/ThirdYearQuantum"
    },
    {
      icon: fourIcon,
      title: 'Btech',
      description: 'Fourth year',
      link: "/FourthYearQuantum"
    }
  ]

  return (
    <>
      <Nav />
      <Back_anim/>
      <div className='year-container'>
        <div id="titlee" className="title1">
          <h1>Choose Latest quantum <span>for BTECH</span></h1>
        </div>
        <div className="card_box">
          {yearData.map((item, index) => (
            <Link to={item.link} key={index} className="block-1">
              <div className="icon">
                <img src={item.icon} alt={`${item.title} icon`} className="icon-1" />
              </div>
              <h1>{item.title}</h1>
              <p className="year1">{item.description}</p>
              <p className="paper1">Important Topics</p>
              <p className="quantum1">Latest Syllabus</p>
              <span className="button">VISIT</span>
            </Link>
          ))}
        </div>
        <div id="back-image">
          <img src="/src/assets/images/cardbox icon/bimg.jpg" alt="back-image" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Quantum_year_selection