import React, { useEffect, useRef } from 'react';
import Card_comp from '../Important Topics/card_comp';
import './All_year_quantum.css';
import 'remixicon/fonts/remixicon.css';
import "../../style.css"




function First_year_imp_topic() {
    const carouselRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const studyMaterials = [
        {
            title: "Engineering Chemistry",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/158UZh4asHuFcP9ykZJXB-SZGEos0I3Y0/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "Engineering physics",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1D7RaGErewmlp9EWMWRHoJSlR-SZ-d6cC/view?usp=drive_link",
            fileType: "ZIP"
        },
        {
            title: "Engineering Mathematics I",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1vKuzirOj8V0RpBQW4Prp8CgIFD3cwwzH/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "Engineering Mathematics II",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl:"https://drive.google.com/file/d/12JYsQzwepgABVWIXtn9Ay8wVI0Qb9WNP/view?usp=drive_link",
            fileType: "ZIP"
        },
        {
            title: "Programming for problem solving",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1pQUNULN9uuFoZzoyi_uhJ5yi3udhmTk3/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "soft-skills",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            
            downloadUrl: "https://drive.google.com/file/d/1oD6Ixrc_1NSB_VF1p61R0PQW4BtLbgW9/view?usp=drive_link",
            fileType: "ZIP"
        },
        {
            title: "environment and ecology",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1YxGGBbEjhTyblCHfXJc89SfC4Xv8sMg_/view?usp=drive_link",
            fileType: "ZIP"
        },
        {
            title: "fundamental of mechanical engg",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1F_QnHHASsMhoFO99ZbuLEpYMDiuIbxi8/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "fundamental of electrical engg",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1GA3nieKox9QsOEjprYhQWQNhDzFVElLN/view?usp=drive_link",
            fileType: "ZIP"
        },
        {
            title: "fundamental of electronics engg",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1o4GFin-tGeZbvZoDAj93d2Af4XdGLrYP/view?usp=drive_link",
            fileType: "PDF"
        },


    ];

    return (
        <>
           
            <div className="study-material-page">
                <div id="head">
                    <h1>Latest Quantum for btech first year</h1>

                </div>
                <div className="wrapperqntm">
                    <i className="fa-solid fa-angle-left" onClick={() => carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth}></i>
                    <div className="carousel" >
                        {studyMaterials.map((material, index) => (
                            <Card_comp
                                key={index}
                                title={material.title}
                                description={material.description}
                                imageUrl={material.imageUrl}
                                downloadUrl={material.downloadUrl}
                                fileType={material.fileType}
                            />
                        ))}
                    </div>
                    <i className="fa-solid fa-angle-right" onClick={() => carouselRef.current.scrollLeft += carouselRef.current.offsetWidth}></i>
                </div>
            </div>
           




        </>
    );
}

export default First_year_imp_topic;