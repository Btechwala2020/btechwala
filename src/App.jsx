import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Navbar/Nav';
import Main from './components/Home_screen/Main';
import FirstYearStudyMaterialPage from './components/Study_material/FirstYearStudyMaterialPage';
import SecondYearStudyMaterialPage from './components/Study_material/SecondYearStudyMaterialPage';
import ThirdYearStudyMaterialPage from './components/Study_material/ThirdYearStudyMaterialPage';
import FinalYearStudyMaterialPage from './components/Study_material/FinalYearStudyMaterialPage';


import Second_pyq from './components/pyq/second_year_pyq_link/Second_pyq';
import Third_pyq from './components/pyq/third_year_pyq_link/Third_pyq';
import First_pyq from './components/pyq/First_year_pyq_link/First_pyq';
import First_year_imp_topic from './components/Important Topics/First_year_imp_topic'
import Second_year_imp_topic from './components/Important Topics/Second_year_imp_topic'
import Third_year_imp_topic from './components/Important Topics/Third_year_imp_topic'
import Fourth_year_imp_topic from './components/Important Topics/Fourth_year_imp_topic'
import Footer from './Footer/Footer';
import Back_anim from './Back_Animation/Back_anim';

function App() {
  return (
    <>
      <Nav />
      <Back_anim/>
      <Routes>
        <Route path="/" element={<Main />} />
        
        <Route path="/Study_material/FirstYearStudyMaterialPage" element={<FirstYearStudyMaterialPage />} />
        <Route path="/Study_material/SecondYearStudyMaterialPage" element={<SecondYearStudyMaterialPage />} />
        <Route path="/Study_material/ThirdYearStudyMaterialPage" element={<ThirdYearStudyMaterialPage />} />
        <Route path="/Study_material/FinalYearStudyMaterialPage" element={<FinalYearStudyMaterialPage />} />
        <Route path="/pyq/First-year" element={<First_pyq />} />
        <Route path="/pyq/Second-year" element={<Second_pyq />} />
        <Route path="/pyq/Third-year" element={<Third_pyq />} />
        <Route path="/ImportantTopic/Firstyear" element={<First_year_imp_topic />} />
        <Route path="/ImportantTopic/Secondyear" element={<Second_year_imp_topic />} />
        <Route path="/ImportantTopic/Thirdyear" element={<Third_year_imp_topic />} />
        <Route path="/ImportantTopic/Fourthyear" element={<Fourth_year_imp_topic />} />
        
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;