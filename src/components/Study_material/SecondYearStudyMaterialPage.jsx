import React, { useEffect, useRef } from 'react';
import SmCard from './SmCard';
import './StudyMaterialPage.css';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';



function SecondYearStudyMaterialPage() {
    const carouselRef = useRef(null);

  

    const studyMaterials = [
        {
            title: "Latest Syllabus",
            description: "Complete syllabus for first year B.Tech students",
            imageUrl: "Syllabus",
            downloadUrl: "/downloads/first-year-syllabus.pdf",
            fileType: "PDF"
        },
        {
            title: "Previous Year Questions",
            description: "Last 5 years question papers for all subjects",
            imageUrl: "Previous Year Questions",
            downloadUrl: "/pyq/Second-year",
            fileType: "ZIP"
        },
        {
            title: "Important Questions",
            description: "Complete syllabus for first year B.Tech students",
            imageUrl: "Important Questions",
            downloadUrl: "/ImportantTopic/Secondyear",
            fileType: "PDF"
        },
        {
            title: "Handwritten Notes",
            description: "Last 5 years question papers for all subjects",
            imageUrl: "Handwritten Notes",
            downloadUrl: "/downloads/pyq-bundle.zip",
            fileType: "ZIP"
        },
        {
            title: "Youtube Channel",
            description: "Complete syllabus for first year B.Tech students",
            imageUrl: "Youtube Channel",
            downloadUrl: "/downloads/first-year-syllabus.pdf",
            fileType: "PDF"
        },
        {
            title: "Placement",
            description: "Last 5 years question papers for all subjects",
            imageUrl: "Placement",
            downloadUrl: "/downloads/pyq-bundle.zip",
            fileType: "ZIP"
        },

    ];

    return (
        <>
            <div className="study-material-pagee">
                <h3>Services</h3>
                <h5>Experience the difference with the premium services we provide</h5>
                <div className="wrapper">
                    <i className="fa-solid fa-angle-left" onClick={() => carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth}></i>
                    <div className="carousel" ref={carouselRef}>
                        {studyMaterials.map((materiall, index) => (
                            
                                <SmCard
                                    key={index}
                                    title={materiall.title}
                                    description={materiall.description}
                                    imageUrl={materiall.imageUrl}
                                    downloadUrl={materiall.downloadUrl}
                                    fileType={materiall.fileType}
                                />
                            
                        ))}
                    </div>
                    <i className="fa-solid fa-angle-right" onClick={() => carouselRef.current.scrollLeft += carouselRef.current.offsetWidth}></i>
                </div>
            </div>




        </>
    );
}

export default SecondYearStudyMaterialPage;