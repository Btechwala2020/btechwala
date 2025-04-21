import React, { useEffect, useRef } from 'react';
import Card_comp from '../Important Topics/card_comp';

import 'remixicon/fonts/remixicon.css';
import "../../style.css"
import './All_year_quantum.css';

function Third_year_imp_topic() {
    const studyMaterials = [
        {
            title: "Design and Analysis of Algorithms",
            description: "Advanced algorithmic techniques and problem-solving strategies",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/third-year-algorithms.pdf",
            fileType: "PDF"
        },
        {
            title: "Database Management Systems",
            description: "Advanced concepts in database design and management",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/third-year-dbms.pdf",
            fileType: "PDF"
        },
        {
            title: "Computer Networks",
            description: "Principles of data communication and network protocols",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/third-year-networks.pdf",
            fileType: "PDF"
        },
        {
            title: "Operating Systems",
            description: "Advanced concepts in OS design and implementation",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/third-year-os.pdf",
            fileType: "PDF"
        },
        {
            title: "Software Engineering",
            description: "Principles of software development and project management",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/third-year-software-engineering.pdf",
            fileType: "PDF"
        },
        {
            title: "Web Technologies",
            description: "Modern web development frameworks and technologies",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/third-year-web-tech.pdf",
            fileType: "PDF"
        },
        {
            title: "Artificial Intelligence",
            description: "Fundamentals of AI and machine learning algorithms",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/third-year-ai.pdf",
            fileType: "PDF"
        },
        {
            title: "Computer Graphics",
            description: "Principles of 2D and 3D graphics rendering",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/third-year-graphics.pdf",
            fileType: "PDF"
        },
        {
            title: "Big data",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/third-year-security.pdf",
            fileType: "PDF"
        },
        {
            title: "Compiler Design",
            description: "Fundamentals of cloud architectures and services",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/third-year-cloud.pdf",
            fileType: "PDF"
        },
    ];
    

    return (
        <>
            
            <div className="study-material-page">
                <div id="head">
                    <h1>Latest Quantum for B.Tech Third Year</h1>
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

export default Third_year_imp_topic;