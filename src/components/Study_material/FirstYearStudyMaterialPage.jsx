


import React, { useRef } from 'react';
import SmCard from './SmCard';
import './StudyMaterialPage.css'
import { Link } from 'react-router-dom';

function FirstYearStudyMaterialPage() {
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
            downloadUrl: "/pyq/First-year",
            fileType: "ZIP"
        },
        {
            title: "Important Questions",
            description: "Complete syllabus for first year B.Tech students",
            imageUrl: "Important Questions",
            downloadUrl: "/ImportantTopic/Firstyear",
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
                        
                        
                        {studyMaterials.map((material, index) => (
                            <SmCard
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

export default FirstYearStudyMaterialPage;