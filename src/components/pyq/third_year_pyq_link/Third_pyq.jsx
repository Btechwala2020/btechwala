import React from 'react'
import Pyq_container from './pyq_container/Pyq_container'
import Nav from '../../../Navbar/Nav'
import Footer from '../../../Footer/Footer'
import Back_anim from '../../../Back_Animation/Back_anim'
import './Third_pyq.css' // Add this if you have CSS for styling

function First_pyq() {
  const CoiData = [
  
    {
      link: "https://drive.google.com/file/d/1wUI_FMmbwzO3k_h19-NB6WYvYek01pXy/view?usp=drive_link",
      title: "BTECH-SEM-6-Constitution of India (BNC601H)-2024 "
                 
    },
    {
      link: "https://drive.google.com/file/d/1bnucVIHHijtr_VjAO6Q37-Y6v5plWLba/view?usp=drive_link",
      
      title: "BTECH-SEM-5-Constitution of India (BNC501H)-2024 "
    },
    {
      link: "https://drive.google.com/file/d/1rgHIslhVRVtq0nprXTqS3sx8B-emLSmQ/view?usp=drive_link",
      title: "BTECH-SEM-6-Constitution of India (BNC601H)-2023 "
    },
    {
      link: "https://drive.google.com/file/d/17H_0QbdjBjyUFrvrWjO599Y12UTvSp13/view?usp=drive_link",
      title: "BTECH-SEM-5-Constitution of India (BNC501H)-2023 "
    },
    {
      link: "https://drive.google.com/file/d/1I0yuk4CfcYYaZYajZG5QqHHlRS9UtA9Q/view?usp=drive_link",
      title: "BTECH-SEM-6-Constitution of India (BNC601H)-2022 "
    },
    {
      link: "https://drive.google.com/file/d/1HBEs_sZiKcjgfU5qL6TJuPmf_TshvDNg/view?usp=drive_link",
      title: "BTECH-SEM-5-Constitution of India (BNC501H)-2022 "
    },
    

    // Add more physics data as needed
  ]

  const itcsData = [
    {
      link: "https://drive.google.com/file/d/1BVX7QTf0gp_kRIXecL6VpLJwAopf_e6N/view?usp=drive_link",
      title: "BTECH-SEM-6-Essence of Indian Traditional Knowledge (BNC602H)-2024"

                
    },
    {
      link: "https://drive.google.com/file/d/1MltgGn0PUMVmu9XBm8OYqJx6dvOczxOh/view?usp=drive_link",
      title: "BTECH-SEM-5-Essence of Indian Traditional Knowledge (BNC502H)-2024"
    },
    
    {
      link: "https://drive.google.com/file/d/11i7-DZtYavtCLTezZyRVSJiaN68-XkXw/view?usp=drive_link",
      title: "BTECH-SEM-5-Essence of Indian Traditional Knowledge (BNC502H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1BiFKeqId0Laq6f2_t7x86Yxcu2bGwsg-/view?usp=drive_link",
      title: "BTECH-SEM-6-Essence of Indian Traditional Knowledge (BNC602H)-2022"
    },
    
    // Add more math data as needed
  ]
  const dbmsData = [
    {
      link: "https://drive.google.com/file/d/1LUPCIS0BhDqvlBwUSpoRlLKLbAOCWEG6/view?usp=drive_link",
      title: "BTECH-SEM-5-Database Management System BCS501H-2024"


    },
    {
      link: "https://drive.google.com/file/d/1eLXuOplq5looGuB_iHZkoWmJwxpUpkmm/view?usp=drive_link",
      title: "BTECH-SEM-5-Database Management System BCS501H-2023"
    },
    {
      link: "https://drive.google.com/file/d/1dDQelww_OH3eVYKR0PVYWjPs8UxdG8mP/view?usp=drive_link",
      title: "BTECH-SEM-5-Database Management System BCS501H-2022"
    },
    
    // Add more math data as needed
  ]
  const wtData = [
    {
      link: "https://drive.google.com/file/d/1I52tIOw41nSzzPa5yBP2TIbX1s0ngHRe/view?usp=drive_link",
      title: "BTECH-SEM-5-Web Technology (BCS502H)-2024"

    },
    {
      link: "https://drive.google.com/file/d/1_nudBO2njrFkwnWrFY__aTIMwhtZQkvR/view?usp=drive_link",
      title: "BTECH-SEM-5-Web Technology (BCS502H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1aDlSCdaadUxDdx2jjDkWtXsriXv25ApC/view?usp=drive_link",
      title: "BTECH-SEM-5-Web Technology (BCS502H)-2022"
    },
    
    


    // Add more math data as needed
  ]

  const DaaData = [
    {
      link: "https://drive.google.com/file/d/1Ak5wyee4GNHoCeiFaVhkC_kXP-EN6I8W/view?usp=drive_link",
      title: "BTECH-SEM-5-Design and Analysis of Algorithm (BCS503H)-2024"



    },
    {
      link: "https://drive.google.com/file/d/1JRKFxIdrf1vDnJju8z1P5f0_Ik5gDQvD/view?usp=drive_link",
      title: "BTECH-SEM-5-Design and Analysis of Algorithm (BCS503H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1YN5MPGJlXbSmiQM-MhN6GQPU8GHTUITO/view?usp=drive_link",
      title: "BTECH-SEM-5-Design and Analysis of Algorithm (BCS503H)-2022"
    },
    
    


    // Add more math data as needed
  ]

  const seData = [
    {
      link: "https://drive.google.com/file/d/1yNrve-4NEQ1IdHE83eJNgiTJMrBPyvUs/view?usp=drive_link",
      title: "BTECH-SEM-6-Software Engineering (BCS601H)-2024"
                  

    },
    {
      link: "https://drive.google.com/file/d/1Gd75xru6jPhzz5FmTVLyF5wSsWH4yYaf/view?usp=drive_link",
      title: "BTECH-SEM-6-Software Engineering (BCS601H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1Icu9jRCfXrMjV01OZ3DCXgp6wreo67Ue/view?usp=drive_link",
      title: "BTECH-SEM-6-Software Engineering (BCS601H)-2022"
    },
    
    


    // Add more math data as needed
  ]

  const cdData = [
    {
      link: "https://drive.google.com/file/d/1JLNsbu0a-pwkEHuLlHPjHGj0Ld1vDZke/view?usp=drive_link",
      title: "BTECH-SEM-6-Compiler Design (BCS602H)-2024"
                


    },
    {
      link: "https://drive.google.com/file/d/1JAlQfrtWuRKRbkdUG5bTSScWsSnR3fs6/view?usp=drive_link",
      title: "BTECH-SEM-6-Compiler Design (BCS602H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1yc7ai5EI-qED-a2CoMdFT_wEhubzJiZN/view?usp=drive_link",
      title: "BTECH-SEM-6-Compiler Design (BCS602H)-2022"
    },
    
    


    // Add more math data as needed
  ]

  const cnData = [
    {
      link: "https://drive.google.com/file/d/1-VE5n8dBiFlJms6n7rqPQ8AQF97tOTjv/view?usp=drive_link",
      title: "BTECH SEM-6 Computer Networks (BCS603H) 2024"
                  



    },
    {
      link: "https://drive.google.com/file/d/1rQGkmts84mH7foTPiHnNt-iwLvzv2F8-/view?usp=drive_link",
      title: "BTECH SEM-6 Computer Networks (BCS603H) 2023"
    },
    {
      link: "https://drive.google.com/file/d/1W-NYaFRVqPtGvcd93xdgPnLm73U6AXHW/view?usp=drive_link",
      title: "BTECH SEM-6 Computer Networks (BCS603H) 2022"
    },
    


    // Add more math data as needed
  ]


  const oosdData = [
    {
      link: "https://drive.google.com/file/d/12tzC36dFA2vCdvGUJQd2x6ohuMywFsrt/view?usp=drive_link",
      title: "BTECH-SEM-5-Object Oriented System Design with C++ (BCS-054H)-2024"


    },
    {
      link: "https://drive.google.com/file/d/1rdSe_QVJvHrTUETOqlrWtEpRfxLWSzFe/view?usp=drive_link",
      title: "BTECH-SEM-5-Object Oriented System Design with C++ (BCS-054H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1Zk7sKhobhOtB0kuHUYGPuYKMJ2WGKtzT/view?usp=drive_link",
      title: "BTECH-SEM-5-Object Oriented System Design with C++ (BCS-054H)-2022"
    },
   



    // Add more math data as needed
  ]


  const bigData = [
    {
      link: "https://drive.google.com/file/d/1d4G2im2Lg__e89o5HtC0D3rbc3J36qr_/view?usp=drive_link",
      title: "BTECH-SEM-6-Big Data-(BCS-061H)-2024"
                  


    },
    {
      link: "https://drive.google.com/file/d/1QlIS1r-XkC0mcUHFogpxSuzmkCn0nGmC/view?usp=drive_link",
      title: "BTECH-SEM-6-Big Data-(BCS-061H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1WFKiZFVHUEFnJeC7ip9E_V1YQB4DdtfN/view?usp=drive_link",
      title: "BTECH-SEM-6-Big Data-(BCS-061H)-2022"
    },
    



    // Add more math data as needed
  ]
  const daData = [
   
    {
      link: "https://drive.google.com/file/d/1kL73QDNmfRGr35WzgiA2I8J-ikrbMbTt/view?usp=drive_link",
      title: "BTECH-SEM-5-Data Analytics (BCS-052H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1C9YAQW36UDLwLIHIE8T1F3nWM2RKWeXJ/view?usp=drive_link",
      title: "BTECH-SEM-5-Data Analytics (BCS-052H)-2022"
    },
    



    // Add more math data as needed
  ]
  const datacompData = [
    {
      link: "https://drive.google.com/file/d/1UedlG2x6Q14uOp_Bvoe61MSw2fIv7SHP/view?usp=drive_link",
      title: "BTECH SEM-6 Data Compression (BCS-064H) 2024"
                  
                  


    },
    {
      link: "https://drive.google.com/file/d/1k8held6PyGnQCx2W-QSCzOsqZ6SBACLF/view?usp=drive_link",
      title: "BTECH SEM-6 Data Compression (BCS-064H) 2023"
    },
    {
      link: "https://drive.google.com/file/d/11-BW83PJpU3CzIsBwyg-Qzu5Qmfz7nrS/view?usp=drive_link",
      title: "BTECH SEM-6 Data Compression (BCS-064H) 2022"
    },
    



    // Add more math data as needed
  ]
  const mlData = [
    
    {
      link: "https://drive.google.com/file/d/1kL73QDNmfRGr35WzgiA2I8J-ikrbMbTt/view?usp=drive_link",
      title: "BTECH SEM-6 Machine Learning Techniques (BCS-055H) 2023"
    },
    {
      link: "https://drive.google.com/file/d/1C9YAQW36UDLwLIHIE8T1F3nWM2RKWeXJ/view?usp=drive_link",
      title: "BTECH SEM-6 Machine Learning Techniques (BCS-055H) 2022"
    },
    



    // Add more math data as needed
  ]



  return (
    <div>
      
      <div id="title" class="title1">
        <h1 >Previous Year paper for <span>BTECH (2021-25 )</span></h1>
      </div>
      <Pyq_container title="Constitution of India" data={CoiData} />
      <Pyq_container title="Essence of Indian Traditional Knowledge" data={itcsData} />
      <Pyq_container title="Database Management System" data={dbmsData} />
      <Pyq_container title="Web Technology (BCS502H)" data={wtData} />
      <Pyq_container title="Design and Analysis of Algorithm (BCS503H)" data={DaaData} />
      <Pyq_container title="Software Engineering (BCS601H)" data={seData} />
      <Pyq_container title="Compiler Design (BCS602H)" data={cdData} />
      <Pyq_container title="Computer Networks (BCS603H)" data={cnData} />
      <Pyq_container title="Object Oriented System Design with C++ (BCS-054H)" data={oosdData} />
      <Pyq_container title="Big Data-(BCS-061H)" data={bigData} />
      <Pyq_container title="Data Analytics (BCS-052H)" data={daData} />
      <Pyq_container title="Data Compression (BCS-064H)" data={datacompData} />
      <Pyq_container title="Machine Learning Techniques (BCS-055H)" data={mlData} />
      
      



    </div>
  )
}

export default First_pyq