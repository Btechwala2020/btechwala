import React from 'react'
import Pyq_container from './pyq_container/Pyq_container'
import Nav from '../../../Navbar/Nav'
import Footer from '../../../Footer/Footer'
import Back_anim from '../../../Back_Animation/Back_anim'

import './first_pyq.css' // Add this if you have CSS for styling

function First_pyq() {
  const physicsData = [
    {
      link: "https://drive.google.com/file/d/19g0iG52veJEdBNvFEBV08UBBfwnQf37t/view?usp=drive_link",
      title: "BTECH-SEM-2-ENGINEERING-PHYSICS(BAS-201)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1Kvrf3L2Qq48MFhMpWKSNlSv7wXjFyrqa/view?usp=drive_link",
      title: "BTECH-SEM-1-ENGINEERING-PHYSICS(BAS-101)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1LGSOUHEGGzxHAiHZ6V-5ZWX_0O9cKFlW/view?usp=drive_link",
      title: "BTECH-SEM-2-ENGINEERING-PHYSICS(BAS-201)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1A2L229OYoYCOT_gAWGmhjhgdDNgOeWoA/view?usp=drive_link",
      title: "BTECH-SEM-1-ENGINEERING-PHYSICS(BAS-101)-2023"
    },
    {
      link: "https://drive.google.com/file/d/108K8zqvW9xYvAtjQZhhIgI9Q7mTx7UaB/view?usp=drive_link",
      title: "BTECH-SEM-2-ENGINEERING-PHYSICS(BAS-201)-2022"
    },
    {
      link: "https://drive.google.com/file/d/17ItOG9YuYWp202cdWITBQHf_mCARHFd2/view?usp=drive_link",
      title: "BTECH-SEM-1-ENGINEERING-PHYSICS(BAS-101)-2022"
    },
    {
      link: "https://drive.google.com/file/d/1CNwj4_VVlPAmrRq-ClUpcZBXZk-yJeX3/view?usp=drive_link",
      title: "BTECH-SEM-1-ENGINEERING-PHYSICS(BAS-101)-2021"
    },

    // Add more physics data as needed
  ]

  const math2Data = [
    {
      link: "https://drive.google.com/file/d/1WjZzLA2HJhsh5MTS7PrCSyKBZVGyKk3i/view?usp=drive_link",
      title: "BTECH-SEM-1-ENGINNERING MATHEMATICS-2(BAS-203)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1oBDSzlo3s-MfHapQC-8wuFd01BXQYbgE/view?usp=drive_link",
      title: "BTECH-SEM-2-ENGINNERING MATHEMATICS-2(kAS-203t)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1YY6ukvD0nhyYJ8EkJf8ydv6VqIjQ1yTK/view?usp=drive_link",
      title: "BTECH-SEM-1-ENGINNERING MATHEMATICS-2(BAS-203)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1yMh-uVOETFahoMIqiyYaOBlXBhAz7u6v/view?usp=drive_link---",
      title: " BTECH-SEM-2-ENGINNERING MATHEMATICS-2(kAS-203t)-2022"
    },
    // Add more math data as needed
  ]
  const math1Data = [
    {
      link: "https://drive.google.com/file/d/1G6a6AZOXZlYq9Jf_78f1sxDlbfiAKuBE/view?usp=drive_link",
      title: "BTECH-SEM-1-ENGINNERING MATHEMATICS-1(BAS-103)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1CHj_R5GqDgPsJ8ctVshhDAWT1AZK3jFz/view?usp=drive_link",
      title: "BTECH-SEM-2-ENGINNERING MATHEMATICS-1(kAS-103t)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1HdUByHE15wtIkyaQzt8s3_ChAhT0CWEF/view?usp=drive_link",
      title: "BTECH-SEM-1-ENGINNERING MATHEMATICS-1(BAS-103)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1T1Ub-yw64hHLfjyvjhVqEd5BLL3NdLjp/view?usp=drive_link",
      title: " BTECH-SEM-2-ENGINNERING MATHEMATICS-1(kAS-103t)-2022"
    },
    // Add more math data as needed
  ]
  const electricalData = [
    {
      link: "https://drive.google.com/file/d/18E6kjuT8Wivn2MAuIMP6D6Avb8YhzGDA/view?usp=drive_link",
      title: "BTECH-SEM-2-FUNDAMENTALS OF ELECTRICAL ENGINEERING(BEE-201)-2024"

    },
    {
      link: "https://drive.google.com/file/d/1AhqL6oCB1JS85SC3Y-k_wS-b5NlaIYf8/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF ELECTRICAL ENGINEERING(BEE-101)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1hG6v5MyFKc0-X_eN-8U_UdDRjPW5jT3v/view?usp=drive_link",
      title: "BTECH-SEM-2-FUNDAMENTALS OF ELECTRICAL ENGINEERING(BEE-201)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1qLPt6hYvxzFFzW4S22tMS_XlG4pGHhJl/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF ELECTRICAL ENGINEERING(BEE-101)-2023"
    }, {
      link: "https://drive.google.com/file/d/103tN_XGhes_QLLsGL5FxE9Anpjs_XTM3/view?usp=drive_link",
      title: "BTECH-SEM-2-FUNDAMENTALS OF ELECTRICAL ENGINEERING(BEE-201)-2022"

    },
    {
      link: "https://drive.google.com/file/d/1cGsgDhygVweV6_LWlwCgx4mky51_3MsJ/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF ELECTRICAL ENGINEERING(BEE-101)-2022"
    },
    {
      link: "https://drive.google.com/file/d/1676mU9wdKI1djJuF9Pot_sh0m8pP96De/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF ELECTRICAL ENGINEERING(BEE-101)-2021"
    },


    // Add more math data as needed
  ]

  const ppsData = [
    {
      link: "https://drive.google.com/file/d/1nusvMcZsQMn2h-GpbssH1rCtooG3ZOYw/view?usp=drive_link",
      title: "BTECH-SEM-2-PROGRAMMING-FOR-PROBLEM-SOLVING-(BCS-201)-2024"

    },
    {
      link: "https://drive.google.com/file/d/1L1AuVUHIeCZwE7JAStcP6_DkYayJHtL8/view?usp=drive_link",
      title: "BTECH-SEM-1-PROGRAMMING-FOR-PROBLEM-SOLVING-(BCS-101)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1E_O8vzaLu2Nn992t27nuLUNwAvHiiReC/view?usp=drive_link",
      title: "BTECH-SEM-2-PROGRAMMING-FOR-PROBLEM-SOLVING-(BCS-201)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1uM5yiCvMnDVWYfEpIyjNscXn-7jYwJMV/view?usp=drive_link",
      title: "BTECH-SEM-1-PROGRAMMING-FOR-PROBLEM-SOLVING-(BCS-101)-2023"
    }, {
      link: "https://drive.google.com/file/d/1vvGw_2fW4h3gy6JXVY4rsbpvr4Qtld4z/view?usp=drive_link",
      title: "BTECH-SEM-2-PROGRAMMING-FOR-PROBLEM-SOLVING-(BCS-201)-2022"

    },
    {
      link: "https://drive.google.com/file/d/14a5l-fp-FQH4C2pS8UvwjPpBZvKxoKqA/view?usp=drive_link",
      title: "BTECH-SEM-1-PROGRAMMING-FOR-PROBLEM-SOLVING-(BCS-101)-2022"
    },
    {
      link: "https://drive.google.com/file/d/1ejQbABQFaCrFPMSdEMHAmFyu-Mgd98HQ/view?usp=drive_link",
      title: "BTECH-SEM-1-PROGRAMMING-FOR-PROBLEM-SOLVING-(BCS-101)-2021"
    },


    // Add more math data as needed
  ]

  const chemistryData = [
    {
      link: "https://drive.google.com/file/d/1nusvMcZsQMn2h-GpbssH1rCtooG3ZOYw/view?usp=drive_link",
      title: "BTECH SEM-2 ENGINEERING CHEMISTRY (BAS-202) 2024"

    },
    {
      link: "https://drive.google.com/file/d/1L1AuVUHIeCZwE7JAStcP6_DkYayJHtL8/view?usp=drive_link",
      title: "BTECH SEM-1 ENGINEERING CHEMISTRY (BAS-102) 2024"
    },
    {
      link: "https://drive.google.com/file/d/1E_O8vzaLu2Nn992t27nuLUNwAvHiiReC/view?usp=drive_link",
      title: "BTECH SEM-2 ENGINEERING CHEMISTRY (BAS-202) 2023"
    },
    {
      link: "https://drive.google.com/file/d/1uM5yiCvMnDVWYfEpIyjNscXn-7jYwJMV/view?usp=drive_link",
      title: "BTECH SEM-1 ENGINEERING CHEMISTRY (BAS-102) 2023"
    }, {
      link: "https://drive.google.com/file/d/1vvGw_2fW4h3gy6JXVY4rsbpvr4Qtld4z/view?usp=drive_link",
      title: "BTECH SEM-2 ENGINEERING CHEMISTRY (BAS-202) 2022"

    },
    {
      link: "https://drive.google.com/file/d/14a5l-fp-FQH4C2pS8UvwjPpBZvKxoKqA/view?usp=drive_link",
      title: "BTECH SEM-1 ENGINEERING CHEMISTRY (BAS-102) 2022"
    },
    {
      link: "https://drive.google.com/file/d/1ejQbABQFaCrFPMSdEMHAmFyu-Mgd98HQ/view?usp=drive_link",
      title: "BTECH SEM-1 ENGINEERING CHEMISTRY (BAS-102) 2021"
    },


    // Add more math data as needed
  ]

  const electronicsData = [
    {
      link: "https://drive.google.com/file/d/1UqAnp1ej7Cup7uY-T88hHpOn_tNdFyhl/view?usp=drive_link",
      title: "BTECH-SEM-2-FUNDAMENTALS OF ELECTRONICS ENGINEERING(BEC-201)-2024"


    },
    {
      link: "https://drive.google.com/file/d/1b0R70iWGOVhPx70QaF-Yt-LUWddS_kuk/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF ELECTRONICS ENGINEERING(BEC-101)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1b-rcj2DgiCBxU6eKDQsb2xu8IE-XXYGa/view?usp=drive_link",
      title: "BTECH-SEM-2-FUNDAMENTALS OF ELECTRONICS ENGINEERING(BEC-201)-2023"
    },
    {
      link: "https://drive.google.com/file/d/14tARDUjrRn9m8Mh1FzVkE3P-v-y5Wq9l/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF ELECTRONICS ENGINEERING(BEC-101)-2023"
    }, {
      link: "https://drive.google.com/file/d/16R7rt5S8OqWWlgzeszxWBAXbITmDyAvg/view?usp=drive_link",
      title: "BTECH-SEM-2-FUNDAMENTALS OF ELECTRONICS ENGINEERING(BEC-201)-2022"

    },
    {
      link: "https://drive.google.com/file/d/1w9o8F8Vp3eY_u2Nrw5oyszu7NjvBh3rE/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF ELECTRONICS ENGINEERING(BEC-101)-2022"
    },
    {
      link: "https://drive.google.com/file/d/1wCC9WeHhbsb0Y-Ltq3yfcoxYdpi5GRIn/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF ELECTRONICS ENGINEERING(BEC-101)-2021"
    },


    // Add more math data as needed
  ]

  const mechanicalData = [
    {
      link: "https://drive.google.com/file/d/1ryjoS1bfal9o7dyoUk-MHo9X4q4mEe1P/view?usp=drive_link",
      title: "BTECH-SEM-2-FUNDAMENTALS OF MECHANICAL ENGINEERING (BME-201)-2024"



    },
    {
      link: "https://drive.google.com/file/d/1foDVmrENP0mAOW6yNCOSFg6T_gUTKbve/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF MECHANICAL ENGINEERING (BME-101)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1bA5wRSZL9UVDOmaLl9ewr_BU2uZRo8J-/view?usp=drive_link",
      title: "BTECH-SEM-2-FUNDAMENTALS OF MECHANICAL ENGINEERING (BME-201)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1-zjHyCEX1YECAPooY2ouB3YW2TiO2xQ3/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF MECHANICAL ENGINEERING (BME-101)-2023"
    }, {
      link: "https://drive.google.com/file/d/1a75mOxjjjzTdCAf4d__Q6CqGhi6CT2Bd/view?usp=drive_link",
      title: "BTECH-SEM-2-FUNDAMENTALS OF MECHANICAL ENGINEERING (BME-201)-2022"

    },
    {
      link: "https://drive.google.com/file/d/16-1shjVRFHWwtakCn1evVJyKSKFP-k_p/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF MECHANICAL ENGINEERING (BME-101)-2022"
    },
    {
      link: "https://drive.google.com/file/d/1ijvSArG7cyARPtc0ELIgTTFGNLl3ca_e/view?usp=drive_link",
      title: "BTECH-SEM-1-FUNDAMENTALS OF MECHANICAL ENGINEERING (BME-101)-2021"
    },


    // Add more math data as needed
  ]


  const softskillData = [
    {
      link: "https://drive.google.com/file/d/1JID_JLeSRpyOQIsorOZYFQSrF1CvQUFI/view?usp=drive_link",
      title: "BTECH-SEM-2-SOFT SKILLS-BAS-205-2024"


    },
    {
      link: "https://drive.google.com/file/d/1RtIexx-hYQEoE0EwIti69BOKWqDHB1xP/view?usp=drive_link",
      title: "BTECH-SEM-1-SOFT SKILLS-BAS-105-2024"
    },
    {
      link: "https://drive.google.com/file/d/12Jfo3mwEIg_slNM3WDjAsRjChJDr7vU9/view?usp=drive_link",
      title: "BTECH-SEM-2-SOFT SKILLS-BAS-205-2023"
    },
    {
      link: "https://drive.google.com/file/d/1yy3c4hM6cV6Bm2pyzznNTe4cGl_gQwoD/view?usp=drive_link",
      title: "BTECH-SEM-1-SOFT SKILLS-BAS-105-2023"
    }, {
      link: "https://drive.google.com/file/d/1bwgFJ27xth7K-E8DMxRDU7Yic99dvMsR/view?usp=drive_link",
      title: "BTECH-SEM-2-SOFT SKILLS-BAS-205-2022"

    },
    {
      link: "https://drive.google.com/file/d/1UuvNLiSDInV17j6SSnZsezo44XcRllRg/view?usp=drive_link",
      title: "BTECH-SEM-1-SOFT SKILLS-BAS-105-2022"
    },



    // Add more math data as needed
  ]


  const enivironmentData = [
    {
      link: "https://drive.google.com/file/d/10y5XLGG8ox0uiOjYTvyJShjKISH_KBQJ/view?usp=drive_link",
      title: "BTECH SEM-2 ENVIRONMENT AND ECOLOGY (BAS-104) 2024"


    },
    {
      link: "https://drive.google.com/file/d/1xWsX2GXZSEh2vqe87-G8yW9KCfIfyC0a/view?usp=drive_link",
      title: "BTECH SEM-1 ENVIRONMENT AND ECOLOGY (BAS-104) 2024"
    },
    {
      link: "https://drive.google.com/file/d/16CpUZV600dibjnyv-rTUz1bDp6y14pNO/view?usp=drive_link",
      title: "BTECH SEM-2 ENVIRONMENT AND ECOLOGY (BAS-104) 2023"
    },
    {
      link: "https://drive.google.com/drive/u/2/folders/1z1wKYzq2DPa0uuxGOV2pcw_DhKxMVavB",
      title: "BTECH SEM-1 ENVIRONMENT AND ECOLOGY (BAS-104) 2023"
    },



    // Add more math data as needed
  ]



  return (
    <div>
      
      
      
      
      <div id="title" class="title1">
        <h1 >Previous Year paper for BTECH <span>(2021-25 )</span></h1>
      </div>
      <Pyq_container title="ENGINEERING PHYSICS ( BAS-101 )" data={physicsData} />
      <Pyq_container title="ENGINNERING MATHEMATICS-2" data={math2Data} />
      <Pyq_container title="ENGINNERING MATHEMATICS-1" data={math1Data} />
      <Pyq_container title="FUNDAMENTALS OF ELECTRICAL ENGINEERING" data={electricalData} />
      <Pyq_container title="PROGRAMMING FOR PROBLEM SOLVING" data={ppsData} />
      <Pyq_container title="ENGINEERING CHEMISTRY" data={chemistryData} />
      <Pyq_container title="FUNDAMENTALS OF ELECTRONICS ENGINEERING" data={electronicsData} />
      <Pyq_container title="FUNDAMENTALS OF MECHANICAL ENGINEERING" data={mechanicalData} />
      <Pyq_container title="SOFT SKILLS" data={softskillData} />
      <Pyq_container title="ENVIRONMENT AND ECOLOGY" data={enivironmentData} />
      
      



    </div>
  )
}

export default First_pyq