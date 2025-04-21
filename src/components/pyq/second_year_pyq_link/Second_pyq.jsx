import React from 'react'
import Pyq_container from './pyq_container/Pyq_container'
import { useEffect, useRef } from 'react';
import './Second_pyq.css' // Add this if you have CSS for styling

function First_pyq() {
  const carouselRef = useRef(null);
  
      useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  const TcData = [
  
    {
      link: "https://drive.google.com/file/d/1Uqgv-qeyoHS_0sfITycvqXvCvIRIUZiZ/view?usp=drive_link",
      title: "BTECH-SEM-4-Technical Communication (KAS401)-2024 "
                 
    },
    {
      link: "https://drive.google.com/file/d/1OTlOGdtJBonx7x-_Cv71dW9kbaRcPd1k/view?usp=drive_link",
      
      title: "BTECH-SEM-3-Technical Communication (KAS301)-2024 "
    },
    {
      link: "https://drive.google.com/file/d/1Wiyn_3wkZtaYpeM1sE_ecGO0X93RaF99/view?usp=drive_link",
      title: "BTECH-SEM-4-Technical Communication (KAS401)-2023 "
    },
    {
      link: "https://drive.google.com/file/d/1Lot91MeipcffDCerE7HYAbPo0sgpDp2w/view?usp=drive_link",
      title: "BTECH-SEM-3-Technical Communication (KAS301)-2023 "
    },
    {
      link: "https://drive.google.com/file/d/1hLr_Qae5N9qVVQbq5BB_UFBOSZNnLcFh/view?usp=drive_link",
      title: "BTECH-SEM-4-Technical Communication (KAS401)-2022 "
    },
    {
      link: "https://drive.google.com/file/d/1c_eghuJ6T44f_Ne7gkdimvqKUHLnV2jT/view?usp=drive_link",
      title: "BTECH-SEM-3-Technical Communication (KAS301)-2022 "
    },
    

    // Add more physics data as needed
  ]

  const uhvData = [
    {
      link: "https://drive.google.com/file/d/1oUHNu3r4S6giuhYGt7Dhi7eGFfgr0SoI/view?usp=drive_link",
      title: "BTECH-SEM-4-Universal Human values (KVE 401H)-2024"
                
    },
    {
      link: "https://drive.google.com/file/d/1JfBFejejImoV5kG-m3djb7w0qyABYHj_/view?usp=drive_link",
      title: "BTECH-SEM-3-Universal Human values (KVE 301H)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1YY6ukvD0nhyYJ8EkJf8ydv6VqIjQ1yTK/view?usp=drive_link",
      title: "BTECH-SEM-4-Universal Human values (KVE 401H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/16VUhU0meITQI95xVAUcmifrKLDwUIABu/view?usp=drive_link",
      title: "BTECH-SEM-3-Universal Human values (KVE 301H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1qrOW8BWCv4S-2bQTcKbU4aWOXGYTHfnQ/view?usp=drive_link",
      title: "BTECH-SEM-4-Universal Human values (KVE 401H)-2022"
    },
    {
      link: "https://drive.google.com/file/d/1LE7c-DWQKgnIhqCnd6cz6Zws4bow_BDw/view?usp=drive_link",
      title: "BTECH-SEM-3-Universal Human values (KVE 301H)-2022"
    },
    // Add more math data as needed
  ]
  const deData = [
    {
      link: "https://drive.google.com/file/d/1D0lh7eVCGrkzlDhpsvcyLw3u9VuwlL6X/view?usp=drive_link",
      title: "BTECH-SEM-4-Digital Electronics ( KOE049 )-2024"
    },
    {
      link: "https://drive.google.com/file/d/1CHj_R5GqDgPsJ8ctVshhDAWT1AZK3jFz/view?usp=drive_link",
      title: "BTECH-SEM-3-Digital Electronics ( KOE049 )-2024"
    },
    {
      link: "https://drive.google.com/file/d/1bantJY7CqfdGv--ipJAqcDSMXhqwdsSl/view?usp=drive_link",
      title: "BTECH-SEM-4-Digital Electronics ( KOE049 )-2023"
    },
    {
      link: "https://drive.google.com/file/d/12CVnNX3ShZdCz1-cjBiGKsvT2qA2hPi1/view?usp=drive_link",
      title: "BTECH-SEM-3-Digital Electronics ( KOE049 )-2023"
    },
    {
      link: "https://drive.google.com/file/d/1xKd8CUyHGnsAxLz7Koe4PLPauHN_hyrg/view?usp=drive_link",
      title: "BTECH-SEM-4-Digital Electronics ( KOE049 )-2022"
    },
    {
      link: "https://drive.google.com/file/d/11pBIl0Zrb2dNwzY55EeImaVuLad3w8Xa/view?usp=drive_link",
      title: "BTECH-SEM-3-Digital Electronics ( KOE049 )-2022"
    },
    // Add more math data as needed
  ]
  const maths4Data = [
    {
      link: "https://drive.google.com/file/d/1FsZSe61zOVVYoNC__bhSDiah2xAsP3Fh/view?usp=drive_link",
      title: "BTECH-SEM-4-Mathematics IV (KAS402H)-2024"

    },
    {
      link: "https://drive.google.com/file/d/1JFl6qU5BkMRtBdY23raT2pRgrsZVX-AK/view?usp=drive_link",
      title: "BTECH-SEM-3-Mathematics IV (KAS302H)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1E0MPEh4aC6PJ00BANMfZKT_WvC8XxRDx/view?usp=drive_link",
      title: "BTECH-SEM-4-Mathematics IV (KAS402H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1jO3AQCMNv7Or1Dg730GnUnapasftLlDs/view?usp=drive_link",
      title: "BTECH-SEM-3-Mathematics IV (KAS302H)-2023"
    }, {
      link: "https://drive.google.com/file/d/1enGqX0sflJsjWKvglANgUC_bizYDKZm0/view?usp=drive_link",
      title: "BTECH-SEM-4-Mathematics IV (KAS402H)-2022"

    },
    {
      link: "https://drive.google.com/file/d/1kSqZg4qE8GpoY1ktdQrgAiMqDTteePMZ/view?usp=drive_link",
      title: "BTECH-SEM-3-Mathematics IV (KAS302H)-2022"
    },
    


    // Add more math data as needed
  ]

  const microData = [
    {
      link: "https://drive.google.com/file/d/1HrlcJdQk7iC0nqbINOVh2Daw-y_T3o6f/view?usp=drive_link",
      title: "BTECH-SEM-4-Microprocessor (KCS403H)-2023"

    },
    {
      link: "https://drive.google.com/file/d/1QyRXSb5I6Rphw5oKQa-c_8AxaMgRMJvD/view?usp=drive_link",
      title: "BTECH-SEM-4-Microprocessor (KCS303H)-2022"
    },
    
    


    // Add more math data as needed
  ]

  const cssecData = [
    {
      link: "https://drive.google.com/file/d/1OohLbu3jlLrPjsQOZH8JlXxlICZnulgp/view?usp=drive_link",
      title: "BTECH-SEM-4-Computer System Security (KNC401H)-2024"
                  

    },
    {
      link: "https://drive.google.com/file/d/1FWXwJ69wpiLUxy7uGPOCvinds8lD-dYD/view?usp=drive_link",
      title: "BTECH-SEM-3-Computer System Security (KNC301H)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1qiCWN4ibhatC4pzMm6GlzVIAbKrpIZjh/view?usp=drive_link",
      title: "BTECH-SEM-4-Computer System Security (KNC401H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1iySABSwzGFP3OMqQMea19gKvX9SpFxd3/view?usp=drive_link",
      title: "BTECH-SEM-3-Computer System Security (KNC301H)-2023"
    }, {
      link: "https://drive.google.com/file/d/1EDSQtNOqFGtWfIb05ZWHwg2NcVxzuB4G/view?usp=drive_link",
      title: "BTECH-SEM-4-Computer System Security (KNC401H)-2022"

    },
    {
      link: "https://drive.google.com/file/d/1Toys_UeFAakmvj5QMHcdr3GlBEBa_EZw/view?usp=drive_link",
      title: "BTECH-SEM-3-Computer System Security (KNC301H)-2022"
    },
    


    // Add more math data as needed
  ]

  const pythonData = [
    {
      link: "https://drive.google.com/file/d/1rzryrMoRfPzIRhY9rBVnqPNhzGyxDLeL/view?usp=drive_link",
      title: "BTECH-SEM-4-Python Programming (KNC402H)-2024"
                


    },
    {
      link: "https://drive.google.com/file/d/1SLcJCGNEmrJmv0a6z34Jko0VAvwD6gOF/view?usp=drive_link",
      title: "BTECH-SEM-3-Python Programming (KNC302H)-2024"
    },
    {
      link: "https://drive.google.com/file/d/1fJct0-tIW9Sod897E_bsKSadtqwaUEqd/view?usp=drive_link",
      title: "BTECH-SEM-4-Python Programming (KNC402H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1qRAC-ZL-7MPMHE0HmEi-uaU9UK8HC70j/view?usp=drive_link",
      title: "BTECH-SEM-3-Python Programming (KNC302H)-2023"
    }, {
      link: "https://drive.google.com/file/d/16CF3XrHh7u2E_aFkyMRdOVzfGvHN7b8M/view?usp=drive_link",
      title: "BTECH-SEM-4-Python Programming (KNC402H)-2022"

    },
    {
      link: "https://drive.google.com/file/d/1T44WlV90AymYlKuPMLlZiukfjt6Lxq0q/view?usp=drive_link",
      title: "BTECH-SEM-3-Python Programming (KNC302H)-2022"
    },
    


    // Add more math data as needed
  ]

  const coaData = [
    {
      link: "https://drive.google.com/file/d/1eu4sTNqYzPQvdUJBOGto3bH4PBs7D383/view?usp=drive_link",
      title: "BTECH SEM-3 Computer Organization and Architecture(KCS302H ) 2024"
                  



    },
    {
      link: "https://drive.google.com/file/d/1QL5cbwvDFJTODaV_ht3oApxgiHSCHw6c/view?usp=drive_link",
      title: "BTECH SEM-3 Computer Organization and Architecture(KCS302H ) 2023"
    },
    {
      link: "https://drive.google.com/file/d/1vcrwaHUnj0isspOR0vNH0JEI2VKIXjIW/view?usp=drive_link",
      title: "BTECH SEM-3 Computer Organization and Architecture(KCS302H ) 2022"
    },
    


    // Add more math data as needed
  ]


  const dsData = [
    {
      link: "https://drive.google.com/file/d/1UclQzQhMV_nRlZpmsMcibWvD7VhR1pAj/view?usp=drive_link",
      title: "BTECH-SEM-3-Data Structure (KCS301H)-2024"


    },
    {
      link: "https://drive.google.com/file/d/11Yi3omoU2K8K1CZWoy7TZ90aJRbKI4pm/view?usp=drive_link",
      title: "BTECH-SEM-3-Data Structure (KCS301H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1NEdOJyUDCwGU78cGZjtJ8oPt8ADex9D3/view?usp=drive_link",
      title: "BTECH-SEM-3-Data Structure (KCS301H)-2022"
    },
   



    // Add more math data as needed
  ]


  const dstlData = [
    {
      link: "https://drive.google.com/file/d/1LJJ5sNW3yvd6RmJ9XB8CH1xGMsBZ9PML/view?usp=drive_link",
      title: "BTECH-SEM-3- Discrete Structures & Theory of Logic (KCS303H )-2024"
                  


    },
    {
      link: "https://drive.google.com/file/d/1QPiqNcE3hHjCgEV_Q9Cqb4QMKoCYFoE1/view?usp=drive_link",
      title: "BTECH-SEM-3- Discrete Structures & Theory of Logic (KCS303H )-2023"
    },
    {
      link: "https://drive.google.com/file/d/1_LZ8PZAywLUJTWEwVc4AQsp7kZS6E3fi/view?usp=drive_link",
      title: "BTECH-SEM-3- Discrete Structures & Theory of Logic (KCS303H )-2022"
    },
    



    // Add more math data as needed
  ]
  const osData = [
    {
      link: "https://drive.google.com/file/d/18bXim4KO1hJGsWl9sWfiUNnxbe5t_3pv/view?usp=drive_link",
      title: "BTECH-SEM-4-Operating Systems -(KCS401H)-2024"
                  


    },
    {
      link: "https://drive.google.com/file/d/1B1CRS5J7txvlGfpdCXCQvjuSahSR2uJB/view?usp=drive_link",
      title: "BTECH-SEM-4-Operating Systems -(KCS401H)-2023"
    },
    {
      link: "https://drive.google.com/file/d/1701jUmuDQjsd-cu9hOronv3LzPrUo8gV/view?usp=drive_link",
      title: "BTECH-SEM-4-Operating Systems -(KCS401H)-2022"
    },
    



    // Add more math data as needed
  ]
  const taflData = [
    {
      link: "https://drive.google.com/file/d/1FtiT3PPi5fyrX5tcOUDjuPwINVeHflqk/view?usp=drive_link",
      title: "BTECH SEM-4 Theory of Automata and Formal Languages (KCS402H) 2024"
                  
                  


    },
    {
      link: "https://drive.google.com/file/d/1z1eBF1uOc-alOMn2IANfA6_5S9RefH2r/view?usp=drive_link",
      title: "BTECH SEM-4 Theory of Automata and Formal Languages (KCS402H) 2023"
    },
    {
      link: "https://drive.google.com/file/d/1fhGrTcpLPbmxhQxXiIM7Z1TSp6kLjWZz/view?usp=drive_link",
      title: "BTECH SEM-4 Theory of Automata and Formal Languages (KCS402H) 2022"
    },
    



    // Add more math data as needed
  ]



  return (
    <div>
      
      <div id="title" class="title1">
        <h1 >Previous Year paper for <span>BTECH (2021-25 )</span></h1>
      </div>
      <Pyq_container title="Technical Communication" data={TcData} />
      <Pyq_container title="Universal Human values (KVE 301H)" data={uhvData} />
      <Pyq_container title=" Digital Electronics ( KOE049 )" data={deData} />
      <Pyq_container title="Maths IV (KAS402H)" data={maths4Data} />
      <Pyq_container title="Microprocessor (KCS403H)" data={microData} />
      <Pyq_container title=" Computer System Security (KNC301H)" data={cssecData} />
      <Pyq_container title="Python Programming (KNC302H)" data={pythonData} />
      <Pyq_container title=" Computer Organization and Architecture" data={coaData} />
      <Pyq_container title=" Data Structure (KCS301H)" data={dsData} />
      <Pyq_container title="Discrete Structures & Theory of Logic" data={dstlData} />
      <Pyq_container title="Operating Systems (KCS401H) " data={osData} />
      <Pyq_container title="Theory of Automata and Formal Languages" data={taflData} />
      
      



    </div>
  )
}

export default First_pyq