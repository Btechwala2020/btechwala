import React, { useEffect, useRef } from 'react';
import Card_comp from './Card_comp';
import './Imp_topic.css';
import 'remixicon/fonts/remixicon.css';
import "../../style.css"
import Nav from "../../Navbar/Nav"
import Footer from "../../Footer/Footer"

function Third_year_imp_topic() {
    const studyMaterials = [
        {
            title: "Design and Analysis of Algorithms",
            description: "Advanced algorithmic techniques and problem-solving strategies",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/third-year-algorithms.pdf",
            fileType: "PDF"
        },
        {
            title: "Database Management Systems",
            description: "Advanced concepts in database design and management",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/third-year-dbms.pdf",
            fileType: "PDF"
        },
        {
            title: "Computer Networks",
            description: "Principles of data communication and network protocols",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/third-year-networks.pdf",
            fileType: "PDF"
        },
        {
            title: "Operating Systems",
            description: "Advanced concepts in OS design and implementation",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/third-year-os.pdf",
            fileType: "PDF"
        },
        {
            title: "Software Engineering",
            description: "Principles of software development and project management",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/third-year-software-engineering.pdf",
            fileType: "PDF"
        },
        {
            title: "Web Technologies",
            description: "Modern web development frameworks and technologies",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/third-year-web-tech.pdf",
            fileType: "PDF"
        },
        {
            title: "Artificial Intelligence",
            description: "Fundamentals of AI and machine learning algorithms",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/third-year-ai.pdf",
            fileType: "PDF"
        },
        {
            title: "Computer Graphics",
            description: "Principles of 2D and 3D graphics rendering",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/third-year-graphics.pdf",
            fileType: "PDF"
        },
        {
            title: "Big data",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/third-year-security.pdf",
            fileType: "PDF"
        },
        {
            title: "Compiler Design",
            description: "Fundamentals of cloud architectures and services",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/third-year-cloud.pdf",
            fileType: "PDF"
        },
    ];

    return (
        <>
            <Nav />
            <div className="study-material-page">
                <div id="head">
                    <h1>Important Topics for B.Tech Third Year</h1>
                </div>
                <div className="wrapper">
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
            <Footer/>
        </>
    );
}

export default Third_year_imp_topic;